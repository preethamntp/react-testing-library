import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header getBy", () => {
  it("should render same text passed into title prop", () => {
    render(<Header title="todo" />);
    const h1Element = screen.getByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
  });
  it("should render header/para/anchor/etc as a role", () => {
    render(<Header title="todo" />);
    const h1Element = screen.getByRole("heading"); // to be a single element
    const h2Element = screen.getByRole("heading", { name: "My Header" }); // to be a single element
    expect(h1Element).toBeInTheDocument();
    expect(h2Element).toBeInTheDocument();
  });
  it("should test by getByTitle prop", () => {
    render(<Header title="todo" />);
    const h1Element = screen.getByTitle("heading");
    expect(h1Element).toBeInTheDocument();
  });
  it("should render same text by getByTestId into title prop", () => {
    render(<Header title="todo" />);
    const h2Element = screen.getByTestId("header-2");
    expect(h2Element).toBeInTheDocument();
  });
});

describe("Header FindBy", () => {
  // WITH FINDBY
  it("should render same text passed  into findByText title prop", async () => {
    render(<Header title="todo" />);
    const h1Element = await screen.findByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
  });
  // WITH QUERYBY
  it("should render same text passed into title queryByText prop", async () => {
    render(<Header title="todo" />);
    const h1Element = screen.queryByText(/dogs/i);
    expect(h1Element).not.toBeInTheDocument();
  });
  // WITH GETALLBY
  it('should render same text passed into getAllByText title prop', () => {
      render(
          <Header
            title="todo"
          />
      );
      const h1Elements = screen.getAllByText(/todo/i);
      expect(h1Elements.length).toBe(1);
  });
  it('should render same text passed into getAllByRole title prop', () => {
      render(
          <Header
            title="todo"
          />
      );
      const h1Elements = screen.getAllByRole(/todo/i);
      expect(h1Elements.length).toBe(1);
  });
});
