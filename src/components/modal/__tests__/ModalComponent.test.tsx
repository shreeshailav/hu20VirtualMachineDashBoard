import { cleanup, render, fireEvent } from "@testing-library/react";
import {Modal} from "./../ModalComponent";

afterEach(cleanup); // all tests will run on isolation
const mockCallback = jest.fn((flag:boolean) => {});
describe("Testing Modal component", () => {
  test("check if component render without an issue", () => {
    const { getByRole } = render(
      <Modal
      openModalcomponent={true}
      titleTextColor="green"
      userSelection={mockCallback}
      titleText={"Sucecess"}
      message={'VM(s) created with provided configuration successfully'}
      messageColor={"black"}
      buttonYes
      buttonYesText={"Ok"}/>
    );
    const okButton = getByRole("button", { name: /Ok/i });
    fireEvent.click(okButton);
  });
  test("check if ok button", () => {
    const { getByRole } = render(
      <Modal
      openModalcomponent={true}
      titleTextColor="green"
      userSelection={mockCallback}
      titleText={"Sucecess"}
      message={'VM(s) created with provided configuration successfully'}
      messageColor={"black"}
      buttonYes
      buttonYesText={"Ok"}/>
    );
    const okButton = getByRole("button", { name: /Ok/i });
    expect(okButton).toBeInTheDocument();
  });
  test("check if messgae and title shown", () => {
    const { getByText } = render(
      <Modal
      openModalcomponent={true}
      titleTextColor="green"
      userSelection={mockCallback}
      titleText={"Sucecess"}
      message={'VM(s) created with provided configuration successfully'}
      messageColor={"black"}
      buttonYes
      buttonYesText={"Ok"}/>
    );
    const title = getByText("Sucecess");
    const message = getByText("VM(s) created with provided configuration successfully");
    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});
