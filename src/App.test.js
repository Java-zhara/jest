import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("TEST APP", () => {
  test("renders learn react link", () => {
    render(<App />);

    const helloWorldElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);

    expect(helloWorldElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test("not renders learn react link", async () => {
    render(<App />);

    // const hello2Element = screen.queryByText(/hello2/i);
    // expect(hello2Element).toBeNull();

    const asyncElement = await screen.findByText(/data/i);

    expect(asyncElement).toBeInTheDocument();
    expect(asyncElement).toHaveStyle({ color: "red" });
  });

  test("click event", () => {
    render(<App />);

    const btn = screen.getByTestId("toogle-btn");

    expect(screen.queryByTestId("toogle-el")).toBeNull();
    fireEvent.click(btn);
    expect(screen.getByTestId("toogle-el")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toogle-el")).toBeNull();
  });
});
