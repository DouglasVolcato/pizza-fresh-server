import { AppService } from "./app.service"

const makeSut = () => {
    return new AppService();
}

describe("AppService", () => {
    it("getAppStatus should return a message", () => {
        const sut = makeSut();
        const message = sut.getAppStatus();
        expect(message).toBe('Server is running! Please check http://localhost:3333/api for swagger docs');
    })
})