const router = require('express').Router();

const feedbackController = require('../controllers/feedbackController');
const goshoFeedbackController = require("../controllers/goshoFeedbackController");
const toshoFeedbackController = require('../controllers/toshoFeedbackController');
const peshoFeedbackController = require('../controllers/peshoFeedbackController');
const tomiFeedbackController = require('../controllers/tomiFeedbackController');
const therFiveController = require('../controllers/therFiveController');
const userController = require('../controllers/userController');
const employeeController = require('../controllers/employeeController');
const therSixController = require('../controllers/therSixController');
const therSevenController = require('../controllers/therSevenController');
const therEightController = require('../controllers/therEightController');
const therNineController = require('../controllers/therNineController');
const therTenController = require('../controllers/therTenController');


router.use('/feedbacks', feedbackController);
router.use('/goshofeedbacks', goshoFeedbackController);
router.use('/toshofeedbacks', toshoFeedbackController);
router.use('/peshofeedbacks', peshoFeedbackController);
router.use('/tomifeedbacks', tomiFeedbackController);
router.use('/therfivefeedbacks', therFiveController);
router.use('/thersixfeedbacks', therSixController);
router.use('/therseventhfeedbacks', therSevenController);
router.use('/thereightfeedbacks', therEightController);
router.use('/therninefeedbacks', therNineController);
router.use('/thertenfeedbacks', therTenController);
router.use('/employees', employeeController);
router.use('/users', userController);


module.exports = router;