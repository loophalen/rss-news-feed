import React from "react";

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            feed: {
                name: '', 
                url: ''
            }
        }
    }

    updateFeed(field,event){
        // console.log('updateFeed: ' + field + '==' + event.target)
        let feed = Object.assign({}, this.state.feed)
        feed[field] = event.target.value 

        this.setState({
            feed:feed
        })
    } 

    addFeed(event){
        event.preventDefault()
        console.log('Add Feed: ' + JSON.stringify(this.state.feed))

    }

  render() {
    return (
      <div id="sidebar">
        <div className="inner">
          <section id="search" className="alt">
            <form method="post" action="#">
              <input onChange={this.updateFeed.bind(this, 'name')}
                type="text"
                name="query"
                id="query"
                placeholder="Feed Name"
              />
             <input onChange={this.updateFeed.bind(this, 'url')}
                type="text"
                name="query"
                id="query"
                placeholder="Feed URL"
              />
              <button onClick={this.addFeed.bind(this)}>Add Feed</button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default Form;
