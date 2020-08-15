import React, {useContext} from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events = () => {
    const {state} = useContext(AppContext);
    return (
        <>
            {/* 古いContextの使い方 */}
            {/* <AppContext.Consumer>
                {(value) => {return <div>{value}</div>}}
            </AppContext.Consumer> */}
            {/* <div>{value.state}</div> */}
            <h4>イベント一覧</h4>
            <table className='table table-hover'>
            <thead>
                <tr>
                <th>ID</th>
                <th>タイトル</th>
                <th>ボディー</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {/* keyは特別なpropsで値の受け取りができない */}
                {state.map((event, index) => (<Event key={index} event={event} />))}
            </tbody>
            </table>
        </>
    )
};

export default Events;