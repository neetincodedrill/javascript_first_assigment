var http = require('http');
var fs = require('fs');

http.createServer(function(err,data){
   
    //create a new file using open method
   fs.open('file.txt','w',function(err,data){
       if(err) throw err;
       console.log('New file created')
   })

    //add content to the new file created
    fs.appendFile('file.txt','My new file created',function(err,data){
        if(err) throw err;
        console.log('content added to the new file')
    })

    //read the file
   fs.readFile('file.txt','utf8',(err,data) => {
       if(err){
           console.log(err)
           return
       }
       console.log(data)
   })

   //rename a text filename
   fs.rename('file.txt','file1.txt',function(err,data){
       if(err){
           console.log(err)
           return
       }
       console.log('file renamed')
   })
   
   //delete a file
   fs.unlink('demo3.txt',function(err){
       if(err){
           console.log(err)
           return
       }
       console.log('file deleted')
   })

}).listen(5000)