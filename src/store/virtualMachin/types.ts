export interface Region {
  key: string;
  value: string;
}
export interface HostType {
  hostId: string;
  hostName: string;
  priceOnHostType: number;
}
export interface VitualMachines {
  vmImageId: string;
  vmName: string;
  vmImageUrl: string;
  vmDescription: string;
  regionId: string;
  basicPrice: number;
  hostType?:HostType[]
}

export interface memory {
  key: string;
  value: string;
  memoryPrice?: number;
}
export interface cpu {
  key: string;
  value: string;
  cpuPrice?: number;
}

export interface InstanceTypeOption {
  InstanceTypeOptionId: string;
  InstanceTypeOptionName: string;
  memoryAvailable: memory[];
  cpuCoreAvailable: cpu[];
}

export interface InstanceType {
  instanceTypeId: string;
  instanceTypeName: string;
  instanceTypeSelectedCpu: string;
  instanceTypeSelectedMemeory: string;
  memoryPrice: number;
  cpuPrice: number;
}

export interface VirtualMachineData {
  vitualMachines?: VitualMachines;
  hostType?: HostType;
  instanceType?: InstanceType;
  totalPrice?: number;
  storageCapacity?: StorageCapacity;
  securityPolicy?:SecurityPolicy;
}

export interface storageType {
  key: string;
  value: string;
  storageTypePrice?: number;
}
export interface TypeStorage {
  key: string;
  value: string;
  typeStoragePrice?: number;
}
export interface storageType {
  key: string;
  value: string;
  storageTypePrice?: number;
}
export interface StorageCapacityOption {
  storageCapacityOptionId: string;
  storageType: string;
  type: storageType;
  valume: string;
  capacity: number;
  encryption: boolean;
  iops: number;
  backupRequired: boolean;
  remark: string;
  price: number;
}

export interface StorageCapacity {
  storageCapacityId: string;
  storageCapacityOption?: StorageCapacityOption[];
  bandwidth: number;
  bandwidthPrice: number;
}

export interface SecurityType {
  key: string;
  value: string;
}

export interface SecurityPolicy {
  securityPolicyId: string;
  securityPolicyName: string;
  securityPolicyType: string;
  securityPolicyProtocol: string;
  securityPolicyPort: number;
  securityPolicySource: string;
  securityPolicyDescription: string;
  key: string;
  value: string;
}

export enum ActionTypes {
  FETCH_VM_MACHINE = "FETCH_VM_MACHINE",
  NEW_VIRTUAL_MACHINE = "NEW_VIRTUAL_MACHINE",
  UPDATE_STORAGE_CAPACITY = "UPDATE_STORAGE_CAPACITY",
  REMOVE_STORAGE_CAPACITY = "REMOVE_STORAGE_CAPACITY",
  ADD_STORAGE_CAPACITY = "ADD_STORAGE_CAPACITY",
  ADD_SECURITY_POLICY = "ADD_SECURITY_POLICY",
  CONFIG_SECURITY_POLICY = "CONFIG_SECURITY_POLICY",
  CLEAR_ALL_DETAILS = "CLEAR_ALL_DETAILS",
}

export interface VitualMachineState {
  readonly virtualMachineDetails: VirtualMachineData;
  readonly region: Region[];
  readonly vitualMachine: VitualMachines[];
  readonly hostType: HostType[];
  readonly instanceType: InstanceType;
  readonly instanceTypeOption: InstanceTypeOption[];
  readonly storageCapacity: StorageCapacity;
  readonly typeStorage: TypeStorage[];
  readonly securityPolicy: SecurityPolicy[];
  readonly isLoading: boolean;
}
