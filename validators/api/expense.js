import { check, param } from "express-validator";
import Expense from "../../database/models/Expense.js";

export default (route) => {
    switch (route) {
        case 'create': {
            return [
                check('title')
                    .notEmpty()
                    .withMessage('title is required')
                    .isString()
                    .withMessage('title should be a Text'),
                check('type')
                    .notEmpty()
                    .withMessage('Expense Type is required')
                    .isString()
                    .withMessage('Expense Type should be a Text')
                    .custom(value => ['bills', 'leisure', 'medicals'].includes(value))
                    .withMessage('Invalid type'),
                check('amount')
                    .notEmpty()
                    .withMessage('Amount is required')
                    .isNumeric()
                    .withMessage('Amount should be a number'),
                check('date')
                    .notEmpty()
                    .withMessage('Date is required')
                    .isDate()
                    .withMessage('invalid Date'),
            ];
        };
        case 'delete': {
            return [
                param('id')
                    .isInt()
                    .notEmpty()
                    .withMessage('Ids is required.')
                    .custom(async (id) => {
                        const data = await Expense.findByPk(id);
                        if (!data) {
                            throw new Error('Expense not found');
                        }
                        return true
                    })
                    .withMessage('Expense not found')
            ]
        }
    }
}