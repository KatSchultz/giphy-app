import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders title of app", () => {
  render(<Header />);

  const title = screen.getByText(/giphy app/i);
  expect(title).toBeInTheDocument();
});
