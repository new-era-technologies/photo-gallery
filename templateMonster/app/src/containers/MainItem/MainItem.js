import React, { Component } from 'react';
import MainFavorite from '../MainFavorite/MainFavorite';
import axios from 'axios';
import './MainItem.scss';
import '../../index.css';


class MainItem extends Component {
    state = {
        listItem: {}
    };

    componentDidMount() {
        const url = window.location.href.split('/');
        const id = url[4];
        axios.get('https://picsum.photos/id/' + id + '/info')
            .then(res => {
                this.setState({
                    listItem: res.data
                });
            });
    }

    render() {
        const { state: { listItem } } = this;
        if (listItem.author) {
            return (
                <div className='MainItem'>
                    <div className='container'>
                        <div className='MainItem__container'>
                            <img src={listItem.download_url} alt={`img_${listItem.id}`} className='MainItem__container__img' />
                            <div className='MainItem__container__data'>
                                <p className='MainItem__container__data__author'><b>author: </b>{listItem.author}</p>
                                <p className='MainItem__container__data__size'><i>{listItem.width} x {listItem.height}</i></p>
                                <p className='MainItem__container__data__link'><b>link: </b>
                                <a href={listItem.url} className="MainItem__container__data__link__item" target='_blank' rel="noopener noreferrer">
                                    {listItem.url}
                                </a>
                                </p>
                                <MainFavorite item={listItem} />
                            </div>
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

export default MainItem;