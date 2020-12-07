import * as React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import StorageAndNetwork from "./../StorageAndNetwork";
import {
  virtualMachineDetails,
  storageCapacity,
  typeStorage,
} from "./../../../utils/const";
import {StorageCapacityOption} from './../../../store/virtualMachin/types'
const mockCallback = jest.fn((reg) => "rg1");
const mockCallback2 = jest.fn(() => {});

afterEach(cleanup); // all tests will run on isolation

describe("Testing StorageAndNetwork component", () => {
  test("If our options are rendered correctly", () => {
    const { getByRole } = render(
      <StorageAndNetwork
        storageCapacity={storageCapacity}
        onUpdateStorageCapacity={mockCallback}
        addStorageCapacity={mockCallback2}
        removeStorageCapacity={mockCallback2}
        typeStorage={typeStorage}
        virtualMachineDetails={virtualMachineDetails}
      />
    );
    const addValume = getByRole("button", { name: /Add Valume/i });
    fireEvent.click(addValume);
  });
  test("check data displayed", () => {
    const { getByText } = render(
      <StorageAndNetwork
        storageCapacity={storageCapacity}
        onUpdateStorageCapacity={mockCallback}
        addStorageCapacity={mockCallback2}
        removeStorageCapacity={mockCallback2}
        typeStorage={typeStorage}
        virtualMachineDetails={virtualMachineDetails}
      />
    );
    const rootType = getByText("Root");
    expect(rootType).toBeInTheDocument();
    const titleCapacity = getByText("Capacity (GB)");
    const encryption = getByText("Encryption");
    expect(titleCapacity).toBeInTheDocument();
    expect(encryption).toBeInTheDocument();
  });
  test("check remove image", () => {
    const { getByRole } = render(
      <StorageAndNetwork
        storageCapacity={storageCapacity}
        onUpdateStorageCapacity={mockCallback}
        addStorageCapacity={mockCallback2}
        removeStorageCapacity={mockCallback2}
        typeStorage={typeStorage}
        virtualMachineDetails={virtualMachineDetails}
      />
    );
    const removeImage = getByRole("img");
    expect(removeImage).toBeInTheDocument();
    expect(removeImage).toHaveAttribute("alt", "dropdown indicator down");
  });
  test("check methods", () => {
    const onStorageDiskSelection = jest.fn((storageCapacityOption:StorageCapacityOption,load:boolean) => "rg1");

    const { getByPlaceholderText } = render(
      <StorageAndNetwork
        storageCapacity={storageCapacity}
        onUpdateStorageCapacity={mockCallback}
        addStorageCapacity={mockCallback2}
        removeStorageCapacity={mockCallback2}
        typeStorage={typeStorage}
        virtualMachineDetails={virtualMachineDetails}
      />
    );
    const controlElement =  getByPlaceholderText("remark");
    fireEvent.keyDown(controlElement, { key: "ArrowDown" });

    jest.useFakeTimers();
    setTimeout(() => {
      expect(onStorageDiskSelection).not.toHaveBeenCalled();
    }, 500);
    jest.runAllTimers();

  });
});