import React, { Component } from 'react';
import Item from '../../components/Item';
import axios from 'axios';
import './MainList.scss';


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
        const { state: { list } } = this;
        console.log(list);
        return (
            <div className='MainList'>
                <h2 className='MainList__title'>
                    list of images
                </h2>
                <div className='MainList__container'>
                    {list.map(
                        (item, i) =>
                            <Item item={item} key={i} />
                    )}
                </div>
            </div>
        )
    }
}

export default MainList;