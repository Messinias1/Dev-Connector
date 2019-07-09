import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-2">
          <a href="profile.html">
            <img
              className="rounded-circle d-none d-md-block"
              src={post.avatar}
              alt=""
            />
          </a>
          <br />
          <p className="text-center">{post.name}</p>
        </div>
        <div className="col-md-10">
          <p className="lead">{post.text}</p>
          {showActions ? (
            <span>
              <button
                onClick={this.onLikeClick.bind(this, post._id)}
                type="button"
                className="btn btn-light mr-1"
              >
                <i
                  className={classnames("fas fa-thumbs-up", {
                    "text-info": this.findUserLike(post.likes)
                  })}
                />
                <span className="badge badge-light">{post.likes.length}</span>
              </button>
              <button
                onClick={this.onUnlikeClick.bind(this, post._id)}
                type="button"
                className="btn btn-light mr-1"
              >
                <i className="text-secondary fas fa-thumbs-down" />
              </button>
              <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                Comments
              </Link>
              {post.user === auth.user.id ? (
                <button
                  onClick={this.onDeleteClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-danger mr-1"
                >
                  <i className="fas fa-times" />
                </button>
              ) : null}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = stae => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(PostItem);
