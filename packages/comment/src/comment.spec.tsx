import { Comment } from "./index";
import { render } from "@react-email/render";

describe("render", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });

  it("renders the <Comment> component", () => {
    const actualOutput = render(<Comment>Test</Comment>);
    expect(actualOutput).toMatchInlineSnapshot();
  });
});
