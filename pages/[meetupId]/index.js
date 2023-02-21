import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function Meetup(props) {
    return <MeetupDetail {...props.meetupData} />;
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                id: meetupId,
                title: 'First meetup',
                image: 'https://images.unsplash.com/photo-1493134799591-2c9eed26201a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                address: 'Poznań',
                description: 'This is a first meetup'
            }
        },
        revalidate: 60 * 60 * 24
    };
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    };
}
