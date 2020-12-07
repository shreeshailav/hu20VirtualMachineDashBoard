import * as React from "react";
import { cleanup, render, fireEvent, within } from "@testing-library/react";
import ReviewAndLaunch from "./../ReviewAndLaunch";
import { virtualMachineDetails } from "./../../../utils/const";

const mockCallback = jest.fn(() => {});

afterEach(cleanup); // all tests will run on isolation

describe("Testing ReviewAndLaunch component", () => {
  test("check if component render without an issue", () => {
    const { getByText } = render(
      <ReviewAndLaunch
        virtualMachineDetails={virtualMachineDetails}
        setSelectedTab={mockCallback}
      />
    );
    const vmName = getByText("SUSE Linux Enterprise Server");
    expect(vmName).toBeInTheDocument();
  });
  test("check instance type is displayed", () => {
    const { getByText } = render(
      <ReviewAndLaunch
        virtualMachineDetails={virtualMachineDetails}
        setSelectedTab={mockCallback}
      />
    );
    const vmName = getByText("General Purpose");
    expect(vmName).toBeInTheDocument();
  });
  test("check storage capacity type is displayed", () => {
    const { getByText } = render(
      <ReviewAndLaunch
        virtualMachineDetails={virtualMachineDetails}
        setSelectedTab={mockCallback}
      />
    );
    const vmName = getByText("40");
    expect(vmName).toBeInTheDocument();
  });
  test("check all information displayed", () => {
    const { getByText, getAllByText,getByRole } = render(
      <ReviewAndLaunch
        virtualMachineDetails={virtualMachineDetails}
        setSelectedTab={mockCallback}
      />
    );
    const vmDescription = getByText(
      "SUSE Linux Enterprise Server comes with 5 years of support."
    );
    const securityPolicyPort = getByText("3030");
    const securityPolicySource = getByText("192.168.0.0");
    const securityPolicyType = getByText("HTTPS");
    const securityPolicyProtocol = getByText("TCP");
    const editText = getAllByText("Edit");

    expect(editText).toHaveLength(5)
    expect(vmDescription).toBeInTheDocument();
    expect(securityPolicyPort).toBeInTheDocument();
    expect(securityPolicySource).toBeInTheDocument();
    expect(securityPolicyType).toBeInTheDocument();

    expect(securityPolicyProtocol).toBeInTheDocument();
  });
  test("check cancel button clickable", () => {
    const { getByRole } = render(
      <ReviewAndLaunch
        virtualMachineDetails={virtualMachineDetails}
        setSelectedTab={mockCallback}
      />
    );
    const cancelButton = getByRole("button", { name: /cancel/i });
    const backButton = getByRole("button", { name: /back/i });
    fireEvent.click(cancelButton);
    fireEvent.click(backButton);
  });

  test("check launch button clickable", () => {
    const { getByRole, getByText } = render(
      <ReviewAndLaunch
        virtualMachineDetails={virtualMachineDetails}
        setSelectedTab={mockCallback}
      />
    );

    const launchButton = getByRole("button", { name: /launch/i });
    fireEvent.click(launchButton);

    jest.useFakeTimers();
    setTimeout(() => {
      const popupTitle = getByText("Sucecess");
      const popupMessage = getByText(
        "VM(s) created with provided configuration successfully"
      );
      expect(popupTitle).toBeInTheDocument();
      expect(popupMessage).toBeInTheDocument();
    }, 1000);
    jest.runAllTimers();
  });

  test("check input element", () => {
    const { getByRole } = render(
      <ReviewAndLaunch
        virtualMachineDetails={virtualMachineDetails}
        setSelectedTab={mockCallback}
      />
    );

    const input = getByRole("textbox");
    fireEvent.keyDown(input, { key: "ArrowDown" });
  });
});
