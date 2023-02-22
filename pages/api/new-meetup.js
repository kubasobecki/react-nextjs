import { MongoClient } from 'mongodb';
import { MONGO_USER, MONGO_PASSWORD } from '../../env';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        // const { title, image, address, description } = data;

        const client = await MongoClient.connect(
            `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@nextjs-test.fwerjip.mongodb.net/meetups?retryWrites=true&w=majority`
        );
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne({ data });

        console.log(result);

        client.close();
        res.status(201).json({ message: 'Meetup inserted' });
    }
}

export default handler;
