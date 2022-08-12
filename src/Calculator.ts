type Modifier = {
    key: string;
    code: string;
}

type HistoryInfo = {
    currentAnswer: number;
    modifier: Modifier;
    givenArgument: number;
    newAnswer: number;
    nthModification: number;
}

export class Equation {
    answer: number;
    history: Array<HistoryInfo>;

    constructor(startingNumber: number) {
        this.answer = startingNumber;
        this.history = [{ currentAnswer: this.answer, modifier: {key: "none", code: "none"}, givenArgument: startingNumber, newAnswer: this.answer, nthModification: 0 }];
    }

    pushToHistory(modifier: Modifier, givenArgument: number, newAnswer: number) {
        this.history.push({ currentAnswer: this.answer, modifier, givenArgument, newAnswer, nthModification: this.history.length });
    }

    addNumber(numberToAdd: number) {
        this.pushToHistory({code: "add", key: "+"}, numberToAdd, this.answer+numberToAdd);
        this.answer += numberToAdd;
        return this.answer;
    }

    subtractNumber(numberToSubtract: number) {
        this.pushToHistory({code: "subtract", key: "-"}, numberToSubtract, this.answer-numberToSubtract);
        this.answer -= numberToSubtract;
        return this.answer;
    }

    multiplyNumber(numberToMultiply: number) {
        this.pushToHistory({code: "multiply", key: "*"}, numberToMultiply, this.answer*numberToMultiply);
        this.answer *= numberToMultiply;
        return this.answer;
    }

    divideNumber(numberToDivide: number) {
        this.pushToHistory({code:"divide", key: "/"}, numberToDivide, this.answer/numberToDivide);
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