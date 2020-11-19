const express = require(`express`);
const pug = require(`pug`);
const path = require(`path`);
const sendMail = require(`./backend-stuffs/mail`);
const quoteArr = require(`./backend-stuffs/quote`);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());

console.log(quoteArr);

app.set("view engine", "pug");

// for css integration
app.use(express.static(path.join(__dirname, "css")));

const random = Math.floor(Math.random() * quoteArr().length);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Project Title",
    dynamic: "https://picsum.photos/200",
    quote: quoteArr()[random],
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
  sendMail(req.body.email);
  res.redirect("/");
});

app.listen(PORT, (err) => {
  if (err) console.log("Some Error Occured");
  console.log("Server Started At Port 3000");
});
