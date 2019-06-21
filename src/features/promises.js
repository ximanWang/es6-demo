/**
 * Promises：处理异步操作的一种模式
 * @type {Promise<any>}
 */
//创建promise
let promise = new Promise(function (resolve, reject) {
    // 成功条件
    if (true) {
        resolve("Success !!");
    } else {
        reject(Error("Fail !!"));
    }
});

//绑定处理程序
promise.then((result) => {
    console.log(result);
}, function (err) {
    console.log(err);
}).then(() => console.log('===== then'));


