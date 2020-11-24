//--------------------------------------------------------
//1.判断空对象
//for in 判断是否有属性

function isEmptyObject(obj) {

    for (let key in obj) {
        return false
    }
    return true;
}

isEmptyObject({});           //true
isEmptyObject([]);          //true
isEmptyObject(null);          //true
isEmptyObject(1);          //true
isEmptyObject('');          //true
isEmptyObject(undefined);          //true
isEmptyObject([1, 2, 3]);          //false

function isEmptyObject(obj) {
    if (typeof obj !== 'object' || obj === null) return

    for (let key in obj) {
        return false
    }
    return true;
}


//--------------------------------------------------------
//2.判断是否是window对象
//Window 对象作为客户端 JavaScript 的全局对象，它有一个 window 属性指向自身

function isWindow(obj) {
    return obj != null && obj === obj.window;
}

//--------------------------------------------------------
//3.数组判断
//模拟 underscore

const isArray = Array.isArray || function (array) {
    return Object.prototype.toString.call(array) === '[object Array]';
}

//--------------------------------------------------------
//4.isNaN
//
function isNewNaN(value) {
    return typeof value === 'number' && isNaN(value);
}

//--------------------------------------------------------
//5.判断是不是 DOM 元素
//

isElement = function (obj) {
    return !!(obj && obj.nodeType === 1);
};

//首先要对HTMLElement进行类型检查，因为即使在支持HTMLElement
//的浏览器中，类型却是有差别的，在Chrome,Opera中HTMLElement的
//类型为function，此时就不能用它来判断了
var isDOM = (typeof HTMLElement === 'object') ?
    function (obj) {
        return obj instanceof HTMLElement;
    } :
    function (obj) {
        return obj && typeof obj === 'object' && (obj.nodeType === 1 || obj.nodeType === 9) && typeof obj.nodeName === 'string';
    }

//--------------------------------------------------------
//6.判断是不是 类数组(包含数组)
//

// function isLength(value) {
//     return typeof value === 'number' &&
//         value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
// }
//
// function isArrayLike(value) {
//     return !!value && typeof value !== 'function'&&typeof value!=='window'&& isLength(value.length)
// }


function isArrayLike(obj) {

    // obj 必须有 length属性
    var length = !!obj && "length" in obj && obj.length;
    var typeRes = type(obj);

    // 排除掉函数和 Window 对象
    if (typeRes === "function" || isWindow(obj)) {
        return false;
    }

    return typeRes === "array" || length === 0 ||
        typeof length === "number" && length > 0 && (length - 1) in obj;
}
