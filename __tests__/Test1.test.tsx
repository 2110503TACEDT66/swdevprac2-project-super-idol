import ProfileBanner from "@/components/ProfileBanner"
import { render, screen } from "@testing-library/react"

jest.mock('next-auth/react', ()=>({
    useSession(){
        return { data: null,user:{name:'Saroot'}}
    }
}))
describe('Profile',()=>{
    it('should have Name', ()=>{
        //Arrange
        render(<ProfileBanner/>)
        //Act
        const text = screen.getByText('Name')
        //Assert
        expect(text).toBeInTheDocument()
    }),
    it('should have Tel.', ()=>{
        //Arrange
        render(<ProfileBanner/>)
        //Act
        const text = screen.getByText('Tel.')
        //Assert
        expect(text).toBeInTheDocument()
    }),
    it('should have Email', ()=>{
        //Arrange
        render(<ProfileBanner/>)
        //Act
        const text = screen.getByText('Email')
        //Assert
        expect(text).toBeInTheDocument()
    })
})