module.exports = {
    // 对应关系 es6高级语法对应的低级语法是什么样子
    presets: ["@babel/preset-env"],
    // 转化 高级语法转化为低级语法
    plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"]
}