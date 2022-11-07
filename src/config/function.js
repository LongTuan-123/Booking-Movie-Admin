import Cookies from "cookies-js";

export const isLogin = () => {
    return !!Cookies.get('data') && !!Cookies.get('token')
}

export const bindParam = (str, params) => {
    const { id } = params
    const url = str?.replace(":id", id)

    return url
}