import * as React from "react";
import { cleanup, render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import {
  Region,
  VirtualMachineData,
} from "./../../store/virtualMachin/types";

import Routes from "./../../routes";
const virtualMachineDetails: VirtualMachineData = {
  totalPrice: 0,
};
const regions: Region[] = [
  {
    regionId: "rg1",
    regionName: "India",
  },
];
const mockStore = configureMockStore();
const store = mockStore({ virtualMachines: {virtualMachineDetails,regions} });

afterEach(cleanup); // all tests will run on isolation

describe("Testing Select component", () => {
  test("Check InstanceTabs childrens are displayed", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Routes />
      </Provider>
    );
    const controlElement = getByText("1. Choose Image");
    expect(controlElement).toBeInTheDocument();
  });
});
