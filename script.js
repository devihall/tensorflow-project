/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

////////////Dom elements/////////////////////////
const video = document.getElementById('webcam');
const liveView = document.getElementById('liveView');
const demosSection = document.getElementById('demos');
const enableWebcamButton = document.getElementById('webcamButton')



const status = document.getElementById("status");
// status.innerText = "Loaded TensorFlow.js - version: " + tf.version.tfjs;

////////check if browser supports webcam access///////
function getUserMediaSupported(){

    return !!(navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia);
}

//////if webcam is supported then add event listener to call enableCam function/////
if (getUserMediaSupported()) {
  enableWebcamButton.addEventListener("click", enableCam);
} else {
  console.warn("getUserMedia() is not supported by your browser");
}

// Enable the live webcam view and start classification.
function enableCam(event) {
  // Only continue if the COCO-SSD has finished loading.
  if (!model) {
    return;
  }

  //hide button after click////
  event.target.classList.add('removed');

  //get parameters from getUsermedia function to get only video and not audio
  const constraints = {
    video: true
  };
  
  //start the webcam stream
  navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
    video.srcObject = stream;
    video.addEventListener('loadeddata',predictWebcam)
  });
}

// Placeholder function for next step.
function predictWebcam() {
}

// Pretend model has loaded so we can try out the webcam code.
var model = true;
demosSection.classList.remove("invisible");