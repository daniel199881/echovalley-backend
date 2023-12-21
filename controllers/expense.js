import Expense from "../database/models/Expense.js"

/**
 * @route       GET /api/expense
 * @description GET expenses
 * @access      public
 */
export const list = async (req, res) => {
    const expenses = await Expense.findAll();

    return res.status(200).json({
        status: 'success',
        message: '',
        data: expenses,
    });
}

/**
 * @route       GET /api/expense
 * @description GET expenses
 * @access      public
 */
export const create = async (req, res) => {
    const { title, type, amount, date} = req.body;
    const expense = await Expense.create({
        title,
        type,
        amount,
        date
    });

    return res.json({
        status: "success",
        message: "Expense created successfully.",
        data: expense
    });
}

/**
 * @route       GET /api/expense
 * @description GET expenses
 * @access      public
 */
export const remove = async (req, res) => {
    await Expense.destroy({ where: { id: req.params.id } });

    return res.json({
        status: "success",
        message: "Expense removed successfully",
    });
}