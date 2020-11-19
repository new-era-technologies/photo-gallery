import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Favorite extends Component {
    render() {
        const {
            props: {
                item
            }
        } = this;
        return (
            <div className='Favorite'>
                <Link to={`/item/${item.id}`} key={item.id} className='Favorite__link'>
                    <div className='Favorite__link__item'>
                        {item.name_by} #{item.id} ({item.size})
                    </div>
                </Link>
            </div>
        )
    }
}

export default Favorite;