import React, { Component } from 'react'; //{} means destructuring-- i.e. taking from React

function Completed(props) {
    return (
        <div className='Completed'>
            <h1>Completed</h1>
            <ul>
            {
                props.completedList.map((item, index, arr) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
            </ul>
        </div>
    )
}

// class Completed extends Component {
//     render() {
//         return (
//             <div className='Completed'>
//                 Hello Completed Component
//             </div>
//         )
//     }
// }
export default Completed