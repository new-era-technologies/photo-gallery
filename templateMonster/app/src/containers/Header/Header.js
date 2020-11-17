import React, { Component } from 'react';
import './Header.scss';


class Header extends Component {
    render() {
        return(
            <div className='Header'>
                <div className='Header__container'>
                    <h1 className='Header__container__title'>
                        Photo Gallery
                    </h1>
                </div>
            </div>
        )
    }
}

export default Header;