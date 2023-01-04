import { sumDiv, multDiv, incDiv } from "./components";
import renderer from 'react-test-renderer';

test('sum div render test', ()=>{
    const result = renderer.create(<sumDiv
        a = {5}
        b = {2}
        />);
        expect(result).toMatchSnapshot();
})

test('mult div render test', ()=>{
    const result = renderer.create(<multDiv
        a = {5}
        b = {2}
        />);
        expect(result).toMatchSnapshot();
})

test('inc div render test', ()=>{
    const result = renderer.create(<incDiv
        a = {5}
        />);
        expect(result).toMatchSnapshot();
})