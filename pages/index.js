import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import { MONGO_USER, MONGO_PASSWORD } from '../env';

const HomePage = props => {
    return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps(context) {
    // fetch data from API
    const client = await MongoClient.connect(
        `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@nextjs-test.fwerjip.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                id: meetup._id.toString(),
                ...meetup.data
            }))
        },
        revalidate: 10
    };
}

// export async function getServerSideProps(context) {
//     const request = context.req;
//     const response = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export default HomePage;
