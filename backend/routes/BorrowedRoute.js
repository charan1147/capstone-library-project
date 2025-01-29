const express = require('express');
const router = express.Router();
const { borrowBook, getUserBorrowedBooks, getAllBorrowedBooks, returnBook, getOverdueBooks } = require('../controllers/BorrowedController');
const { isAuthenticated, isAdmin } = require("../middleware/authController");

router.post('/borrow', isAuthenticated, borrowBook);
router.put('/return/:id', isAuthenticated, returnBook);
router.get('/overdue', isAuthenticated, getOverdueBooks);
router.get('/user', isAuthenticated, getUserBorrowedBooks); 


module.exports = router;
