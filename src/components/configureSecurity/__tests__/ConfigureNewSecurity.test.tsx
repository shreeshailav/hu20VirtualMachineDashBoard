import { cleanup, render, fireEvent } from "@testing-library/react";
import ConfigureSecurity from "./../ConfigureSecurity";
import { securityPolicy } from "./../../../utils/const";

afterEach(cleanup);
describe("Testing ConfigureSecurity component", () => {
  test("check if component render without an issue", () => {
    const mockCallback2 = jest.fn(() => {});

    const { getByText } = render(
      <ConfigureSecurity
        securityPolicy={securityPolicy}
        addNewPolicy={mockCallback2}
        configureSecurityPolicy={mockCallback2}
      />
    );
    const createNewSecurityText = getByText("create a new security policy");
    const selectSecurityText = getByText("select an existing policy group");
    expect(createNewSecurityText).toBeInTheDocument();
    expect(selectSecurityText).toBeInTheDocument();
  });
  test("check if all required fields are showing", () => {
    const mockCallback2 = jest.fn(() => {});

    const { getByText, getByRole } = render(
      <ConfigureSecurity
        securityPolicy={securityPolicy}
        addNewPolicy={mockCallback2}
        configureSecurityPolicy={mockCallback2}
      />
    );
    const createNewSecurityText = getByText("create a new security policy");
    const selectSecurityText = getByText("select an existing policy group");
    expect(createNewSecurityText).toBeInTheDocument();
    expect(selectSecurityText).toBeInTheDocument();

    const controlElement = getByRole("button");
    fireEvent.click(controlElement);

    securityPolicy.forEach((item) => expect(item.value).toBeVisible);

    const optionSelection = getByText("Security SG1");
    fireEvent.click(optionSelection);
    fireEvent.click(createNewSecurityText);
  });

  test("check radio button checks", () => {
    const mockCallback2 = jest.fn(() => {});

    const {queryByTestId,getByText } = render(
      <ConfigureSecurity
        securityPolicy={securityPolicy}
        addNewPolicy={mockCallback2}
        configureSecurityPolicy={mockCallback2}
      />
    );
    const optionOne = queryByTestId("create a new security policy");
    const optionTwo = queryByTestId("select an existing policy group");
    expect(optionOne).toBeInTheDocument();
    expect(optionTwo).toBeInTheDocument();

    expect(optionTwo).toBeChecked();
    expect(optionOne).not.toBeChecked();

    fireEvent.click(optionOne);
    expect(optionTwo).not.toBeChecked();
    expect(optionOne).toBeChecked();
    
    const selectSecurityText = getByText("Port Range");
    expect(selectSecurityText).toBeInTheDocument();

    const inputForName = queryByTestId("New Security Group Name");
    expect(inputForName).toBeInTheDocument();

    
  });

});
