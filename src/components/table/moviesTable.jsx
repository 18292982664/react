import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody'
import Like from '../common/like';
const MoviesTable = ({ movies, onLike }) => {
  const columns = [
    {
      path: "title",
      label: "标题",
      content: (movie) => (
        <a target="_blank" href={movie.alt}>
          {movie.title}
        </a>
      ),
    },
    { path: "original_title", label: "原标题" },
    { path: "year", label: "上映时间" },
    { path: "genres", label: "分类" },
    { path: "rating.average", label: "评分" },
    {
      key: "like",
      label: "收藏",
      content: (movie) => <Like liked={movie.liked} onClick={() => onLike(movie)} />,
    },
  ];
  return (
    <div className="table-responsive ">
      <table className="table ">
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={movies} />
      </table>
    </div >
  );
}

export default MoviesTable;