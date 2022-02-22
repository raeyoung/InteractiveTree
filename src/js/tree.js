import { Branch } from './branch.js';

export class Tree {
    constructor(ctx, posX, posY) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.branches = []; 
        this.depth = 5; // depth 추가

        this.init();
    }
    init() {
        // 시작 각도는 -90도로 아래에서 위로 나무 기둥이 자라도록한다.
        // 시작 depth는 0으로 준다.
        this.createBranch(this.posX, this.posY, -90, 0);
        this.draw(this.ctx);
    }

    // 나무 생성하기
    createBranch(startX, startY, angle, depth) {
        if (depth === this.depth) return;
    
        const len = 100; // 나무의 길이 100으로 변경
        const endX = startX + this.cos(angle) * len;
        const endY = startY + this.sin(angle) * len;
    
        this.branches.push(new Branch(startX, startY, endX, endY));
    
        this.createBranch(endX, endY, angle - 30, depth + 1);
        this.createBranch(endX, endY, angle + 30, depth + 1);
      }

    // 나무를 canvas 에 그리기 
    draw(ctx) {
        for (let i = 0 ; i < this.branches.length ; i++) {
            this.branches[i].draw(ctx);
          }
    }

    // 각도 관련 함수 추가
    cos(angle) {
        return Math.cos(this.degToRad(angle));
    }
    sin(angle) {
        return Math.sin(this.degToRad(angle));
    }
    degToRad(angle) {
        return (angle / 180.0) * Math.PI;
    }
}