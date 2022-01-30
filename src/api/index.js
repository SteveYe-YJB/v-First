import axios from "../http/request"
//请求示例
//get
export const userLoginRequset = (data) => {
    return axios({
        url: "/api/login",
        method: "post",
        data,
    })
}

export const getTableDataApi = (data) => {
    return axios({
        url: "/api/tool/readProject",
        method: "post",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}