import React, { Component } from 'react';
import Item from '../../components/Item';
import axios from 'axios';
import './MainList.scss';
import '../../index.css';


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
        if (list.length) {
            return (
                <div className='MainList'>
                    <div className='container'>
                        <h2 className='MainList__title'>list of images</h2>
                        <div className='MainList__container'>
                            {list.map(
                                (item, i) =>
                                    <Item item={item} key={i} />
                            )}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='Spinner'>
                    <div className='Spinner__blob-1'></div>
                    <div className='Spinner__blob-2'></div>
                </div>
            )
        }
    }
}

export default MainList;