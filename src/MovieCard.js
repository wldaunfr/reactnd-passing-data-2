import React, { Component } from 'react';

class MovieCard extends Component {

  render() {
    const { movie, likedBy } = this.props;

    const cardHeader = (
      <h2 key={movie.name}>{movie.name}</h2>
    )

    let cardBody = (
      <p>None of the current users liked this movie</p>
    )

    if (likedBy.length > 0) {
      cardBody = (
        <div>
          Liked By:
          <ul>
            { likedBy.map(user => (<li key={"mcard-li-" + movie.id + "-" + user.id}>{user.name}</li>)) }
          </ul>
        </div>
      )
    }

    return (
      <div>
        { cardHeader }
        { cardBody }
      </div>
    )
  }

}

export default MovieCard
