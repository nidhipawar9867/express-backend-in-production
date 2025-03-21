export const logging = (req, _, next) => {
    console.log("middleware called", req.url)
    next()
}