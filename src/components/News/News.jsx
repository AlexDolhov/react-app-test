import { Component } from "react";
//import axios from "axios";
import ArticleList from "../ArticleList/ArticleList";
import { fetchArticlesWithQuery } from "../../api/api"

export default class News extends Component {
    state = {
        isLoading: false,
        articles: [],
        error: null,
    };

    async componentDidMount() {
        this.setState({ isLoading: true });
        try {
            const articles = await fetchArticlesWithQuery("react");
            //this.setState({ articles: response.data.hits });
            this.setState({articles});
        } catch (error) {
           this.setState({error});
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { isLoading, articles, error } = this.state;

        return (
            <>
                {isLoading && <p>LOADING...</p>}
                {error && <p>Whoops, something whent wrong: {error.message}</p>}
                {articles.length > 0 && <ArticleList articles={articles}></ArticleList> }
            </>
        );
    };
}