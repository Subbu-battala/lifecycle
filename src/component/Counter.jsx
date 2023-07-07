import React, {Component} from "react";
import ReactDOM from 'react-dom'                

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            view: false
        }
    }

    // props inc
    countHandler() {
        ReactDOM.render(
            <React.StrictMode>
                <Counter num={this.props.num + 1} />
            </React.StrictMode>,document.getElementById("renderHere")
        )
    }

    /* MOUNT METHODS */
    componentWillMount() {
        console.log(`deprecated-component will mount called`)
    }

    componentDidMount() {
        console.log(`component did mount called`);
    }

    /* update stage*/
   // @deprecated — 16.3, use static getDerivedStateFromProps instead; will stop working in React 17
    componentWillReceiveProps(np) {
        console.log(`deprecated-component will update`);
        console.log('newProps=', np);
        if(np.num >=10){
            this.setState({
                view: true
            })

        }
    }

    shouldComponentUpdate(np,nS){
        console.log(`should component update or not?`);
        console.log('newProps=', np);
        console.log('newState=', nS);
        return true;
    }
     
   // @deprecated — 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17
    componentWillUpdate(nP,nS) {
        console.log(`deprecated - component will update `);
        console.log('newProps=', nP);
        console.log('newState=', nS);
    }

    render() {
        console.log('component rendered');
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-success">Counter</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-success">Num = { this.props.num}</h1>

                        <div>
                            {
                                this.state.view ?
                                (<h1 className="text-center text-success">welocome to react lifecycle</h1>) :
                                (
                                    <div>
                                        <h1 className="text-center text-warning">Need more counts</h1>
                                        <button onClick={()=> this.countHandler()} className="btn btn-dark">increment Props</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    componentDidUpdate(oP,oS) {
        console.log(`component did update`);
        console.log('oldProps=', oP);
        console.log('oldState=', oS);
    }

    // unmount
    componentWillUnmount() {
        console.log('component unmounted successfully');
    }
}

export default Counter