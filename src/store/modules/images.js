import api from '../../api/imgur';

const state={
images:[]
}

const getters={
    getAllImages:(state)=>{
       return state.images; 
    }
    
}

const actions={
   async fetchImages({rootState, commit})
   {
      const userToken=rootState.auth.token
      const resp= await api.fetchImages(userToken);
      console.log(resp.data);
     commit('setImages',resp.data.data);
    }
};

const mutations={
  setImages:(state, images)=>{
      state.images=images;
  }  
}

export default
{
  state,
  getters,
  actions,
  mutations
};