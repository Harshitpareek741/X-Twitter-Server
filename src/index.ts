import initStart from './app'
import main from './clientdb';
const Port = 8080 || process.env.port;

async function ServerStart(){
    const app = await initStart();
    app.listen(Port , ()=>{
        console.log(`Server Started on Port ${Port}`);
    })
}
ServerStart();
