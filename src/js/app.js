import { Tree } from './tree.js';

class App {
    constructor() {
        // 캔버스 생성 및 랜더링
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);

        // context 생성하기
        this.ctx = this.canvas.getContext('2d');
        // 레티나 디스플레이에서도 제대로 보이기 위해
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // 화면 가운데에 나무 생성하기 
        new Tree(this.ctx, this.width / 2, this.height);

    }   // end - constructor

     // window 창에 따라 canva 사이즈 조절
     resize() {
        // body의 너비와 높이 저장
        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight * 4;

        // 디스플레이 비율에 맞추어 캔버스 사이즈와 비율 조정
        this.canvas.width = this.width * this.pixelRatio;
        this.canvas.height = this.height * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        // 리사이즈시 캔버스를 비워줌
        this.ctx.clearRect(0, 0, this.width, this.height);
    };

}   // end - class

window.onload = () => {
    new App();
}