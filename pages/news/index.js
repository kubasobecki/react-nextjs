import Link from 'next/link';

function NewsPage() {
    return (
        <>
            <h1>The News Page</h1>;
            <ul>
                <li>
                    <Link href="/news/nextjs-is-a-great-framework">
                        NextJS is a great framework
                    </Link>
                </li>
                <li>
                    <Link href="/news/some-other-article">
                        Some other article
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default NewsPage;
