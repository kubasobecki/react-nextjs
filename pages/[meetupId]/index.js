import { MongoClient, ObjectId } from 'mongodb';
import { MONGO_USER, MONGO_PASSWORD } from '../../env';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import Head from 'next/head';

export default function Meetup(props) {
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta
                    name="description"
                    content={props.meetupData.description}
                />
            </Head>
            <MeetupDetail {...props.meetupData} />
        </>
    );
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@nextjs-test.fwerjip.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId)
    });
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                ...selectedMeetup.data
            }
        },
        revalidate: 1
    };
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@nextjs-test.fwerjip.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();

    const paths = meetups.map(meetup => ({
        params: { meetupId: meetup._id.toString() }
    }));

    return {
        fallback: false,
        paths
    };
}
