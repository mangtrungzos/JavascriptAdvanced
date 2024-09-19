// import { createStore } from 'https://cdn.skypack.dev/redux'

/** --------------- REDUX --------------- */
function createStore(reducer) {
    // let state: Được truyền undefined (trạng thái mặc định coi như không truyền nên là nó vẫn sẽ lấy giá trị init = 0)
    // {}: Truyền object như này thì khi gọi bankReducer() thì action sẽ là {} khi đó action.type sẽ không bị lỗi
    // Lúc đó nó sẽ không lọt vào 2 case đầu mà lọt vào case cuối và sẽ return state lúc đó ứng với initState = 0
    let state = reducer(undefined, {});
    const subcribers = [];

    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
            // reducer(state, action) : State cũ lấy từ let state, action mới vừa dispatch
            // Đưa vào reducer rồi thực hiện hàm bankreducer
            subcribers.forEach((subcriber) => subcriber());
        },
        subscribe(subcriber) {
            subcribers.push(subcriber);
        },
    };
}

/** ------------- MY  APP --------------- */
const initState = 0;
// Reducer
function bankReducer(state = initState, action) {
    switch (action.type) {
        case "DEPOSIT":
            return state + action.payload;
        case "WITHDRAW":
            return state - action.payload;
        default:
            return state;
    }
}

// store
const store = (window.store = createStore(bankReducer));

// Actions
function actionDeposit(payload) {
    return {
        type: "DEPOSIT",
        payload,
    };
}

function actionWithdraw(payload) {
    return {
        type: "WITHDRAW",
        payload,
    };
}

// DOM events
const deposit = document.querySelector("#deposit");
const withdraw = document.querySelector("#withdraw");

// Event handler
deposit.onclick = function () {
    store.dispatch(actionDeposit(10));
};

withdraw.onclick = function () {
    store.dispatch(actionWithdraw(10));
};

// Listener
store.subscribe(() => {
    render();
});

// Render
function render() {
    const output = document.querySelector("#output");
    output.innerText = store.getState();
}

render();
