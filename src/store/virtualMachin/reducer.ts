import { Reducer } from "redux";
import {
  VitualMachineState,
  ActionTypes,
  VitualMachines,
  StorageCapacity,
} from "./types";
import { initialStateConstant,extStorageCapacityOption } from "./../../utils/const";

// Type-safe initialState!
export const initialState: VitualMachineState = initialStateConstant

const reducer: Reducer<VitualMachineState> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_VM_MACHINE: {
      let vitualMachine: VitualMachines[] = initialState.vitualMachine;
      vitualMachine = vitualMachine.filter(
        (item) => item.regionId === action.payload
      );
      return { ...state, vitualMachine: vitualMachine, isLoading: false };
    }
    case ActionTypes.NEW_VIRTUAL_MACHINE: {
      return {
        ...state,
        virtualMachineDetails: action.payload,
        isLoading: false,
      };
    }
    case ActionTypes.REMOVE_STORAGE_CAPACITY: {
      let updatedStorageCapacity: StorageCapacity = state.storageCapacity;
      const storageCapacityOption = updatedStorageCapacity.storageCapacityOption?.filter(
        (item) => item.storageType === "ROOT"
      );
      updatedStorageCapacity.storageCapacityOption = storageCapacityOption;
      return {
        ...state,
        storageCapacity: updatedStorageCapacity,
        isLoading: false,
      };
    }
    case ActionTypes.ADD_STORAGE_CAPACITY: {
      let updatedStorageCapacity: StorageCapacity = state.storageCapacity;
      updatedStorageCapacity.storageCapacityOption &&
        updatedStorageCapacity.storageCapacityOption.push(
          extStorageCapacityOption
        );
      if (
        updatedStorageCapacity.storageCapacityOption &&
        updatedStorageCapacity.storageCapacityOption[1].type.value === "SSD"
      ) {
        updatedStorageCapacity.storageCapacityOption[1].price = 40;
      } else if (
        updatedStorageCapacity.storageCapacityOption &&
        updatedStorageCapacity.storageCapacityOption[1].type.value === "EXT"
      ) {
        updatedStorageCapacity.storageCapacityOption[1].price = 2;
      }
      return {
        ...state,
        storageCapacity: updatedStorageCapacity,
        isLoading: false,
      };
    }
    case ActionTypes.UPDATE_STORAGE_CAPACITY: {
      return {
        ...state,
        storageCapacity: action.payload,
        isLoading: false,
      };
    }
    case ActionTypes.ADD_SECURITY_POLICY: {
      let securityPolicy = state.securityPolicy;
      securityPolicy.push(action.payload)
      return {
        ...state,
        securityPolicy: securityPolicy,
        isLoading: false,
      };
    }
    case ActionTypes.CLEAR_ALL_DETAILS: {
      return {
        ...initialState,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as virualMachineReducer };
