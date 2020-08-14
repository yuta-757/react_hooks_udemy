import React from 'react';

const Event = ({event, dispatch}) => {
    const id = event.id;
    const handleClickDeleteButton = () => {
      const result = window.confirm(`イベント（id=${id}）を本当に削除しても良いですか？`);
      if (result) {
        dispatch({
          type: 'DELETE_EVENT',
          id,
        }) 
      }
    };
    return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
    )
}

export default Event;
// {
//     state.map((event, index) => {
//       const id = event.id;
//       const handleClickDeleteButton = () => {
//         dispatch({
//           type: 'DELETE_EVENT',
//           id,
//         })
//       };
//       return (
//       <tr key={index}>
//         <td>{id}</td>
//         <td>{event.title}</td>
//         <td>{event.body}</td>
//         <td><button className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
//       </tr>
//       )
//     })
//   }