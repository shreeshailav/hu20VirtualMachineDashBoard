import {virualMachineReducer} from './../reducer';
import {ActionTypes,} from './../types'; 
import {fetchVmMachine,configureVM,VirtualMachineData} from './../actions'; 
import expect from 'expect';
// import getPostMock from '../mocks/getPostMock';
import { VitualMachineState } from "./../types";
export const virtualMachineData : VirtualMachineData = [];

// Type-safe initialState!
export const initialState: VitualMachineState = {
  isLoading: true,
  virtualMachineDetails: {
    totalPrice: 0,
  },
  region: [
    { regionId: "rg1", regionName: "US-Eats-1" },
    { regionId: "rg2", regionName: "Asia Pacific -Mumbai" },
    { regionId: "rg3", regionName: "US West-1" },
  ],
  vitualMachine: [
    {
      vmImageId: "vm123",
      vmName: "ubuntu",
      vmImageUrl: "string",
      vmDescription: "test ubuntu",
      regionId: "rg1",
      basicPrice: 400,
    },
    {
      vmImageId: "vm124",
      vmName: "ubuntu 18",
      vmImageUrl: "string",
      vmDescription: "test ubuntu 18",
      regionId: "rg2",
      basicPrice: 600,
    },
    {
      vmImageId: "vm125",
      vmName: "ubuntu 20",
      vmImageUrl: "string",
      vmDescription: "test ubuntu",
      regionId: "rg3",
      basicPrice: 700,
    },
  ],
  hostType: [
    { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
    { hostId: "host1", hostName: "64 Bit", priceOnHostType: 50 },
  ],
};
export const mock1: VitualMachineState = {
  isLoading: false,
  virtualMachineDetails: {
    totalPrice: 0,
  },
  region: [
    { regionId: "rg1", regionName: "US-Eats-1" },
    { regionId: "rg2", regionName: "Asia Pacific -Mumbai" },
    { regionId: "rg3", regionName: "US West-1" },
  ],
  vitualMachine: [
   
  ],
  hostType: [
    { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
    { hostId: "host1", hostName: "64 Bit", priceOnHostType: 50 },
  ],
};
describe('post reducer', () => {
 
  it('should handle FETCH_VM_MACHINE', () => {
    const startAction = {
      type: ActionTypes.FETCH_VM_MACHINE
    };
    expect(virualMachineReducer(initialState, startAction)).toEqual(mock1);
  });

  it('should handle DEFAULT case', () => {
    const startAction = {
      type: ""
    };
    expect(virualMachineReducer(initialState, startAction)).toEqual(initialState);
  });

  it('should handle NEW_VIRTUAL_MACHINE', () => {
    const updateAction = {
      type: ActionTypes.NEW_VIRTUAL_MACHINE,
      post: [],
    };
    expect(virualMachineReducer(initialState, updateAction)).not.toEqual(initialState);
  });

  test("fetch virtual machine data", () => {
    const regId = 'rg1';
    const action = fetchVmMachine(regId);
    expect(action).toEqual({
      payload: regId,
      type: ActionTypes.FETCH_VM_MACHINE
    });
  });

  test("configure VM data", () => {
    const action = configureVM(virtualMachineData);
    expect(action).toEqual({
      payload: virtualMachineData,
      type: ActionTypes.NEW_VIRTUAL_MACHINE
    });
  });
  
});