import axios from 'axios'

const Authorization = 'APPCODE 4271779479474244a40b45155652e0ee'
let instance = axios.create({ timeout: 1000 * 60 * 40});
instance.defaults.headers.Authorization = Authorization;

export default instance;