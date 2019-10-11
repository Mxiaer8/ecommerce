import axios from 'axios';

// 设置axios拦截器，每次请求默认带上相应的token， token需由登录获取，此时token为暂且测试写死，后期需更改。
axios.interceptors.request.use((config) => {
    config.headers['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDE2MjUwNTAyMDEiLCJleHAiOjE1Njk2Nzc3Njh9.Rx4fNP5A-ojf54YA8asLekXcX3wamZpv18WwREs1Cl8'
    return config
})
export default axios;  