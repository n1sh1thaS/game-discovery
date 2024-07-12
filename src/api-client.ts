import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {key: "08beef9e9c3e47ff91c78167d7629c8d"}
})