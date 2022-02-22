export class Branch {
    constructor(startX, startY, endX, endY, lineWidth) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.color = '#000000';
        this.lineWidth = lineWidth;

        this.frame = 100; // 가지를 100등분으로 나누기 위한 변수 frame 선언
        this.cntFrame = 0; // 현재 frame
        
        // 가지의 길이를 frame으로 나누어 구간별 길이를 구함
        this.gapX = (this.endX - this.startX) / this.frame;
        this.gapY = (this.endY - this.startY) / this.frame;

        // 구간별 가지가 그려질 때 끝 좌표
        this.currentX = this.startX;
        this.currentY = this.startY;
    }

    // 그리기 
    draw(ctx) {
        ctx.beginPath();

        ctx.moveTo(this.startX, this.startY); // 선의 시작 위치 지정
        ctx.lineTo(this.endX, this.endY); // 선의 끝 위치 지정

        if (this.lineWidth < 3) {
        ctx.lineWidth = 0.5;
        } else if (this.lineWidth < 7) {
        ctx.lineWidth = this.lineWidth * 0.7;
        } else if (this.lineWidth < 10) {
        ctx.lineWidth = this.lineWidth * 0.9;
        } else {
        ctx.lineWidth = this.lineWidth;
        }
        
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;

        ctx.stroke();
        ctx.closePath();
    }
}