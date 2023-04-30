import express from 'express'

const app = express();

app.use(function (req, res, next) {
    console.log('Время:', Date.now());
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World! "+'Время: '+ Date.now());
    //res.send(console.log('OK'))
  });

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));