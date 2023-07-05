import React, {Component} from "react";

class App extends Component {
  constructor(props){
    super(props)
  }

  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="display-1 text-success">React lifecycle</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-outline-success">Mount</button>

            <button className="btn btn-outline-danger float-end">UnMount</button>

          </div>

        </div>


      </div>

    )
  }
}

export default App