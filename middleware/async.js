import { errorToJson } from "../utils/errorResponse.js";

const asyncHandler = fn => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        console.log(error);
        res.status(500).json(errorToJson('Server Error', 500));
    }
}
export default asyncHandler;