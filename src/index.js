const EPS = 1e-5;
function integrate(fn, a, b) {
    let n = 100;
    let da = (b - a) / n;
    while (da > EPS) {
        n *= 2;
        da = (b - a) / n;
    }
    let S = 0;

    for (let i = 0; i < n; i++) {
        S += fn(a + i * da);
    }
    return S * da;
}


alert("Let's integrate!")
with (Math) {
    var func = prompt('Введите функцию для интегрирования:', 'sin(x)').trim();
    var f = eval('(x) => ' + func)
}

var inval = prompt('Введите границы интервала интегрирования через запятую:', '0, 1');
var [a, b] = inval.split(',').map(Number);

if (a > b) {
    alert('Левая граница интервала больше правой')
} else {
    let r = integrate(f, a, b);
    alert(`Интеграл функции f(x) = ${func} на интервале [${inval}] равен ${r}`);
}
