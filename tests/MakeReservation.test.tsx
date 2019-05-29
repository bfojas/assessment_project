import React from 'react'
// import { useContext } from 'react'
import { randomId } from '../components/MakeReservation';
import MakeReservation from '../components/MakeReservation';
import HomeScreen from '../components/HomeScreen'
import contextWrapper from '../contextWrapper'
import renderer from 'react-test-renderer'
import { shallow, configure }from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ContextWrapper from '../contextWrapper';
configure({ adapter: new Adapter() })


describe('unit tests', () => {

    describe('random ID', () => {
        it('should return a random ID number', () => {
            expect(typeof randomId()).toBe('string')
        })
    }),

    describe('reservation input', () => {
        it('should populate reservation inputs', () => {
            const wrapper = shallow(<ContextWrapper />)
            const instance = wrapper.instance()
            instance.setState({user: "Test"})
            const MakeReservationWrapper = shallow(<MakeReservation/>);
            const MakeReservationInstance = MakeReservationWrapper.instance()
            
            
            MakeReservationInstance.handleInput("arrivalDate", "06/04/2019");
            MakeReservationInstance.handleInput("departureDate", "06/06/2019");
            MakeReservationInstance.handleInput("hotelName", "Hilton Test");
            
            expect(wrapper.state('user')).toBe('Test')
            expect(typeof MakeReservationWrapper.state('id')).toBe('string');
            expect(MakeReservationWrapper.state('arrivalDate')).toBe('06/04/2019');
            expect(MakeReservationWrapper.state('departureDate')).toBe('06/06/2019');
            expect(MakeReservationWrapper.state('hotelName')).toBe('Hilton Test');
        })
    })

})