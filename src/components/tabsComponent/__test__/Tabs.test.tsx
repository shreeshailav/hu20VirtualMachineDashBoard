import * as React from "react";
import { cleanup, render } from "@testing-library/react";

import {
  VirtualMachineData,
  VitualMachines,
  HostType,
  InstanceTypeOption,
  StorageCapacity,
  TypeStorage,
  SecurityPolicy,
  InstanceType
} from "./../../../store/virtualMachin/types";
import Tabs from "./../Tabs";
import InstanceTabs from "./../../chooseInstanceComponent/InstanceTabs";
import Tab from "./../Tab";

const virtualMachineDetails: VirtualMachineData = {
  totalPrice: 0,
};
const vitualMachine: VitualMachines[] = [
  {
    vmImageId: "vm123",
    vmName: "ubuntu",
    vmImageUrl: "string",
    vmDescription: "test ubuntu",
    regionId: "rg1",
    basicPrice: 400,
  },
  {
    vmImageId: "vm126",
    vmName: "ubuntu",
    vmImageUrl: "string",
    vmDescription: "test ubuntu",
    regionId: "rg1",
    basicPrice: 500,
  },
];
const hostType: HostType[] = [
  { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
  { hostId: "host1", hostName: "64 Bit", priceOnHostType: 50 },
];
const instanceTypeOption : InstanceTypeOption[] = [
  {
    InstanceTypeOptionId: "1",
    InstanceTypeOptionName: "General Purpose",
    memoryAvailable: [
      { key: "mem1", value: "256 MB", memoryPrice: 10 },
      { key: "mem2", value: "512 MB", memoryPrice: 12 },
      { key: "mem3", value: "1 GB", memoryPrice: 13 },
      { key: "mem4", value: "2 GB", memoryPrice: 14 },
      { key: "mem5", value: "4 GB", memoryPrice: 15 },
    ],
    cpuCoreAvailable: [
      { key: "cpu1", value: "1 vCPUs", cpuPrice: 5 },
      { key: "cpu2", value: "2 vCPUs", cpuPrice: 6 },
      { key: "cpu3", value: "4 vCPUs", cpuPrice: 7 },
    ],
  },
  {
    InstanceTypeOptionId: "1",
    InstanceTypeOptionName: "Storage Optimized",
    memoryAvailable: [
      { key: "mem1", value: "16 MB", memoryPrice: 10 },
      { key: "mem2", value: "32 MB", memoryPrice: 11 },
      { key: "mem3", value: "64 GB", memoryPrice: 12 },
    ],
    cpuCoreAvailable: [
      { key: "cpu1", value: "1 vCPUs", cpuPrice: 5 },
      { key: "cpu2", value: "8 vCPUs", cpuPrice: 6 },
      { key: "cpu3", value: "16 vCPUs", cpuPrice: 7 },
    ],
  },
 
];
const storageCapacity : StorageCapacity = {
  storageCapacityId: "string",
  storageCapacityOption: [
    {
      storageCapacityOptionId: "strcpt1",
      storageType: "ROOT",
      type: {
        key: "str1",
        value: "SSD",
        storageTypePrice: 0,
      },
      valume: "Root",
      capacity: 40,
      encryption: true,
      iops: 500,
      backupRequired: false,
      remark: "string",
      price: 0,
    },
    {
      storageCapacityOptionId: "strcpt2",
      storageType: "EXT",
      type: {
        key: "str1",
        value: "SSD",
        storageTypePrice: 0,
      },
      valume: "Ext",
      capacity: 20,
      encryption: true,
      iops: 300,
      backupRequired: false,
      remark: "remark",
      price: 40,
    },
  ],
  bandwidth: 22,
  bandwidthPrice: 222,
};
const typeStorage:TypeStorage[] =  [
  { key: "typestr1", value: "SSD", typeStoragePrice: 20 },
  { key: "typestr2", value: "Magnetic Disk", typeStoragePrice: 15 },
];
const securityPolicy: SecurityPolicy[]=[
  {
    securityPolicyId: "sec1",
    securityPolicyName: "Security SG1",
    securityPolicyType: "HTTPS",
    securityPolicyProtocol: "TCP",
    securityPolicyPort: 3030,
    securityPolicySource: "192.168.0.0",
    securityPolicyDescription: "https security policy",
    key: "sec1",
    value: "Security SG1",
  },
  {
    securityPolicyId: "sec2",
    securityPolicyName: "Security SG2",
    securityPolicyType: "HTTPS",
    securityPolicyProtocol: "TCP",
    securityPolicyPort: 3030,
    securityPolicySource: "192.168.0.0",
    securityPolicyDescription: "https security policy",
    key: "sec2",
    value: "Security SG2",
  },
  {
    securityPolicyId: "sec3",
    securityPolicyName: "Security SG3",
    securityPolicyType: "HTTPS",
    securityPolicyProtocol: "TCP",
    securityPolicyPort: 3030,
    securityPolicySource: "192.168.0.0",
    securityPolicyDescription: "https security policy",
    key: "sec3",
    value: "Security SG2",
  },
];
const instanceType:InstanceType = {
  instanceTypeId: "",
  instanceTypeName: "",
  instanceTypeSelectedCpu: "",
  instanceTypeSelectedMemeory: "",
  cpuPrice: 0,
  memoryPrice: 0,
};
const mockCallback = jest.fn((reg) => "rg1");
const mockCallback2 = jest.fn(() => {});

afterEach(cleanup); // all tests will run on isolation

describe("Testing Select component", () => {
  test("Check Tabs childrens are displayed", () => {
    const { getByText } = render(
      <Tabs
        vitualMachine={vitualMachine}
        hostType={hostType}
        configureMyVirtualMachine={mockCallback}
        virtualMachineDetails={virtualMachineDetails}

        instanceTypeOption={instanceTypeOption}
        instanceType={instanceType}
        storageCapacity={storageCapacity}
        onUpdateStorageCapacity={mockCallback2}
        addStorageCapacity={mockCallback2}
        removeStorageCapacity={mockCallback2}
        typeStorage={typeStorage}
        securityPolicy={securityPolicy}
        addNewPolicy={mockCallback}
      >
        <Tab title="1. Choose Image" />
        <Tab title="2. Choose Instance Type" />
      </Tabs>
    );
    const controlElement = getByText("1. Choose Image");
    expect(controlElement).toBeInTheDocument();
  });
  test("Check InstanceTabs childrens are displayed", () => {
    const { getByText } = render(
      <InstanceTabs 
      instanceTypeOption={instanceTypeOption}
      instanceType={instanceType}
      configureMyVirtualMachine={mockCallback}
      virtualMachineDetails={virtualMachineDetails}
      >
        <Tab title="1. Choose Image" />
        <Tab title="2. Choose Instance Type" />
      </InstanceTabs>
    );
    const controlElement = getByText("1. Choose Image");
    expect(controlElement).toBeInTheDocument();
  });
});
