const express =  require('express');

const app = express();

app.use(express.json())
//app.use(express.urlencode())

app.get('', (req, res) => {

    const {param1, param2} = req.query

    res.json({

            "param1": param1,
            "param2": param2
            
    });
});


app.post('/usuario', (req, res) => {
    
    const {user,password} = req.body

    if(user === 'p.ig' && password === 'tio'){
        return res.json({
            "valido": true
        })
    }else{
        return res.json({
            "Valido": false
        })
    }
});

app.listen(7777, () => {
    console.log("Servidor Iniciado")


});