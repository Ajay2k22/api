export const ErrorHandler = (err, req, res, next) => {
    let {message,statuscode,name}=err
    // err.message2 = err.message
    // err.statuscode2 = err.statuscode
    // err.name2 = err.name

    // if (statuscode == 400) {
    //     message=message
    //     statuscode = statuscode
    //     name=name
    // }

    res.status(statuscode).json({
        success: "failed",
        message: message,
        name: name
    })

}