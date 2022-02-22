import { Branch } from './branch.js';

export class Tree {
    constructor(ctx, posX, posY) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.branches = []; 

        this.init();
    }
    init() {
        this.createBranch(this.posX, this.posY);
        this.draw(this.ctx);
    }

    // 나뭇가지 생성하기
    createBranch(startX, startY) {
        const len = 200;    // 나무기둥 길이
        const endX = startX;
        const endY = startY - len;  // 아래 -> 위 방향으로 그려주기 때문에 

        this.branches.push(new Branch(startX, startY, endX, endY));
    }

    // 나뭇가지를 canvas 에 그리기 
    draw(ctx) {
        for (let i = 0 ; i < this.branches.length ; i++) {
            this.branches[i].draw(ctx);
          }
    }

}