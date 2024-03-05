import express from "express";
const app = express();
const port = 3000;
const d = new Date()
var day = d.getDay()

if(day<=5){
    app.get("/", (req, res) =>{
        res.render("index.ejs", {
            dayType: "a weekday",
            advice: "it's time to work hard"
        })
    })
}else{
    app.get("/", (req, res) =>{
        res.render("index.ejs", {
            dayType: "a weekend",
            advice: "it's time to enjoy"
        })
    })
}


app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})
