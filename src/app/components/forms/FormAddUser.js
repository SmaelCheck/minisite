import React from "react";
import PropTypes from 'prop-types';

export default class FormAddUser extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name        :  '',
            firstname   :  '',
            age         :  ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);

    }
    onSubmit(event){
        event.preventDefault();
        console.info('Yeah name :'+this.state.name);
        console.info('Yeah firstname :'+this.state.firstname);
        console.info('Yeah age :'+this.state.age);
    }
    onHandleChange(event){
        const name = event.target.name,
              value = event.target.value
        this.setState({
            [name]:value
        });
    }
    
    render(){
        return(
            <div className='container'>
                <form method='POST' action='#' id='my-form' onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label className=''>Name</label>
                        <div className=''>
                            <input type='text' className='form-control' 
                                   name='name' placeholder='Name'
                                   value={this.state.name}
                                   onChange={this.onHandleChange}
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label className=''>Fistname</label>
                        <div className=''>
                            <input type='text' className='form-control' 
                                   name='firstname' placeholder='Firstname'
                                   value={this.state.firstname} id='age'
                                   onChange={this.onHandleChange}
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label className=''>Age</label>
                        <div className=''>
                            <input type='text' className='form-control' 
                                   name='age' placeholder='age'
                                   value={this.state.age}
                                   onChange={this.onHandleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </form>
            </div>
        );
    }
}
// Le typage de props de mon object
FormAddUser.propTypes ={
    name : PropTypes.string,
    firstname :PropTypes.string,
    age: PropTypes.number
}