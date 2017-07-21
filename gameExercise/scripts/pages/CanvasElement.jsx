import React from 'react';

class CanvasElement extends React.Component {
    constructor(){
		super();
		this.state:{
			image:'3.bmp'}
	}
	
	componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 100, 100);
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }



	
	countdown3(){
		return(<img src="3.bmp" alt="3image" style="width:300px;height:300px;">);
	}
	countdown2(){
		return(<img src="2.bmp" alt="2image" style="width:300px;height:300px;">);
	}
	countdown1(){
		return(<img src="1.bmp" alt="1image" style="width:300px;height:300px;">);
	}
}