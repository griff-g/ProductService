/**
 * The function `responseSend` is a helper function in JavaScript that sends a response with a
 * specified status code, success flag, message, and data.
 * @param res - The "res" parameter is the response object that is used to send the response back to
 * the client. It is typically provided by the framework or library being used for handling HTTP
 * requests and responses (e.g., Express.js).
 * @param statusCode - The statusCode parameter is the HTTP status code that will be sent in the
 * response. It indicates the status of the request, such as 200 for a successful request or 404 for a
 * not found error.
 * @returns the response object with the specified status code and the provided success, message, and
 * data properties.
 */
export const responseSend = (res, statusCode, {success, message, data}) => {
    return res.status(statusCode).send({
        success,
        message,
        data,
    });
};
