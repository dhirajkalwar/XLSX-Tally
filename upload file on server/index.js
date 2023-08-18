const express = require('express')
const upload = require('express-fileupload')   

const app = express()

app.use(upload()) 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    if(req.files) {
        console.log(req.files);
        var file = req.files.file
        var fileName = file.name
        console.log(fileName);

        file.mv('./uploads/' + fileName, (err) => {
            if(err) {
                res.send(err)
            }else {
                res.send('File Uploaded')
            }
        })
    }
})

app.listen(5000, () => {
    console.log('Server Start On Port 5000');
})
