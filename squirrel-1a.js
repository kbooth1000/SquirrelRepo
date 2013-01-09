(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.squirrel1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// acorn
	this.instance = new lib.acorn();
	this.instance.setTransform(125.9,169,1,1,0,0,0,19,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(136));

	// Layer 7
	this.instance_1 = new lib.sqrl_scratching();
	this.instance_1.setTransform(94.1,165.5,1,1,0,0,0,-0.2,2.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({_off:true},40).wait(11));

	// Layer 5
	this.sqrl_walkRight_mc = new lib.sqrl_standing();
	this.sqrl_walkRight_mc.setTransform(94.4,162.4);
	this.sqrl_walkRight_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sqrl_walkRight_mc).wait(49).to({_off:false},0).to({_off:true},36).wait(40).to({_off:false},0).wait(11));

	// sqrl_walkRight
	this.instance_2 = new lib.Tween1();
	this.instance_2.setTransform(94.4,162.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:true},1).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.9,128,99,71.8);


// symbols:
(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(0.9,1,1).p("AgJAHQATgEAAgJ");
	this.shape.setTransform(8.3,9.3,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330000").ss(0.9,1,1).p("AgJAHQATgEAAgJ");
	this.shape_1.setTransform(7.1,10.6,1,1,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#330000").ss(0.9,1,1).p("AgJAHQATgEAAgJ");
	this.shape_2.setTransform(5.6,11.3,1,1,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s("#330000").ss(0.9,1,1).p("AAkgjQgVgEgYAIQgZAHgPAPQgPAOAEAOQAEANAVAEQAVAEAYgIQAZgHAPgPQAPgOgEgOQgEgNgVgEIAAAA").cp();
	this.shape_3.setTransform(3.2,8.2,1,1,0,180,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("ABHAHQgHARgGAXIgIAeQgJAaghgCQhIgFgMhZQgFgsATgfQAUggAoAAQAoAAAZAiQAaAjgSAmIAAAA").cp();
	this.shape_4.setTransform(-1.5,-1.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.4,-11.9,18.9,24);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s("#330000").ss(0.9,1,1).p("AAcCIQhBgGhAgtQg+grgthCQgthGgQhQQgDgOgMAvQgNAtAFAMQAgBOAxA6QAxA9A8AgQCEBICHhVQAqgZAchMIAXg7QAPgjARgWQAJgLgKgCQgKgDgIAKQgRAWgMAfIgRAzQgUBAgoAZQhAAohJgGIAAAA").cp();
	this.shape_5.setTransform(-0.5,-3.9,1,1,0,180,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#330000").s("#330000").ss(0.9,1,1).p("AjCg2QAuhaBlgmQBYghBXBCQBMA6ArBnQAGANgNAQQgMAQgGgNQgnhbhGg0QhQg7hPAeQhbAigWBeQgIAjAAA3IAABiQAAAOgpgTQgqgTACgNQAXiRAfg8IAAAA").cp();
	this.shape_6.setTransform(1.8,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996600").s("#330000").ss(3.6,1,1).p("ADjhaQgdArgVAWQg0A0hSAAQgrAAgYgfQgRgWgSg3QgVhEgLgXQgYgygmgXQgJgGgXANQgZAOgYAZQg/BBAABJQAAB/BhBbQBiBbCIAAQDzAAAAkwQAAgUAGgTIALgaQALgcgTgbIg7BW").cp();
	this.shape_7.setTransform(0.3,0,1,1,0,180,0);

	this.addChild(this.shape_7,this.shape_6,this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-24.7,60.2,49.7);


(lib.acorn = function() {
	this.initialize();

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C2800").s().p("AAOAQQgEAPgLAFIgKgEQgDgCAAgJQAAgVAOgZQAPgbAAAyQAAANgBAFIAAAA").cp();
	this.shape_8.setTransform(30.1,8.3);

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2F2601").s().p("ACLAKQAAAjgoAZQgqAZg5AAQg5AAgpgZQglgXgDggQAAgBAAgBQAAgCAAgBQAAgHABgEQACgOAigfQAigfAQgGQAQgHACgCQABgCAcAAQAcAAARADQAQACAWAOQAKAIAKAHQATAMALAVQAKAUAAARIAAAA").cp();
	this.shape_9.setTransform(30.1,19.1);

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#524600").s().p("AhXhlQAlgqAyAAQAzAAAlAqQAlAqAAA7QAAA7glArQglAqgzAAQgyAAglgqQglgrAAg7QAAg7AlgqIAAAA").cp();
	this.shape_10.setTransform(29.9,25.7);

	this.addChild(this.shape_10,this.shape_9,this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16.1,4.8,27.9,35.5);


(lib.squirreltail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(30.1,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},39).to({regX:30.7,regY:18.3,rotation:-6.6,x:60.8,y:43.1},1).to({scaleX:1,scaleY:1,rotation:-0.3},2).to({regX:30.8,regY:18.4,rotation:3.3,x:60.9},3).to({regX:30.7,regY:18.3,rotation:1.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.2,49.7);


(lib.sqrl_walkRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 4
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(16.5,11,0.998,0.998,16.8,0,0,-3.9,-11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:11.8,x:20.6,y:22.6},1).to({scaleX:1,scaleY:1,rotation:0,y:26.7},1).to({scaleX:1,scaleY:1,rotation:8.3,x:18.6},1).to({scaleX:1,scaleY:1,rotation:12.5,x:16.7,y:26.2},1).wait(1));

	// Layer 1
	this.instance_2 = new lib.squirreltail();
	this.instance_2.setTransform(-12.1,2.4,1,1,0,0,0,30.3,24.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#330000").s("#330000").ss(0.4,1,1).p("AgOgBQABAGAHAGQAGAHACgFIAIgHQAFgFABgFQABgNgRAEQgQADACAJIAAAA").cp();
	this.shape_11.setTransform(28.5,-30.5,1,1,0,180,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#330000").s("#330000").ss(0.5,1,1).p("AgSgIQgCAIADAKQAEAKAGgDIALgDQAIgCAFgIQAJgLgWgGQgJgEgEAAQgHABgCAIIAAAA").cp();
	this.shape_12.setTransform(19.5,-29.2,1,1,0,180,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s("#000000").ss(0.4,1,1).p("AgVAAQAAAJAHAHQAGAGAIAAQAJAAAHgGQAGgHAAgJQAAgHgGgHQgHgHgJAAQgIAAgGAHQgHAHAAAHIAAAA").cp();
	this.shape_13.setTransform(37.3,-17.2,1,1,0,180,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996600").s("#330000").ss(0.9,1,1).p("AAIAbQARgFAKgPQAQgXgqgMQgWgHgFABQgOAAgEAQQgGASAHATQAIAUAMgFIAXgH").cp();
	this.shape_14.setTransform(19.5,-29.3,1,1,0,180,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s("#000000").ss(0.4,1,1).p("AgVAAQAAAJAHAGQAGAHAIAAQAJAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgJAAQgIAAgGAHQgHAGAAAIIAAAA").cp();
	this.shape_15.setTransform(29.2,-23.5,1,1,0,180,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s("#000000").ss(0.9,1,1).p("AgsAAQAAASAOANQANAOARAAQASAAANgOQAOgNAAgSQAAgRgOgNQgNgOgSAAQgRAAgNAOQgOANAAARIAAAA").cp();
	this.shape_16.setTransform(29.2,-23.5,1,1,0,180,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s("#000000").ss(0.4,1,1).p("AgTAAQAAAIAGAGQAGAFAHAAQAIAAAGgFQAGgGAAgIQAAgGgGgGQgGgGgIAAQgHAAgGAGQgGAGAAAGIAAAA").cp();
	this.shape_17.setTransform(36.6,-23.5,1,1,0,180,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s("#000000").ss(0.8,1,1).p("AgnAAQAAAQAMAMQAMALAPAAQAQAAAMgLQAMgMAAgQQAAgPgMgLQgMgMgQAAQgPAAgMAMQgMALAAAPIAAAA").cp();
	this.shape_18.setTransform(36.6,-23.5,1,1,0,180,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("AhEAVQAEAPAYAFQAYAEAbgJQAdgIARgSQARgPgEgPQgFgPgYgFQgYgEgbAIQgdAJgRARQgRAPAFAQIAAAA").cp();
	this.shape_19.setTransform(29.4,2.8,1,1,0,180,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s("#000000").ss(0.9,1,1).p("AgPATIAfAAIAAglIgfAAIAAAl").cp();
	this.shape_20.setTransform(35.6,-12.2,1,1,0,180,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s("#330000").ss(1.3,1,1).p("AgegJQAAAqANAtQANArAIAAQALAAAKghQALgmgIgxQgVh6gPAAQgJAAgHAhQgGAhAAAuIAAAA").cp();
	this.shape_21.setTransform(29.7,9,1,1,0,180,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("Ag6ASQAEANAUADQAVAEAWgHQAZgIAOgOQAPgNgEgNQgEgNgUgEQgUgDgXAHQgYAIgPAOQgOANADANIAAAA").cp();
	this.shape_22.setTransform(34.8,1,1,1,0,180,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("AiRAAQAAAxAgAeQAjAhBAAAQBBAAAvghQAwghAAguQAAgtgwghQgvghhBAAQhAAAgjAhQggAeAAAwIAAAA").cp();
	this.shape_23.setTransform(27.9,-16.9,1,1,0,180,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("AhRiUQgiA+AABWQAABXAiA+QAiA+AvAAQAwAAAig+QAjg+AAhXQAAhWgjg+Qgig+gwAAQgvAAgiA+IAAAA").cp();
	this.shape_24.setTransform(21,5.5,1,1,0,180,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#996600").s("#330000").ss(0.9,1,1).p("AAYAPQANgLACgRQADgegqAJQgXAFgFACQgMAHADAQQAEARAPAPQAQAPAHgLIATgR").cp();
	this.shape_25.setTransform(28.5,-30.6,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_2}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_2}]},4).wait(1));

	// Layer 2
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(26.6,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:8.3,x:24.6},1).to({scaleX:1,scaleY:1,rotation:12.5,x:22.7,y:25.8},1).to({regX:-3.8,regY:-11.5,rotation:16.8,x:23.4,y:8.7},1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:11.8,x:26.4,y:20.4},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-34.3,85.1,71.8);


(lib.sqrl_standing = function() {
	this.initialize();

	// Layer 3
	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(16.6,13.6,0.998,0.998,16.8,0,0,-3.8,-11.6);

	this.instance_5 = new lib.squirreltail();
	this.instance_5.setTransform(-12.1,2.4,1,1,0,0,0,30.3,24.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#330000").s("#330000").ss(0.4,1,1).p("AgOgBQABAGAHAGQAGAHACgFIAIgHQAFgFABgFQABgNgRAEQgQADACAJIAAAA").cp();
	this.shape_26.setTransform(28.5,-30.5,1,1,0,180,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#330000").s("#330000").ss(0.5,1,1).p("AgSgIQgCAIADAKQAEAKAGgDIALgDQAIgCAFgIQAJgLgWgGQgJgEgEAAQgHABgCAIIAAAA").cp();
	this.shape_27.setTransform(19.5,-29.2,1,1,0,180,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s("#000000").ss(0.4,1,1).p("AgVAAQAAAJAHAHQAGAGAIAAQAJAAAHgGQAGgHAAgJQAAgHgGgHQgHgHgJAAQgIAAgGAHQgHAHAAAHIAAAA").cp();
	this.shape_28.setTransform(37.3,-17.2,1,1,0,180,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#996600").s("#330000").ss(0.9,1,1).p("AAIAbQARgFAKgPQAQgXgqgMQgWgHgFABQgOAAgEAQQgGASAHATQAIAUAMgFIAXgH").cp();
	this.shape_29.setTransform(19.5,-29.3,1,1,0,180,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s("#000000").ss(0.4,1,1).p("AgVAAQAAAJAHAGQAGAHAIAAQAJAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgJAAQgIAAgGAHQgHAGAAAIIAAAA").cp();
	this.shape_30.setTransform(29.2,-23.5,1,1,0,180,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s("#000000").ss(0.9,1,1).p("AgsAAQAAASAOANQANAOARAAQASAAANgOQAOgNAAgSQAAgRgOgNQgNgOgSAAQgRAAgNAOQgOANAAARIAAAA").cp();
	this.shape_31.setTransform(29.2,-23.5,1,1,0,180,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s("#000000").ss(0.4,1,1).p("AgTAAQAAAIAGAGQAGAFAHAAQAIAAAGgFQAGgGAAgIQAAgGgGgGQgGgGgIAAQgHAAgGAGQgGAGAAAGIAAAA").cp();
	this.shape_32.setTransform(36.6,-23.5,1,1,0,180,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s("#000000").ss(0.8,1,1).p("AgnAAQAAAQAMAMQAMALAPAAQAQAAAMgLQAMgMAAgQQAAgPgMgLQgMgMgQAAQgPAAgMAMQgMALAAAPIAAAA").cp();
	this.shape_33.setTransform(36.6,-23.5,1,1,0,180,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("AhEAVQAEAPAYAFQAYAEAbgJQAdgIARgSQARgPgEgPQgFgPgYgFQgYgEgbAIQgdAJgRARQgRAPAFAQIAAAA").cp();
	this.shape_34.setTransform(29.4,2.8,1,1,0,180,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s("#000000").ss(0.9,1,1).p("AgPATIAfAAIAAglIgfAAIAAAl").cp();
	this.shape_35.setTransform(35.6,-12.2,1,1,0,180,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s("#330000").ss(1.3,1,1).p("AgegJQAAAqANAtQANArAIAAQALAAAKghQALgmgIgxQgVh6gPAAQgJAAgHAhQgGAhAAAuIAAAA").cp();
	this.shape_36.setTransform(29.7,9,1,1,0,180,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("Ag6ASQAEANAUADQAVAEAWgHQAZgIAOgOQAPgNgEgNQgEgNgUgEQgUgDgXAHQgYAIgPAOQgOANADANIAAAA").cp();
	this.shape_37.setTransform(34.8,1,1,1,0,180,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("AiRAAQAAAxAgAeQAjAhBAAAQBBAAAvghQAwghAAguQAAgtgwghQgvghhBAAQhAAAgjAhQggAeAAAwIAAAA").cp();
	this.shape_38.setTransform(27.9,-16.9,1,1,0,180,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("AhRiUQgiA+AABWQAABXAiA+QAiA+AvAAQAwAAAig+QAjg+AAhXQAAhWgjg+Qgig+gwAAQgvAAgiA+IAAAA").cp();
	this.shape_39.setTransform(21,5.5,1,1,0,180,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#996600").s("#330000").ss(0.9,1,1).p("AAYAPQANgLACgRQADgegqAJQgXAFgFACQgMAHADAQQAEARAPAPQAQAPAHgLIATgR").cp();
	this.shape_40.setTransform(28.5,-30.6,1,1,0,180,0);

	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.setTransform(26.6,24.4);

	this.addChild(this.instance_6,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.instance_5,this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.4,-34.3,85.1,74.4);


(lib.sqrl_scratching = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 4
	this.instance_7 = new lib.Tween4("synched",0);
	this.instance_7.setTransform(16.6,13.6,0.997,0.997,16.8,0,0,-3.9,-11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:16.9,y:24.5},0).wait(1).to({y:23.2},0).wait(1).to({y:21.9},0).wait(1).to({y:20.5},0).wait(1).to({y:19.2},0).wait(1).to({y:17.9},0).wait(1).to({y:16.6},0).wait(1).to({y:19.9},0).wait(1).to({y:23.3},0).wait(1).to({y:15.6},0).wait(1).to({rotation:15.6,x:17.2,y:15.5},0).wait(1).to({rotation:14.3,x:17.4,y:15.4},0).wait(1).to({rotation:13,x:17.7,y:15.3},0).wait(1).to({rotation:11.8,x:18,y:25.8},0).wait(1).to({rotation:10.5,x:18.2,y:21.6},0).wait(1).to({rotation:9.3,x:18.5,y:17.3},0).wait(1).to({rotation:8,x:18.8,y:13.1},0).wait(1).to({rotation:6.8,x:19,y:25.6},0).wait(1).to({rotation:5.5,x:19.3,y:22.5},0).wait(1).to({rotation:4.3,x:19.6,y:19.5},0).wait(1).to({rotation:3,x:19.8,y:16.4},0).wait(1).to({rotation:1.8,x:20.1,y:13.3},0).wait(1).to({rotation:16.8,x:16.9,y:25.1},0).wait(1).to({y:25.2},0).wait(1).to({y:25.3},0).wait(1).to({regX:-3.7,regY:-11.4,x:16.6,y:13.6},0).wait(1).to({regX:0,regY:0,x:16.9,y:25.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 3
	this.instance_8 = new lib.squirreltail();
	this.instance_8.setTransform(-12.1,2.4,1,1,0,0,0,30.3,24.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#330000").s("#330000").ss(0.4,1,1).p("AgOgBQABAGAHAGQAGAHACgFIAIgHQAFgFABgFQABgNgRAEQgQADACAJIAAAA").cp();
	this.shape_41.setTransform(28.5,-30.5,1,1,0,180,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#330000").s("#330000").ss(0.5,1,1).p("AgSgIQgCAIADAKQAEAKAGgDIALgDQAIgCAFgIQAJgLgWgGQgJgEgEAAQgHABgCAIIAAAA").cp();
	this.shape_42.setTransform(19.5,-29.2,1,1,0,180,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s("#000000").ss(0.4,1,1).p("AgVAAQAAAJAHAHQAGAGAIAAQAJAAAHgGQAGgHAAgJQAAgHgGgHQgHgHgJAAQgIAAgGAHQgHAHAAAHIAAAA").cp();
	this.shape_43.setTransform(37.3,-17.2,1,1,0,180,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#996600").s("#330000").ss(0.9,1,1).p("AAIAbQARgFAKgPQAQgXgqgMQgWgHgFABQgOAAgEAQQgGASAHATQAIAUAMgFIAXgH").cp();
	this.shape_44.setTransform(19.5,-29.3,1,1,0,180,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s("#000000").ss(0.4,1,1).p("AgVAAQAAAJAHAGQAGAHAIAAQAJAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgJAAQgIAAgGAHQgHAGAAAIIAAAA").cp();
	this.shape_45.setTransform(29.2,-23.5,1,1,0,180,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s("#000000").ss(0.9,1,1).p("AgsAAQAAASAOANQANAOARAAQASAAANgOQAOgNAAgSQAAgRgOgNQgNgOgSAAQgRAAgNAOQgOANAAARIAAAA").cp();
	this.shape_46.setTransform(29.2,-23.5,1,1,0,180,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s("#000000").ss(0.4,1,1).p("AgTAAQAAAIAGAGQAGAFAHAAQAIAAAGgFQAGgGAAgIQAAgGgGgGQgGgGgIAAQgHAAgGAGQgGAGAAAGIAAAA").cp();
	this.shape_47.setTransform(36.6,-23.5,1,1,0,180,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s("#000000").ss(0.8,1,1).p("AgnAAQAAAQAMAMQAMALAPAAQAQAAAMgLQAMgMAAgQQAAgPgMgLQgMgMgQAAQgPAAgMAMQgMALAAAPIAAAA").cp();
	this.shape_48.setTransform(36.6,-23.5,1,1,0,180,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("AhEAVQAEAPAYAFQAYAEAbgJQAdgIARgSQARgPgEgPQgFgPgYgFQgYgEgbAIQgdAJgRARQgRAPAFAQIAAAA").cp();
	this.shape_49.setTransform(29.4,2.8,1,1,0,180,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s("#000000").ss(0.9,1,1).p("AgPATIAfAAIAAglIgfAAIAAAl").cp();
	this.shape_50.setTransform(35.6,-12.2,1,1,0,180,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s("#330000").ss(1.3,1,1).p("AgegJQAAAqANAtQANArAIAAQALAAAKghQALgmgIgxQgVh6gPAAQgJAAgHAhQgGAhAAAuIAAAA").cp();
	this.shape_51.setTransform(29.7,9,1,1,0,180,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("Ag6ASQAEANAUADQAVAEAWgHQAZgIAOgOQAPgNgEgNQgEgNgUgEQgUgDgXAHQgYAIgPAOQgOANADANIAAAA").cp();
	this.shape_52.setTransform(34.8,1,1,1,0,180,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("AiRAAQAAAxAgAeQAjAhBAAAQBBAAAvghQAwghAAguQAAgtgwghQgvghhBAAQhAAAgjAhQggAeAAAwIAAAA").cp();
	this.shape_53.setTransform(27.9,-16.9,1,1,0,180,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#996600").s("#330000").ss(1.3,1,1).p("AhRiUQgiA+AABWQAABXAiA+QAiA+AvAAQAwAAAig+QAjg+AAhXQAAhWgjg+Qgig+gwAAQgvAAgiA+IAAAA").cp();
	this.shape_54.setTransform(21,5.5,1,1,0,180,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#996600").s("#330000").ss(0.9,1,1).p("AAYAPQANgLACgRQADgegqAJQgXAFgFACQgMAHADAQQAEARAPAPQAQAPAHgLIATgR").cp();
	this.shape_55.setTransform(28.5,-30.6,1,1,0,180,0);

	this.instance_9 = new lib.Tween4("synched",0);
	this.instance_9.setTransform(26.6,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_8}]}).to({state:[{t:this.instance_9},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_8}]},26).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-34.3,85.1,74.4);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance_10 = new lib.sqrl_walkRight("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-34.3,85.1,74.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;