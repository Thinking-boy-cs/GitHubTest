/*
 * @Author: your name
 * @Date: 2020-11-23 13:30:50
 * @LastEditTime: 2020-11-25 01:18:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webapp\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
// import { ContextExclusionPlugin } from 'webpack'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    stompClient: null,
    ws: null,
    subscribes: {}
  },
  mutations: {
    /**
     * @description:
     * @param {*} state
     * @param {*} config
      {
        'userId': '',
        'subscibes': [],
        'onmessage': f,
        'connectCallBack': f,
        'errorCallBack': f
      }
     * @return {*}
     */
    connect (state, config) {
      state.ws = new SockJS('/api/pigeon/sjs', null, {timeout: 15000})
      state.stompClient = Stomp.over(state.ws)
      state.stompClient.connect({}, (res) => {
        config.subscribes.forEach((item, i) => {
          console.log('in store:', item)
          state.subscribes[item] = state.stompClient.subscribe(item, config.onmessage)
        })
      }, config.errorCallBack)
    },
    disconnect (state) {
      if (state.stompClient) {
        state.stompClient.disconnect()
        console.log('Disconnected')
      }
    },
    send (state) {

    }
  },
  actions: {
    connectFunc (context, config) {
      context.commit('connect', config)
    },
    disconnectFunc (context) {
      context.commit('disconnect')
    }
  }
})

export default store
