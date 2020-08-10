function auth(str) {
    const pw = /^[0-9a-zA-Z]{6,18}$/;
    if (pw.test(str.password)) {
        return true;
    }
    else {
        return false;
    }
}
export default auth;
//# sourceMappingURL=authentication.js.map