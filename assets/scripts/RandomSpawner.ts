import { _decorator, Component, Node, Prefab, Vec2, Material, Vec3, instantiate, CCFloat, CCInteger, CCString, randomRange, RenderComponent, Color, MeshRenderer } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RandomSpawner
 * DateTime = Mon Mar 07 2022 20:42:36 GMT+1100 (Australian Eastern Daylight Time)
 * Author = PhalanxHead
 * FileBasename = RandomSpawner.ts
 * FileBasenameNoExtension = RandomSpawner
 * URL = db://assets/RandomSpawner.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('RandomSpawner')
export class RandomSpawner extends Component {
    @property(Prefab)
    spawningPrefab: Prefab;

    @property(CCInteger)
    spawnAmount = 10;

    @property(Vec2)
    positionRangeX = new Vec2(-10, 10);

    @property(Vec2)
    positionRangeY = new Vec2(-10, 10);

    @property(Vec2)
    positionRangeZ = new Vec2(-10, 10);

    @property(CCFloat)
    maxSize = 5;

    @property([Material])
    startingLesbianMaterials: Material[] = [];

    @property(CCString)
    startingSeed: string = "Hello World!";

    @property(Node)
    spawningParent: Node;

    currentMaterialIndex: number = 0;

    start() {
        console.log('Started!');
        console.log(`lesbian length: ${this.startingLesbianMaterials.length}`);
        const prefabIdx = Array.from(Array(this.spawnAmount).keys());
        prefabIdx.forEach(idx => {
            const posX = randomRange(this.positionRangeX.x, this.positionRangeX.y);
            const posY = randomRange(this.positionRangeY.x, this.positionRangeY.y);
            const posZ = randomRange(this.positionRangeZ.x, this.positionRangeZ.y);
            const size = randomRange(0, this.maxSize);

            const startPos = new Vec3(posX, posY, posZ);
            const prefab = prefabFactory(startPos, size, this.spawningPrefab, this.spawningParent);
            const renderer = prefab.getComponent(MeshRenderer);
            renderer.setMaterial(this.getNextMaterial(), 0);
        });
    }

    getNextMaterial(): Material {
        const thisMat = this.startingLesbianMaterials[this.currentMaterialIndex];

        this.currentMaterialIndex += 1;
        if (this.currentMaterialIndex >= this.startingLesbianMaterials.length) {
            this.currentMaterialIndex = 0;
        }

        return thisMat;
    }
}

function prefabFactory(startingPos: Vec3, size: number, prefab: Prefab, parent: Node) {
    const instPrefab = instantiate(prefab);
    instPrefab.setPosition(startingPos);
    instPrefab.setScale(size, size, size);
    parent.addChild(instPrefab);
    return instPrefab;
}
