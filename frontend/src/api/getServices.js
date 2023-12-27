import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';


class GetServices {


    static async getData(url){
        const cookies = new Cookies();
        const token = cookies.get('accessToken');
        axios.defaults.baseURL = 'http://localhost:3000/';
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';



        try{
            const response = await axios.get(url);
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
