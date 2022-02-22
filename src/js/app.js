import { Tree } from './tree.js';

class App {
    constructor() {
        // 캔버스 생성 및 랜더링
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);

        // context 생성하기
        this.ctx = this.canvas.getContext('2d');
        
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // 화면 가운데에 나무 생성하기 
        new Tree(this.ctx, this.width / 2, this.height);

    }   // end - constructor

     // window 창에 따라 canva 사이즈 조절
     resize() {
        // body 의 너비 및 높이 저장하기
        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight;

        // 디스플레이 비율에 맞춰 canvas 사이즈와 비율 조정
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        // resize 할 경우 canvas clear 
        this.ctx.clearRect(0, 0, this.width, this.height);
    };

}   // end - class

window.onload = () => {
    new App();
}