const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const PORT = process.env.PORT || 3030;

const mainListItems = [];
const workListItems = [];

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    
    const currentDate = date.longFormatDate();

    res.render("list", { listTitle: currentDate, listItems: mainListItems });
});

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        listItems: workListItems,
    });
});

app.get("/about", function (req, res) {
    res.render("about")
});

app.post("/", function (req, res) {
    const userInput = req.body.newListItem;

    if (req.body.btnListTitle === "Work List" && userInput !== "") {
        workListItems.push(userInput);
        res.redirect("/work");
    }
    else if (userInput !== "") {
        mainListItems.push(userInput);
        res.redirect("/");
    }
    // res.render("list", {userInputList: userInput}); - no
    
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
