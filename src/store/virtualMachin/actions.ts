import { action } from "typesafe-actions";
import {
  ActionTypes,
  VirtualMachineData,
  StorageCapacity,
  SecurityPolicy,
} from "./types";

export const fetchVmMachine = (regId: string) =>
  action(ActionTypes.FETCH_VM_MACHINE, regId);
export const configureVM = (virtualMachineData: VirtualMachineData) =>
  action(ActionTypes.NEW_VIRTUAL_MACHINE, virtualMachineData);
export const updateStorageCapacity = (storageCapacity: StorageCapacity) =>
  action(ActionTypes.UPDATE_STORAGE_CAPACITY, storageCapacity);
export const addStorageCapacity = () =>
  action(ActionTypes.ADD_STORAGE_CAPACITY);
export const removeStorageCapacity = () =>
  action(ActionTypes.REMOVE_STORAGE_CAPACITY);
export const addPolicy = (securityPolicy: SecurityPolicy) =>
  action(ActionTypes.ADD_SECURITY_POLICY, securityPolicy);
  export const clearAllData = () =>
  action(ActionTypes.CLEAR_ALL_DETAILS);