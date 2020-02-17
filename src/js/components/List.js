import React from 'react';
import { connect } from 'react-redux';

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(article => (
      <li key={article.id}>{article.title}</li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return { articles: state.articles };
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;