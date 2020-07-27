import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Search from "./Search";
import Table from "./Table";
import API from "../utils/API";

class UsersContainer extends Component {
    state = {
        results: [],
    };

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = () => {
        API.getUsers()
            .then(res => {
                console.log(res.data.results);
                this.setState({ results: res.data.results })
                console.log(this.state.results[0]);
            }
                )

            .catch(err => console.log(err));
    };

    render() {
        return (
            <Wrapper>
                <Header />
                <Search />
                <Table results={this.state.results}/>
            </Wrapper>
        )
    }
}

export default UsersContainer;