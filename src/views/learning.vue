<template>
  <div>
    <syntax></syntax>
    <computed></computed>
    <class-and-style></class-and-style>
    <conditional></conditional>
    <list></list>
    <events></events>
    <slot name="conslot"></slot>
    <div :style="{ fontSize: postFontSize+'em'}" slot="fdwz">放大文字</div>
    <froms :czcon="zjdprops"  @alertbtn="alertmsg" @enlarge-text="postFontSize += 0.1"></froms>
    <componentzj></componentzj>
    <!-- tab组件 -->
    <ul>
      <li v-for="(item, index) in tabtitle" :key="index"  @click="tabnav(index)">
        <a href="javascript:void(0);" :class="{active: item.isActive}">{{ item.navtitle}}</a>
      </li>
    </ul>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
    <ul>
      <li v-for="(item, index) in tabs" :class="{active: item.isActive}" :key="index"  @click="tab(index, tabs)">{{item.title}}</li>
    </ul>
    <div>
      <p v-for="(item, index) in tabContents" :key="index" v-show="index===num">{{item}}</p>
    </div>
    <p>{{this.$store.state.count}}</p>
    <button @click="addcount">add</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import syntax from '@/components/learning/syntax.vue'
import computed from '@/components/learning/computed.vue'
import classAndStyle from '@/components/learning/class-and-style.vue'
import conditional from '@/components/learning/conditional.vue'
import list from '@/components/learning/list.vue'
import events from '@/components/learning/events.vue'
import froms from '@/components/learning/froms.vue'
import componentzj from '@/components/learning/components.vue'
import tabOne from '@/components/learning/tabone.vue'
import tabTwo from '@/components/learning/tabtwo.vue'
export default {
  data () {
    return {
      postFontSize: 1,
      currentView: tabOne,
      tabs: [
        {title: '标题一', isActive: 0},
        {title: '标题二', isActive: 0},
        {title: '标题三', isActive: 0}
      ],
      tabContents: ['内容一', '内容二', '内容三'],
      num: 1,
      zjdprops: [
        {
          title: 'a'
        },
        {
          title: 'b'
        },
        {
          title: 'c'
        }
      ],
      alertmsgcon: '父组件内容',
      tabtitle: [
        {
          navtitle: '标题1',
          isActive: 0
        },
        {
          navtitle: '标题2',
          isActive: 0
        }
      ]
    }
  },
  methods: {
    ...mapMutations({
      count: 'count'
    }),
    addcount () {
      this.$store.commit('count', {amount: 10})
    },
    alertmsg () {
      alert(this.alertmsgcon)
    },
    tabnav (index) {
      if (index === 0) {
        this.currentView = tabOne
        this.tabtitle[index].isActive = 1
      } else {
        this.currentView = tabTwo
        this.tabtitle[index].isActive = 1
      }
    },
    tab (index, tabs) {
      this.num = index
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].isActive = 0
      }
      tabs[index].isActive = 1
    }

  },
  components: {
    syntax,
    computed,
    classAndStyle,
    conditional,
    list,
    events,
    froms,
    componentzj,
    tabOne,
    tabTwo
  }
}
</script>

<style scoped>
  ul li a{
    display: inline-block;
    list-style: normal;
  }
  .active{
    color: red
  }
</style>
