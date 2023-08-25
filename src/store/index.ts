import {defineStore} from "pinia";

//第一个参数表示这个容器的编号
export const useStore = defineStore('main',{
    state: () => {
        return {
            count: 31,
            name: '张三hello',
            arr: [1,3,5,6,8]
        }
    },
    //类似组件中的计算属性,具有缓存功能
    getters: {

    },
    actions: {

    }
})
