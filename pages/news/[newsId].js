import { useRouter } from 'next/router';

function NewsDetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    return (
        <>
            <h1>News Detail Page</h1>
            <p>Post ID: {newsId}</p>
        </>
    );
}

export default NewsDetailPage;
