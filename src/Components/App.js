import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import TodoList from './TodoList';

class App extends React.Component {

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
