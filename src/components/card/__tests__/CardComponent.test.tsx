import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import { VirtualMachineData } from "./../../../store/virtualMachin/types";
import CardComponent from "./../CardComponent";


const virtualMachineDetails: VirtualMachineData = {
  totalPrice: 0,
  vitualMachines: {
    vmImageId: "vm123",
    vmName: "ubuntu",
    vmImageUrl: "string",
    vmDescription: "test ubuntu",
    regionId: "rg1",
    basicPrice: 400,
  },
  hostType: { hostId: "host1", hostName: "32 Bit", priceOnHostType: 10 },
};

afterEach(cleanup); // all tests will run on isolation

describe("Testing Select component", () => {
  test("check if component render without an issue", () => {
    const { getByText } = render(
      <CardComponent virtualMachineDetails={virtualMachineDetails} />
    );
    const vmName = getByText("ubuntu");
    // const basicPrice = getByText("400");
    const priceOnHostType = getByText("$10");
    expect(vmName).toBeInTheDocument();
    // expect(basicPrice).toBeInTheDocument();
    expect(priceOnHostType).toBeInTheDocument();
  });
});
