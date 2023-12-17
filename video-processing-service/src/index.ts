import express from 'express';
import ffmpeg from 'fluent-ffmpeg';

const app = express();
app.use(express.json());

app.post('/process-video', (req, res) => {
    // Get the video url from the request body
    const inputFilePath = req.body.inputFilePath;

    const outputFilePath = req.body.outputFilePath;

    if (!inputFilePath || !outputFilePath) {
        res.status(400).send('Missing input or output file path');
    }

    // Convert the video using ffmpeg
    ffmpeg(inputFilePath)
        .outputOptions("-vf", "scale=640:360") 
        .on('end', () => {
            res.status(200).send('Video processing started');
        })
        .on('error', (err) => {
            console.log("Error: ", err);
            res.status(500).send("Error converting video: " + err.message);
        })
        .save(outputFilePath);
    });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

