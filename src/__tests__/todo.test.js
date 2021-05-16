import {render, screen, cleanup} from '@testing-library/react'
import HeroSection from '../components/HeroSection'

test('test', ()=>{
    render(<HeroSection/>)
    const todoElement = screen.getByTestId('Card-1')
    expect(todoElement).toHaveTextContent();
})