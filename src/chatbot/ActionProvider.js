class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    greet = () => {
        const message = this.createChatBotMessage(
            "Hi!, Welcome to student info system",
            {
                widget: "gotItBtn",
            }
        );
        this.addMessageToState(message);
    };

    handleGotItClick = () => {
        const message = "Got it";
        this.clientMessage(message);
        this.pickSlot();
    };

    // solt picking logic
    pickSlot = () => {
        const message = this.createChatBotMessage("Pick a slot", {
            widget: "slotPicker",
            withAvatar: true,
            loading: true,
            terminateLoading: true,
            delay: 400,
        });
        this.addMessageToState(message);
    };

    // handle pick slot click
    handleSlotClick = () => {
        let selectedSlot = localStorage.getItem("studentSlot");
        selectedSlot = JSON.parse(selectedSlot);
        // 15 MAY, MON 11AM
        const message = ` ${selectedSlot.date}, ${selectedSlot.day} ${selectedSlot.time}`;
        this.clientMessage(message);
        this.requestUserName();
    };

    // request user to enter name
    requestUserName = () => {
        const message = this.createChatBotMessage("Enter your name", {
            widget: "userNameInput",
            withAvatar: true,
            loading: true,
            terminateLoading: true,
            delay: 400,
        });
        this.addMessageToState(message);
    };
    // take user name from input field
    handleUserNameInput = (name) => {
        // append the student name to existing local storage data with key studentSlot
        const studentSlot = localStorage.getItem("studentSlot");
        const studentName = { ...JSON.parse(studentSlot), name };
        localStorage.setItem("studentSlot", JSON.stringify(studentName));

        this.appendUserInput(name);
        // after appending the name to chat ask user to enter his age
        this.requestUserAge();
    };
    // ask user to enter his age
    requestUserAge = () => {
        const message = this.createChatBotMessage("Enter your age", {
            widget: "userAgeInput",
            withAvatar: true,
            loading: true,
            terminateLoading: true,
            delay: 400,
        });
        this.addMessageToState(message);
    };
    // take user age from input field
    handleUserAgeInput = (age) => {
        let userAge = parseInt(age);
        const studentSlot = localStorage.getItem("studentSlot");
        const studentAge = { ...JSON.parse(studentSlot), age: userAge };
        localStorage.setItem("studentSlot", JSON.stringify(studentAge));

        this.appendUserInput(age);
        this.sayThanks();
    };
    // at the end say thanks to user and after 5 seconds redirect to page 3
    // first message = Thank your
    // second message = in 5 second bot will exit
    // show timer of 5 seconds

    sayThanks = () => {
        const message = this.createChatBotMessage("Thank you", {
            widget: "timer",
            withAvatar: true,
            loading: true,
            terminateLoading: true,
            delay: 400,
        });
        this.addMessageToState(message);
    };

    // on submitting user name, append the user name to the chat
    appendUserInput = (input) => {
        const message = input;
        this.clientMessage(message);
    };

    clientMessage = (message) => {
        const clientMessage = this.createClientMessage(message);
        this.addMessageToState(clientMessage);
    };

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
}

export default ActionProvider;
