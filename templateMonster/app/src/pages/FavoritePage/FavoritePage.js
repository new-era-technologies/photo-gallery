import React, { Component } from 'react';
import Header from '../../containers/Header/Header';
import Favorite from '../../components/Favorite';
import store from 'store';


class FavoritePage extends Component {
    state = {
        listPics: []
    }

    componentDidMount() {
        const self = this;
        store.each(function (value, key) {
            console.log(key, '==', value);
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
                                <Favorite item={item} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default FavoritePage;