const xpress = require('express')
const fs = require('fs')
const app = xpress();
const cors = require('cors')
PORT = 888

app.use(cors())

app.get('/health', (req,res) => {

    res.status(200).send('Healthy!')
    
})

// app.get('/', (req,res) => {

//     res.sendFile(__dirname + "/index.html")
    
// })
// 2
app.get('/videos', (req,res) => {

  const range = req.headers.range;
  console.log(req.headers.range)
  if (!range) {
    res.status(400).send("Request must include range header. Please try again.")
  }
    // const videoPath = "ThirdChild.mp4"
    const videoPath = "drone_footage.mp4"
    // get size of video 
    const videoSize = fs.statSync(videoPath).size
    const CHUNK_SIZE = 10 ** 6; //1mb
    //parse the range 
    //Example "bytes=8823-"
    
    const start = Number(range.replace(/\D/g,"")) //replace all non digit characters with nothing
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1) //end will continue to increase 
    console.log('start',start)
    console.log('end',end)

    const contentLength = end - start + 1
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }

    res.writeHead(206,headers); //tells browswer that partial data is being sent
    const videoStream = fs.createReadStream(videoPath, {start,end})
    videoStream.pipe(res)

    
})




app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})