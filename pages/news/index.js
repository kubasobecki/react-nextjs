import Link from 'next/link';

function NewsPage() {
    return (
        <>
            <h1>News Page</h1>;
            <ul>
                <li>
                    <Link href="/news/react-is-a-great-library">
                        React is a great library
                    </Link>
                </li>
                <li>
                    <Link href="/news/nextjs-is-a-great-framework">
                        NextJS is a great framework
                    </Link>
                </li>
                <li>
                    <Link href="/news/javascript-rocks">JavaScript rocks!</Link>
                </li>
            </ul>
        </>
    );
}

export default NewsPage;
