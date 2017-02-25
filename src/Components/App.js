import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import TodoList from './TodoList';

class App extends React.Component {

    constructor() {
        super();
        console.log('App.constructor');
    }

    componentWillMount() {
        console.log('App.componentWillMount');
    }

    componentDidMount() {
        console.log('App.componentDidMount');
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="main">
                    <TodoList />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
