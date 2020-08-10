interface authentication {
    password:string
    is_password?:string
}

function auth(str:authentication):boolean {
    const pw:RegExp=/^[0-9a-zA-Z]{6,18}$/
    if(pw.test(str.password)){
        return true
    }else {
        return false
    }
}
export default auth