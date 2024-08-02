import express from 'express';
import bodyParser from 'body-parser';

const app=express();
const port=3000;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("mainPage.ejs",{
        sign:"#"
    });
});

app.get("/news",(req,res)=>{
    res.render("news.ejs",{
        sign:"/"
    });
});
app.get("/about",(req,res)=>{
    res.redirect("https://drive.google.com/file/d/1FrMmwzrQfPMjKV_qJvF3krE1M7d4m7w8/view?usp=drivesdk")
});

app.get("/signin",(req,res)=>{
    res.render("Sign.ejs",{
        sign:"/"
    });
});
app.get("/login",(req,res)=>{
    res.render("login.ejs",{
        sign:"/"
    });
});
app.get("/news/loans",(req,res)=>{
    res.render("loan.ejs",{
        sign:"/",
        loan:true
    });
});

app.get("/reels",(req,res)=>{
    res.render("reels.ejs",{
        sign:"/",
        bool:true
    });
});
app.get("/community",(req,res)=>{
    res.render("community.ejs",{
        sign:"/",
        community:true
    });
});

let count=-1;
app.use(bodyParser.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log(req.method)
   if(req.method=='POST'){
     count=1;
    }
   if(req.method=='GET'){
     count=2;
    }
   next(); 
});

app.get("/cropAnalysis",(req,res)=>{
    console.log(count);
    res.render("cropAnalysis.ejs",{
        counter:count,
        sign:"/"
    })
});

app.post("/cropAnalysis/submit",(req,res)=>{
    console.log(req.body.crop);
    console.log(count);
    res.render("cropAnalysis.ejs",{
        counter:count,
        Crop : req.body.crop,
        Stage :req.body.stage,
        sign:"/"
    });
});
app.post("/profile",(req,res)=>{
    console.log(req.body.fname);
        res.render("profile.ejs",{
        Fname : req.body.fname,
        Lname :req.body.lname,
        profile:true,
        sign:"/"
    })   
});


app.listen(port,()=>{
    console.log(`server is running at pory ${port}.`);
});

