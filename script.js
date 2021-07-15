var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("Text_Box").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("Text_Box").innerHTML = content;
    console.log(content);
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    speakdata = document.getElementById("Text_Box").value;
    var utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
}