import {capitalize} from '../../utils/utils';


describe(`tests in "Capitalize" function`, () => {
    test('First letter must be Uppercased', () => {
        const word = 'wilder'

        const CapitalizedWord = capitalize(word)

        expect(CapitalizedWord).toBe('Wilder')
    })
})