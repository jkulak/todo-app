import React from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import TodoList from '../TodoList/TodoList';

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
