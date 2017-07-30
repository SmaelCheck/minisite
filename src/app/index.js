import React from "react";
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Main from './components/Main';
import Footer from './components/Footer';



export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {age:2};
    }
    
    render() {
        return ( 
            	<div className='container'>
            		<Header/>
                    <Jumbotron />
                    <Main />
                    <Footer />
                    
            	</div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));