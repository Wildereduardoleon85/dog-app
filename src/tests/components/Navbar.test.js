import React from 'react';
import { shallow } from "enzyme";
import Navbar from '../../components/layout/Navbar/Navbar';


describe('tests in <Navbar/>', () => {
    test('Should show the component correctly', () => {
        const wrapper = shallow( <Navbar/>)
        expect(wrapper).toMatchSnapshot();
    })
})