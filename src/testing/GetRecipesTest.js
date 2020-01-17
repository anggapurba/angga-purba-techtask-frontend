import React from 'react';
import App from "../App";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";

let rootContainer;


beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe('Get Recipes Test', () => {

    it('it should success to retrive all data', (done) => {
        act(() => {
            ReactDOM.render(<App />, rootContainer);
          });
    });

});