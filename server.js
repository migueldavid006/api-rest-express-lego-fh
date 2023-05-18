import express from " express";

class Server {

        constructor(){
            this.app = express();
            this.port = process.env.PORT;


        }

        router(){
            this.app.get('/',(req,res)=>{})
        }

        listen(){
            this.app.listen(this.port,()=>{
                console.log('running in port', this.port);
            })
        }
    }





    // --------------------------------------

    // app.get('/',function(req,res){
    //     res.send('hello world')
    // })

    // app.listen(process.env.PORT, () =>{
    //     console.log('running in port', process.env.PORT);
    // })