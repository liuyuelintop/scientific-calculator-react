import { sqrt, cbrt, pow, pi, log, exp, evaluate, cos, sin, tan, log1p } from 'mathjs';

function backspace(value) {
    return value.slice(0, -1);
}

function clear() {
    return '';
}

function computeSquareRoot(value) {
    return sqrt(value).toString();
}

function computeCubicRoot(value) {
    return cbrt(value).toString();
}

function computeSquare(value) {
    return pow(value, 2).toString();
}

function computeCubic(value) {
    return pow(value, 3).toString();
}

function computePower(value, power) {
    return evaluate([value, pow(value, power)]).toString();
}

function computePi() {
    return pi.toString();
}

function computeNaturalLog(value) {
    return log(value).toString();
}

function computeLogBase10(value) {
    return Math.log10(value).toString();
}

function computeExp(value) {
    return exp(value).toString();
}

function computeCos(value) {
    return cos(value).toString();
}

function computeSin(value) {
    return sin(value).toString();
}

function computeTan(value) {
    return tan(value).toString();
}

function computeFactorial(value) {
    // Note: The original code seems to be missing the implementation of factorial from mathjs.
    return Math.factorial(value).toString(); // You might need to import or define the factorial function.
}

function computeLog1p(value) {
    return log1p(value).toString();
}

function calculateResult(value) {
    try {
        return evaluate(value).toString();
    } catch (error) {
        return 'Error';
    }
}

const funcs = {
    backspace,
    clear,
    computeSquareRoot,
    computeCubicRoot,
    computeSquare,
    computeCubic,
    computePower,
    computePi,
    computeNaturalLog,
    computeLogBase10,
    computeExp,
    computeCos,
    computeSin,
    computeTan,
    computeFactorial,
    computeLog1p,
    calculateResult
}

export { funcs };
