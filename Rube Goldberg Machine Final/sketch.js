//word sphere code
//revised from code by Che Yu Wu https://www.openprocessing.org/sketch/1004867

let txts = []
// let ft
// let sentence = "Shiny Iris Jensen | The Tean Meeting | Cross Platform Collaboration | IFTTT Zapier Github Discord Slack | Ease the Communicate Barrier"
var sentence2 = localStorage.getItem("sentenceStorage")//get the fetched messages as a single string

let webGLGraphics

let overAllTexture
let bgm
// function preload(){
//     ft = loadFont("framd.ttf")
// }

function setup() {
	// createCanvas(950,950);
	var canvas = createCanvas(950, 950);
	// Move the canvas so it’s inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	pixelDensity(2)
	webGLGraphics = createGraphics(width,height,WEBGL);
	// textFont(ft)
	let textureHeight = 500
	for(var i=0;i<5;i++){
		txts[i] = createGraphics(1200,textureHeight)
		txts[i].pixelDensity(2)
		// txts[i].textFont(ft)
		// txts[i].clear(0,0,1000,500)
		txts[i].fill([0,0,0,255][i%4])
		txts[i].strokeWeight(2)
		let spanWidth = i*2+1
		txts[i].rect(0,250-spanWidth,1180,spanWidth*2)
		txts[i].fill(0)
		txts[i].text(sentence2,0,textureHeight/2+25)
	}

	webGLGraphics.background(255);
	background(0)


	// noprotect
	overAllTexture=createGraphics(width,height)
	overAllTexture.loadPixels()
	// noStroke()
	for(var i=0;i<width+50;i++){
		for(var o=0;o<height+50;o++){
			overAllTexture.set(i,o,color(100,noise(i/30,o/30,i*o/50)*random([0,20,40,120])))
		}
	}
	overAllTexture.updatePixels()

}

function draw() {
	webGLGraphics.push()
	webGLGraphics.clear(0,0,width,height)
	webGLGraphics.fill(0)
	webGLGraphics.rotateX(sin(frameCount/100 + mouseX/100))
	webGLGraphics.rotateY(cos(frameCount/50+ mouseY/100) )
	webGLGraphics.rotateZ(cos(frameCount/50))
	webGLGraphics.stroke(0)

	webGLGraphics.noFill()
	webGLGraphics.box(20)
	webGLGraphics.noStroke()
	for(var i=0;i<15;i++){
		webGLGraphics.push()
			webGLGraphics.texture(txts[i%5])
			webGLGraphics.rotateX(sin(frameCount/200+i))
			webGLGraphics.rotateY(cos(frameCount/100+i*5))
			webGLGraphics.rotateZ(cos(frameCount/100+i*3))
			webGLGraphics.sphere(250+i*10 + noise(i,frameCount/50)*20,64)
		webGLGraphics.pop()
	}
	webGLGraphics.pop()

	clear(0,0,width,height)
	fill(209, 229, 227)
	rect(0,0,width,height)
	image(webGLGraphics,0,0)
	fill(0)
	noStroke()
	// textFont(ft)
	textSize(20)
	text("ROTATE X: "+sin(frameCount/200+i) + "\n"
			 +"ROTATE Y: "+cos(frameCount/100+i*5) + "\n"
			 +"ROTATE Z: "+cos(frameCount/100+i*3) + "\n"
			 	, 40,height-100)
	stroke(0)
	noFill()
	push()
	strokeWeight(2)
	rect(20,20,width-40,height-40)
	pop()
	push()
		blendMode(MULTIPLY)
		image(overAllTexture,0,0)
	pop()
	// ellipse(mouseX, mouseY, 20, 20);
}
