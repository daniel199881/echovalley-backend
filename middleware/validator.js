import { errorToJson } from "../utils/errorResponse.js";
import { validationResult } from 'express-validator';

/**
 * add formated error to array of errors
 * @param {*} err 
 * @returns errors
 */
const format = (err) => {
    const errors = [];
    err.errors.forEach((error) => {
        errors.push({ message: error.msg })
    });

    return errors;
};

/**
 * checks if ther is any error in the previous middlewares
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns formated error response
 */
export const validate_result = (req, res, next) => {
    // Get the error from Express Validator
    const err = validationResult(req);


    // Check for errors in body
    if (!err.isEmpty()) {
        const errors = format(err);
        return res.status(400).json(errorToJson(errors[0]?.message, 400));
    }
    next();
};