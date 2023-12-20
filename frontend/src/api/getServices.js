import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import ava from '../assets/images/ava.png';
import ava2 from '../assets/images/ava2.png';
import ava3 from '../assets/images/ava2.png';
import ava4 from '../assets/images/ava2.png';
import st1 from '../assets/images/story1.png';
import st2 from '../assets/images/story2.png';
import st3 from '../assets/images/story3.png';
import st4 from '../assets/images/story4.png';


class GetServices {


    static async getData(id){
        const cookies = new Cookies();
        const token = cookies.get('accessToken');
        axios.defaults.baseURL = 'http://localhost:3000/';
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';



        try{
            const response = await axios.get(`http://tlgrm/data`);
            return response
        }
        catch(e){
            return <>
                <div>Ошибка: {e.message}</div>
            </>

        }
    }




}
export default GetServices
