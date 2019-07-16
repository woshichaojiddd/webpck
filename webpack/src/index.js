// 导入jquery
import $ from "jquery"

// 导入css文件
import "./css/1.css"

// 导入less文件
import "./css/2.less"


$(function() {
    $('li:odd').css('backgroundColor', 'red')
})

// 高级js语法
class Person {
    static info = 'aaa'
}

console.log(Person.info);


// 导入vue
import Vue from "vue"
// 导入App.vue
import App from "../components/App.vue"

new Vue({
    el: '#app',
    // 传谁显示谁
    render: h => h(App)
})