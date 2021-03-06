import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "../../../Utils";

const settUp = (props = {}) => {
  const component = shallow(<Header {...props}></Header>);
  return component;
};

describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = settUp();
  });
  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render a logo", () => {
    const logo = findByTestAttr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
