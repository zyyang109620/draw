import Vue from 'vue';
import Vuex from 'vuex';
import {
  setData,
  resultField,
  newLotteryField,
  listField
} from '@/helper/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: { //預設抽獎設定
      name: '團拜抽獎',
      number: 259,
      firstPrize: 1
    },
    result: {
      firstPrize: []
    },
    newLottery: [],
    list: [],
    photos: []
  },
  mutations: { //重置抽獎設定
    setClearConfig(state) {
      state.config = {
        name: '團拜抽獎',
        number: 259,
        firstPrize: 1
      };
      state.newLottery = [];
    },
    setClearList(state) { //重置匯入名單
      state.list = [];
    },
    setClearPhotos(state) { //重置相片
      state.photos = [];
    },
    setClearResult(state) { //重置抽獎結果
      state.result = { //抽獎結果的頁面名單重置
        firstPrize: []
      };
    },
    setClearStore(state) { //重置全部資料
      state.config = { 
        name: '團拜抽獎',
        number: 259,
        firstPrize: 1
      };
      state.result = { //重置全部資料
        firstPrize: [] //第1獎
      };
      state.newLottery = [];
      state.list = [];
      state.photos = [];
    },
    setConfig(state, config) { 
      state.config = config; 
    },
    setResult(state, result = {}) {
      state.result = result;

      setData(resultField, state.result);
    },
    setNewLottery(state, newLottery) {
      if (state.newLottery.find(item => item.name === newLottery.name)) {
        return;
      }
      state.newLottery.push(newLottery);
      setData(newLotteryField, state.newLottery);
    },
    setList(state, list) {
      const arr = state.list;
      list.forEach(item => {
        const arrIndex = arr.findIndex(data => data.key === item.key);
        if (arrIndex > -1) {
          arr[arrIndex].name = item.name;
        } else {
          arr.push(item);
        }
      });
      state.list = arr;

      setData(listField, arr);
    },
    setPhotos(state, photos) {
      state.photos = photos;
    }
  },
  actions: {},
  modules: {}
});
