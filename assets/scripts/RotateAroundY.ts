
import { _decorator, Component, Node, CCFloat, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RotateAroundY
 * DateTime = Mon Mar 07 2022 20:20:31 GMT+1100 (Australian Eastern Daylight Time)
 * Author = PhalanxHead
 * FileBasename = RotateAroundY.ts
 * FileBasenameNoExtension = RotateAroundY
 * URL = db://assets/RotateAroundY.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('RotateAroundY')
export class RotateAroundY extends Component {
    // [1]
    // dummy = '';

    @property(CCFloat)
    rotateSpeed = 0;

    start() {
        // [3]
    }

    update(deltaTime: number) {
        const currRot = this.node.eulerAngles;
        this.node.setRotationFromEuler(0, currRot.y + deltaTime + this.rotateSpeed, 0);
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
