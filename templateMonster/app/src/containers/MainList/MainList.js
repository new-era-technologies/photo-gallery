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

    getPics = (num) => {
        axios.get('https://picsum.photos/v2/list?limit=' + num)
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
                        <div className='Limit__container'>
                            <button
                                className='Limit__container__pag Limit__container__pag--30'
                                onClick={() => this.getPics(30)}
                            >30</button>
                            <button
                                className='Limit__container__pag Limit__container__pag--50'
                                onClick={() => this.getPics(50)}
                            >50</button>
                            <button
                                className='Limit__container__pag Limit__container__pag--100'
                                onClick={() => this.getPics(100)}
                            >100</button>
                        </div>
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