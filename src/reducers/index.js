// action = {
//     type: 'CREATE_EVENT',
//     title: '2020年東京オリピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します！つきましては....'
// }
// # before
// state = []
// # after
// state = [
//     {
//         id: 1,
//         title: '2020年東京オリピックのお知らせ',
//         body: '2020年に東京でオリンピックを開催します！つきましては....'
//     },
// ]
// # before
// state = [
//   { id: 1, title: 'タイトル1', body: 'ボディー1'},
//   { id: 2, title: 'タイトル2', body: 'ボディー2'},
//   { id: 3, title: 'タイトル3', body: 'ボディー3'},
// ]
// # after
// state = [
//   { id: 1, title: 'タイトル1', body: 'ボディー1'},
//   { id: 2, title: 'タイトル2', body: 'ボディー2'},
//   { id: 3, title: 'タイトル3', body: 'ボディー3'},
//   {
//     id: 4,
//     title: 'タイトル4',
//     body: 'ボディー3'},
//   }
// ]


const events = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_EVENT':
            const event = {title: action.title, body: action.body};
            const length = state.length;
            let id;
            if (length === 0) {
                id = 1;
            } else {
                id = state[length - 1].id + 1;
            }
            // 三項演算子でリファクタリング
            // const id = length === 0 ? 1 : state[length - 1].id + 1;
            return [...state, {id: id, ...event}];
        case 'DELETE_EVENT':
            return state;
        case 'DELETE_ALL_EVENT':
            return [];
        default:
            return state;
    }
}

export default events;