import React, { Component } from "react"
import GetHorseFact, { IHorseFactPresenter } from "../../RemoteUseCases/GetHorseFact";

export interface IState {
    fact: string;
}

export default class HorseFact extends Component<{}, IState> implements IHorseFactPresenter{
    private getHorseFact: GetHorseFact;
    constructor(props: any) {
        super(props);
         this.getHorseFact = new GetHorseFact(this);
        this.state = { fact: "Dogs are  better than horses" };
    }

    public componentDidMount() {
        this.getHorseFact.getFacts();
    }

    public render() {
        return(
            <div>
                <p>{this.state.fact}</p>
                <input type="button" data-test="new-fact-button" value="get a new fact" onClick={this.getNewFact} />
            </div>
        );
    }

    presentHorseFact(fact: string): void {
        this.setState({fact: fact})
    }

    private getNewFact = () => {
        this.getHorseFact.getFacts();
    }
}