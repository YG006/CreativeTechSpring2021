var images2 = localStorage.getItem("imgStorage")//get the fetched image links as an array of links

document.body.style.backgroundColor = "yellow";

console.log(images2);
console.log(typeof images2); //becomes string again

let imgArray = images2.split(","); //split string into array again
console.log(imgArray);

for (var i = 0; i < imgArray.length-1; i++) {
  let chatImg = document.createElement("img");
  let imgDiv = document.createElement("div");
  //console.log(images2);
  chatImg.src = imgArray[i];
  chatImg.className = "chatImgs";
  imgDiv.id = "img" + imgArray[i];

  // document.getElementById("imgBackground").appendChild(imgDiv);
  //
  // document.getElementById("img" + imgArray[i]).style.zIndex = imgArray[i]+5;
  // imgDiv.appendChild(chatImg);
}




//random image position
// window.onLoad = Prep();
//
//             function Prep(){
//                 window_Height = window.innerHeight;
//                 window_Width = window.innerWidth;
//
//                 image_Element = document.getElementBy("image");
//                 image_Height = image_Element.clientHeight;
//                 image_Width = image_Element.clientWidth;
//
//                 availSpace_V = window_Height - image_Height;
//                 availSpace_H = window_Width - image_Width;
//
//                 var changeInterval = 3000; // Time has to be in miliseconds. So, 3000 is 3 seconds
//                 setInterval(moveImage, changeInterval);
//             }
//
//             function moveImage(){
//                 var randNum_V = Math.round(Math.random() * availSpace_V);
//                 var randNum_H = Math.round(Math.random() * availSpace_H);
//
//                 image_Element.style.top = randNum_V + "px";
//                 image_Element.style.left = randNum_H + "px";
//             }
