import React from 'react';
import $ from 'jquery';

class Reference extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarUrl: '',
            username: '',
            userid: '',
            userlogin: '',
            userbio: '',
            githubtUrl: '',
        }
    }

    componentDidMount() {
        $.get("https://api.github.com/users/cluemediator", (result) => {
            console.log(result);
            const data = result;
            if (data) {
                this.setState({
                    avatarUrl: data.avatar_url,
                    username: data.name,
                    userid: data.id,
                    userlogin: data.login,
                    userbio: data.bio,
                    githubtUrl: data.html_url,
                });
            }
        });
    }

    render() {
        return (
            <div>
                <img src={this.state.avatarUrl} alt = {""}/>
                <h1>Name: {this.state.username}</h1>
                <h2>ID: {this.state.userid}</h2>
                <h3>Github_Name: {this.state.userlogin}</h3>
                <h4>Bio: {this.state.userbio}</h4>
                Github:<a href = {this.state.githubtUrl}>https://github.com/cluemediator</a>
            </div>
        );
    }
}

export default Reference;