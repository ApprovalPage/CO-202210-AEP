(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"CO_AEP_300x250_atlas_P_1", frames: [[0,0,110,110]]},
		{name:"CO_AEP_300x250_atlas_NP_1", frames: [[0,0,600,264],[0,266,600,264],[0,532,600,264],[0,798,600,264]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CO_AEP_300x2501 = function() {
	this.initialize(ss["CO_AEP_300x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CO_AEP_300x2502 = function() {
	this.initialize(ss["CO_AEP_300x250_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CO_AEP_300x2503 = function() {
	this.initialize(ss["CO_AEP_300x250_atlas_NP_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CO_AEP_300x2504 = function() {
	this.initialize(ss["CO_AEP_300x250_atlas_NP_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.PhoneIcon2x = function() {
	this.initialize(ss["CO_AEP_300x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.PIC4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pic
	this.instance = new lib.CO_AEP_300x2504();
	this.instance.setTransform(-150,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC4, new cjs.Rectangle(-150,0,300,132), null);


(lib.PIC3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pic
	this.instance = new lib.CO_AEP_300x2503();
	this.instance.setTransform(-150,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC3, new cjs.Rectangle(-150,0,300,132), null);


(lib.PIC2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pic
	this.instance = new lib.CO_AEP_300x2502();
	this.instance.setTransform(-150,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bKUIAA0nMAu3AAAIAAUng");
	this.shape.setTransform(0,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(-150,0,300,132), null);


(lib.PIC1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pic
	this.instance = new lib.CO_AEP_300x2501();
	this.instance.setTransform(-150,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(-150,0,300,132), null);


(lib.HEAD4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuB9QgjgyAAhLQAAhKAjgzQAog4BGAAQBHAAAoA4QAjAzAABKQAABLgjAyQgoA5hHAAQhGAAgog5gAhEAAQAAB0BEgBQBFABAAh0QAAhzhFAAQhEAAAABzg");
	this.shape.setTransform(-88.075,26.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUDmIAAgwQhNgHgwgwIApg6QAjAkAxAJIAAhSQg0gNgZgSQglgaAAgwQAAgpAfgeQAfgeA0gGIAAgxIAxAAIAAAyQBBAIAsAnIgqA5QgbgZgogKIAABKQA2ANAZASQAmAaAAAxQAAAtgeAeQgeAfg5AGIAAAwgAAdBzQAogIAAgdQAAgWgogMgAg4hPQAAASAkAMIAAhAQgkAFAAAdg");
	this.shape_1.setTransform(-120.8,26.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoAiIALgSQAFAFAJAEQAJAEAIAAQAPAAAAgKQAAgEgIgDIgSgEQgbgHAAgTQAAgNAKgIQAKgIARAAQAUAAAQAMIgJARQgLgKgQAAQgGAAgEACQgEADAAAEQAAAEAIACIASAEQAcAHgBAVQAAANgKAIQgLAIgSAAQgZAAgQgOg");
	this.shape_2.setTransform(132.05,37.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAjQgOgNAAgWQAAgTAOgOQANgOAUAAQAUAAANAOQANAOAAAVIAAAGIhDAAQABAJAHAFQAHAGAKAAQAPAAAJgJIALAQQgOANgYAAQgUAAgOgNgAAYgIQgBgIgFgFQgGgHgLAAQgKAAgGAHQgFAFgBAIIAtAAIAAAAg");
	this.shape_3.setTransform(122.375,37.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA/IAAh9IAXAAIAAB9g");
	this.shape_4.setTransform(114.7,35.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAyIAAAMIgXAAIAAh+IAXAAIAAAvQAMgOAQAAQASAAALANQALANAAAVQAAAXgLAMQgLANgSABQgQAAgMgPgAgNgGQgFADgEADIAAAgQAEAFAFADQAGADAHAAQAJAAAHgHQAFgIAAgMQAAgMgFgGQgHgIgJAAQgHABgGADg");
	this.shape_5.setTransform(107.05,36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLBBIAAhbIAXAAIAABbgAgJgoQgFgEABgGQgBgGAFgEQAEgEAFAAQAGAAAEAEQAEAEABAGQgBAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_6.setTransform(98.8,35.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAiIAAguIgQAAIAAgWIAQAAIAAgZIAXAAIAAAZIASAAIAAAWIgSAAIAAAoQAAAKAIAAQAGAAADgDIAFATQgHAGgNAAQgZAAAAgag");
	this.shape_7.setTransform(93.225,36.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAjQgNgOAAgVQAAgUANgOQAOgNAUAAQAYAAAMAQIgQAPQgGgKgNAAQgKAAgHAIQgGAHgBALQABAMAGAHQAHAIAKAAQANAAAGgKIAQAOQgMARgYAAQgUAAgOgNg");
	this.shape_8.setTransform(85.4,37.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqASIAAhAIAYAAIAAA3QAAARARAAQALAAAJgLIAAg9IAYAAIAABbIgYAAIAAgMQgNAOgSAAQgeAAAAgdg");
	this.shape_9.setTransform(75.05,37.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiAzQgMgMAAgXQAAgVAMgNQALgNASAAQARAAAKAOIAAgvIAZAAIAAB+IgZAAIAAgMQgLAPgQAAQgSgBgLgNgAgOgCQgHAGAAAMQAAAMAHAIQAGAHAKAAQAGAAAFgDQAGgDADgFIAAggQgDgDgGgDQgFgDgGgBQgKAAgGAIg");
	this.shape_10.setTransform(63.725,36.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggAjQgOgNAAgWQAAgTAOgOQANgOAUAAQAUAAANAOQANAOAAAVIAAAGIhDAAQABAJAHAFQAHAGAKAAQAPAAAJgJIALAQQgOANgYAAQgUAAgOgNgAAYgIQgBgIgFgFQgGgHgLAAQgKAAgGAHQgFAFgBAIIAtAAIAAAAg");
	this.shape_11.setTransform(53.225,37.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAzQgMgMAAgXQAAgVAMgNQALgNASAAQARAAAKAOIAAgvIAZAAIAAB+IgZAAIAAgMQgLAPgQAAQgSgBgLgNgAgOgCQgHAGAAAMQAAAMAHAIQAGAHAKAAQAGAAAFgDQAGgDADgFIAAggQgDgDgGgDQgFgDgGgBQgKAAgGAIg");
	this.shape_12.setTransform(42.125,36.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiAzQgMgMAAgXQAAgVAMgNQALgNASAAQARAAAKAOIAAgvIAZAAIAAB+IgZAAIAAgMQgLAPgQAAQgSgBgLgNgAgOgCQgHAGAAAMQAAAMAHAIQAGAHAKAAQAGAAAFgDQAGgDADgFIAAggQgDgDgGgDQgFgDgGgBQgKAAgGAIg");
	this.shape_13.setTransform(26.175,36.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AATAvIAAg3QAAgRgRAAQgLAAgJALIAAA9IgYAAIAAhbIAYAAIAAAMQAMgOATAAQAeAAAAAdIAABAg");
	this.shape_14.setTransform(15.4,37.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfApQgLgJABgOQgBgPALgHQAJgHAMAAQASAAAKALIAAgLQAAgHgFgFQgGgEgIAAQgPAAgMALIgJgRQAQgOAXAAQASAAAKAHQAMAJAAASIAAA7IgYAAIAAgKQgKAMgSAAQgMAAgJgHgAgNAIQgEAEgBAGQABAGAEAEQAFAEAHAAQANAAAGgIIAAgMQgGgIgNAAQgHAAgFAEg");
	this.shape_15.setTransform(4.5,37.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnAiIAKgSQAGAFAIAEQAJAEAHAAQAQAAAAgKQAAgEgJgDIgRgEQgcgHABgTQgBgNAKgIQALgIAQAAQAWAAAPAMIgKARQgKgKgRAAQgFAAgEACQgEADAAAEQAAAEAIACIASAEQAcAHAAAVQAAANgLAIQgLAIgTAAQgYAAgPgOg");
	this.shape_16.setTransform(-9.85,37.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgnA/IAEgVQADABAEABQAKAAADgHIADgJIglhbIAaAAIAXA/IAYg/IAaAAIgrBqQgFAMgIAFQgIAEgNAAQgHABgFgCg");
	this.shape_17.setTransform(-19.125,39.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AggApQgKgJAAgOQAAgPAKgHQAKgHAMAAQATAAAJALIAAgLQAAgHgGgFQgFgEgIAAQgPAAgLALIgKgRQAQgOAXAAQASAAAKAHQANAJAAASIAAA7IgZAAIAAgKQgKAMgSAAQgMAAgKgHgAgNAIQgEAEAAAGQAAAGAEAEQAGAEAHAAQAMAAAGgIIAAgMQgGgIgMAAQgHAAgGAEg");
	this.shape_18.setTransform(-29.4,37.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AguBBIAAh+IAYAAIAAALQALgNARAAQASAAALAMQAMANAAAXQAAAVgMANQgLANgSAAQgQAAgMgOIAAAvgAgNgnQgFADgEAEIAAAgQAEAEAFADQAHADAFABQAKgBAGgHQAGgGAAgMQAAgNgGgGQgHgIgJAAQgFAAgHADg");
	this.shape_19.setTransform(-39.5,39.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjAiQgMgOAAgUQAAgTAMgOQAOgOAVAAQAWAAAOAOQAMAOAAATQAAAUgMAOQgOAOgWAAQgVAAgOgOgAgRgSQgFAIgBAKQABALAFAIQAHAIAKAAQALAAAGgIQAGgIABgLQgBgKgGgIQgGgIgLAAQgKAAgHAIg");
	this.shape_20.setTransform(-50.8,37.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcAjQgNgOAAgVQAAgUANgOQAOgNAUAAQAYAAAMAQIgQAPQgGgKgNAAQgKAAgHAIQgGAHgBALQABAMAGAHQAHAIAKAAQANAAAGgKIAQAOQgMARgYAAQgUAAgOgNg");
	this.shape_21.setTransform(-60.85,37.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNATQAFgDAEgFQAEgFABgFIgDAAQgGAAgEgCQgDgEAAgGQAAgHAEgEQAFgEAGAAQAGAAAFAFQAFAFAAAJQAAAUgTAOg");
	this.shape_22.setTransform(126,23.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgoAiIALgSQAGAFAIAEQAJAEAIAAQAPAAAAgKQAAgEgIgDIgSgEQgcgHAAgTQAAgNALgIQAKgIARAAQAUAAAQAMIgJARQgLgKgQAAQgGAAgEACQgEADAAAEQAAAEAIACIASAEQAcAHgBAVQAAANgKAIQgLAIgSAAQgZAAgQgOg");
	this.shape_23.setTransform(118.9,18.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAtAvIAAg5QAAgPgOAAQgLAAgIALIAAA9IgXAAIAAg5QAAgPgOAAQgLAAgIALIAAA9IgYAAIAAhbIAYAAIAAAMQAEgFAHgEQAJgFAKAAQAUAAAEARQAFgHAIgFQAJgFAKAAQAbAAAAAbIAABCg");
	this.shape_24.setTransform(106.35,18.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgqASIAAhAIAYAAIAAA3QAAARARAAQALAAAJgLIAAg9IAYAAIAABbIgYAAIAAgMQgNAOgSAAQgeAAAAgdg");
	this.shape_25.setTransform(92.75,18.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLBBIAAhbIAXAAIAABbgAgJgoQgFgEABgGQgBgGAFgEQAEgEAFAAQAGAAAEAEQAEAEABAGQgBAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_26.setTransform(84.85,16.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAtAvIAAg5QAAgPgOAAQgLAAgIALIAAA9IgYAAIAAg5QAAgPgNAAQgLAAgIALIAAA9IgYAAIAAhbIAYAAIAAAMQAEgFAIgEQAJgFAJAAQATAAAGARQAEgHAIgFQAJgFAKAAQAbAAAAAbIAABCg");
	this.shape_27.setTransform(74.35,18.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggAjQgOgNAAgWQAAgTAOgOQANgOAUAAQAUAAANAOQANAOAAAVIAAAGIhDAAQABAJAHAFQAHAGAKAAQAPAAAJgJIALAQQgOANgYAAQgUAAgOgNgAAYgIQgBgIgFgFQgGgHgLAAQgKAAgGAHQgFAFgBAIIAtAAIAAAAg");
	this.shape_28.setTransform(61.025,18.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaAvIAAhbIAYAAIAAANQAMgPARAAIAAAYIgHgBQgGAAgHADQgHADgCAFIAAA7g");
	this.shape_29.setTransform(52.825,18.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AguBBIAAh+IAYAAIAAAMQALgPARAAQASAAALANQAMANAAAXQAAAVgMANQgLANgSAAQgQAAgMgOIAAAvgAgNgnQgFADgEAFIAAAfQAEAEAFADQAHADAFABQAKAAAGgIQAGgGAAgMQAAgNgGgGQgHgIgJAAQgFAAgHADg");
	this.shape_30.setTransform(43.75,20.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgnA/IAEgVQADACAEAAQAKgBADgGIADgJIglhbIAaAAIAXA/IAYg/IAaAAIgrBqQgFALgIAGQgIAEgNABQgHgBgFgBg");
	this.shape_31.setTransform(28.225,20.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLA/IAAh9IAXAAIAAB9g");
	this.shape_32.setTransform(20.95,16.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AATA/IAAg4QAAgPgRAAQgMAAgIAJIAAA+IgYAAIAAh9IAYAAIAAAuQANgOASAAQAeAAAAAdIAABAg");
	this.shape_33.setTransform(13.05,16.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgOAiIAAguIgQAAIAAgWIAQAAIAAgZIAXAAIAAAZIASAAIAAAWIgSAAIAAAoQAAAKAIAAQAGAAADgDIAFATQgHAGgNAAQgZAAAAgag");
	this.shape_34.setTransform(4.375,17.575);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AATAvIAAg3QAAgRgRAAQgMAAgIALIAAA9IgYAAIAAhbIAYAAIAAAMQAMgOATAAQAeAAAAAdIAABAg");
	this.shape_35.setTransform(-4.35,18.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgiAiQgNgOgBgUQABgTANgOQANgOAVAAQAWAAAOAOQANAOAAATQAAAUgNAOQgOAOgWAAQgVAAgNgOgAgQgSQgHAIABAKQgBALAHAIQAGAIAKAAQALAAAGgIQAHgIgBgLQABgKgHgIQgGgIgLAAQgKAAgGAIg");
	this.shape_36.setTransform(-15.3,18.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAtAvIAAg5QAAgPgOAAQgMAAgHALIAAA9IgXAAIAAg5QAAgPgOAAQgLAAgIALIAAA9IgYAAIAAhbIAYAAIAAAMQAEgFAHgEQAKgFAJAAQATAAAFARQAFgHAIgFQAJgFAKAAQAbAAAAAbIAABCg");
	this.shape_37.setTransform(-28.85,18.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAvIAAhbIAYAAIAAANQAMgPARAAIAAAYIgHgBQgGAAgHADQgHADgCAFIAAA7g");
	this.shape_38.setTransform(-44.725,18.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgjAiQgMgOAAgUQAAgTAMgOQAOgOAVAAQAWAAAOAOQAMAOAAATQAAAUgMAOQgOAOgWAAQgVAAgOgOgAgRgSQgFAIgBAKQABALAFAIQAHAIAKAAQALAAAHgIQAFgIABgLQgBgKgFgIQgHgIgLAAQgKAAgHAIg");
	this.shape_39.setTransform(-54.05,18.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgTBAIAAhFIgPAAIAAgWIAPAAIAAgDQAAgQAJgJQAIgIANAAQAQAAAIAIIgJAPQgEgEgGAAQgMAAAAAOIAAADIATAAIAAAWIgTAAIAABFg");
	this.shape_40.setTransform(-61.975,16.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD4, new cjs.Rectangle(-139,0,285.4,57), null);


(lib.HEAD3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape.setTransform(122.575,43.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoAsQgSgRAAgbQAAgYARgSQARgSAZAAQAbAAAQASQAPASAAAbIAAAHIhVAAQACALAIAHQAJAIAOAAQASAAAMgMIAOAVQgRAQgfAAQgaAAgRgRgAAegKQgBgKgGgHQgIgIgOAAQgMAAgHAIQgHAHgBAKIA4AAIAAAAg");
	this.shape_1.setTransform(112.9,39.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghA7IAAhyIAfAAIAAAPQAOgTAWAAIAAAfIgJgCQgHABgJAEQgIADgDAGIAABLg");
	this.shape_2.setTransform(102.525,39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsArQgRgSAAgZQAAgYARgSQARgSAbAAQAcAAARASQARASAAAYQAAAZgRASQgRASgcAAQgbAAgRgSgAgVgWQgIAJABANQgBAOAIAJQAIALANgBQANABAJgLQAHgJAAgOQAAgNgHgJQgJgLgNABQgNgBgIALg");
	this.shape_3.setTransform(90.75,39.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA5A7IAAhIQAAgSgSAAQgOAAgKANIAABNIgdAAIAAhIQAAgSgSAAQgOAAgKANIAABNIgeAAIAAhyIAeAAIAAAOQAFgFAKgGQALgGAMgBQAZAAAGAWQAGgJAKgGQAMgGAMgBQAiABAAAiIAABTg");
	this.shape_4.setTransform(73.625,39);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBBQgPgQAAgdQAAgaAPgRQAOgRAXAAQAVABAOARIAAg6IAeAAIAACeIgeAAIAAgOQgPARgUABQgXgBgOgQgAgSgDQgJAIAAAPQAAAQAJAJQAIAJAMAAQAIAAAHgEQAHgDAFgGIAAgpQgFgFgHgDQgHgEgIAAQgMAAgIAJg");
	this.shape_5.setTransform(49.85,37.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYA7IAAhEQAAgWgWAAQgPAAgKANIAABNIgeAAIAAhyIAeAAIAAAOQAQgRAYgBQAlABABAkIAABRg");
	this.shape_6.setTransform(36.3,39);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoAzQgNgLAAgSQAAgSANgJQALgJAQAAQAYAAAMAOIAAgOQAAgJgHgGQgHgFgKAAQgTAAgPAOIgMgVQAUgTAeAAQAWAAANAKQAQALAAAXIAABKIgfAAIAAgMQgNAPgXAAQgPAAgMgKgAgQAKQgGAFAAAIQAAAIAGAEQAGAFAJAAQAQAAAIgKIAAgOQgIgLgQAAQgJABgGAEg");
	this.shape_7.setTransform(22.525,39.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyArIANgWQAHAGALAFQAMAFAKAAQATAAAAgNQAAgGgLgDIgXgFQgigIAAgZQAAgPANgLQANgLAUAAQAbAAAUAQIgMAWQgNgOgWAAQgHAAgFAEQgEACgBAGQAAAFALADIAXAFQAiAJAAAaQAAAQgNAKQgNALgYAAQgfAAgUgSg");
	this.shape_8.setTransform(4.4,39.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghA7IAAhyIAfAAIAAAPQAOgTAWAAIAAAfIgJgCQgHABgJAEQgIADgDAGIAABLg");
	this.shape_9.setTransform(-4.925,39);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoAsQgSgRAAgbQAAgYARgSQARgSAZAAQAbAAAPASQAQASAAAbIAAAHIhVAAQACALAIAHQAKAIAMAAQATAAAMgMIAOAVQgSAQgeAAQgaAAgRgRgAAegKQgBgKgGgHQgIgIgOAAQgMAAgIAIQgGAHgBAKIA4AAIAAAAg");
	this.shape_10.setTransform(-16.4,39.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrBBQgPgQAAgdQAAgaAPgRQAOgRAWAAQAWABANARIAAg6IAfAAIAACeIgfAAIAAgOQgOARgVABQgWgBgOgQgAgSgDQgJAIAAAPQAAAQAJAJQAIAJAMAAQAHAAAIgEQAHgDAEgGIAAgpQgEgFgHgDQgIgEgHAAQgMAAgIAJg");
	this.shape_11.setTransform(-30.45,37.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBSIAAhzIAdAAIAABzgAgMgyQgFgGAAgHQAAgIAFgFQAGgFAGAAQAIAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgIAAQgGAAgGgFg");
	this.shape_12.setTransform(-40.125,36.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPA6IgvhzIAgAAIAeBPIAehPIAhAAIguBzg");
	this.shape_13.setTransform(-49.3,39.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsArQgQgSAAgZQAAgYAQgSQARgSAbAAQAcAAARASQAQASABAYQgBAZgQASQgRASgcAAQgbAAgRgSgAgVgWQgIAJAAANQAAAOAIAJQAIALANgBQANABAJgLQAHgJAAgOQAAgNgHgJQgJgLgNABQgNgBgIALg");
	this.shape_14.setTransform(-62.35,39.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghA7IAAhyIAfAAIAAAPQAOgTAWAAIAAAfIgJgCQgHABgJAEQgIADgDAGIAABLg");
	this.shape_15.setTransform(-72.975,39);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag6BRIAAieIAfAAIAAAOQAOgRAVgBQAWABAOAPQAPARAAAcQAAAcgPAQQgOAQgWABQgVgBgOgRIAAA6gAgQgxQgHADgEAGIAAAoQAEAFAHAEQAIAEAGAAQANAAAIgJQAJgIAAgQQAAgPgJgJQgIgJgNAAQgGAAgIAEg");
	this.shape_16.setTransform(-84.4,41.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYBRIAAhYIgTAAIAAgbIATAAIAAgEQAAgUALgLQAKgLARAAQAUAAAKALIgMASQgEgEgIAAQgPAAAAARIAAAEIAYAAIAAAbIgYAAIAABYg");
	this.shape_17.setTransform(-101.05,36.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgsArQgRgSAAgZQAAgYARgSQARgSAbAAQAcAAARASQARASAAAYQAAAZgRASQgRASgcAAQgbAAgRgSgAgVgWQgIAJABANQgBAOAIAJQAIALANgBQANABAJgLQAHgJAAgOQAAgNgHgJQgJgLgNABQgNgBgIALg");
	this.shape_18.setTransform(-112.65,39.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASBQIgdgtIgOAPIAAAeIgfAAIAAifIAfAAIAABeIArgyIAlAAIguAzIAwBAg");
	this.shape_19.setTransform(80.575,12.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghA8IAAhzIAfAAIAAAPQAOgSAWAAIAAAeIgJgBQgHAAgJADQgIAFgDAFIAABMg");
	this.shape_20.setTransform(69.675,15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgsArQgQgRAAgaQAAgZAQgRQARgSAbAAQAcAAARASQARARAAAZQAAAagRARQgRASgcAAQgbAAgRgSgAgVgXQgIAKABANQgBAPAIAIQAIALANAAQANAAAJgLQAHgIAAgPQAAgNgHgKQgJgKgNAAQgNAAgIAKg");
	this.shape_21.setTransform(57.9,15.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAZA6IgZhOIgYBOIggAAIgjhzIAfAAIAWBNIAZhNIAaAAIAaBNIAWhNIAfAAIgjBzg");
	this.shape_22.setTransform(41.8,15.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSArIAAg7IgUAAIAAgbIAUAAIAAgfIAdAAIAAAfIAYAAIAAAbIgYAAIAAAzQAAANALAAQAHAAADgEIAHAYQgJAHgRAAQgfAAAAggg");
	this.shape_23.setTransform(28.525,13.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoAtQgSgRAAgcQAAgZARgRQARgSAZAAQAaAAARASQAPASAAAbIAAAHIhVAAQACALAIAHQAKAIANAAQATAAALgLIAOAUQgRAQgfAAQgaAAgRgQgAAegKQgBgKgGgGQgIgJgOAAQgMAAgHAIQgHAHgBAKIA4AAIAAAAg");
	this.shape_24.setTransform(17.85,15.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAYA8IAAhGQAAgVgVAAQgQAAgKANIAABOIgfAAIAAhzIAfAAIAAAPQAPgTAYABQAmAAAAAlIAABRg");
	this.shape_25.setTransform(4.3,15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgoAtQgSgRAAgcQAAgZARgRQARgSAZAAQAbAAAPASQAQASAAAbIAAAHIhVAAQACALAIAHQAKAIAMAAQAUAAALgLIAOAUQgSAQgeAAQgaAAgRgQgAAegKQgBgKgGgGQgIgJgOAAQgMAAgIAIQgGAHgBAKIA4AAIAAAAg");
	this.shape_26.setTransform(-15.4,15.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag0BCIANgWQANAOAXAAQANAAAIgGQAKgHAAgRIAAgLQgOASgVAAQgWAAgOgPQgPgQAAgbQAAgcAPgPQANgQAXAAQAWAAANASIAAgPIAfAAIAABrQAAAegVAOQgQALgZAAQgeAAgTgRgAgSguQgIAIAAAPQAAAPAIAIQAIAIAMAAQAIAAAHgDQAIgFADgEIAAglQgDgHgIgDQgHgDgIgBQgMAAgIAJg");
	this.shape_27.setTransform(-29.4,17.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AghA8IAAhzIAfAAIAAAPQAOgSAWAAIAAAeIgJgBQgHAAgJADQgIAFgDAFIAABMg");
	this.shape_28.setTransform(-39.775,15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgoA0QgNgLAAgTQAAgSANgKQALgIAQAAQAYAAAMAOIAAgPQAAgJgHgEQgHgGgKAAQgTAAgPAOIgMgWQAUgSAeAAQAWAAANAJQAQAMAAAXIAABKIgfAAIAAgMQgNAPgXAAQgPAAgMgJgAgQAKQgGAFAAAIQAAAIAGAFQAGAEAJAAQAQAAAIgKIAAgOQgIgLgQAAQgJAAgGAFg");
	this.shape_29.setTransform(-51.475,15.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOBQIAAifIAdAAIAACfg");
	this.shape_30.setTransform(-60.675,12.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAsBQIgKgbIhDAAIgLAbIgmAAIA+ifIAqAAIA9CfgAAZAXIgZhEIgYBEIAxAAg");
	this.shape_31.setTransform(-78.05,12.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3, new cjs.Rectangle(-139,0,278,52), null);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape.setTransform(107.925,43.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyArIAOgWQAGAGALAFQAMAFAJAAQAUAAAAgNQAAgGgLgDIgWgFQgjgIAAgZQAAgPAMgLQANgLAVAAQAbAAAUAQIgMAWQgNgOgWAAQgGAAgFAEQgGACAAAGQAAAFALADIAXAFQAiAJAAAaQAAAQgNAKQgOALgXAAQggAAgTgSg");
	this.shape_1.setTransform(99.05,39.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoAsQgSgRAAgbQAAgYARgSQARgSAZAAQAaAAAQASQAQASAAAbIAAAHIhVAAQACALAIAHQAKAIAMAAQAUAAALgMIAOAVQgRAQgfAAQgaAAgRgRgAAegKQgBgKgGgHQgIgIgOAAQgMAAgIAIQgGAHgBAKIA4AAIAAAAg");
	this.shape_2.setTransform(86.85,39.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBSIAAhzIAdAAIAABzgAgMgyQgFgGAAgHQAAgIAFgFQAGgFAGAAQAIAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgIAAQgGAAgGgFg");
	this.shape_3.setTransform(77.175,36.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA7IAAhyIAfAAIAAAPQAOgTAWAAIAAAfIgJgCQgHABgJAEQgIADgDAGIAABLg");
	this.shape_4.setTransform(70.425,39);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoAsQgSgRAAgbQAAgYARgSQARgSAZAAQAaAAAQASQAQASAAAbIAAAHIhVAAQACALAIAHQAKAIAMAAQAUAAALgMIAOAVQgRAQgfAAQgaAAgRgRgAAegKQgBgKgGgHQgIgIgOAAQgMAAgIAIQgGAHgBAKIA4AAIAAAAg");
	this.shape_5.setTransform(58.95,39.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjAsQgSgRAAgbQAAgaASgQQARgSAaAAQAeAAAQAVIgUATQgJgMgQAAQgNgBgIAKQgJAJAAAOQAAAPAJAJQAIAKANgBQAQAAAJgMIAUATQgQAVgeAAQgaAAgRgRg");
	this.shape_6.setTransform(46.475,39.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsArQgRgSAAgZQAAgYARgSQARgSAbAAQAcAAARASQAQASAAAYQAAAZgQASQgRASgcAAQgbAAgRgSgAgVgWQgHAJAAANQAAAOAHAJQAIALANgBQANABAJgLQAIgJgBgOQABgNgIgJQgJgLgNABQgNgBgIALg");
	this.shape_7.setTransform(33.45,39.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA7IAAhyIAfAAIAAAPQAOgTAWAAIAAAfIgJgCQgHABgJAEQgIADgDAGIAABLg");
	this.shape_8.setTransform(22.825,39);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BCIAOgWQANAOAXAAQAMAAAJgGQALgHgBgRIAAgLQgOASgVAAQgWAAgOgPQgPgQAAgbQAAgbAPgRQAOgPAWAAQAVAAAOASIAAgPIAfAAIAABrQAAAegVAOQgQALgZAAQgeAAgUgRgAgSguQgJAJAAAOQAAAPAJAIQAIAIAMAAQAIAAAHgEQAHgEAEgEIAAgmQgEgFgHgEQgHgEgIABQgMAAgIAIg");
	this.shape_9.setTransform(10.6,41.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghA7IAAhyIAfAAIAAAPQAOgTAWAAIAAAfIgJgCQgHABgJAEQgIADgDAGIAABLg");
	this.shape_10.setTransform(-5.925,39);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsArQgRgSAAgZQAAgYARgSQARgSAbAAQAcAAARASQARASAAAYQAAAZgRASQgRASgcAAQgbAAgRgSgAgVgWQgIAJABANQgBAOAIAJQAIALANgBQANABAJgLQAHgJAAgOQAAgNgHgJQgJgLgNABQgNgBgIALg");
	this.shape_11.setTransform(-17.7,39.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYBRIAAhYIgTAAIAAgbIATAAIAAgEQAAgUALgLQAKgLARAAQAUAAAKALIgMASQgEgEgIAAQgPAAAAARIAAAEIAYAAIAAAbIgYAAIAABYg");
	this.shape_12.setTransform(-27.7,36.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghA7IAAhyIAfAAIAAAPQAOgTAWAAIAAAfIgJgCQgHABgJAEQgIADgDAGIAABLg");
	this.shape_13.setTransform(-42.275,39);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoAzQgNgLAAgSQAAgSANgJQALgJAQAAQAYAAAMAOIAAgOQAAgJgHgGQgHgFgKAAQgTAAgPAOIgMgVQAUgTAeAAQAWAAANAKQAQALAAAXIAABKIgfAAIAAgMQgNAPgXAAQgPAAgMgKgAgQAKQgGAFAAAIQAAAIAGAEQAGAFAJAAQAQAAAIgKIAAgOQgIgLgQAAQgJABgGAEg");
	this.shape_14.setTransform(-53.975,39.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoAsQgSgRAAgbQAAgYARgSQARgSAZAAQAaAAARASQAPASAAAbIAAAHIhVAAQACALAIAHQAKAIANAAQATAAALgMIAOAVQgRAQgfAAQgaAAgRgRgAAegKQgBgKgGgHQgIgIgOAAQgMAAgHAIQgHAHgBAKIA4AAIAAAAg");
	this.shape_15.setTransform(-66.75,39.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxBPIAEgbQAEADAGAAQAMAAAEgJIAEgKIgvh0IAgAAIAeBQIAehQIAhAAIg2CGQgHAPgKAGQgKAGgQABQgKAAgFgDg");
	this.shape_16.setTransform(-79.55,41.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoAzQgNgLAAgSQAAgSANgJQALgJAQAAQAYAAAMAOIAAgOQAAgJgHgGQgHgFgKAAQgTAAgPAOIgMgVQAUgTAeAAQAWAAANAKQAQALAAAXIAABKIgfAAIAAgMQgNAPgXAAQgPAAgMgKgAgQAKQgGAFAAAIQAAAIAGAEQAGAFAJAAQAQAAAIgKIAAgOQgIgLgQAAQgJABgGAEg");
	this.shape_17.setTransform(-98.675,39.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgxA5QgQgXAAgiQAAghAQgXQASgaAfAAQAgAAASAaQAQAXAAAhQAAAigQAXQgSAaggAAQgfAAgSgagAgeAAQAAA0AeAAQAgAAAAg0QAAgzggAAQgeAAAAAzg");
	this.shape_18.setTransform(96.675,12.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgsBIQgTgNAAgVQAAgOAKgLQAJgKAPgFQgggLAAgaQAAgWAUgLQARgKAYAAQAZAAARAKQAUALAAAWQAAAaggALQAPAFAJAKQAKALAAAOQAAAVgTANQgSALgbAAQgaAAgSgLgAgSATQgLAGAAAIQAAAJAJAFQAIAFAMAAQANAAAIgFQAJgFAAgJQAAgIgLgGQgJgFgKgBQgJABgJAFgAgTgvQgHAFAAAIQAAAOAaAFQAbgFAAgOQAAgIgIgFQgHgEgMAAQgLAAgIAEg");
	this.shape_19.setTransform(82.025,12.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag+A5IATgXQARARAZAAQAOAAAHgHQAIgGAAgLQABgLgIgGQgIgHgNAAQgTAAgOAOIgXgHIAAhbIBsAAIAAAeIhKAAIAAAoQANgOAUAAQAWAAAOAOQAQAOAAAXQAAAZgSAPQgRAQgcgBQgoAAgWgYg");
	this.shape_20.setTransform(67.65,13.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAXQAGgDAGgGQAFgHABgGIgEABQgHgBgEgDQgFgFAAgHQAAgJAFgFQAGgGAHABQAJAAAFAFQAHAIAAALQAAAagYARg");
	this.shape_21.setTransform(57.25,20.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAGBQIAAhzIgaAbIgTgVIAxgyIAeAAIAACfg");
	this.shape_22.setTransform(48.525,12.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIBoIAAgVQgjgDgWgWIATgbQAPARAXAEIAAglQgYgGgLgJQgRgLAAgWQAAgSAOgNQAOgOAYgDIAAgWIAVAAIAAAXQAeADATASIgTAaQgMgMgSgEIAAAhQAZAGALAIQARAMAAAWQAAAUgNAOQgOAOgaADIAAAVgAANA0QASgDAAgOQAAgJgSgGgAgZgjQAAAIARAFIAAgcQgRACAAANg");
	this.shape_23.setTransform(36.875,12.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSArIAAg7IgUAAIAAgbIAUAAIAAgfIAdAAIAAAfIAYAAIAAAbIgYAAIAAAzQAAANALAAQAHAAADgEIAHAYQgJAHgRAAQgfAAAAggg");
	this.shape_24.setTransform(19.375,13.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgoAtQgSgRAAgcQAAgZARgRQARgSAZAAQAbAAAQASQAPASAAAbIAAAHIhVAAQACALAIAHQAJAIAOAAQASAAAMgLIAOAUQgSAQgeAAQgaAAgRgQgAAegKQgBgKgGgGQgIgJgOAAQgMAAgHAIQgHAHgBAKIA4AAIAAAAg");
	this.shape_25.setTransform(8.7,15.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag0BCIANgWQANAOAXAAQAMAAAJgGQALgHAAgRIAAgLQgPASgUAAQgXAAgOgPQgPgQAAgbQAAgcAPgPQANgQAYAAQAUAAAPASIAAgPIAeAAIAABrQAAAegVAOQgQALgZAAQgeAAgTgRgAgSguQgJAIABAPQgBAPAJAIQAIAIAMAAQAHAAAIgDQAHgFAFgEIAAglQgFgHgHgDQgIgDgHgBQgMAAgIAJg");
	this.shape_26.setTransform(-5.3,17.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAYA8IAAhGQAAgVgWAAQgPAAgKANIAABOIgeAAIAAhzIAeAAIAAAPQAQgTAYABQAlAAABAlIAABRg");
	this.shape_27.setTransform(-25,15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgoA0QgNgLAAgTQAAgSANgKQALgIAQAAQAYAAAMAOIAAgPQAAgJgHgEQgHgGgKAAQgTAAgPAOIgMgWQAUgSAeAAQAWAAANAJQAQAMAAAXIAABKIgfAAIAAgMQgNAPgXAAQgPAAgMgJgAgQAKQgGAFAAAIQAAAIAGAFQAGAEAJAAQAQAAAIgKIAAgOQgIgLgQAAQgJAAgGAFg");
	this.shape_28.setTransform(-38.775,15.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgjAsQgSgSAAgaQAAgaASgQQARgSAaAAQAeAAAQAVIgUATQgJgNgQAAQgNAAgIAJQgJAKAAAOQAAAPAJAKQAIAIANABQAQAAAJgNIAUASQgQAWgeAAQgaAAgRgRg");
	this.shape_29.setTransform(-50.775,15.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag2AXIAAhRIAfAAIAABFQAAAVAVAAQAQAAAKgNIAAhNIAeAAIAABzIgeAAIAAgPQgQARgYAAQgmAAAAgkg");
	this.shape_30.setTransform(-69.95,15.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgsArQgQgRAAgaQAAgZAQgRQARgSAbAAQAcAAARASQAQARAAAZQAAAagQARQgRASgcAAQgbAAgRgSgAgVgXQgHAKgBANQABAPAHAIQAIALANAAQAOAAAIgLQAIgIAAgPQAAgNgIgKQgIgKgOAAQgNAAgIAKg");
	this.shape_31.setTransform(-83.8,15.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQBQIAAhCIg9hdIAnAAIAmBAIAohAIAmAAIg9BdIAABCg");
	this.shape_32.setTransform(-96.425,12.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-139,0,278,52), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBNQgFgGAAgIQAAgIAFgFQAGgGAHAAQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAGgIgBQgHABgGgGgAgRAJQAAgOARgNIALgJQAGgFAAgFQAAgOgSAAQgRAAgNAPIgTgWQAUgYAfABQAXAAAOAKQANAKAAARQAAAUgUAPIgNAJQgHAHAAAHQAAAFAFAFIgZAHQgIgJAAgNg");
	this.shape.setTransform(110.825,36.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoAsQgSgRAAgbQAAgYARgSQARgSAZAAQAbAAAPASQAQASAAAbIAAAHIhVAAQACALAIAHQAKAIAMAAQAUAAALgMIAOAVQgSAQgeAAQgaAAgRgRgAAegKQgBgKgGgHQgIgIgOAAQgMAAgIAIQgGAHgBAKIA4AAIAAAAg");
	this.shape_1.setTransform(98.9,39.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghA7IAAhyIAfAAIAAAPQAOgTAWAAIAAAfIgJgCQgHABgJAEQgIADgDAGIAABLg");
	this.shape_2.setTransform(88.525,39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAzQgNgLAAgSQAAgSANgJQALgJAQAAQAYAAAMAOIAAgOQAAgJgHgGQgHgFgKAAQgTAAgPAOIgMgVQAUgTAeAAQAWAAANAKQAQALAAAXIAABKIgfAAIAAgMQgNAPgXAAQgPAAgMgKgAgQAKQgGAFAAAIQAAAIAGAEQAGAFAJAAQAQAAAIgKIAAgOQgIgLgQAAQgJABgGAEg");
	this.shape_3.setTransform(76.825,39.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjAsQgSgRAAgbQAAgaASgQQARgSAaAAQAeAAAQAVIgUATQgJgMgQAAQgNgBgIAKQgJAJAAAOQAAAPAJAJQAIAKANgBQAQAAAJgMIAUATQgQAVgeAAQgaAAgRgRg");
	this.shape_4.setTransform(64.825,39.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBSIAAhzIAdAAIAABzgAgMgyQgFgGAAgHQAAgIAFgFQAGgFAGAAQAIAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgIAAQgGAAgGgFg");
	this.shape_5.setTransform(55.675,36.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrBBQgPgQAAgdQAAgaAPgRQAOgRAWAAQAWABANARIAAg6IAfAAIAACeIgfAAIAAgOQgOARgVABQgWgBgOgQgAgSgDQgJAIAAAPQAAAQAJAJQAIAJAMAAQAIAAAHgEQAHgDAEgGIAAgpQgEgFgHgDQgHgEgIAAQgMAAgIAJg");
	this.shape_6.setTransform(45.25,37.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoAsQgSgRAAgbQAAgYARgSQARgSAZAAQAbAAAQASQAPASAAAbIAAAHIhVAAQACALAIAHQAJAIAOAAQASAAAMgMIAOAVQgSAQgeAAQgaAAgRgRgAAegKQgBgKgGgHQgIgIgOAAQgMAAgHAIQgHAHgBAKIA4AAIAAAAg");
	this.shape_7.setTransform(32,39.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA0BQIAAhzIgtBzIgOAAIgthzIAABzIgiAAIAAifIAwAAIAmBjIAnhjIAwAAIAACfg");
	this.shape_8.setTransform(15.125,36.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghA7IAAhyIAfAAIAAAPQAOgTAWAAIAAAfIgJgCQgHABgJAEQgIADgDAGIAABLg");
	this.shape_9.setTransform(-5.025,39);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsArQgRgSAAgZQAAgYARgSQARgSAbAAQAcAAARASQARASAAAYQAAAZgRASQgRASgcAAQgbAAgRgSgAgVgWQgIAJABANQgBAOAIAJQAIALANgBQANABAJgLQAHgJAAgOQAAgNgHgJQgJgLgNABQgNgBgIALg");
	this.shape_10.setTransform(-16.8,39.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYBRIAAhYIgTAAIAAgbIATAAIAAgEQAAgUALgLQAKgLARAAQAUAAAKALIgMASQgEgEgIAAQgPAAAAARIAAAEIAYAAIAAAbIgYAAIAABYg");
	this.shape_11.setTransform(-26.8,36.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoAsQgSgRAAgbQAAgYARgSQARgSAZAAQAaAAARASQAPASAAAbIAAAHIhVAAQACALAIAHQAKAIANAAQATAAALgMIAOAVQgRAQgfAAQgaAAgRgRgAAegKQgBgKgGgHQgIgIgOAAQgMAAgHAIQgHAHgBAKIA4AAIAAAAg");
	this.shape_12.setTransform(-44.25,39.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOBQIAAifIAdAAIAACfg");
	this.shape_13.setTransform(-53.925,36.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbBAIAAAOIgfAAIAAieIAfAAIAAA6QANgRAWgBQAWAAAOARQAPARAAAaQAAAdgPAQQgOAQgWABQgVgBgOgRgAgQgIQgHAEgEAEIAAApQAEAGAHADQAIAEAHAAQAMAAAIgJQAJgJAAgQQAAgPgJgIQgIgJgMAAQgHAAgIAEg");
	this.shape_14.setTransform(-63.6,37.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBSIAAhzIAdAAIAABzgAgMgyQgFgGAAgHQAAgIAFgFQAGgFAGAAQAIAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgIAAQgGAAgGgFg");
	this.shape_15.setTransform(-74.025,36.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0BCIANgWQANAOAXAAQANAAAIgGQALgHAAgRIAAgLQgPASgUAAQgXAAgOgPQgPgQAAgbQAAgbAPgRQANgPAYAAQAVAAAOASIAAgPIAeAAIAABrQAAAegVAOQgQALgZAAQgeAAgTgRgAgSguQgJAJABAOQgBAPAJAIQAIAIAMAAQAIAAAHgEQAIgEAEgEIAAgmQgEgFgIgEQgHgEgIABQgMAAgIAIg");
	this.shape_16.setTransform(-84.4,41.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOBSIAAhzIAdAAIAABzgAgMgyQgFgGAAgHQAAgIAFgFQAGgFAGAAQAIAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgIAAQgGAAgGgFg");
	this.shape_17.setTransform(-94.075,36.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOBQIAAifIAdAAIAACfg");
	this.shape_18.setTransform(-100.125,36.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoAsQgSgRAAgbQAAgYARgSQARgSAZAAQAbAAAQASQAPASAAAbIAAAHIhVAAQACALAIAHQAJAIAOAAQASAAAMgMIAOAVQgSAQgeAAQgaAAgRgRgAAegKQgBgKgGgHQgIgIgOAAQgMAAgHAIQgHAHgBAKIA4AAIAAAAg");
	this.shape_19.setTransform(-109.75,39.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgrBBQgPgQAAgdQAAgbAPgQQAOgQAXAAQAVgBAOATIAAg8IAeAAIAACgIgeAAIAAgQQgPASgUAAQgXABgOgRgAgSgDQgJAJABAOQgBAPAJAKQAIAJAMAAQAIAAAHgDQAIgEAEgGIAAgpQgEgFgIgEQgHgDgIAAQgMAAgIAJg");
	this.shape_20.setTransform(103.7,13.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAYA8IAAhGQAAgVgWAAQgOAAgLANIAABOIgfAAIAAhzIAfAAIAAAPQAPgTAYABQAnAAgBAlIAABRg");
	this.shape_21.setTransform(90.15,15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoA0QgNgLAAgTQAAgSANgKQALgIAQAAQAYAAAMAOIAAgPQAAgJgHgEQgHgGgKAAQgTAAgPAOIgMgWQAUgSAeAAQAWAAANAJQAQAMAAAXIAABKIgfAAIAAgMQgNAPgXAAQgPAAgMgJgAgQAKQgGAFAAAIQAAAIAGAFQAGAEAJAAQAQAAAIgKIAAgOQgIgLgQAAQgJAAgGAFg");
	this.shape_22.setTransform(76.375,15.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag/BQIAAifIBJAAQAaAAAOAPQAOAPAAAVQAAAXgOAMQgPAQgZAAIgnAAIAAA5gAgdgGIAjAAQAKAAAHgGQAGgGAAgKQAAgKgGgGQgHgFgKAAIgjAAg");
	this.shape_23.setTransform(57.075,12.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAlBQIAAhDIhKAAIAABDIgiAAIAAifIAiAAIAAA/IBKAAIAAg/IAjAAIAACfg");
	this.shape_24.setTransform(40.35,12.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag7A7QgYgXAAgkQAAgjAYgXQAYgYAjAAQAkAAAYAYQAYAXAAAjQAAAkgYAXQgYAYgkAAQgjAAgYgYgAgiglQgOAPAAAWQAAAXAOAPQANAPAVgBQAWABAOgPQANgPAAgXQAAgWgNgPQgOgOgWAAQgVAAgNAOg");
	this.shape_25.setTransform(22.375,12.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAYA8IAAhGQAAgVgWAAQgOAAgLANIAABOIgfAAIAAhzIAfAAIAAAPQAPgTAYABQAnAAgBAlIAABRg");
	this.shape_26.setTransform(0.15,15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgsArQgQgRgBgaQABgZAQgRQARgSAbAAQAcAAARASQAQARAAAZQAAAagQARQgRASgcAAQgbAAgRgSgAgVgXQgHAKgBANQABAPAHAIQAIALANAAQAOAAAIgLQAIgIAAgPQAAgNgIgKQgIgKgOAAQgNAAgIAKg");
	this.shape_27.setTransform(-13.7,15.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag1AXIAAhRIAeAAIAABFQAAAVAVAAQAQAAAKgNIAAhNIAfAAIAABzIgfAAIAAgPQgQARgYAAQgmAAABgkg");
	this.shape_28.setTransform(-33.65,15.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgsArQgQgRAAgaQAAgZAQgRQARgSAbAAQAcAAARASQAQARABAZQgBAagQARQgRASgcAAQgbAAgRgSgAgVgXQgIAKAAANQAAAPAIAIQAIALANAAQANAAAJgLQAHgIAAgPQAAgNgHgKQgJgKgNAAQgNAAgIAKg");
	this.shape_29.setTransform(-47.5,15.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgxBQIAEgbQAEABAGAAQAMAAAEgIIAEgKIgvh0IAgAAIAeBQIAehQIAhAAIg2CGQgHAPgKAGQgKAGgQAAQgKAAgFgBg");
	this.shape_30.setTransform(-60.55,17.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgoAtQgSgRAAgcQAAgZARgRQARgSAZAAQAaAAARASQAPASAAAbIAAAHIhVAAQACALAIAHQAJAIANAAQATAAAMgLIAOAUQgRAQgfAAQgaAAgRgQgAAegKQgBgKgGgGQgIgJgOAAQgMAAgHAIQgHAHgBAKIA4AAIAAAAg");
	this.shape_31.setTransform(-79.45,15.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AghA8IAAhzIAfAAIAAAPQAOgSAWAAIAAAeIgJgBQgHAAgJADQgIAFgDAFIAABMg");
	this.shape_32.setTransform(-89.825,15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAsBQIgKgbIhDAAIgLAbIgmAAIA+ifIAqAAIA9CfgAAZAXIgZhEIgYBEIAxAAg");
	this.shape_33.setTransform(-102.9,12.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-139,0,278,52), null);


(lib.EndScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E41C70").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape.setTransform(117.375,-36.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41C70").s().p("AgxBQIAEgbQAFACAEAAQANAAAEgJIAEgKIgvh0IAhAAIAdBQIAfhQIAgAAIg3CGQgFAPgLAGQgKAGgRABQgIAAgGgCg");
	this.shape_1.setTransform(108.15,-38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E41C70").s().p("AgYBRIAAhYIgTAAIAAgbIATAAIAAgEQAAgUALgLQALgLAQAAQAVAAAJALIgLASQgFgEgIAAQgPAAAAARIAAAEIAYAAIAAAbIgYAAIAABYg");
	this.shape_2.setTransform(98.9,-43.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E41C70").s().p("AgOBSIAAhzIAdAAIAABzgAgMgyQgFgGAAgHQAAgIAFgFQAGgFAGAAQAIAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgIAAQgGAAgGgFg");
	this.shape_3.setTransform(91.175,-43.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E41C70").s().p("AgOBQIAAifIAdAAIAACfg");
	this.shape_4.setTransform(85.125,-43.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E41C70").s().p("AgoAzQgNgKAAgTQAAgSANgJQALgJAQAAQAYAAAMAOIAAgOQAAgJgHgGQgHgFgKAAQgTAAgPAOIgMgVQAUgTAeAAQAWAAANAKQAQALAAAXIAABKIgfAAIAAgMQgNAPgXAAQgPAAgMgKgAgQAKQgGAFAAAIQAAAIAGAFQAGAEAJAAQAQAAAIgKIAAgOQgIgLgQAAQgJABgGAEg");
	this.shape_5.setTransform(75.275,-40.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E41C70").s().p("Ag1AXIAAhRIAeAAIAABFQAAAVAVAAQAQAAAKgNIAAhNIAfAAIAABzIgfAAIAAgPQgQASgYAAQgmAAABglg");
	this.shape_6.setTransform(62.2,-40.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E41C70").s().p("AAcBRIAAg6QgOARgVABQgWgBgOgQQgPgQAAgcQAAgcAPgRQAOgQAWAAQAVAAAOASIAAgOIAfAAIAACegAgSgsQgIAKAAAOQAAAQAIAIQAIAJAMAAQAHAAAIgEQAHgEAEgFIAAgoQgEgGgHgDQgIgEgHAAQgMAAgIAJg");
	this.shape_7.setTransform(47.925,-38.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E41C70").s().p("Ag2AXIAAhRIAfAAIAABFQAAAVAVAAQAPAAALgNIAAhNIAeAAIAABzIgeAAIAAgPQgQASgYAAQgmAAAAglg");
	this.shape_8.setTransform(28.25,-40.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E41C70").s().p("AgsArQgQgRAAgaQAAgYAQgSQARgSAbAAQAcAAARASQAQASAAAYQAAAagQARQgRASgcAAQgbAAgRgSgAgVgXQgIAKAAANQAAAPAIAIQAIAKANAAQAOAAAIgKQAIgIAAgPQAAgNgIgKQgIgKgOABQgNgBgIAKg");
	this.shape_9.setTransform(14.4,-40.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E41C70").s().p("AgxBQIAEgbQAEACAFAAQANAAAEgJIAEgKIgvh0IAgAAIAeBQIAfhQIAgAAIg3CGQgFAPgLAGQgKAGgQABQgJAAgGgCg");
	this.shape_10.setTransform(1.35,-38.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E41C70").s().p("AgYBRIAAhYIgTAAIAAgbIATAAIAAgEQAAgUALgLQAKgLARAAQAVAAAJALIgMASQgEgEgIAAQgPAAAAARIAAAEIAYAAIAAAbIgYAAIAABYg");
	this.shape_11.setTransform(-14.05,-43.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E41C70").s().p("AgOBSIAAhzIAdAAIAABzgAgMgyQgFgGAAgHQAAgIAFgFQAGgFAGAAQAIAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgIAAQgGAAgGgFg");
	this.shape_12.setTransform(-21.775,-43.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E41C70").s().p("AgSArIAAg7IgUAAIAAgbIAUAAIAAgfIAdAAIAAAfIAYAAIAAAbIgYAAIAAAzQAAANALAAQAHAAADgEIAHAYQgJAHgRAAQgfAAAAggg");
	this.shape_13.setTransform(-34.975,-42.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E41C70").s().p("Ag1AXIAAhRIAeAAIAABFQAAAVAWAAQAOAAALgNIAAhNIAeAAIAABzIgeAAIAAgPQgQASgYAAQglAAAAglg");
	this.shape_14.setTransform(-45.95,-40.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E41C70").s().p("AgsArQgRgRAAgaQAAgYARgSQARgSAbAAQAcAAARASQARASAAAYQAAAagRARQgRASgcAAQgbAAgRgSgAgVgXQgHAKAAANQAAAPAHAIQAIAKANAAQANAAAJgKQAIgIgBgPQABgNgIgKQgJgKgNABQgNgBgIAKg");
	this.shape_15.setTransform(-59.8,-40.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E41C70").s().p("AgrBBQgPgQAAgdQAAgbAPgQQAOgRAWAAQAWAAANASIAAg6IAfAAIAACfIgfAAIAAgPQgOARgVABQgWgBgOgQgAgSgDQgIAJAAAOQAAAQAIAJQAIAJAMAAQAIAAAHgEQAIgDADgGIAAgpQgDgFgIgDQgHgEgIAAQgMAAgIAJg");
	this.shape_16.setTransform(-80.25,-42.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E41C70").s().p("AAYA8IAAhFQAAgWgVAAQgQAAgKANIAABOIgfAAIAAhzIAfAAIAAAOQAPgSAYAAQAmABAAAkIAABSg");
	this.shape_17.setTransform(-93.8,-41);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E41C70").s().p("AgOBSIAAhzIAdAAIAABzgAgMgyQgFgGAAgHQAAgIAFgFQAGgFAGAAQAIAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgIAAQgGAAgGgFg");
	this.shape_18.setTransform(-103.775,-43.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E41C70").s().p("Ag3BQIAAifIBvAAIAAAeIhNAAIAAAhIBMAAIAAAeIhMAAIAABCg");
	this.shape_19.setTransform(-113.25,-43.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3 copy
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgoAtQgSgSAAgbQAAgYARgSQARgSAZAAQAbAAAPASQAQASAAAbIAAAHIhVAAQACALAIAHQAJAIAOAAQASAAAMgMIAOAVQgSAQgeAAQgaAAgRgQgAAegKQgBgKgGgGQgIgJgOAAQgMAAgHAIQgHAHgBAKIA4AAIAAAAg");
	this.shape_20.setTransform(107.7,114.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghA8IAAhzIAfAAIAAAPQAOgSAWgBIAAAfIgJgBQgHAAgJADQgIAEgDAGIAABMg");
	this.shape_21.setTransform(97.325,114.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgsArQgRgRAAgaQAAgYARgSQARgSAbAAQAcAAARASQARASAAAYQAAAagRARQgRASgcAAQgbAAgRgSgAgVgWQgHAJAAANQAAAPAHAIQAIAKANAAQANAAAJgKQAIgIgBgPQABgNgIgJQgJgLgNABQgNgBgIALg");
	this.shape_22.setTransform(85.55,114.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AA5A8IAAhJQAAgSgSAAQgOAAgKANIAABOIgdAAIAAhJQAAgSgSAAQgOAAgKANIAABOIgeAAIAAhzIAeAAIAAAOQAFgFAKgGQALgHAMAAQAZAAAGAWQAGgJAKgGQAMgHAMAAQAiABAAAiIAABUg");
	this.shape_23.setTransform(68.425,114.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAYA8IAAhFQAAgWgWAAQgOAAgLANIAABOIgfAAIAAhzIAfAAIAAAOQAPgSAYAAQAnABgBAkIAABSg");
	this.shape_24.setTransform(45.15,114.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghA8IAAhzIAfAAIAAAPQAOgSAWgBIAAAfIgJgBQgHAAgJADQgIAEgDAGIAABMg");
	this.shape_25.setTransform(34.475,114.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgoAzQgNgKAAgTQAAgSANgJQALgJAQAAQAYAAAMAOIAAgOQAAgJgHgGQgHgFgKAAQgTAAgPAOIgMgVQAUgTAeAAQAWAAANAKQAQALAAAXIAABKIgfAAIAAgMQgNAPgXAAQgPAAgMgKgAgQAKQgGAFAAAIQAAAIAGAFQAGAEAJAAQAQAAAIgKIAAgOQgIgLgQAAQgJABgGAEg");
	this.shape_26.setTransform(22.775,114.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgoAtQgSgSAAgbQAAgYARgSQARgSAZAAQAaAAAQASQAQASAAAbIAAAHIhVAAQACALAIAHQAJAIANAAQAUAAALgMIAOAVQgSAQgeAAQgaAAgRgQgAAegKQgBgKgGgGQgIgJgOAAQgMAAgIAIQgGAHgBAKIA4AAIAAAAg");
	this.shape_27.setTransform(10,114.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgOBQIAAifIAdAAIAACfg");
	this.shape_28.setTransform(0.325,112.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgsArQgQgRAAgaQAAgYAQgSQARgSAbAAQAcAAARASQAQASAAAYQAAAagQARQgRASgcAAQgbAAgRgSgAgVgWQgIAJAAANQAAAPAIAIQAIAKANAAQAOAAAIgKQAIgIAAgPQAAgNgIgJQgIgLgOABQgNgBgIALg");
	this.shape_29.setTransform(-15.75,114.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSArIAAg7IgUAAIAAgbIAUAAIAAgfIAdAAIAAAfIAYAAIAAAbIgYAAIAAAzQAAANALAAQAHAAADgEIAHAYQgJAHgRAAQgfAAAAggg");
	this.shape_30.setTransform(-26.675,113.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AASBQIgdgtIgOAPIAAAeIgfAAIAAifIAfAAIAABfIArgzIAlAAIguAzIAwBAg");
	this.shape_31.setTransform(-42.575,112.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgjAsQgSgRAAgbQAAgaASgQQARgSAaAAQAeAAAQAVIgUATQgJgMgQAAQgNgBgIAKQgJAJAAAOQAAAPAJAJQAIAJANAAQAQAAAJgMIAUASQgQAWgeAAQgaAAgRgRg");
	this.shape_32.setTransform(-55.575,114.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgOBSIAAhzIAdAAIAABzgAgMgyQgFgGAAgHQAAgIAFgFQAGgFAGAAQAIAAAFAFQAFAFAAAIQAAAHgFAGQgFAFgIAAQgGAAgGgFg");
	this.shape_33.setTransform(-64.725,112.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgOBQIAAifIAdAAIAACfg");
	this.shape_34.setTransform(-70.775,112.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgjAsQgSgRAAgbQAAgaASgQQARgSAaAAQAeAAAQAVIgUATQgJgMgQAAQgNgBgIAKQgJAJAAAOQAAAPAJAJQAIAJANAAQAQAAAJgMIAUASQgQAWgeAAQgaAAgRgRg");
	this.shape_35.setTransform(-79.625,114.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AghA8IAAhzIAfAAIAAAPQAOgSAWgBIAAAfIgJgBQgHAAgJADQgIAEgDAGIAABMg");
	this.shape_36.setTransform(-95.625,114.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgsArQgRgRAAgaQAAgYARgSQARgSAbAAQAcAAARASQAQASAAAYQAAAagQARQgRASgcAAQgbAAgRgSgAgVgWQgHAJAAANQAAAPAHAIQAIAKANAAQANAAAJgKQAIgIgBgPQABgNgIgJQgJgLgNABQgNgBgIALg");
	this.shape_37.setTransform(-107.4,114.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E41C70").s().p("AhLBVQgXgiAAgzQAAgyAXgjQAcgmAvAAQAwAAAbAmQAYAjAAAyQAAAzgYAiQgbAngwAAQgvAAgcgngAguAAQAABPAuAAQAvAAAAhPQAAhOgvAAQguAAAABOg");
	this.shape_38.setTransform(109.725,82.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E41C70").s().p("AhLBVQgXgiAAgzQAAgyAXgjQAcgmAvAAQAwAAAbAmQAYAjAAAyQAAAzgYAiQgbAngwAAQgvAAgcgngAguAAQAABPAuAAQAvAAAAhPQAAhOgvAAQguAAAABOg");
	this.shape_39.setTransform(87.425,82.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E41C70").s().p("AhLBVQgXgiAAgzQAAgyAXgjQAcgmAvAAQAwAAAbAmQAYAjAAAyQAAAzgYAiQgbAngwAAQgvAAgcgngAguAAQAABPAuAAQAvAAAAhPQAAhOgvAAQguAAAABOg");
	this.shape_40.setTransform(65.125,82.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E41C70").s().p("AhLBVQgXgiAAgzQAAgyAXgjQAcgmAvAAQAwAAAbAmQAYAjAAAyQAAAzgYAiQgbAngwAAQgvAAgcgngAguAAQAABPAuAAQAvAAAAhPQAAhOgvAAQguAAAABOg");
	this.shape_41.setTransform(42.825,82.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E41C70").s().p("AgqATIAAglIBVAAIAAAlg");
	this.shape_42.setTransform(26.225,85.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E41C70").s().p("AhLBVQgXgiAAgzQAAgyAXgjQAcgmAvAAQAwAAAbAmQAYAjAAAyQAAAzgYAiQgbAngwAAQgvAAgcgngAguAAQAABPAuAAQAvAAAAhPQAAhOgvAAQguAAAABOg");
	this.shape_43.setTransform(9.725,82.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E41C70").s().p("AhLBVQgXgiAAgzQAAgyAXgjQAcgmAvAAQAwAAAbAmQAYAjAAAyQAAAzgYAiQgbAngwAAQgvAAgcgngAguAAQAABPAuAAQAvAAAAhPQAAhOgvAAQguAAAABOg");
	this.shape_44.setTransform(-12.575,82.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E41C70").s().p("AhLBVQgXgiAAgzQAAgyAXgjQAcgmAvAAQAwAAAbAmQAYAjAAAyQAAAzgYAiQgbAngwAAQgvAAgcgngAguAAQAABPAuAAQAvAAAAhPQAAhOgvAAQguAAAABOg");
	this.shape_45.setTransform(-34.875,82.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E41C70").s().p("AgqATIAAglIBVAAIAAAlg");
	this.shape_46.setTransform(-51.475,85.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E41C70").s().p("AheBVIAcgiQAZAcAoAAQAVAAAMgJQAMgJAAgNQAAgcgwAAIgdABIAAgtIAdAAQAsAAAAgaQAAgNgNgHQgMgIgTAAQgjAAgaAZIgZggQAigmA5AAQAqAAAYARQAYASAAAeQAAAVgQAQQgPAOgVADQAVADAQANQATAQAAAZQAAAggaATQgaAUgrAAQg+AAgggng");
	this.shape_47.setTransform(-67.775,82.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E41C70").s().p("AheBVIAcgiQAZAcAoAAQAVAAAMgJQAMgJAAgNQAAgcgwAAIgdABIAAgtIAdAAQAsAAAAgaQAAgNgNgHQgMgIgTAAQgjAAgaAZIgZggQAigmA5AAQAqAAAYARQAYASAAAeQAAAVgQAQQgPAOgVADQAVADAQANQATAQAAAZQAAAggaATQgaAUgrAAQg+AAgggng");
	this.shape_48.setTransform(-88.875,82.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E41C70").s().p("AhCBrQgdgSgBggQABgVAPgQQAOgQAWgIQgvgQAAgoQAAggAdgQQAagPAkAAQAlAAAaAPQAeAQgBAgQABAngwARQAXAIAOAQQAPAQAAAVQAAAggeASQgbARgoAAQgoAAgagRgAgbAcQgQAJAAANQgBAMANAJQANAHASABQATgBAMgHQANgJABgMQAAgNgRgJQgMgHgQgCQgPACgMAHgAgchHQgMAIAAAMQAAAVAoAGQAogGAAgVQAAgMgLgIQgLgHgSAAQgRAAgLAHg");
	this.shape_49.setTransform(-109.95,82.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// phone icon
	this.instance = new lib.PhoneIcon2x();
	this.instance.setTransform(-42,-21,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("A3bPZIAA+xMAu3AAAIAAexg");
	this.shape_50.setTransform(0,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EndScreen, new cjs.Rectangle(-150,-65,300,197), null);


(lib.coahreveps = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// coa-h-rev.eps
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqAsQgTgRAAgbQAAgZATgSQASgSAYAAQAaABASASQASARgBAZQAAAagRASQgSARgaAAQgYAAgSgRgAgngmQgQAPAAAXQAAAXAQARQARAQAWAAQAXAAARgQQAQgQAAgYQAAgWgQgQQgQgRgYAAQgXAAgQARgAAPAmIgFgWQgCgIgEgCQgDgCgHAAIgFAAIAAAiIgOAAIAAhMIAZAAQAMAAAFABQANAFAAANQAAAPgQAEQAFABACAEQADADABAIQADAQADAGgAgLgHIALAAQAQAAAAgKQAAgHgGgDQgCgBgKABIgJAAg");
	this.shape.setTransform(361.0507,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACIJCQgIgCgLABIgTACQAAgCgIgCIgLgBQgOABgGgCQAAgCgPABIgdgBQgKgCgGAAIgPgBIgPgCIgNABQgOABAAgDIgMgDQgHgDAAAGQgCAAgEgCQgEgDgDAAQAAAEgHAAIgLgDQgLgBgIABQgNABgVgIIgHgDQgDgCgEABQgCABgMgJIgKABIgKAAIgKACQgDAAgDgEQgDgEgCAAIAAAEQgDAAgEgCQgFgDAAgDIgCAFQAAgCgHgDQgGgCgFAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBAAQgCABgEgDQgEgDgDABQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIgGgFQgGgDAAADQgCAAgKgEQgKgEAAgCQgMgIgEAAIAAADIgEABQABADgNgGQgCgCgEAAQAAgFgCgCIAAAGIgEgDQgBgBgBAAQgBAAgBAAQAAAAgBAAQAAAAAAABIgGgHIgMgBQAAgCgLgFQgLgFAAgCQgIgEgCgHQgBgDgHAAIgMgCIgQgIIAAABIgFgCIABgCQgFAAgKgIQgJgGgDgHIgJgDIgCgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAgBAAIgEgLQgDgBgCACQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBgJgQAAIghgDQgQAEgEgBQAAgCgUAAQgVAAgCgBQAAACgTgEIgGABQgEABgBgBIgMgDQAAABgFAAIgGgBQgDAAgEgCQgDgBgEAAIgMAAQAAACgLgEQgFAAgDgFQgCgBgLAAIgKABQgDABgXgDQgXgDAAgBQgJgEgGAAIgTgCQgCgDgWgGQgWgFAAgBIgEgCQgDgCgDABQgLADAAgEQgHgEgMAAQAAgEgJgBQgKgBgBgBQgKgDgDgDQgGgFgNgCIgUgDQgDgEgCACIgGACIgFgDIgFgCQAAgDgHgBQgIgBgBgEIAHgBQgBgEgKgDQgJgEAAABIgQgHQgEAAgGgEIgJgGQgLgFgKAAIARARQAAADAGAFQAGAFABADIAIAHQAEAGADABQAIABAEAGQADAAAFADIAIAEIAGADIAGAFIAKADIAIACIADACQABAAAAABQABAAAAAAQABAAAAAAQAAABAAAAQAFAAAEAFQACAEASADQASAEAAACIATAIQADAAAEADQAFADADAAIAgAIQADAAAGAEQAGADADgBQADgBAHAEQAJADACAAQAAgBAOAEIARADQAHAAAPAFQAAACAYACQAAAEA/AFQACACAdADQAcADAAABIBBAFIAgADQAcADAAgBIAHABQgGAAgJAEIgQAGIgKgCQgJgBAAACQgFADgFgCQAAAFgQABQgQABAAgDQgNACAAgCIgEABQgBABgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIgIgBQgDgBgDgFQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABQgBABgEgBIgLAAQgTgCgDgBIgEgEIgHAAIgKgDQgIgCAAACQgHAAgGgCQgCgFgDABIgHAFQgEACgFgBQAAgDgJgBIgLgBQAAADgogIQAAgCgMgBQgMgBgBgDQgGAAgJgCIgPgEQgBgBgLgBQgLgBAAgBQgFAAgHgCIgLgEQgVgFAAgCIgLgBQgIgCAAgCQgFAAgNgFQgBAAgBAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgIAAANAJQACACAFACQAEABADADIAIACQAAADAJAAQAAABAPADQAAACAVAEQAVADABAHIgIABQAAgCgTgDQgUgCgCgDQgngKAAgEIgUgHIgQgGQgXgGgHgJIgHgEQgHgEAAABQgCAAgGgEQgGgEAAgBQgIAAgNgHQgOgHgCgIQgMgIgFAAQgIgKgFgCQgFgFAAgCIgHgDQgFgCAAgDQgFgDgGgHQgFgGgDgGQgCgBgEgFQgEgGABgCQgDAAgCgHQgDgIgDAAQAAgDgDgFQgDgFAAgEQgBAAgEgQIgFgTIgGgdQgFgdADAAIgDgRQgDAAAAgUQgCAAgBgLQAAgLgBgBIgIhEIAAgaQAAgXACAAIgCgdQgBgaAEAAIgDgpQgBgjAFgDQAAgDAIgVQAIgVAAgDQAHAAAFgLQAGgNAEgCQADgBACgEQACgFACgBQAAgEAFgFQAFgEAGgBIgCgEQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABgBQAEgBAAgCIAGgGIAIgGQAEAAADgBQAJgHgFAAQgCgFAFgEQAEgDAEAAIAGgDIAHgCQAIgDAIgIIANgOIAIgGIAEgCIACgEQABAAALgIQAAgCALgEQALgFAAgDQADAAAHgGQAIgFABgDIALgHQAGgDAGAAIAKgFIAHABQAFABABgCIASgDQAMgEAAgHQADgBABgDIADgEIAEgEIAEgEIgBAAQAAgEAFACIAIACIAOgCIAHgEIAIgEIAHgDQAGgEACAAIADgCIADgCIAIgBQAGgCAAgDQgFAAAFgFQAFgFAEgBIAKgGQAFAAAFgDQAAgCAFgCQAFgBAAgDQAFAAAAACQAFAAAGgDIAJABQAFABABgCIALgGQAIgEADAAQAAgCAJgCIAMgDIAGgBQAGAAAAgBIAJgBQABgCAAgGQAEgBAEgEQADAAAEABIgBAEQADAAADgDIAAAAIAAAAIAAgDQAaAAAFgBQAFgCALAEQAKgFgEAAQgDgHAQgFQAPgFAAAEQALgHAUAAQABgDAIABQAHABACgEIASgDQAQgDAAgBIACABIAlgIQARAAAAgEIAHgBIAGgCIAagFIAngGQALAAAagFQAagEAOAAQAAgDAegBQAdgBAGABQAAABAGABQAFABAAACQgHAFgSgCIgOAAIgNABQgIAAgOADIgWACQAAgBhHAPQAAAEAjgEIAogFIAmgEIAWgDQAOgCAHACQAAgBAJAAQAIABAAAGQAPAAAAABIAGAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgGAAQAAADgsABQAAABgOACIgQACIgQAAQgPABAAACIgoAGIgeADQAAACgLACIgMABQgHAAgMAEQgNADgGAAIgKACQgKABAAACQgDAAgFADQgFAEgDAAIgPgBQAAACgNACQgNACAAADQgCAJgJACIgSACQAAACgHADIgKADQgEAIgHAEQACAHAcAAQAZABAGgDQADgCAUgDQATgDAAgCIAKgBIAKgCIAFAAIAGABQANgDAIAAQAAgBAXgDIAXgEQADAAAWgEQANAAAXgDQAAgBAfgDQAggCAEABIAhgCQAegCAAABQAKgBATABIAYgBQAPgBAIACQAAACAIACQAIACAAgCIAMABQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAgBAAAAQAAAAAAAAIALABQAJACAAACQgEABgSABIgRAAIgfABQgCADgSAEQgRAEAAACIgNgBQgMgBAAACIgTAAQAAAEgUAAIgZAAQAAACgeABQgeACgBAGQAOACASgCIAggFQAAACAegCIAdAAIANgCQADAAADACQAEACAEAAIANgBQAIABgEAFQgEAGgbACIgbACQhGAEAAACIgQACQgPABAAgBQgGgBgHACIgMADIgOABQgBACgFAAIgJAAQgEAAgHAFQgHAFgFABQAAACgLACIgNADQAAABgGACQgGACAAABIgPADIgJABQgJACgBABQgNAAgKAKIgNAFQgJAFgFABQAAgBgKAEIgNAFQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIgFACIAEABQgDAEgIAAIAAgDIgGACIgFACQAIAHgQADQgTADAAACIgQAFIgPAEQAAgBgSAGIgVAHIgNAFQgOAFgCACQgQAAgCADQgEABgFADQgGAEgEgBQgFAAgEAEQgFAFgEAAQgCgCgEABIgHAEIgIAEIgIACQgBABgJACIgKACQAAAEgIACIgLACIgDACQgCACgDAAQgEAAgBADQgCADgDACIgCACQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgCgCgEgBQgBAAgBAAQgBAAgBAAQAAABgBAAQAAABAAAAQgDAAgCAFQgBAFgCABQAAADgIAAIgNAHQAAABgKACQgJACAAADIgKAGQgGAEAAACIgIAEQgFADgEABQgHAFgCAAIgQAHQgEADgEAAIgNAKQAAADgGADQgGAEAAACQgHAEgKABQgBADgDACIgFADQgEAAgDAGQgEAGgDABIgJAGQgHAEgCAAQAAAFgFACQgHADgBAEQgSAMgGAIQgEAAgEAFIgHAIIgEAFIgFAEQAAACgFACQgEACAAADQgBAAgGAHQgFAHgCAAIAAADQgEAAgEAFIgGAIIgGAHIgGAHQgCAGgJAKQgHAKgCAHQADAAAFgFIAIgIQAFgJADAAQAAgDAGgDQAFgEAAgDQgBAAAIgHIAJgHQAFAAADgHQADgHADAAIAFgGQAFgEACAAQACgDAFgEIAJgFQAAgCAEgDIAFgFIARgMQADgHAQgEQABgCAHgEQAHgDAAgBQgBgDAFgCIAGgDQADgBAQgLQADAAAEgDQAFgEACAAQAAgBAbgPQAGgCANgGQAPgIAAgCQAHgBACgCQAAAAABAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAFgBACgBIAGgEIAEgDIAEgDIAFgCQAAAEAUgMIAGgCQAEgCAAgBQAGAAALgIQALgGAGAAQADgEAHgBQAHgCADgDQADAAAFgDQAEgDADAAQAEgEAHAAIAHgGIAKgBQALgGAEAAIAFgCIAGgCQACgDAIgBIAJgBIAHgEQAGgDAAgCIANgCQAAgDAJgCIALgCQAAgEAKgBQALAAACgDIAhgJQAcgIAAgEQADAAAOgEQAPgFAAgBIALgBQAIgCAAgDQAqgFAAgDQAIAAAOgFIAVgGQAAgBATgEIAWgEQAAgBAYgFIAbgGQAHgBALgBQAAAAAAAAQAAAAABgBQAAAAABAAQABAAABAAIAFgBIAQgEQAKgCAGABQAAAGgSAEIgZAEQgNADAAACQgDAAgGAFQgFAEgFgBQAAgBAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAADgUAGQgHAHgFAAQgDADgFAAIgJACQgdAKgRACIgDADQgDACAAACQgEAAAEADQABABABAAQABABAAAAQABAAAAgBQAAAAAAgBIAKgBQAJgBAAgCQAZAAgNAFIgLAHQgCACgFgCQgEgBgBAFQgHgBgHADQgIADgHAAQgEAAgFAEQgGAEgDAAQAAACAFAAIALgDQAAAKgfADQgBACgFABQgDACgDgBQgDAAgDABIgGADIgHACQgDAFgQAAQgIABgCAEQgDAAgDACQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDgCgCABIgEAEIgGADQgMADAAADQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAACQgGADgEgBQAAAFgIABIgMgBQAGAFgGACQgEABgFAAQAAgBgNAHQgDAFgMAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQgBAAgBABIgDACQAAgBgBAAQAAAAAAAAQgBAAAAABQgBABgBABIgEAFIgFgBQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgFADgGAAQgEgBgJACQgLACAAADQgCAAgEADQgEAEgDAAIgWAHQAAADgDACQgDAAgDACIgFABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgFABQgEAAgDADIgGAEIgFADIgEADQAAAFgJABIgLABQAAABgEACIgGACQgDABgFAHQgEAGgFgBQgGgCgHAHIgIACQgGACgBACQgGABAAAFIgHAAQAAAAABAAQAAAAAAABQAAAAAAAAQgBABgBAAIgEAAQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABgBAAQAAABgBAAIgFABQgCgCgEACIgIAEQgNAFgIAJQgHABgGADIgNAHQAAAEgJAFQgLAGgBADIgIAEQgFABAAAEIgJADIgGACQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAABQAAABgFADIgEADIgEAEQgCAAgCADQgDADgBAAQgGABgDADIgLAMQgGAHgIADQAAAEgLAHQgLAJAAAFQgEACALAJQANAKgBADQgEAAgFAJQgEAIAAAFQgDAAANAKQAMAKAAgDQAEAAAHAFQAHAGAAAFQABAEAHABQAJACACABIAJAHQAFABAJAFQAJAEAFAAQAAAGAjAAQALAJAGAAIAGABQAHABABABQAPAAAEADIALAIIAHACQAGACACgBIARgEQADADACAAQAAABAAABQgBAAABABQAAABAAAAQAAAAABABQABABALgBQAKAAABADIAQABIAHABIAHABQAAgCAMACIAPADQADgEAFAAIAIABQABABAGAAQAGAAACACIAEAJQADAGADAAIABgBIABgBIABgLQAAgEAFAAIAIAAQAAABAaABQAAgCAIADIAKADQAAgEAIgBQAIgCAAAGIAmgEIgBgCQADgCgDgNQgDgMABAAIgEgLQgDgJABAAIgBgGQAAgBAAAAQgBgBAAgBQAAAAgBAAQAAgBAAAAIgBgQQAAgaAEAAIgBgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQACAAACgJIABgLQADAAACgPQAAgDADgGQADgFAAgEIAHgZIAGgOQAEgHAAgGQAEgBACgFQACgHACgBQAGgGgBgFQAKgKgBAAIAEgFIADgFQgBgEADgBQAAgBAEgFQAFgEAAgDIAGgGQAEgFABAAQAAgCAEgDIAHgFQACAAADgDIADgFQAMgGAKgLIAFgCQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQgJAGgFAFQgEACgEAGQgEAFgBAFQAFgBADgDIAFgGQAMgFAAgBQAGgBALgIQAJgIAIAAQAIAAAEgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAgCAIgGQAFgFAFgDIAHgEQAEACADgBQABgBAEgBQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIAGgFQAFgEAAACQAFABAAgIQAEgBABgBIAEgDIAKgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAJgFIALgGIACgEQAAAAAAAAQAAgBABAAQAAAAABgBQABAAABAAQAFgBAFgFQADAAAFgCQACgDAHgDQAGgCADgDQADgDADABIAEADQACAFgMAGIgPAHQAAABgGAEIgIAEIgKAHQgHAEgBAEQgDABgHAFQgGAFgFABQAAAGgKACIgJAHQgFAEgCAFQgGACgGAGQAAAAgBAAQAAABgBAAQgBAAAAAAQgBABAAAAQgCACgEAAQgFABgCAFQgGAEgCAHIgNANIgMAJQgJAGAAAFQgKAGACAKIgDAEIgCAEQgDACgBAIIgKAIQgHAIAAgDQgCAAgBAGQAAAFgHAAQAAADgHAFIgBAIIgFAIIgEAIIgKAJIgCAFIgBAFIgEADQgBABAAAEQgBAAgDAFIgDAIQgCABgEAGIgFAGQAAAPgHADQgFACABAIIAAAKQgEAAgBAVQgBAUACAAQAAgIAHgKQAIgMABgGQACAAAEgGQAEgFAAgCIAIgRQACgBAEgGQADgGAEAAQAEgNAIgBQgCgIALgFIAKgMQABgDAHgHQAHgGAAgEQAFgBAEgHQAEgHAEgCQAAgCAJgIIAMgIQAAgDAIgGQAJgFAAgCQAFgDAKgKIANgLQADAAADgEQACgFADAAQABgDAHgFQAFgEAEgBQABgCAEgDQAFgDABgCQAGAAAKgKQAJgKAGAAIAIgFQAGgEAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQAGgBgBgEIAEAAQAAgBAOgHIARgIQAAgDAPgJQAPgIAEAAQAGgIAQgFQAAgBAIgEIAJgDIASgIQAPgHAAgBIAEgDIADgDIAJgBQAAgCAGgCIAGgCQADgCAGADQACgIAFAAQAFgFAGAAQAAgBAGgCIAIgCQAEgGAUgFQABgBAFgCQAEgBACgCIAFgBIAGgCQAAgCAFgBIAEgBIADACIAZgMQAAgBAKgDQAIgCAAgBQATgGAAgBIAIAAQAFAAACgDQACAAAGgEQAHgDAAgBQABAAABAFQAAgDAHgDQAFgDAFAAIASgGQANAIgDgGQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAAAABAAQAAAAAAAAQAAgCAmgHQACgDASgDQATgEAAgBIAGgCIAGgCQAAgCAOgBQAQgCABgBQACAAACgDQADgCACAAQAAgCAJAAQAggGADABQAAgCARgDIAVgDQAGAAALgCIAQgFQASgEAIAAIA2gIIAZgEQAQgDAJAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAIADQAHADAAgFIAQgBQAzgGAAACIAMgCQALgDAAABIAcAAQAZgBAAgBIBRgBQAAgCAhADIAoADIAIAAQACADADgBIAHgCQABAFgCAAQgBAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAAAQgFADgKAAQAAAAAAAAQAAAAgBAAQAAgBgBABQAAAAgBAAIgFABQgCAAgDgCIgEgBQgLAGAAgEQgNABgHgBQAAgCgTAEQgJgBgIABQgCAEgFgBIgIgDQAAADgJAAQgIgGgCACIgDACIgEABQgCADgFAAQgDABABAFQgKAAgCAHQgCAHALAAQABACAIAAQAIABADACQAAgEAGACIAHADQAAgBAAAAQABAAAAgBQABAAABAAQABAAABAAQADgBADABQACABABAAQABAAABAAQAAABAAAAQAAAAAAAAIgFADQgBACgIAAIgKgBIgFABQgFABgBAEQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgCADIgPABQgIADgGAAIgiACQgCAEgJAAIgOAAIglABQgyAHgGgBQAAAEgpAAQAAABgGACIgIACIgLAAIgJACQgEgBgLADIgcABQAAABgRADQgRADgDAAQAAgCgJAFQgIAFAAACIAbAAIAWgDIAPABIAHgBQAEgCADAAIAMgCQAKgCAAACQAFABAGgFIALABQAAAEAJgGIAWgDQAAgCAHAAIAJABQAFACAFgCQAFgBAEABQAAgCAOgDQAOgDAAAEQAjAEAAgCIAHAAQAGABAAADQABABgGACQgGADgCgBQgEgBgJABQgJABAAADQAegEA1ACIAgADQAUADALAAQAfAAAtAIIATADQAQADAAADIAXAEQAVAEAAACIAHAAQADAAABgDQAFgCAGAAQAFAAAEABQAAABAGACQAGACAAABQAQAAAVALQAMAPgBAAQAAAFAPAAIgJgIQgHgGAIAAQAFAAAHAEQAIAEADAAQAjASADAAQAAABAMADQAMADAAADQADAAAGACIAIADQAAABAhALIAUAMQAPAJAAAGIAIAEQAAADAIAGQAHAGAAADQAFAJACAAQAAADAEAFQADAFAAADIADAGIABAHQAEAAAEAQQADAPADAAIAHARQAEAJAAAJQADAAADAWQACAAAFATIALApQAMAogDAAIAEAmQABADgCAEIgCAGQgCAAAAAGIABAHQgCAAgCAGIgDAIQgCABgEAMIgFAMQgBAEgEgBIgBAFQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgGABIAAACQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQgBAAAAAAQgEABAAAFQgCABgDAEQAAABgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQgGAAgEAFQgEAAgBAGQgBAHgDABQAAAFgEADQgFACgFgBQABAKgHgCQgKgDgCADIAAAKQgCAAgCADIgCADIgDABIgCACIAAAFQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAQgHgCAAABIgJADQgCAAgDADQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAABAAABQAAABAAAAQAAABABAAQAAAAABAAQgCAJgKAAQAAgCgHgCIgJAAIgFABQgFACAAACQAAACgEABIgFACIgLAEQgJAFAAACIgMAGQgLAGAAABQgEACgCAGQgCAEgGgCIgCAFIACADIACAFQgGABgIgCQgJgCgEAAIABAJQAAAEgFAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBABAAABQAAAAAAAAQABABAAAAQADABABADQgDACgEAAIgIAAIgIgEQgFgEgEAEIgDAFQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgFADIgFADQgBAEgHAAIgMgBQAAAHgHABQgKADgCACQgDAGgCgCQgBgCgDgBQgBAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAIgBAFIgJABQgDgBgFAEQgDADgDgGQgCAAgDADQgCAEAAADQgEAAgEACQgEADAAADIgFAAIgGABIgBAAIgCAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgCABABAEQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAgBIgEAAQgJADgEAAQgEAFgGABIgMACQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBADACAFQAAADgLgDIgGAEQgFAEAAACIgIgBQgDAAgCAFIgIADQgFABgBgDIgLAGIgKAHQAAAFgOgDQgPgCAAAGIgEgBQgBgBAAAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAgCAEQgBABgBAAQAAABgBAAQAAABgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgFAGQgDADgEAAIgDAAIgEABQgBABAAAAQgBAAAAAAQAAABAAgBQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAIgFAEIgHADQgFACABACIATgBQAMAAAGgDIAagFQATgEAAgCQADgBAEAFQADAFAEgCQAAgBANgDQACgEAVgDQAAgBAIgCIAKgDQAQgBgBgEIAJgDQAFgBABAEIAMgFQAJgCAFAAQgOAJgFABIghARQAAgFgHABQgIABgCAEIADACQgEAAgPAGQgRAGAAADIgIABQgGABAAACQgFABgDgBIgIgCQgBAIgFAAIgMgBQAAACgHAAQgHAAABADQgRAIgFABQgSADAAABIgHAAQgFAAAAgBQgCgBgDABIgGACQgSAJAAgGQgDgBgDACQgEACgBACQgCgBgHACIgFADIgRAEQgFAAgEADQgFAEAJABQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIACABQAAgCAOgBQANAAAAgCQAGAAATgFIAYgDIAdgFIASgEQAPgDAAABQAHAAAJgEIAPgFQgBgCAMgDIANgEIARgGQANgFADAEQgfAOAAgBQgFABgJAFQgJAEgEABQABADgIABIgLACQgIAEgJACQAAgCgKAHQgBAEgDgEIgDgCIgHADQgEADgCAAIgJADQgHABAAACQgEAAgFABIgKACQAAAJgJgMQgBAGgBAAQgDgEgHACQgHACgCAAQgFAFAAACQgEAAgDgCQgFgDgDgBQAAAFgFACIgJAEQgTAJgKgJIgMADQAAAGgNAAQAAACgJACQgKACgDAAQAAgEgHAAIgJABIgDAFIgFgBQAAACgSgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAADgHAAQAAgGgDAHIgCAEIgHACQAAgCgFAAQgEAAgDACQgCABgNAAQgLAAgBACIgUAAQgEAAgGgCQgGgDgDAAQgGAGgHAAIgOgCQAAABgIABIgIADIgNACQgJABgEgDIgLAAIgOgBQAAAEgFgBIgIgCQAAACgMABIgGABQgHAAAAgDgAB5IPQAAAAAAABQABAAAAAAQAAAAABAAQABAAAAAAIAEgCIAYgCQAUgCABAEIADgDQACgCACgBIAGAAQADgBAGABIAHgBIAMgEQAIgBAFADQABgFADADIAEADQADABAEgFQADgEADAAIAGACQACAAAEgDQAEgCAIAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAAAABIABAEQADgBAEgEIAHgDIAPgDIAJgCQAFAAAEgCQAHgFAEAAQgEgBgMAEIgPAFIgaACQgRACgNgBQggAGgBgEIgLACQgJACgHgCQgJgBgKABIgsACQgEABgBgEIgIADQgBgCgFgCIgIgCIgGACIgGAAQgIgCgXgBIgVgBQgQgCgHAAIgKAAIgIgCIgCACQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgCgEAAIgGgBQgIgCgUgBIgLgCQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgCABQgJABgHgCIgEgDQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgLAAQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAgBAAIgGAAIgGgBIgGAAIgFgCIgGgDIgMgCQgHgCgEgDQgDgDgBAAIgFABIgIgBQgFgBgEABQgBgDgJgDIgMgBQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgHABgIgFIgOgFQgNgGADgBQgCgBgFAAQgEABgDgCQgHgDADgBIgOgFQgCgBgMADQgOACgMAAIAiAYQANgBAKADIAKADQAIAAAJAFIAKAEQAIADAAACIAGgCQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAIAEAGIAJgCQAHAAABABQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAOAFQAFADAJgBIAOAFIAHACIAIABQANAEAdADQAyAJAuAEQAoADAGABIAaAAIAMABIANABIAKAAQAHgBADABQAAABABAAQAAAAAAgBQABAAAAAAQABAAAAgBIABAAIACACgAE4GhQAAABABAAQAAABABAAQABAAAAAAQABAAAAAAIgBgGQAAgCAGgBQABABAFAAIAHgCIAMACQAJACAAgEQAEgFAHADIAKAGQABAAABAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAgDACgCQAEgCACAAQAAAAAAABQABAAAAAAQABABAAAAQABABAAABQAGgHAOgBIAVABIAEgCIAEgDIAIAAIAGAAQAAgCAMAAQADAFACAAQAAgEAHgBIAGgBIAPgDQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQAJgEAGACIASgCIAEABQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAABQABAAABAAQAAAAABAAQAAAAAAAAQAAgCAMgCIAOgCQABgCAMgEQAKgEADAAQADAAADgDQAEgCACAAQAAgCAGgBIAHAAQAGABAJgGQAFAAAIgEQAJgFAFAAQABgCALgEIAPgEQABgCAKgCQAJgDAAgBIARgGQACAAAEgCQADgCADAAIAJgDIAFgDQADgCAEgBQABgCAEgBQAGgBABgCIAKgDQAIgDABgCQADAAAGgDQAGgEACgCQAEAAAIgEQAHgEAEAAIAUgKIARgIQASgHACgCQAEAAAHgFQAHgFAFAAQAEAAAFgFQAGgFACAAQADAAAFgFQAGgFACAAQAGAAAJgHIAEgEIAEgDQAAgBAFgCQAFgBABgCQgGAAAEgBIAHgCQAAgDAHgBQAGgBADABQAAgCACgEQADgEgBgEIAOAAQAAgDADgCIAGgEIALgHQAAgEAKgFQAJgEAAgDIAMgDQAFgDACgIQAFgBANgWQAIgEAHgJIABgEQABAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQADAAAEgHQAEgIAEAAQADgFAAgHQAEgCgBgEQABAAABgKQACgKACAAIgFgKQAAAGgJAAIgGAJQAAADgGAFQgGAEAAACIgFAFIgEAGQgCAAgFAEIgHAFIgDACQgEACAAADIgHADIgGADIADAAIgBADQAAAAAAAAQAAAAAAABQgBAAAAABQgBABgBAAIgFAFQgCACgGABQgGAAgCACQAEAAgEAFQgEAGgDAAQgJAKgKABQgDAHgMAFIgCABIgCADIgIABQgCABAAAFIgMADQgKACAAAEQgMAJAAABIgIACQgEACgEAAQAAAEgLACQgDgFgDAFIgFAHQAAACgIAFIgKAFQgEABgGAEQgIAFABADQAAACgLADIgMACQAAAEgIABQgHABABADQAAABgVAEQAAAGgMAFQgJADgJABQAAgEgLAGIgLAGQgDAAgHADQgHADAAABQgDAAgGACIgJACQAAACgHADQgHADgCgBIgBAFIgDABIgCADQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgGAEIgCAAIgCgBQAAABgBAAQAAAAAAABQgBAAgBAAQAAABgBAAIgFABQgDACgCAAQgBAAAAAAQgBAAAAAAQgBAAgBABQAAAAgBAAQgCADgKAAQAAACgHACQAAACgIACIgLACIgNAFQAAABgHABIgTAJQgVAGgEACQAAACgIABIgLgBQgBACgEACQgDABgBADQgFACgDAAIAAAEIgMAAQAAAEgFACQgFABAAgCQgDAAgJAEQgIAEgEgBQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBABgBAAIgGABQgCADgHAAIgKgBQgCAEgJAAIgWAHQAAABgLAEQgFACgIAAQgBgBAAAAQgBAAAAAAQgBgBAAABQgBAAAAAAIgFADIgIgCQAAAGgLABIgPAAIgHACQgEABgBACIgKAAQgWAIgDAAQgEAAgNACQgOACAAACIgYAEIgFABIgFACQgGAAgOADQgRADgCADQABgCAQAAQAAADAUAAQADgDAJABIANACQAAgDALABIALABIAFACgAmcGIQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIAKAIQAHAGAEAAIACgDQABAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgCgDgEgDIgIgEIgDgBIgCABgAAQFjQACADACAAIAGABQAFABABgDIACgBQAAgBABAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAGgBQAFgBAAgBQAcgBAAgEQAIAEAAgEQAEgBAKADIAIgDQAEgCADAEQACACAEgBQAEAAACgDQABgBAEABIAHACIgDgDIACgFIAIgCIADADQAAABABAAQAAAAABAAQAAAAAAAAQAAgBAAgBQALABAEgBQAEgBAFgFIALAAQAHAAACgDQAFgDAOABQABgEAJABIAMABQAAgDAFABIAHACQAAACAJgGQAIgBAMABQAAgHAMAAQAAgBARgDQARgEADAAQAAAEAKgBQAKAAACgDIACgEQACgDADADQACACADAAIAFgBQAAgGABgBQACgCAGABQABADAGgCIAJgDQADAAAIADIAHgDQAAgFAKgCIAOgCQAHgDADgEQADgDAOADIgBgEQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCACgBQACgBADACIAGABQAAgCAMgBIAPgBQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIACAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAIAAAGgEIALgHQATAAACgEQALAAABgCQAFAAgDgFIAIgBIADgFQABgBAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQACABADgCQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAACAGAAQAGAAAAgCQAFAAAEgCIAHgHIAJgBQACgDADABIAGABQAAgBAPgFIARgGQgBAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgCAFAAQACADAFgCIAGgCQAAgBAFgBQAGAAAAgDIAFABQACgBABAAQABgBAAAAQAAgBAAAAQAAAAAAAAQgBgDAMgEQANgDAAgCQAIAAAPgIQABgCAGABQAGABAAgDIADgDQAAAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAEABAFgDQAAgBAIgCIALgBQgBgEAFgDQAFgDABgDQAMABAAgDIAGABQAEABABgDIAIgHQAAgDAGgDQAGgEADAAIAJAAQAAABAQgKQAAgCAGgDIAGgFQAFAAAHgGQAGgGAEAAQAAACAPgKQAGgGAIAAQARgKAAgBIASgNQAJAAAKgGQACgGAEAAQACgCAIgDQAHgDABgDQAFAAACgFQADgFACgBQAKgFgCAAQABgDADgDIAGgFIAKgEQAAgEALgFQAJgGAAgCQARgVACgBIAGgMQAEgIgFgCQAAgCgHgDQgGgDAAgCQgBgCgDgDIgFgDIgIgGQgFgFgCgBQgYgKAAgEQgFAAgHgEIgMgGIgPgKIgKgFQgGgEgEAAQAAgBgGgCIgIgBQgRgGgCgDIgNgGIgIABQgHABgDgBIgEgCIgFgBQgOgJgCAAQAAABgPgGIgIgDQgCgDgOgCIgpgJQgFgFgSABQgPACgCgDQgDgEgFAAIgMABQgNACAAgDIgPAAQAAgDgFgBQgFgGgHADIgLAEQgGAAgWgIQAAAEgSAAQgTgBABgHQAAgEgEgBQgDgBgEABQgBADgHgCQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAADgHgBQACAFAAAEQAGAAACAZQABAXgBAGQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAgBAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgBAQQgBAQgDAAQAAABAAABQAAAAAAABQAAAAABABQAAAAABABIgHANIgFAKQgEAHAAAFIgFAMQgEAMgGAAQACAFgFAAIABADQgCAAgCAFQgBAFgCAAQABAEgDADIgEADIgBAFQgDABAAADQgBAAgFAHQgFAHgFABQgBADgGACQgHACAAAEIgBAEIgBADQAAABgEAEIgFAEQAEAHgPADQgBAEgFAEQgHAEgCADQgEAHgPAHIgEAEIgFAEQgIAAgNALQgRAOgEACIgLAEQgHADAAAEIgJAGQgFAEgEABQAAgBgFAEQgEAEABAAIgRAIIgJAEQgJACAAADQgHAAgPAKQgOALgKAAQgCgBgGADIgIAEIgHAGQgEAEgEAAQgZAJgDAAQAAACgHAEQgIAEAAgDQgDgBgGADQgFADgDADQgMABgFAFQgEAAgHAFQgIAFgDAAQgDAEgRAAQgCADgCABIgEADIgGABQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgFgDQgGgBgFADIgIAGQgBAFgKADIgKAEQgGADgDAAQAAABgSAFIgXAFQAAACgVAGQgVAHgCACQgSADgZAJQgGADgLAAQAAAEgNABIgQAHQAAgGgcAJQgDAAgFACIgIADIgKACIgMAEQgGAFgLACIgSAEIAEAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAOACQALABABgCQAWAAAQADQAkgBAAAEQADABAUgDQAUgCAAgBQAGgDAGAEIAKAFQAAgBANgCIARgBIANgBQACABACADgApvE9IgNADQgFAHAQACQASADAAABIAQAAQAPABAAABIAOAAQgGgKABgBQAAAAABAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIgCgBQgdAEAAgDQgIgDgGAAQAAgCgFAAIgGAAgAotFMIADABIACgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAIgFAAIgCgBIAAAAgAnIFFIADADQACADABABIAGgBQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAgBQAAgCgDgDQgDgEgFAAIgCAAQgDACAAAEgAlKErQAEAIADADIADAEQAIAAAEACIACgBIAMgCQAHgBADAAIA2gJQAAgBASgDIAUgDQA/gPAGAAQAlgKAEAAQAAgCASgDQASgDABgDQAHAAAIgDIANgEQAGAAAJgDIAMgEQACgDAYgFQAVgFAAgGQATAAAAgDIAWgGQAAgCAHgBQAHgCABgBIAEgBQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQACgBAHABQAAgDAMgEQAMgEAEABQABgDAJgCQAHgCAAgCIAKgDQAIgDABgCQAFAAAJgDQAIgDAEgEQAFgEAMgCIAMgFQAKgEAAgBQAGgCAFgDIALgGQAVgHACgEIAJgDQAHgEAAgBQADAAAHgDIAJgGQAIAAALgIQAMgJAGgBQACgCARgJQAQgHgBgCIAKgHQALgFAAgBIAGgFQADgCAEgBQAIABAEgFIACgGQADgGAFAAIAEgEQAFgDAAgCQAEgBAHgFQAHgGAEgBQACAAACgEQABgEACgBIAEgCIADgCIAJgIQAEgCAEgGQAEgFADgCQAAgDALgLIAMgOIAFgJQAFgHACAAQABgFAEgGIAFgJQABAAACgFIACgFQADgIgBgFQgEAAgHAMQgJANgDACQAAAEgKAIIgIAIQgFAFgEACQAAAEgGAFIgHAHQgBACgHAEQgGAEAAADIgFAEQgDADgDABIgEAEQgDACgCAAIgGADIgGADQAAABgDADQgEADgBACIgIAFQgGAEgBACQgDAAgHAFIgJAIQgIACgNALQgNAKgJABQgEAFgKAEQgJADgGAAIgMALQgEAAgGAFQgFAFgDAAQgCACgGABQgGABgDADQgKADAAACQgCAAgDADIgEADQgBADgIAAQgIAAgCAEQgDACgDAAQgCADgGABIgLABQgJgBgGACQgCABgCAGQgDAFgDABQgDADgFgCQgFgCgCABQAAAEgFABQAAAEgoAQQgCAAgEACQgEADgCAAIgLADQgGAHgPAAQAAACgKACQgLADAAADIgLABQgHABgCADQgFAAgCABIgGAFIgVAEIgTAGQgBABgIACQgIABAAACIgWAGQgEAAgHADQgGACgFAAQgBACgLADQgLACAAABQgDAAgEADIgGACQgBABgFABQgEABgCgBQgNAFgDAAQgBADgLACIgKACQgPAGgHAAQAAACgLAAIgNgBQAAABgIACIgKACQgMAAgKAEQAAAEgJABIgJACIgTAAQgNAAgEAFIgDABIgCADQgKADgEAAQgBADgXAEQgXADAAACIgIAAgAuiD5QAAgDgNgCQAAAFANAAIAAAAgAwGDQIgCADIAMAJIAIACIAJABQADAFAXAJQAXAIAAgFQgMAAAAgFQgNgCAAgBIgQgJQgCAAgDgGQgEgHgFAAQAAgCgIAAIgIgBgAlVDQQgIADgBACIADAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAACAkgFIAqgEQAAgCATgEIAWgEQABgCALAAIAOAAQAEAAAOgFQALgEAGACQAAgBAQgEIARgDQAAgDAKABQAJACAAgEIAJAAQAFAAACgDIAHgCQAEgFAOABQANABACgEQgHAAAFgDQAGgDADAAIAKgBIAIACIAGgCIAIgBQAAgBAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIgFABQgCgFAWgGQATgFAIAAQAAgBAJgCQAJgBABgCIAGgBQACgBADABQAEADADAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAABAAQgCgEAEgBIAHgBIAIAEQAJAFACAAIgGgDIgDgIIAFgEQADgBAEACQABAAALgEQAJgEAAADQACABADgBQABAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQAKAAAEgEQAAgIAHAAQACgCATAAQADgBADgEQACgDADAAIARAAIADgHQADgDADABIAFACQgBgHAFABIAJACQADAAADgCQADgDACAAQACgCAIgEQAIgEACABQAAgFAQgCQAQgBAAgCIALgBIAEgDIAFgCQACgCAJgDQAJgCAAAEQAEABALgCQAFgEABgEQgDAAADgGIAEgGQADgCAAgIIALgFQAIgEAEAAQABABAIACIAKABQAAAEAKgFQAJgEABgDQgGAAAAgKQACAAAEgFIAHgHIAPgFQAPgDAYgMQAEgFAOgFQAMgFADgGQADgBALgLQAKgKAGAAQABgDAFgDIAFgFQABgCAHgFQAFgEAAgDQACAAAEgGQAEgGAAgCQADAAAIgTQAIgTgCgEQgBAAAAgKQABgKgDgBIABAAIgFgNIgDgHIgPAAQAAABgMgDQgNgDAAADQgfAGAAgCQgJACAAgCIgGABQgEABgDgDIgNABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIgEACQAAADgKABQgKABgDgCIgNAAIgCAEQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIgLAAQgBAGgLgDIgQgFQgCABgGACQgEABAAAFIgMgBIgLABQAAADgQABQgRABAAABIgUABIgHAAIgFADIgBABIgCABIgOABQAAABgFABIgGABQAAgBgPADQgQACAAACIgJACIgKACIgIAGQAAADgIgFQgCAAgCAGQgBADgDAAIgFABQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAIgGABQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgEABgCACQgEADgDAAQAAgDgFAAIgIACQAAAEgTgCQAAAGgHACQgJACgCACIgFADIgFADIgFAAIgEgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgEgCIgHADIgHACQgCgDgEACIgFADIgEADQgDADAAACQgCAAAAAGIgDAEIgEABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgEgBQgEAHgRACIgQAJQgIAEgEgCIAAgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgJAEQAAAHgCAAIgHgCQgBAAgGACQgGACgBACQgDAAgDACQgCADAAADIgKACQgKACgDAFQgEAAAAAEIgBAFIgOAHQgDAFgGAAIgKgCQABAKgEACQgJAEgBABQgKAHAAgEQgFgDgBACIAAADQABADgJAGQgJAFgDABQAAACgGADIgHADQAAgFgFADQgFAEACAAQAAAEgGAHQgFAGgFACQgCAHgMADQgHADgCgDQgDABgEAEQgEAFAFAAIgCAFQAAADgFAFIgFAFIgJAHQgFAFgBAEQgGAAgCACIgDAHQgDABgDAEIgFAHQACADgVATIgDADIAMgBIAjgEQAAAEAOgGIAGgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQABgEAIgDIAIgDQAFAAARgDQAPgCADAGQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAKAAQAAgBAGAAIAHAAQgBABABAAQAAAAAAABQAAAAABAAQABgBABAAQAAgFAPgCIATgCQAAgDAJAAIALgBQAAgFAVgCQAUgBAAACQADgBADgDQADgDABAAQAAgBAGACIAHABQAAAGARgKQAAgBAGgDIAHgCQAEAGAGgBIAOgCIALgBQAGAAAAgFQgDABgEAAQAAgCADgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIAMgCQAAAAABgBQAAAAABAAQABAAAAgBQABAAAAAAQAAgDAKgBIAMAAQAGAGAEgFQAHgIAEgBQAKAAAAgCQAFABACAEQABAEgGAAQAAADAGACQAFACAAgEQgBAAAAAAQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQABgBABAAQAAgCAIAAIAEgCQAEgDAAgCQAGAAADgCQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAFAAQAEgGAJAAQACABAFgCIAHgEIAJgFQAIgDAAADQAJAAgDgBQgGgDgBgCQgGgBAFgBIAHgCIAFAFQABACAEAAQAKABAAgCIATgJQAEAAAIgDQAIgDAFgBQAAgDAJgDQAJgDAEAAQABgBAEgCIAGgDIAHgCQAFgCACABQAEABADgDQADgEADgBIAHgEQAGgCACADQACADgKALQgDAAgGAEQgGAEgEAAQAAAEgKAFQgMAFgBADQgCAEgIABQgHABgCADQgHAAgJAKIgXAIIgPANIgTAGQgUAEgGAIQgFgBgEADQgGADgDAAQAAABgKAAQgJABAAAFIgMACQgJACgEAEQgKAEgGABQAAABgHADIgIAEQgGAAAAgCIgIADQgCADgJADIABACQgHADgEAAQgJgBgFACQgRAKAAgCQgHAAgMAEQgMAEgIAAQAAABgSADQgSADAAADQgXAIAAgCQgDAAgHAEQgGAEgDAAIgNAEIgPAEIgUAEQgdAJAAgCQgWAAgCAEQgIADgFAAQAAgCgHACIgJADQgSAGgFAAQgIACgFAAIgPAAQgEAFgKgBIgPAAQAAABgPADIgBAAIgGACgAwSDKQADgGgHgBQAAgEgHgFQgCAAgHgEQgGgDgDAAQAAgDgGgFQgGgFgDAAQABgCgJgGQgKgGgDAAQACAEAFAGQAFAGAEACIAJAJQAEAEADAAQASAQAAgCIAGgBQAAAGAJAAgAn9CSQgEABgBADQgCACACADQAEACgCADIgEADIAQgEQACgBAKADIAEgBIACgDIACAAIAJgCIgDgUIgCgIQgBgEABgDQABgPACgHQADAAgBgGQgBgHgFAAIgKAOQAAAEgFAIQgFAHABADQgFACgCADQgBABgCAGQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABQgBADgCABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBgBIgDgBQgCABALAGgAmRBJQgEAAgDAIQgDAHgCABIgEARIABACQgDAAgCARQgDAQACACIAHgHQADgNADAAIAEgIQAEgHABAAIADgFIADgHQACAAAHgQIAGgFIAGgHQAFAAAAgJQAAAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQABgBAAAAQABAAAAAAQABgBAAAAQAHgGABgEQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAIABgEQAGgDAGgKQADAAAFgIQAFgHAFAAQAYgJgLAAQAAgEAEgDIAHgCQAAgFAHgDQAGgEAAgDQAEgBADgEQADgEADAAQABgDAKgFQAJgEAAgDQAIgFAFAAQAAgEAHgDQAGgEAAgCIAFgEIAGgDQAEgCACgCQACAAAHgFQAGgGABABIAJgFQAHgDABgDQAGgEABgFIAJgBQAFgBAHgGQAAAGAKgHIAMgIQACAAAFgDIAFgFQACgBAGgCIAGgCQAcgJAAgCQAEAAAHgEQAGgCAFAAQACgDADABQAGABACgGQADAAACgCIAHgEQACgBAMgDQAKgCAAgCIAIgDQAEgCAAgDQAMAAABgDIAHgBQAGgBAAgCQAEAAAJgDQAJgEAEAAQAAgBAHgDIAJgCQAsgNAEAAQAAgBALgDIANgDQAAACAIgBQAIgBAAgEQAEAAAJgCQAIgDAFAAIAagGQAAgCAJgBIAMgBQAAgBAKgCQAKgBAAgBIAJgCQAFgCAEAAIAJAAQAGAAADgDIAbgEQAAgCASgCIAWgCQACgDALgBIAPgBQAQABAMgDQAAgEAugBIAzgBQAAAAAAAAQABgBAAAAQABAAABAAQABAAABAAQABAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBIADAAIgBgCQgDAAgEgGQgDgHgDAAQAAgCgGgGQgGgFAAgDQAGgCAIACQAIADAAAHQAEAAAEAEQAEADABADQADADAAADQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABAAIACABIADACIAGAAQAFACAKgBIAQAAIA6ADQAHABAGgBQAAgBARABIATACQAkADAAABIApADQAkAEAAAFQAIAAARAEQARAEAIAAQAAACAMABQANACAAACIANAEQAIADAFAAIAJAEQAFACADAAQAAACAHABQAIAAABACQACAAAVAIQADAAAHADQAHADACACIAGADQAFACAAgCIAFADIAMAFQAJAFAAABQAEAAAHAEQAGAFAEAAQAAABAGADQAFAEACAAQAAABAHACQAGADABACQACADAIAEQAHADACAEQAGAAgFgIQgGgIgEAAIgDgDQgDgCAAgCQgHAAgGgJQgCAAgJgHQgJgIAAgCQgOAAAAgGIgDgCIgFAAQgFgGgDgCIgLgGQgGgDgGAAQgCgEgJgCQgDgBgBgCIgEgDQAAgCgOAAQAAgEgJgCIgNgCQgFAAgGgDQgHgCABgEQgHAAgLgIQgKgHgGAAQAAgCgIgBIgIgBQgVgFAAgCIgMgDIgKgCQAAgEgYgEQgVgEgHAAQAAgBgMgBQgNAAAAgDIgSgDQAAgCgWgCIgXgDIgegBQAAgCgJAAQgLgBgBgBIgWgBQAAADgggCQgBgCgLAAQgLAAAAABQgDABgEgBIgHgBQgOACgGgBIgJACQAAACgSgCQAAADgSABQgRACgEgCQAAADhWAEQgEAAgTADQgVADAAADQgSAAAAABIgRADQAAAFgpACQAAACgNACIgRADQgBADgHAAQgIAAgCADQgEgBgFACIgIABQAAACgLAAQgLABAAACIgZAIQgOAEgKAAIgyAPQAAADgKACQgMABgBADQgNAFgJABQAAABgFACIgGACQAAABgJADIgMACQgCAEgIACQgJADgCADQgEAAgFADIgIADQgRAEgEAFQgEAAgHAFQgHAFgEAAQgDADgFAEQgGADgDAAQgCACgMAHQgEAAgHAGQgGAFgGgBQgCADgHAAQAAACgHADQgKAEgGAFQgQALgJAEIgHAHQgEAEgEAAQABgCgIAGQAAADgIAHIgMAHQgIAJgJAEIgDAEIgFADQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIgDgBIgDABQgDADgKAFIgCAEIgDADQAAACgDAEQgEADgBAAIgFAGIgGAEQAAACgHAGQgCADgEABIgGADIgDAFQAAADgDABIgFADQgBABAAAEQAAAEgCABIgEADQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIgDAEIgDAHQgEAFgCAAQAAAFgIAFQgIAFAAAEQABAAgDAPIAAAGQAAAEgDABQAAABAAAAIgBAAgAuelOQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAABIgCAEQgFAAgBACQgDAAgEADQgFACgBACQgIAFgDAAQgGAGgPAEQgBAEgIABQgJABAAADIgGAFQgFAEAAABQgLAAgBAFIgPAMQgEAAgLAIQgIAFgEAGQgCACgEADQgEACgCADQAAAFgHADQgIAEgBAEQgCABgBAEQgCAEgDABQAAACgFADQgFAEAAADIgHAHIgHAJIgCABQABACAegXQAggXAGgBIAGgEQADgCACAAIADgDIADgDQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAJgBQAHgBABgCIADgCIACgCIAGgEQAEgDACAAQACgDAIgDQAIgEABgDQADAAAEgDQAEgDACgDQAIgCACgCQADAAAGgDIAKgEQACgCAFAAQADABABgFQAAgHALAAIAGgHQABgCAFABQAEABABgDIAHgDIAIgFQAAgCANgFQAOgGACABIAAgEIAKgEQAGgDADgBIAKgEQAGgDABgCIAHgCIAGgCQACgCADAAIAHAAQABgDADgCQAFgGAMgCIAUgDQABgCAHgDQAHgCADAAQAAgEAGADQAEABAGgFIAGgDIAHgCQAEgGAcgGIAPgDQALgDAAgDIAFgBIAFgCIAHAAQAEAAAAgEQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgDIgFgCIgmAJIgCAAQAAABgJACQgIABAAABQgGAAgJAFQgKAFgEAAIAAgCQgEAAgIADQgHACgFAAQgEgBgBACIgEAEQgDADgCAAIgFgCIgHADQgHADAAADIACAAQgBADgEAAQgDABABgEIgIADQgGACgDAAIgJAGIgDAEQgCABgDgBQgCAFgLAEQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAIgJABQgEABgBAGIgDABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgIAAAAgCQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgDADgCAAIgLAGQgKAGABABIgLAFIgKgBIgDAAgAkVkOQgEgCAIgFIAJgGIAEgBIADgCQAAAAABgBQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAAABAAQgPAOgHAAIgDgBg");
	this.shape_1.setTransform(-246.3661,64.3125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJCHQg2g5ABhRQAAhWA3g1QA3g1BXAAQBXAAAvAzQAzA2AABmIkqAAQATBwB6AAQBHAABOgtIAABIQgoAYglAKQgoALg0AAQheAAg6g9gAhDhqQgdAXgIAuIDUAAQgBgsgbgZQgagYgtAAQgvAAgdAYg");
	this.shape_2.setTransform(269.85,97.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiPD9Qg3ggAAgyQAAgqAagZQAagZA3gMQgqgXAAgZQAAgSASgOQASgOAegHIAAgCQgugRgZgfQgWgcAAgqQAAg9AygiQAygjBUAAICvAAIAAA6IhXAAQAZAWAJATQALARgBAYQAAAXgMAZQgMAXgPAOQgcAbhPAMQhAAKAAAWQAAAOAgAMQAcAKBEAMQB7AVAABUQAAA5g1AfQg1AgheAAQhVAAg3gggAhbB/QgbAPAAAZQAAAdAeAPQAeAPA6AAQA2AAAfgPQAfgOAAgaQAAgggygQQgmgMgyAAQgqgBgbARgAg8jIQgZAUAAAdQABAfAXASQAXAUAmgBQAjAAAXgUQAXgTAAgfQAAgbgZgUQgYgTgggBQgjABgZATg");
	this.shape_3.setTransform(229.4,106.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA6C7QgQgKgFgTQg3Amg7AAQgtAAgfgcQgcgbAAglQAAgyAvgeQAagQBHgWIBLgYIAAgUQAAgigTgRQgTgQgmAAQhLABg8A9IAAhRQAygzBcAAQBDAAApAeQAtAhAAA9IAADBQAAAUAQAAQAOgBAegTIAAAtQgeARgPAGQgRAGgTAAQgcAAgPgJgAg4AmQgoAXAAAdQAAAXARAQQARAOAaAAQAlAAAlgfIAAhuQhDAVgbAPg");
	this.shape_4.setTransform(191.3,97.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvDGQgjggAAg1IAAjGIhKAAIAAgIICdiJIAABOICGAAIAABDIiGAAIAADAQAAAeAVAPQAQAMAYAAQArAAA0gcIAABGQgWALgdAHQgfAHgUAAQhCAAgkghg");
	this.shape_5.setTransform(152.55,93.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABeDAIAAjoQAAgqgWgZQgXgZgmAAQgaAAgZANQgYAMgeAeIAAENIhUAAIAAl4IBUAAIAAAyIACAAQAYgbAigPQAhgPAjAAQBAAAAmAlQArAoAABLIAADng");
	this.shape_6.setTransform(116.275,96.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA6C7QgQgKgFgTQg3Amg7AAQgtAAgfgcQgcgbAAglQAAgyAvgeQAagQBHgWIBLgYIAAgUQgBgigTgRQgSgQgnAAQhKABg8A9IAAhRQAygzBcAAQBDAAApAeQAsAhABA9IAADBQAAAUAQAAQAOgBAegTIAAAtQgeARgPAGQgRAGgTAAQgcAAgPgJgAg4AmQgoAXAAAdQAAAXARAQQARAOAaAAQAlAAAlgfIAAhuQhCAVgcAPg");
	this.shape_7.setTransform(75.2,97.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLDAIjAl/IBcAAIBxDmIBwjmIBaAAIi7F/g");
	this.shape_8.setTransform(33.775,97.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOD5QheAAg4g2Qg3g1AAhbQgBhRA8g0QA7g1BcAAQArAAAuAPIAAiAIBUAAIAAHxgAhEggQgmAjAAA7QAAB8CCAAIBUAAIAAjvQgpgPglAAQg8AAgmAkg");
	this.shape_9.setTransform(-9.45,91.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AC6DyIhJiOIjlAAIhECOIhQAAIDpnjIA2AAIDyHjgAhWAmICnAAIhWitg");
	this.shape_10.setTransform(-54.775,91.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABdDAIAAjoQABgqgXgYQgWgZgmgBQgaAAgYANQgZAMgcAeIAAENIhUAAIAAl4IBUAAIAAAyIABAAQAYgbAhgQQAigPAiAAQA/AAAmAmQAqApAABJIAADog");
	this.shape_11.setTransform(331.75,28.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AihCMQg/g5AAhWQAAhRBAg4QBAg3BeAAQBiAABBA2QBAA3AABTQAABZg/A3Qg/A3hlAAQhgAAg/g4gAhkhcQgnAjAAA2QAAA7AmAlQAlAkA9AAQBCAAAmgjQAngkgBg8QAAg3gogjQgogkg+AAQg7AAgmAkg");
	this.shape_12.setTransform(285.3,28.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiOD9Qg2ggAAgyQAAgqAZgZQAagZA3gMQgrgXAAgZQAAgSATgOQASgPAegGIAAgCQgugSgYgeQgXgcAAgqQAAg9AygiQAxgjBUAAICtAAIAAA5IhWAAQAYAXAKASQAKASAAAYQAAAWgMAaQgMAXgPAOQgcAbhPAMQg/AKAAAWQAAAOAhAMQAbAKBDAMQB6AVAABUQAAA4g0AhQg1AfhcAAQhVAAg3gggAhbB+QgbARAAAYQAAAdAfAPQAeAOA5AAQA2AAAegOQAfgOAAgaQAAgggygQQglgMgyAAQgqAAgbAPgAg7jIQgZAVAAAbQAAAgAXASQAXATAmAAQAjAAAWgTQAXgVAAgeQAAgbgYgUQgYgUggABQgjAAgYATg");
	this.shape_13.setTransform(241.575,38.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiICHQg1g5AAhSQAAhVA3g1QA3g1BWAAQBWAAAvAzQAyA2AABlIknAAQATByB5AAQBGAABNgtIAABIQgnAXglAKQgoALg0AAQhdAAg5g9gAhChqQgdAYgJAtIDTAAQgCgrgagZQgagZgsAAQguAAgdAYg");
	this.shape_14.setTransform(199.925,28.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiZDAIAAl4IBUAAIAABXIACAAQA8hfA8AAQAxAAA0AsIgsBBQgTgQgXgLQgVgKgPAAQgqAAgdAiQgeAhAAAxIAADEg");
	this.shape_15.setTransform(166.55,28.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjMCnQhLhEAAhjQAAhjBMhEQBQhIB7AAQB9AABPBIQBMBEAABjQAABjhLBEQhQBJh+AAQh8AAhPhJgAiQh/Qg6AzAABMQAABNA6AzQA5AzBXgBQBXABA6gzQA6gzAAhNQAAhMg6gzQg6gyhXAAQhXAAg5Ayg");
	this.shape_16.setTransform(116.7,24);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiICHQg1g5AAhSQAAhVA3g1QA3g1BWAAQBWAAAvAzQAyA2AABlIknAAQATByB5AAQBGAABNgtIAABIQgnAXglAKQgnALg1AAQhdAAg5g9gAhChqQgdAYgJAtIDTAAQgCgrgagZQgagZgsAAQguAAgdAYg");
	this.shape_17.setTransform(62.775,28.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiZDAIAAl4IBUAAIAABXIACAAQA8hfA8AAQAxAAAzAsIgsBBQgSgQgWgLQgWgKgPAAQgqAAgdAiQgeAhAAAxIAADEg");
	this.shape_18.setTransform(30,28.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA5C7QgQgJgFgUQg1Amg7AAQgtAAgegcQgcgaAAgmQAAgyAugeQAagRBHgVIBJgYIAAgUQAAgjgTgQQgSgQgmAAQhLAAg6A/IAAhSQAxgzBbAAQBCAAApAeQAsAhAAA9IAADBQAAAUAQAAQAPAAAdgUIAAAtQgdARgQAGQgQAGgTAAQgcAAgPgJgAg3AmQgoAWAAAeQAAAYARAPQARAOAaAAQAkAAAkgfIAAhuQhCAVgaAPg");
	this.shape_19.setTransform(-9.325,28.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AinCgQhDhDAAhWQAAhqBRhGQBRhGB7AAQBLAABoAmIAABIQhegwhWAAQhZAAg6AzQg8AzAABMQAABPA7AxQA6AxBdAAQBcAABag0IAABJQgqAUgpAKQgxALg4AAQiGAAhQhQg");
	this.shape_20.setTransform(-56.9,24.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.1,0,734.3,135.2);


(lib.BKGDrubine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E40571").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDrubine, new cjs.Rectangle(-150,-125,300,250), null);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coahreveps("synched",0);
	this.instance.setTransform(116.45,35.7,0.28,0.28,0,0,0,415.9,115.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(-102.7,3.3,205.60000000000002,37.800000000000004), null);


// stage content:
(lib.CO_AEP_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,538];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_538 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(538).call(this.frame_538).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,2,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(539));

	// PIC1
	this.instance = new lib.PIC1();
	this.instance.setTransform(150,124.8,1,1,0,0,0,0,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(143).to({alpha:0},7).to({_off:true},1).wait(388));

	// HEAD1
	this.instance_1 = new lib.HEAD1();
	this.instance_1.setTransform(150,72,1,1,0,0,0,0,24);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:32,alpha:1},13,cjs.Ease.quadOut).wait(130).to({alpha:0},7).to({_off:true},1).wait(388));

	// PIC2
	this.instance_2 = new lib.PIC2();
	this.instance_2.setTransform(150,124.8,1,1,0,0,0,0,59);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(143).to({_off:false},0).wait(144).to({alpha:0},7).to({_off:true},1).wait(244));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(150,72,1,1,0,0,0,0,24);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(151).to({_off:false},0).to({y:32,alpha:1},13,cjs.Ease.quadOut).wait(123).to({alpha:0},7).to({_off:true},1).wait(244));

	// PIC3
	this.instance_4 = new lib.PIC3();
	this.instance_4.setTransform(150,124.8,1,1,0,0,0,0,59);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(287).to({_off:false},0).wait(127).to({alpha:0},7).to({_off:true},1).wait(117));

	// HEAD3
	this.instance_5 = new lib.HEAD3();
	this.instance_5.setTransform(150,72,1,1,0,0,0,0,24);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(295).to({_off:false},0).to({y:32,alpha:1},13,cjs.Ease.quadOut).wait(106).to({alpha:0},7).to({_off:true},1).wait(117));

	// PIC4
	this.instance_6 = new lib.PIC4();
	this.instance_6.setTransform(150,124.8,1,1,0,0,0,0,59);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(414).to({_off:false},0).wait(111).to({alpha:0},7).to({_off:true},1).wait(6));

	// HEAD4
	this.instance_7 = new lib.HEAD4();
	this.instance_7.setTransform(150,72,1,1,0,0,0,0,24);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(422).to({_off:false},0).to({y:32,alpha:1},13,cjs.Ease.quadOut).wait(90).to({alpha:0},7).to({_off:true},1).wait(6));

	// END SCREEN
	this.instance_8 = new lib.EndScreen();
	this.instance_8.setTransform(150,124.8,1,1,0,0,0,0,59);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(525).to({_off:false},0).to({alpha:1},13,cjs.Ease.quadOut).wait(1));

	// LOGO
	this.instance_9 = new lib.LOGO();
	this.instance_9.setTransform(157.8,224.85,1,1,0,0,0,7.9,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(539));

	// BKGD-rubine
	this.instance_10 = new lib.BKGDrubine();
	this.instance_10.setTransform(150.1,192.2,1,1,0,0,0,0.1,67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(539));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,151,126);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 250,
	fps: 36,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/CO_AEP_300x250_atlas_P_1.png?1665077695332", id:"CO_AEP_300x250_atlas_P_1"},
		{src:"images/CO_AEP_300x250_atlas_NP_1.jpg?1665077695332", id:"CO_AEP_300x250_atlas_NP_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;