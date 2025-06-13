import request from 'supertest';
import { createApp } from '../createApp';


describe("api/users",()=>{
    let app:any;

    beforeAll(()=>{
        app = createApp();
    })

    it("it should return login", async ()=>{
        let res = await request(app).get("/api/auth/login")
        expect(res.body).toStrictEqual({})
    })
})