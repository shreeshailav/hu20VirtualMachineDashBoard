import { cleanup, render } from "@testing-library/react";
import Button from "./../Button";

afterEach(cleanup); // all tests will run on isolation
const mockCallback = jest.fn(() => {});
describe("Testing Select component", () => {
  test("check if component render without an issue", () => {
    const { getByRole } = render(
      <Button
        buttonBg={"red"}
        buttonWidth={"2em"}
        buttonHeight={"1em"}
        buttonText={"ok"}
        buttonTextColor={"white"}
        fontSize={"14px"}
        onClickOnButton={mockCallback}
        fontWeight={"bold"}
      />
    );
    const controlElement = getByRole("button");
    expect(controlElement).toBeInTheDocument();

  });
});
