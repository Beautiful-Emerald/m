Webcam.set({
width:300,
height:350,
img_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function modelLoaded(){
console.log("Model Loaded!");
}

function snapshot(){

Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';

})}

console.log("ml5.version:",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/miBY48PWL/model.json',modelLoaded);

function Identify(){

img=document.getElementById("Capture_img");
classify.classifier(img,'gotResult');
}

function gotResult(error,results){

    if(error){
    console.error(error);
    }

    else{
        console.log(results);
        document.getElementById("result_object").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(2);
    
    }
}