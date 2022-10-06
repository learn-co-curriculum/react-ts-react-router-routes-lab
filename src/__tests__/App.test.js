import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

test("renders the <NavBar /> component", () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test('renders the Home component using the <Route path="/">', () => {
  window.history.pushState({}, "", "/");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.queryByText(/Home Page/)).toBeInTheDocument();
});

test('renders the Actors component using the <Route path="/actors">', () => {
  window.history.pushState({}, "", "/actors");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.queryByText(/Actors Page/)).toBeInTheDocument();
});

test('renders the Directors component using the <Route path="/directors">', () => {
  window.history.pushState({}, "", "/directors");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.queryByText(/Directors Page/)).toBeInTheDocument();
});

test('renders the Movies component using the <Route path="/movies">', () => {
  window.history.pushState({}, "", "/movies");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.queryByText(/Movies Page/)).toBeInTheDocument();
});
