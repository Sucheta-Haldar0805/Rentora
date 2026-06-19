const express = require("express");
const router = express.Router();

router.get("/privacy", (req, res) => {
    res.render("pages/privacy.ejs");
});

router.get("/terms", (req, res) => {
    res.render("pages/terms.ejs");
});

router.get("/about", (req, res) => {
    res.render("pages/about.ejs");
});
router.get("/contact", (req, res) => {
    res.render("pages/contact.ejs");
});
router.get("/help", (req, res) => {
    res.render("pages/help.ejs");
});
router.get("/faq", (req, res) => {
    res.render("pages/faq.ejs");
});
router.get("/cookies", (req, res) => {
    res.render("pages/cookies.ejs");
});


module.exports = router;