import { login } from '../../controllers/AuthController'
import { mockRequest, mockResponse } from '../__mocks__'

describe('auth',()=>{
    it("it should return login",async()=>{
        let res = await login(mockRequest, mockResponse)
        expect(mockResponse.send).toHaveBeenCalledWith('login')
    })
})