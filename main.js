
function st_classify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mpE3iBCKM/model.json"
    , modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResults);
}

function gotResults(errors,Results){
    if (errors){
        console.log(errors)
    }else {
        console.log(Results);
        var red = Math.floor(Math.random() * 255) + 1;
        var green = Math.floor(Math.random() * 255) + 1;
        var blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear -" + Results[0].label;
        document.getElementById("result_accuracy").innerHTML = "Accuracy -" + (Results[0].confidence * 100).toFixed(2) + "%";

        document.getElementById("result_label").style.color = "rgb("+red+","+green+","+blue+")";
        document.getElementById("result_accuracy").style.color = "rgb("+red+","+green+","+blue+")";

    }

}