const express=require('express');
const bodyParser=require("body-parser");
 var item="";
 var workitem="";


// we need to create array for more than one iteam store
var items=["wake up","solve lc","watch BBT"];
var work=[];
const app=express();

//ejs set up
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

//css files uesd by express
app.use(express.static("public"));
app.get("/",function(req,res){
    //we can send anything to the server from this function "get";
var d= new Date();


// var date=d.getDay();
// var day="";

// switch (date) {
//     case 0:
//         day="sunday"
//         break;
//         case 1:
//             day="Monday"
//             break;
//             case 2:
//                 day="Tuesday"
//                 break;
//                 case 3:
//                     day="Wednesday"
//                     break;
//                     case 4:
//                         day="Thursday"
//                         break;
//                         case 5:
//                             day="friday"
//                             break;
//                             case 6:
//                                 day="saturday"
//                                 break;

//     default:
//         break;
// }
// // if(date===2)
// // {
// //     day="weekend";
//     // res.send("<h1>today is holiday</h1>");
//     // res.write("<h1>today is holiday</h1>")
//     // res.write("<h1>today is holiday</h1>")
//     //"kindofDay is key from lists.ejs"
//     // res.render("lists",{kindofDay:"day"});
// // }
// // else{
// //     day="weekday";
//     // res.sendFile(__dirname+"/index.html");
// // }

//    // res.send("Hello");

//using js method "toLocalDateString" method
 

var options={weekday:"long",day:"numeric",month:"long"

}
var day=d.toLocaleDateString("hi-IN",options);

// so if we are adding newItem directly to post and render it it will give error cuz first the get render will 
// load and since it has only value of kindofDay it will serach for newItem value 

//    res.render("lists",{kindofDay:day});
//items is a array
//so get items array into key newItems key
//traverse to its length into ejs to get the list one by one;
    res.render("lists",{ListTitle:day,newItems:items});

});

app.post("/",function(req,res){
    
    // console.log(req.body);
      item=req.body.newItem;
    //   {newItem:value,satyam:ejs dynamic}
      if(req.body.satyam==="Work")
      {
        work.push(item);
        res.redirect("/work")
      }
      else{
        items.push(item);
        res.redirect("/")
      }
     
    // console.log(item);
    // now by rendering we can send the key value to ejs 
    // instead of rendering the data we redirect to the home route and there rendering will take place
    // res.render("lists",{newItem:item});
    // when post request triggers it gets the data from newItem and get stored in to item the that data got redirect to 
    // the get method and then get method finally renders the request  
   
});
//this is a work route function
app.get("/work",function(req,res){
    res.render("lists",{ListTitle:"Work",newItems:work});
});
app.post("/work",function(req,res){
    workitem=req.body.newItem;
    work.push(workitem);

    res.redirect("/");
})

app.listen(3000,function(req,res){
    console.log("server is Running at 3000");
});


