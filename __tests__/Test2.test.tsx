import ProfileBanner from "@/components/ProfileBanner"
import { render, screen } from "@testing-library/react"

describe('Profile',()=>{
    it('should have Name', ()=>{
        //Arrange
        render(<ProfileBanner/>)
        //Act
        const text = screen.getByRole('img') as HTMLImageElement;
        //Assert
        expect(text).toBeInTheDocument()
    })
})