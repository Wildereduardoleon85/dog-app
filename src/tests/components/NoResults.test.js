import React from 'react';
import { shallow } from "enzyme";
import NoResults from '../../components/layout/NoResults/NoResults';


describe('tests in <Navbar/>', () => {
    test(`The title must be "Sorry, there's no images found for the selected Breed..."`, () => {

        const wrapper = shallow( <NoResults/>)
        const title = "Sorry, there's no images found for the selected Breed..."

        const heading = wrapper.find('h2');
        expect(heading.text().trim()).toBe(title)
    })
})