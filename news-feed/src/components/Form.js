import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div className="inner">
          <section id="search" className="alt">
            <form method="post" action="#">
              <input
                type="text"
                name="query"
                id="query"
                placeholder="Feed Name"
              />
              <input
                type="text"
                name="query"
                id="query"
                placeholder="Feed URL"
              />
              <button>Add Feed</button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default Form;
