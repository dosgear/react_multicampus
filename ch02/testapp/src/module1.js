let base = 100;
let add = (x) => {
    return base + x
}
let multifly = (x) => { return base * x };
let getBase = () => {
    return base;
}
export { add, multifly };
export default getBase;