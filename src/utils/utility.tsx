 import {VitualMachines} from './../store/virtualMachin/types'
 export const getHostIndex = (vitualMachines: VitualMachines) => {
    const index =
      vitualMachines.hostType &&
      vitualMachines.hostType.findIndex((value) => value.hostId === "host2");
    return index ? index : 0;
  };
