import React, {Component} from 'react';
import axios from 'axios';
import "./styles/signup.css";


export class AddItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            uid:'',
            itemInfo:''
        }
    }

    handleInsertItem = (event) =>{
        this.setState({itemInfo:event.target.value});
    };

    handleInsertuid = (event) =>{
        this.setState({uid:event.target.value});
    };

    handleSubmit = async (event) =>{
        console.log(this.state);
        axios.post('/create_order', this.state)
            .then(response=>{
                if(!response.data.process.fail){
                    this.props.history.push('/userInterface');
                }else{
                    alert("add item failed")
                }
            })
            .catch(err =>{
                console.log(err);
            });
        console.log("here");
    };

    directUserInterface = (event) => {
        window.location.href="/userInterface";
    }

    render(){
        return(
            <div className="main">
                <div className="main_body">
                    <h1>
                        Add item
                    </h1>
                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="itemInfo" className="form-control" id="formGroupExampleInput2"
                                       placeholder="item info" onChange={this.handleInsertItem}/>
                                <input type="uid" className="form-control" id="formGroupExampleInput2"
                                       placeholder="User Id" onChange={this.handleInsertuid}/>
                            </div>
                            <input type="submit" value="Add Item" className="reg_button"/>
                        </form>
                    </div>
                    <button onClick={this.directUserInterface} className="btn btn-link">Submit</button>
                </div>
            </div>
        );

    }
}

export default AddItem;