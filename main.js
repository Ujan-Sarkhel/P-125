noseX=0
noseY=0
diff=0
lWristX=0
rWristX=0
function setup()
{
    canvas = createCanvas(550, 550)
    canvas.position( 560, 150 )
    
    video = createCapture(VIDEO)
    video.size(550,500)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw()
{
    background(255, 255, 255)
    fill(0,0,0)
    textSize(diff)
    text("Hello World", 100,200)
}

function modelLoaded()
{
    console.log("PoseNet model is loaded")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(noseX);
        console.log(noseY);
        lWristX=results[0].pose.leftWrist.x;
        rWristX=results[0].pose.rightWrist.x;
        diff=Math.floor(lWristX-rWristX);
    }
}