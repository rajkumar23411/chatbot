class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }
    parse(message) {
        const loweCaseMessage = message.toLowerCase();

        if (!loweCaseMessage.includes("got it")) {
            this.actionProvider.greet();
        }

        if (loweCaseMessage.includes("got it")) {
            this.actionProvider.pickSlot();
        }
    }
}

export default MessageParser;
