import axios from 'axios';


export default function(currentPage, dataPerPage) {
    return axios.get('https://picsum.photos/v2/list?page=' + currentPage + '&limit=' + dataPerPage)
}