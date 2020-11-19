import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <div className='Menu'>
                <ul className='Menu__list'>
                    <li className='Menu__list__item'>
                        <NavLink
                            exact
                            to={'/'}
                            className='Menu__list__item__link'
                            activeClassName='active'
                        >
                            home
                        </NavLink>
                    </li>
                    <li className='Menu__list__item'>
                        <NavLink
                            to={'/list'}
                            className='Menu__list__item__link'
                            activeClassName='active'
                        >
                            gallery list
                        </NavLink>
                    </li>
                    <li className='Menu__list__item'>
                        <NavLink
                            to={'/favorite'}
                            className='Menu__list__item__link'
                            activeClassName='active'
                        >
                            favorite list
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;