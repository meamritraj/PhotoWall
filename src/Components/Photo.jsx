import React, { Component } from "react"
import PropTypes from 'prop-types'

function Photo(props) {
    const post = props.post;
    return (<figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container"><button className="button" onClick={() => {
            props.removePost(props.index)
        }}> Remove </button></div>
    </figure>);

}

Photo.prototypes = {
    post: PropTypes.array.isRequired
}


export default Photo;