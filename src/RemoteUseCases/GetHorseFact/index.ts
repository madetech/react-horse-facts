import axios from "axios"

export interface IHorseFactPresenter {
    presentHorseFact(fact: string): void;
}

export default class GetHorseFact{
    private presenter: IHorseFactPresenter;
    public constructor(presenter: IHorseFactPresenter){
       this.presenter = presenter;
    }

    public async getFacts()
        {
            const result = await axios.get("https://localhost:5001/api/facts/random", {
                headers: {'Access-Control-Allow-Origin': '*'}
            })

            // console.log(result)
            this.presenter.presentHorseFact(result.data.horseFact);
    }
}