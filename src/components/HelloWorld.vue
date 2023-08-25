
<template>
  <div>
    <p>{{store.count}}</p>
    <hr/>
    <p>
      用户名: {{name}}, 总数: {{count}}
    </p>
    <button @click="updateCount">
      修改总数
    </button>
    {{store.arr}}
  </div>
</template>

<script  lang="ts">
import {storeToRefs} from 'pinia'
import {useStore} from "../store"
export default {
  name: 'HelloWorld',
  setup() {
    const store = useStore();
    console.log(store.count);
    const {name, count} = storeToRefs(useStore())
    const updateCount = () => {
      store.$patch({
        count: store.count + 1,
        name: '李四',
        arr: store.arr.push(100),
      })
    }
    return {
      store,
      name,
      count,
      updateCount
    }
  }
}
</script>

<style scoped>

</style>
