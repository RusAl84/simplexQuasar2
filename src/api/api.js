import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:5000',
})

export default class API {
    static async sendMessage(z, rests) {
        const resp = await axios.post(`/api/optimize`, {
            z: z,
            rests: rests,
        })
        return resp.data
    }
}