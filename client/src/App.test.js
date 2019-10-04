import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
// import NavBar from "./Components/NavigationBar";

it("renders without crashing", () => {
  const wrapped = rtl.render(<App />);
  const heading = wrapped.queryByText(/Womens World/i);
  expect(heading).toBeTruthy();
  expect(heading).toBeVisible();
});

it("renders players in app", () => {
  const app = rtl.render(<App />);
  app.getByText(/players/i);
  console.log(app.debug());
});
// describe("NavBar", () => {
//   it("NavBar renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<NavBar />, div);
//   });
// });
