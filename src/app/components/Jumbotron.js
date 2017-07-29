import React from 'react';


export default class Jumbotron extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className="jumbotron">
                    <h1 className="display-3">Jumbotron title</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style 
                        component for calling extra attention to featured content or information.
                    </p>
                </div>
            </div>
        );
    }
}