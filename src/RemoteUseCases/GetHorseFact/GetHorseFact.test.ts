import nock from "nock";
import GetHorseFact from '.'

it("should get a horse fact", async () => {
    var mockPresenter = { presentHorseFact: jest.fn()}

    var scope = nock("https://localhost:5001/api")
    .get("/facts/random")
    .reply(200, {"horseFact":"I am a horse."})
    let horseFact = new GetHorseFact(mockPresenter);
    await horseFact.getFacts();

    expect(mockPresenter.presentHorseFact).toBeCalledTimes(1);
    expect(mockPresenter.presentHorseFact).toBeCalledWith("I am a horse.");
});