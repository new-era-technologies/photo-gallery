import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import MainItem from '../../containers/MainItem/MainItem';


class ItemPage extends Component {
    render() {
        return (
            <div className='MainItem'>
                <Header />
                <MainItem />
            </div>
        )
    }
}

export default ItemPage;