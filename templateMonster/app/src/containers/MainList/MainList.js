import React, { Component } from 'react';
import Item from '../../components/Item';
import fetchApi from '../../utils/api/api';
import '../../index.css';
import './MainList.scss';


class MainList extends Component {

    state = {
        list: [],
        currentPage: 1,
        dataPerPage: 30
    };

    componentDidMount() {
        fetchApi(this.state.currentPage, this.state.dataPerPage)
            .then(
                res => {
                    this.setState({
                        list: res.data
                    })
                }
            )
    }

    getPics = (num) => {
        fetchApi(this.state.currentPage, num)
            .then(
                res => {
                    this.setState({
                        list: res.data,
                        dataPerPage: num
                    })
                }
            )
    }

    decremPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            })
            fetchApi(this.state.currentPage, this.state.dataPerPage)
                .then(
                    res => {
                        this.setState({
                            list: res.data
                        })
                    }
                )
        }
    }

    encremPage = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
        fetchApi(this.state.currentPage, this.state.dataPerPage)
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
                            per page
                            <button
                                className='Limit__container__but'
                                onClick={() => this.getPics(30)}
                            >30</button>
                            <button
                                className='Limit__container__but'
                                onClick={() => this.getPics(50)}
                            >50</button>
                            <button
                                className='Limit__container__but'
                                onClick={() => this.getPics(100)}
                            >100</button>
                        </div>
                        <div className='Pag__container'>
                            go to page
                            <button
                                className='Pag__container__but'
                                onClick={this.decremPage}
                            >prev</button>
                            <button
                                className='Pag__container__but'
                                onClick={this.encremPage}
                            >next</button>
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