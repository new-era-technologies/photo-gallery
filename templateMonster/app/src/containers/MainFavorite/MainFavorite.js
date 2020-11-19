import React, { Component } from 'react';
import store from 'store';


class MainFavorite extends Component {

    storePic = () => {
        store.set('pic' + this.props.item.id, { id: this.props.item.id, name_by: this.props.item.author, size: this.props.item.width + 'x' + this.props.item.height });
    }

    render() {
        const {
            props: {
                item
            }
        } = this;
        return (
            <div className='MainFavorite'>
                <button
                    className='MainFavorite__but'
                    onClick={this.storePic}
                >add to favorite</button>
            </div>
        )
    }
}

export default MainFavorite;