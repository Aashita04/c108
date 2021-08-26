function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/g8qvHLjkM/model.json",modelready)
}

function modelready(){
    classifier.classify(gotResults);
}

function gotResults(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;

        document.getElementById("nameresult").innerHTML="I can Hear- " + result[0].label;
        document.getElementById("nameaccuracy").innerHTML="Accuracy- " + (result[0].confidence*100).toFixed(2)+" %"
        document.getElementById("nameaccuracy").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("nameresult").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        img=document.getElementById("a1");
        img1=document.getElementById("a2");
        img2=document.getElementById("a3");
        img3=document.getElementById("a4");
         
        if(result[0].label=="clap"){
            img.src="aliens-01.gif";
            img1.src="aliens-02.png";
            img2.src="aliens-03.png";
            img3.src="aliens-04.png";
        }
        else if(result[0].label=="dog Bark"){
            img.src="aliens-01.png";
            img1.src="aliens-02.gif";
            img2.src="aliens-03.png";
            img3.src="aliens-04.png"; 
        }

        else if(result[0].label=="clink"){
            img.src="aliens-01.png";
            img1.src="aliens-02.png";
            img2.src="aliens-03.gif";
            img3.src="aliens-04.png"; 
        }
         
        else{
            img.src="aliens-01.png";
            img1.src="aliens-02.png";
            img2.src="aliens-03.png";
            img3.src="aliens-04.gif"; 
        }

    }

}