export default {
    install(Vue) {
        Vue.directive('fbind', {
                //指令与元素成功绑定时
                bind(el, binding) {
                    el.value = binding.value;
                },
                //指令所在元素被插入页面时
                inserted(el) {
                    el.focus();
                },
                //指令所在的模板被重新解析时
                update(el, binding) {
                    el.focus();
                    el.value = binding.value;
                },
            }),
            Vue.mixin({
                data() {
                    return {
                        x: 123,
                        y: 896
                    }
                },
            })
    }
}