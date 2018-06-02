//server
const app = this.app = express();
app.use('/cat', catApi('/cat-api'));
 
//client
fetch('/cat').then((res) => res.json()).then(json => console.log(json)) 
// {url: "/cat-api/images/PAY-Hero-Cat.jpg"}
