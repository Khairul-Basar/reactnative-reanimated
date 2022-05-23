import {
    useAnimatedStyle, useSharedValue, withSequence, withSpring, withTiming,
} from "react-native-reanimated";

const AnimateType = {HR: 0, B1: 1, B2: 2, B3: 3}
const POSITIONS = [{x: 0, y: 0}, {x: 0, y: 170}, {x: 180, y: 170}, {x: 180, y: 0}];

class Player {

    constructor(position: number, id: number) {
        this.position = position;
        this.id = id; // constant
        this.tx = useSharedValue(POSITIONS[position].x);
        this.ty = useSharedValue(POSITIONS[position].y);
    }

    isAtHome(): boolean {
        return this.position === 0;
    }

    getStyle() {
        const tx = this.tx;
        const ty = this.ty;
        return useAnimatedStyle(() => {
            return {
                transform: [
                    {translateX: tx.value},
                    {translateY: ty.value},
                ]
            }
        }, []);
    }

    getNextPosition(animateType: AnimateType) {
        if (animateType === AnimateType.HR) {
            return 0;
        }

        let next = this.position + animateType;

        if (next >= 4) {
            next = 0;
        }

        return next;
    }

    // return example: [{x: 0, y: 0}, {x: 0, y: 170}]
    // this method is used to get the animation path
    // because for multiple animation we will use withSequence
    getAnimatingPaths(oldPosition: number, nextPosition: number): Object[] {
        let paths = [];
        let end = nextPosition === 0 ? 3 : nextPosition;

        for (let i = oldPosition + 1; i <= end; i++) {
            paths.push({x: POSITIONS[i].x, y: POSITIONS[i].y});
        }

        if (nextPosition === 0) {
            paths.push({x: POSITIONS[0].x, y: POSITIONS[0].y});
        }

        return paths;
    }

    // returns the next position
    animate(type: AnimateType): number {
        const nextPosition = this.getNextPosition(type);
        const paths = this.getAnimatingPaths(this.position, nextPosition);
        const animatingPathsCount = paths.length;

        // console.log("Animating", this, "; to, x:", x, "y:", y, "nextPos:", nextPosition);
        console.log("id", this.id, "cur pos", this.position, "nextPos", nextPosition, "paths", paths);

        this.position = nextPosition;

        if (animatingPathsCount === 1) {
            this.tx.value = withTiming(paths[0].x);
            this.ty.value = withTiming(paths[0].y);
        } else if (animatingPathsCount === 2) {
            this.tx.value = withSequence(withTiming(paths[0].x), withSpring(paths[1].x));
            this.ty.value = withSequence(withTiming(paths[0].y), withSpring(paths[1].y));
        } else if (animatingPathsCount === 3) {
            this.tx.value = withSequence(withTiming(paths[0].x), withTiming(paths[1].x), withSpring(paths[2].x));
            this.ty.value = withSequence(withTiming(paths[0].y), withTiming(paths[1].y), withSpring(paths[2].y));
        } else if (animatingPathsCount === 4) {
            this.tx.value = withSequence(withTiming(paths[0].x), withTiming(paths[1].x), withTiming(paths[2].x), withSpring(paths[3].x));
            this.ty.value = withSequence(withTiming(paths[0].y), withTiming(paths[1].y), withTiming(paths[2].y), withSpring(paths[3].y));
        }

        return nextPosition;
    }
}

module.exports = {
    Player,
    AnimateType,
};