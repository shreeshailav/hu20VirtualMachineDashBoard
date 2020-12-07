import ReactDOM from "react-dom";
jest.mock("react-dom");
import { renderToDOM } from "./../index";

require("../index");
describe("test index page", () => {
  // const originalRender = ReactDOM.render;
  // const originalGetElement = global.document.getElementById;
  // beforeEach(() => {
  //   global.document.getElementById = () => true;
  //   ReactDOM.render = jest.fn();
  // });
  // afterAll(() => {
  //   global.document.getElementById = originalGetElement;
  //   ReactDOM.render = originalRender;
  // });
  it("should call ReactDOM.render", () => {
    renderToDOM();
    expect(ReactDOM.render).toHaveBeenCalled();
  });
  // test("if render dom called", () => {
  //   expect(ReactDOM.render).toBeCalled();
  // });
});
