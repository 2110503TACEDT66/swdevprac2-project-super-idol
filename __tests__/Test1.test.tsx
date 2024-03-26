import ProfileBanner from "@/components/ProfileBanner"
import { render, screen } from "@testing-library/react"

describe('Profile',()=>{
    it('should have Edit Profile', ()=>{
        //Arrange
        render(<ProfileBanner/>)
        //Act
        const text = screen.getByText('Edit Profile')
        //Assert
        expect(text).toBeInTheDocument()
    })
})