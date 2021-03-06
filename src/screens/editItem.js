import React, {Component} from 'react';
import axios from 'axios';
import "./styles/signup.css";


export class EditItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            itemInfo:'',
            pid:''
        }
    }

    handlechangeitem = (event) =>{
        this.setState({itemInfo:event.target.value});
    };

    handlechangepid = (event) =>{
        this.setState({pid:event.target.value});
    };

    handleSubmit = async (event) =>{
        console.log(this.state);
        axios.post('/change', this.state)
            .then(response=>{
                if(!response.data.process.fail){
                    this.props.history.push('/userInterface');
                }else{
                    alert("change item failed")
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
                        Edit Item
                    </h1>
                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="itemInfo" className="form-control" id="formGroupExampleInput2"
                                       placeholder="item info" onChange={this.handlechangeitem}/>
                                <input type="uid" className="form-control" id="formGroupExampleInput2"
                                       placeholder="pid" onChange={this.handlechangepid}/>
                            </div>
                            <input type="submit" value="edit item" className="reg_button"/>
                        </form>
                    </div>
                    <button onClick={this.directUserInterface} className="btn btn-link">Submit</button>
                </div>
            </div>
        );

    }
}

export default EditItem;