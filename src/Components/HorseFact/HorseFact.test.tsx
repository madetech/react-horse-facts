import React from "react"
import { shallow } from "enzyme";
import HorseFact from "."

it("Should show a fact!", () => {
    const wrapper = shallow(<HorseFact />)
    wrapper.setState({ fact: "Dogs are  better than horses" })
    expect(wrapper.html()).toContain("Dogs are  better than horses")
    expect(wrapper.find({"data-test": "new-fact-button"}).length).toBe(1)
    
    
 })