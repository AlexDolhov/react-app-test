const ArticleList = ({ articles }) => (
    <ul>
        {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
                <a href={url}>{title}</a>
            </li>
        ))}
    </ul>
)

export default ArticleList;