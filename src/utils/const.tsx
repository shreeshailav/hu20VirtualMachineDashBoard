import {
  StorageCapacityOption,
  SecurityPolicy,
} from "./../store/virtualMachin/types";
export const tabData = [
  { key: 1, value: "1. Choose Image" },
  { key: 2, value: "2. Choose Instance Type" },
  { key: 3, value: "3. Choose Storage and Network" },
  { key: 4, value: "4. Configure Security" },
  { key: 4, value: "5. Review and Launch" },
];
export const windowsSelectionError =
  "Windows is only available in us-east-1 & us-east-2. If you proceed you may lose data";
export const extCapacityWarning =
  "For magnetic disk - minimum capacity 40 GB, maximum capacity 2 TB";
export const ssdCapacityWarning = "For SSD - minimum 20 GB, maximum 512 GB";
export const ploicyWarning = "Please Select Security Policy";
export const selectCPUMemory = "Please Select CPU and Memory";

export const warning = "Warning";
export const virtualMachineDetails = {
  totalPrice: 0,
  vitualMachines: {
    basicPrice: 400,
    regionId: "rg1",
    vmDescription:
      "SUSE Linux Enterprise Server comes with 5 years of support.",
    vmImageId: "vm124",
    vmImageUrl: "string",
    vmName: "SUSE Linux Enterprise Server",
  },
  hostType: { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
  instanceType: {
    cpuPrice: 5,
    instanceTypeId: "1",
    instanceTypeName: "General Purpose",
    instanceTypeSelectedCpu: "1 vCPUs",
    instanceTypeSelectedMemeory: "256 MB",
    memoryPrice: 10,
  },
  securityPolicy: {
    key: "sec1",
    securityPolicyDescription: "https security policy",
    securityPolicyId: "sec1",
    securityPolicyName: "Security SG1",
    securityPolicyPort: 3030,
    securityPolicyProtocol: "TCP",
    securityPolicySource: "192.168.0.0",
    securityPolicyType: "HTTPS",
    value: "Security SG1",
  },
  storageCapacity: {
    bandwidth: 512,
    bandwidthPrice: 5,
    storageCapacityId: "str123",
    storageCapacityOption: [
      {
        backupRequired: false,
        capacity: 40,
        encryption: true,
        iops: 500,
        price: 0,
        remark: "remark",
        storageCapacityOptionId: "strcpt1",
        storageType: "ROOT",
        type: { key: "str1", value: "SSD", storageTypePrice: 0 },
        valume: "Root",
      },
    ],
  },
};

export const storageCapacity = {
  bandwidth: 512,
  bandwidthPrice: 5,
  storageCapacityId: "str123",
  storageCapacityOption: [
    {
      backupRequired: false,
      capacity: 40,
      encryption: true,
      iops: 500,
      price: 0,
      remark: "remark",
      storageCapacityOptionId: "strcpt1",
      storageType: "ROOT",
      type: { key: "str1", value: "SSD", storageTypePrice: 0 },
      valume: "Root",
    },
  ],
};
export const typeStorage = [
  { key: "typestr1", typeStoragePrice: 20, value: "SSD" },
  {
    key: "typestr2",
    typeStoragePrice: 15,
    value: "Magnetic Disk",
  },
];

export const initialStateConstant = {
  isLoading: true,
  virtualMachineDetails: {
    totalPrice: 0,
  },
  region: [
    { key: "rg1", value: "us-east-1" },
    { key: "rg2", value: "us-east-2" },
    { key: "rg3", value: "us-west-1" },
    { key: "rg4", value: "india-1" },
  ],
  vitualMachine: [
    {
      vmImageId: "vm101",
      vmName: "Linux 2 image,Ubuntu Server 18.04 LTS",
      vmImageUrl: "string",
      vmDescription: "Linux 2 image comes with 5 years of support.",
      regionId: "rg1",
      basicPrice: 243.61,
      hostType: [
        { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
        { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
      ],
    },
    {
      vmImageId: "vm102",
      vmName: "SUSE Linux Enterprise Server",
      vmImageUrl: "string",
      vmDescription:
        "SUSE Linux Enterprise Server comes with 5 years of support.",
      regionId: "rg1",
      basicPrice: 200.22,
      hostType: [
        { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
        { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
      ],
    },
    {
      vmImageId: "vm103",
      vmName: "Red Hat Enterprise Linux 8",
      vmImageUrl: "string",
      vmDescription:
        "Red Hat Enterprise Linux 8 comes with 5 years of support.",
      regionId: "rg1",
      basicPrice: 300,
      hostType: [
        { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
        { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
      ],
    },
    {
      vmImageId: "vm104",
      vmName: "Microsoft Windows Server 2019 Base",
      vmImageUrl: "string",
      vmDescription:
        "Microsoft Windows Server 2019 Base comes with 5 years of support.",
      regionId: "rg1",
      basicPrice: 338.77,
      hostType: [{ hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 }],
    },
    {
      vmImageId: "vm101",
      vmName: "Linux 2 image,Ubuntu Server 18.04 LTS",
      vmImageUrl: "string",
      vmDescription: "Linux 2 image comes with 5 years of support.",
      regionId: "rg2",
      basicPrice: 243.61,
      hostType: [
        { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
        { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
      ],
    },
    {
      vmImageId: "vm102",
      vmName: "SUSE Linux Enterprise Server",
      vmImageUrl: "string",
      vmDescription:
        "SUSE Linux Enterprise Server comes with 5 years of support.",
      regionId: "rg2",
      basicPrice: 200.22,
      hostType: [
        { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
        { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
      ],
    },
    {
      vmImageId: "vm103",
      vmName: "Red Hat Enterprise Linux 8",
      vmImageUrl: "string",
      vmDescription:
        "Red Hat Enterprise Linux 8 comes with 5 years of support.",
      regionId: "rg2",
      basicPrice: 300,
      hostType: [
        { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
        { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
      ],
    },
    {
      vmImageId: "vm104",
      vmName: "Microsoft Windows Server 2019 Base",
      vmImageUrl: "string",
      vmDescription:
        "Microsoft Windows Server 2019 Base comes with 5 years of support.",
      regionId: "rg2",
      basicPrice: 338.77,
      hostType: [{ hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 }],
    },
    {
      vmImageId: "vm101",
      vmName: "Linux 2 image,Ubuntu Server 18.04 LTS",
      vmImageUrl: "string",
      vmDescription: "Linux 2 image comes with 5 years of support.",
      regionId: "rg3",
      basicPrice: 243.61,
      hostType: [
        { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
        { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
      ],
    },
    {
      vmImageId: "vm102",
      vmName: "SUSE Linux Enterprise Server",
      vmImageUrl: "string",
      vmDescription:
        "SUSE Linux Enterprise Server comes with 5 years of support.",
      regionId: "rg3",
      basicPrice: 200.22,
      hostType: [
        { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
        { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
      ],
    },
    {
      vmImageId: "vm103",
      vmName: "Red Hat Enterprise Linux 8",
      vmImageUrl: "string",
      vmDescription:
        "Red Hat Enterprise Linux 8 comes with 5 years of support.",
      regionId: "rg3",
      basicPrice: 300,
      hostType: [
        { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
        { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
      ],
    },
    {
      vmImageId: "vm101",
      vmName: "Linux 2 image,Ubuntu Server 18.04 LTS",
      vmImageUrl: "string",
      vmDescription: "Linux 2 image comes with 5 years of support.",
      regionId: "rg4",
      basicPrice: 243.61,
      hostType: [
        { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
        { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
      ],
    },
    {
      vmImageId: "vm102",
      vmName: "SUSE Linux Enterprise Server",
      vmImageUrl: "string",
      vmDescription:
        "SUSE Linux Enterprise Server comes with 5 years of support.",
      regionId: "rg4",
      basicPrice: 200.22,
      hostType: [
        { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
        { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
      ],
    },
    {
      vmImageId: "vm103",
      vmName: "Red Hat Enterprise Linux 8",
      vmImageUrl: "string",
      vmDescription:
        "Red Hat Enterprise Linux 8 comes with 5 years of support.",
      regionId: "rg4",
      basicPrice: 300,
      hostType: [
        { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
        { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
      ],
    },
  ],
  hostType: [
    { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
    { hostId: "host2", hostName: "64 Bit", priceOnHostType: 50 },
  ],
  instanceType: {
    instanceTypeId: "",
    instanceTypeName: "",
    instanceTypeSelectedCpu: "",
    instanceTypeSelectedMemeory: "",
    cpuPrice: 0,
    memoryPrice: 0,
  },
  instanceTypeOption: [
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
    {
      InstanceTypeOptionId: "1",
      InstanceTypeOptionName: "Network Optimized",
      memoryAvailable: [
        { key: "mem1", value: "16 MB", memoryPrice: 10 },
        { key: "mem2", value: "32 MB", memoryPrice: 11 },
        { key: "mem3", value: "64 GB", memoryPrice: 12 },
      ],
      cpuCoreAvailable: [
        { key: "cpu1", value: "1 vCPUs", cpuPrice: 5 },
        { key: "cpu2", value: "2 vCPUs", cpuPrice: 6 },
        { key: "cpu3", value: "8 vCPUs", cpuPrice: 7 },
        { key: "cpu4", value: "16 vCPUs", cpuPrice: 8 },
      ],
    },
    {
      InstanceTypeOptionId: "1",
      InstanceTypeOptionName: "Compute Optimized",
      memoryAvailable: [
        { key: "mem1", value: "256 MB", memoryPrice: 10 },
        { key: "mem2", value: "512 MB", memoryPrice: 11 },
        { key: "mem3", value: "1 GB", memoryPrice: 12 },
        { key: "mem4", value: "2 GB", memoryPrice: 13 },
        { key: "mem5", value: "4 GB", memoryPrice: 14 },
        { key: "mem6", value: "16 GB", memoryPrice: 15 },
        { key: "mem7", value: "32 GB", memoryPrice: 16 },
        { key: "mem8", value: "64 GB", memoryPrice: 17 },
      ],
      cpuCoreAvailable: [
        { key: "cpu1", value: "1 vCPUs", cpuPrice: 5 },
        { key: "cpu2", value: "2 vCPUs", cpuPrice: 6 },
        { key: "cpu3", value: "4 vCPUs", cpuPrice: 7 },
        { key: "cpu4", value: "8 vCPUs", cpuPrice: 8 },
        { key: "cpu5", value: "16 vCPUs", cpuPrice: 9 },
      ],
    },
  ],
  storageCapacity: {
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
        remark: "remark",
        price: 0,
      },
    ],
    bandwidth: 512,
    bandwidthPrice: 5,
  },
  typeStorage: [
    { key: "typestr1", value: "SSD", typeStoragePrice: 20 },
    { key: "typestr2", value: "Magnetic Disk", typeStoragePrice: 15 },
  ],
  securityPolicy: [
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
  ],
};

export const extStorageCapacityOption: StorageCapacityOption = {
  storageCapacityOptionId: "strcpt2",
  storageType: "EXT",
  type: {
    key: "str1",
    value: "SSD",
    storageTypePrice: 0,
  },
  valume: "Ext",
  capacity: 40,
  encryption: true,
  iops: 500,
  backupRequired: false,
  remark: "remark",
  price: 512,
};

export const securityPolicy: SecurityPolicy[] = [
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
