import * as React from "react";
import {
  cleanup,
  fireEvent,
  render,
  wait,
  waitFor,
} from "@testing-library/react";

import { Select } from "./../select";
import { Region } from "./../../../store/virtualMachin/types";
const options: Region[] = [
  { key: "rg1", value: "US-Eats-1" },
  { key: "rg2", value: "Asia Pacific -Mumbai" },
  { key: "rg3", value: "US West-1" },
  { key: "rg4", value: "India" },
];

const mockCallback = jest.fn((reg) => "rg1");

afterEach(cleanup); // all tests will run on isolation

describe("Testing Select component", () => {
  test("check if component render without an issue", () => {
    const { getByText, getByAltText } = render(
      <Select options={options} onSelectRegion={mockCallback} />
    );
    const controlElement = getByText("Select");
    const dropDownIndicator = getByAltText("dropdown indicator down");
    expect(controlElement).toBeInTheDocument();
    expect(dropDownIndicator).toBeInTheDocument();
  });

  test("If menu how up on clicking menu item", () => {
    const { getByRole } = render(
      <Select options={options} onSelectRegion={mockCallback} />
    );
    const controlElement = getByRole("button");
    fireEvent.click(controlElement);

    const menuList = getByRole("menu");
    const dropDownIndicator = getByRole("img");
    expect(dropDownIndicator).toHaveAttribute("alt", "dropdown indicator up");
    expect(menuList).toBeInTheDocument();
  });

  test("If our options are rendered correctly", () => {
    const { getByRole, getAllByRole } = render(
      <Select options={options} onSelectRegion={mockCallback} />
    );
    const controlElement = getByRole("button");
    fireEvent.click(controlElement);

    const optionElement = getAllByRole("option");
    expect(optionElement).toHaveLength(optionElement.length);
  });

  test("If rendered options are correct", () => {
    const { getByRole } = render(
      <Select options={options} onSelectRegion={mockCallback} />
    );
    const controlElement = getByRole("button");
    fireEvent.click(controlElement);

    options.forEach(({ value }) => expect(value).toBeVisible);
  });

  test("If selecting nn option will work", () => {
    const { getByRole, getByText } = render(
      <Select options={options} onSelectRegion={mockCallback} />
    );
    const controlElement = getByRole("button");
    fireEvent.click(controlElement);

    fireEvent.click(getByText(options[2].value));

    jest.useFakeTimers();
    setTimeout(() => {
      expect(controlElement).toHaveTextContent(options[2].value);
    }, 1500);
    jest.runAllTimers();
  });
});
