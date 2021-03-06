import Vuex, {Store} from 'vuex';
import { shallow, createLocalVue } from '@vue/test-utils'
// import createStore from "~/store";
import {createStore} from "~/store/__mocks__";

import GinFooter from '~/components/GinFooter.vue';



// Tell Jest to use the mock
// implementation of the store.
jest.mock('~/store' );

const localVue = createLocalVue();
localVue.use(Vuex);

describe('GinFooter', function () {
  let storeMocks: Store<any>;
  let wrapper;

  beforeEach(() => {
    // Create a fresh store and wrapper
    // instance for every test case.
    storeMocks = createStore();
    wrapper = shallow(GinFooter, {
      store: storeMocks,
      localVue,
    });
  });

  it('should render', ()=>{
    expect(wrapper.text()).toContain(new Date().getUTCFullYear());
  });


  it('should be offline', async ()=>{
    await storeMocks.dispatch('setOffline');




    expect(wrapper.text()).toContain("offline")





  })

});


