import React, { Component } from 'react';
import axios from 'axios';


class MainList extends Component {

    state = {
        list: []
    };

    componentDidMount() {
        axios.get('https://picsum.photos/v2/list')
            .then(
                res => {
                    this.setState({
                        list: res.data
                    })
                }
            )
    }

    render() {
        const {state: {list}} = this;
        console.log(list);
        return (
            <div className='MainList'>

            </div>
        )
    }
}

export default MainList;