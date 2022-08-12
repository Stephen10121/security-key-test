type HistoryInfo = {
    currentAnswer: number;
    modifier: string;
    givenArgument: number;
    newAnswer: number;
    nthModification: number;
}

export class Equation {
    answer: number;
    history: Array<HistoryInfo>;

    constructor(startingNumber: number) {
        this.answer = startingNumber;
        this.history = [{ currentAnswer: this.answer, modifier: "none", givenArgument: startingNumber, newAnswer: this.answer, nthModification: 0 }];
    }

    pushToHistory(modifier: string, givenArgument: number) {
        this.history.push({ currentAnswer: this.answer, modifier, givenArgument, newAnswer: this.answer+givenArgument, nthModification: this.history.length });
    }

    addNumber(numberToAdd: number) {
        this.pushToHistory("add", numberToAdd);
        this.answer += numberToAdd;
        return this.answer;
    }

    subtractNumber(numberToSubtract: number) {
        this.pushToHistory("subtract", numberToSubtract);
        this.answer -= numberToSubtract;
        return this.answer;
    }

    multiplyNumber(numberToMultiply: number) {
        this.pushToHistory("multiply", numberToMultiply);
        this.answer *= numberToMultiply;
        return this.answer;
    }

    divideNumber(numberToDivide: number) {
        this.pushToHistory("divide", numberToDivide);
        this.answer /= numberToDivide;
        return this.answer;
    }

    getAnswer() {
        return this.answer;
    }

    getHistory() {
        return this.history;
    }
}