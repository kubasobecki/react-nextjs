import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(enteredMeetupData)
        });

        const data = await response.json();

        console.log(data);

        router.push('/');
    }

    return (
        <>
            <Head>
                <title>Next JS Meetups</title>
                <meta
                    name="description"
                    content="Add your own meetups and create amazing networking opportunities."
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    );
};

export default NewMeetup;
