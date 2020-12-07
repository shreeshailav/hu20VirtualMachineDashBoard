import * as React from "react";
import {
  cleanup,
  render,
} from "@testing-library/react";

import Separator  from "./../Separator";


afterEach(cleanup); // all tests will run on isolation

describe("Testing Select component", () => {
  test("check if component render without an issue", () => {
    const { getByRole } = render(
      <Separator/>
    );
    const controlElement = getByRole("separator");
    expect(controlElement).toBeInTheDocument();
  });

});
