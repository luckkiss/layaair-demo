let 
	prevX = 0,
	prevY = 0;

class Text_Scroll {
	constructor() {
		const 
			Browser = Laya.Browser,
			WebGL = Laya.WebGL,
			Stage = Laya.Stage,
			Stat = Laya.Stat;

		// 不支持WebGL时自动切换至Canvas
		Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);

		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;

		Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
		Laya.stage.bgColor = "#232628";

		this.createText();
	}

	createText() {
		const 
			Text = Laya.Text,
			Event = Laya.Event;

		this.txt = new Text();
		Laya.stage.addChild(this.txt);
		this.txt.overflow = Text.SCROLL;
		this.txt.text =
			"Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
			"Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
			"Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
			"Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
			"Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
			"Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";

		this.txt.size(200, 100);
		this.txt.x = Laya.stage.width - this.txt.width >> 1;
		this.txt.y = Laya.stage.height - this.txt.height >> 1;

		this.txt.borderColor = "#FFFF00";

		this.txt.fontSize = 20;
		this.txt.color = "#ffffff";

		this.txt.on(Event.MOUSE_DOWN, this, this.startScrollText);
	}

	/* 开始滚动文本 */
	startScrollText(e) {
		const Event = Laya.Event;

		prevX = this.txt.mouseX;
		prevY = this.txt.mouseY;

		Laya.stage.on(Event.MOUSE_MOVE, this, this.scrollText);
		Laya.stage.on(Event.MOUSE_UP, this, this.finishScrollText);
	}

	/* 停止滚动文本 */
	finishScrollText(e) {
		const Event = Laya.Event;

		Laya.stage.off(Event.MOUSE_MOVE, this, this.scrollText);
		Laya.stage.off(Event.MOUSE_UP, this, this.finishScrollText);
	}

	/* 鼠标滚动文本 */
	scrollText(e) {
		const Event = Laya.Event;

		let nowX = this.txt.mouseX;
		let nowY = this.txt.mouseY;

		this.txt.scrollX += prevX - nowX;
		this.txt.scrollY += prevY - nowY;

		prevX = nowX;
		prevY = nowY;
	}
}

new Text_Scroll();