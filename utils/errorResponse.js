/**
 * Function to Format the error message
 * @param { String } message error message
 * @param { Number } code error code
 * @param { Object } debuger debug information 
 * @returns { Object } formated error Response object
 */
export function errorToJson(message = '', code = 500, debuger = null) {
    return {
        error: {
            code,
            message,
            debugger: debuger
        }
    };
}