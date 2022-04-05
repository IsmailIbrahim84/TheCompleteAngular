// function log(message)
// {
//     console.log(message);
// }
// var message = 'Hello World';
// log(message);


let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] =  [1, true, 'a', false];

const colorRed=0;
const colorGreen=1;
const colorBlue=2;

enum Color {Red, Green, Blue};
let backgroundColor = Color.Red;

//Using Type Assertion:
let message;
message = 'abc';
let endsWithC = (<string>message).trim();
let alternativeWay = (message as string).trim();

//Arrow Function:
let log = function (message) {
    console.log(message);
}

let doLog = ()=> console.log();


//Inline Annotation:
//let drawPoint = (point: {x: number, y: number}) => {
    //..
//}

interface Point {x: number, y: number, draw: () => void}

let drawPoint = (point: Point)=> {

}

drawPoint({
    draw(): void {
    }, x:1 , y:2})


//Adding class:
class PointClass {
    x: number;
    y: number;

    draw(){

    }

    getDistance(another: Point){

    }
}
let point1 = new PointClass();
point1.x = 1;
point1.y = 2;
point1.draw();

//Class with Access modifier in Constructor parameters
class PointB {
    constructor(private _x?: number, private _y?: number) {
    }
    draw(){
        console.log('X: '+ this._x + ', Y: '+this._y);
    }

    get x(){
        return this._x;
    }
    set x(value){
        if (value<0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }
}
