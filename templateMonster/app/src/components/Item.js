import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';


class Item extends Component {
    render() {
        const  {
            props: {
                item: {
                    id,
                    author,
                    download_url
                }
            }
        } = this;
        return (
            <div className='Item'>
                <Link to={`/item/${id}`} key={id} className='Item__link'>
                    <figure className='Item__fig'>
                        <img src={download_url} alt={`img_${id}`} className='Item__fig__img' />
                        <figcaption className='Item__fig__cap'>
                            by {author}
                        </figcaption>
                    </figure>
                </Link>
            </div>
        )
    }
}

export default Item;