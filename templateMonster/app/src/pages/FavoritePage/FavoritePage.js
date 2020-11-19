import React, { Component } from 'react';
import store from 'store';
import Header from '../../containers/Header/Header';
import Favorite from '../../components/Favorite';


class FavoritePage extends Component {
    state = {
        listPics: []
    }

    componentDidMount() {
        const self = this;
        store.each(function (value, key) {
            self.setState(prevState => ({
                listPics: [...prevState.listPics, value]
            }))
        })
    }

    render() {
        const { state: { listPics } } = this;
        return (
            <div className='FavoritePage'>
                <Header />
                <div className='container'>
                    <h2 className='FavoritePage__title'>favorite pics</h2>
                    <div className='FavoritePage__container'>
                        {listPics.map(
                            (item, i) =>
                                <Favorite item={item} key={i} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default FavoritePage;