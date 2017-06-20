/**
 * Created by consultadd on 20/6/17.
 */
import React, {Component} from 'react';



export default class SearcBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            term : ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputChange(event){
        this.setState({
            term:event.target.value
        });

    }

    onSubmitForm(event){
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.onSubmitForm} className="input-group">
                <input
                    placeholder="please search cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary">
                        Search
                    </button>
                </span>
            </form>
        );
    }
}