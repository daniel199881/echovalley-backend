import expense from './expense.js';

export default (app, base = '/api') => {
  app.use(`${base}/expense`, expense);
};
