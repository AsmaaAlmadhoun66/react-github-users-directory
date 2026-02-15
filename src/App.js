import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import './App.css';
import axios from "axios";

class App extends Component{
    state ={
        users: [],
        loading: false
    }

    async componentDidMount() {
        this.setState({loading: true})
        const res = await axios.get('https://api.github.com/users');
        this.setState({users: res.data,loading: false});
    }
    render() {
        return (
            <div className="App">
                <header className="App-header Navbar">
                    <p>
                        hello
                    </p>
                    <Navbar icon='fa fa-plus'/>
                </header>
                <Users loading={this.state.loading} users={this.state.users}/>
            </div>
        );
    }
}

export default App;
