import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage"

test('Renders the app without crashing', () => {
    const {queryByTitle} = render(<ErrorPage />);
    const errorPage = queryByTitle("error");
    expect(errorPage).toBeTruthy();
  });

