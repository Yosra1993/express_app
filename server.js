express= require('express')

const app = express()
var date = new Date();
var current_hour = date.getHours();
console.log(current_hour)
 let tab=['home.html','service.html','contact.html']
     
if((current_hour>8)&&(current_hour<17))
{
app.use('/horsservice.css',express.static(__dirname + '/horsservice.css'));

app.use(express.static(__dirname + '/public'));}

else

app.use('/horsservice.css',express.static(__dirname + '/horsservice.css'));

app.get('/:name', function(req, res) {
    let name=req.params.name
    tab=tab.map(el=>el=name)
    res.sendFile(__dirname+"/horsservice.html",tab,(err,data)=>
{
    if(err) console.log('err')
    else console.log(name)
});
});

app.listen(3000,(err)=>{
    if(err) console.log("server is not running")
    else console.log('serveur is running on port 3000')
})
