
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
      store.count++
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
