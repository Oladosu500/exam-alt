import React from "react";
import "./style.css";
import { format } from "date-fns";

const Repos = ({ user, loading }) => {
  if (loading) {
    return <h2 className="load">Loading......</h2>;


  }

  return (
    <>
      {" "}
      {user.map((user) => (
        <div className="container">
          <article key={user.id} className="item-all">
            <article className="item-art">
              <img src={user.owner.avatar_url} alt="user.owner.login" />
              <h2>{user.owner.login}</h2>
              <p>{user.name}</p>
              {user.private ? (
                <p className="red">Private</p>
              ) : (
                <p className="green">Public</p>
              )}
            </article>

            <div className="item-repo">
              <p>
                this repository was created at{" "}
                {format(new Date(user.created_at), "dd MMMM yyyy")} by{" "}
                {user.owner.login}{" "}
              </p>

              <p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Repo
                </a>
              </p>

              <p>{user.watchers_count.toLocaleString()}Watchers</p>

              <p>{user.open_issues} issues</p>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Repos;
