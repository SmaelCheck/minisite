import React from 'React';
import FormAddUser from './forms/FormAddUser';

export default class Main extends React.Component{
    render(){
        return(
            <main className='container'>
             <div className='main'>
                <p>Je suis un contenu du Main Component</p>
                <FormAddUser />   
             </div> 
            </main>
        );
    }
}
