import ProfileBanner from "@/components/ProfileBanner"
import { render, screen } from "@testing-library/react"

jest.mock('next-auth/react', ()=>({
    useSession(){
        return { data: null,user:{name:'Saroot'}}
    }
}))
describe('Profile',()=>{
    it('should have Img', ()=>{
        //Arrange
        render(<ProfileBanner/>)
        //Act
        const picture = screen.getByRole('img') as HTMLImageElement;
        //Assert
        expect(picture.src).tocontain
    })
})