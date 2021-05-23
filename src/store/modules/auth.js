import api from '../../api/imgur';
import {router} from '../../main';

const state={
token:localStorage.getItem('userToken')
}

const getters={
    isLoggedIn:(state)=>state.token!==null?true:false
}

const actions={
  login:()=>
  {
    console.log('Test....');
    api.login()
  },

  finalizeLogin:({commit}, query)=>
  {
    console.log(query);
    commit('setToken', query);
    localStorage.setItem('userToken', query);
    router.push('/');
    
  },
  logout:({ commit })=>{
    console.log('logging out...');
    commit('setToken', null);
    localStorage.removeItem('userToken');
    }
}

const mutations={
 setToken:(state,token )=>{
state.token=token;
 }   
}

export default 
{
  state,
  getters,
  actions,
  mutations
}