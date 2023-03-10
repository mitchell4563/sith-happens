const router = require("express").Router();
const { User, Bounty } = require("../models");
const withAuth = require("../utils/auth");

// Prevent non logged in users from viewing the homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });
    const bountyData = await Bounty.findAll({
      attributes: this.all,
    });
    const bounties = bountyData.map((project) => project.get({ plain: true }));

    res.render("homePage", {
      bounties,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/homePage");
    return;
  }

  res.render("signup");
});

module.exports = router;
