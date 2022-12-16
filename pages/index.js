import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://images.unsplash.com/photo-1493134799591-2c9eed26201a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        address: 'Poznań',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://images.unsplash.com/photo-1520052205864-92d242b3a76b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        address: 'New York',
        description: 'This is a second meetup'
    }
];

const HomePage = () => {
    return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
