import React from 'react';
import { shallow } from "enzyme";
import Pagination from '../../components/layout/Pagination/Pagination';


describe('tests in <Pagination/>', () => {
    const   totalImages = 10,
            imagesPerPage = 4,
            maxPageNumberLimit = 5,
            minPageNumberLimit = 8,
            handlePag = () => {
                console.log('hello world')
            },
            currentPage = 7,
            handleNext = () => {
                console.log('Hello wordl again')
            },
            handlePrev = () => {
                console.log('handlePrev')
            }


    const wrapper = shallow( 
        <Pagination 
            totalImages={totalImages} 
            imagesPerPage={imagesPerPage}
            maxPageNumberLimit={maxPageNumberLimit}
            minPageNumberLimit={minPageNumberLimit}
            handlePag={handlePag}
            currentPage={currentPage}
            handleNext={handleNext}
            handlePrev={handlePrev}
        />
    )


    test('Should show the component correctly', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('button tag must have "Prev" as Text Content', () => {
        const btn = wrapper.find('#prevButton');
        expect(btn.text().trim()).toBe('Prev')
    })
})