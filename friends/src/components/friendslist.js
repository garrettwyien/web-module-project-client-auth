import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };
    componentDidMount() {
        this.getFriends();
    };

    getFriends=()=>{
        axiosWithAuth()
            .get('/friends')
            .then(res=> {
                this.setState({
                    friends: res.data
                })
            })
            .catch(err=>{
                console.log(err);
            });
    };

    formatFriends=()=> {
        const formattedFriends = [];
        this.state.friends.forEach((elem) => {
            formattedFriends.push({
                name: elem.name,
                age: elem.age,
                email: elem.email
            });
        });
        return formattedFriends;
    };

    render() {
        const friends = this.formatFriends();
        return (
            <div classname="friendslist">
                {friends.map(elem => (
                        <p classname="friendinfo">
                            Name: {elem.name}<br/>
                            Age: {elem.age}<br/>
                            Email: {elem.email}<br/>
                        </p>
                ))}
            </div>
        );
    };


};

export default FriendsList;