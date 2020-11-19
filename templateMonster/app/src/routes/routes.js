import Home from '../pages/Home/Home';
import ListPage from '../pages/ListPage/ListPage';
import ItemPage from '../pages/ItemPage/ItemPage';
import FavoritePage from '../pages/FavoritePage/FavoritePage';

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/list',
        exact: true,
        component: ListPage
    },
    {
        path: '/item/:id',
        exact: false,
        component: ItemPage
    },
    {
        path: '/favorite',
        exact: true,
        component: FavoritePage
    }
]