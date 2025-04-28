import { useEffect, useReducer } from "react";
import { useSelector } from "react-redux"
import binarySearch from "./binarySearch";

function reducer(state, action){
    switch(action.type){
        case 'update':
            return [...action.payload];
        case 'filter':
            return binarySearch(action.payload, action.filterOption);
        default:
            return state;
    }
}

function Logs(){

    const logs = useSelector((state) => state.logs);

    const [filteredLogs, dispatch] = useReducer(reducer, []);

    useEffect(()=>{
        dispatch({type:'update', payload:logs});
    }, []);


    function handleSearch(e){
        e.preventDefault();

        let {timestamp, severity, devId} = e.target.elements;
        // console.log(timestamp.value);
        // console.log(severity.value);
        // console.log(devId.value);
        let filterOptions = {
            timestamp:timestamp.value, 
            severity:severity.value, 
            devId:devId.value
        }

        dispatch({type:'filter', payload:logs, filterOption:filterOptions})
    }

   
    return(
        <>
            <h1>Error Logs</h1>

            <form onSubmit={handleSearch} className="myForm">
                <input name='timestamp' type='number' placeholder="timestamp"/>
                <label htmlFor="severity">Severity: 
                <select name='severity'>
                    <option value="all">All</option>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>
                </label>
                <input name='devId' type='text' placeholder="developer ID"/>
                <button type="submit">Search</button>
            </form>
            {(filteredLogs.length == 0)&&(<h3>No data found</h3>)}
            {/* {(filteredLogs.length > 0)&&(<ul>
            {filteredLogs.map(l => {
                return(
                    <li key={l.id}>{l.message}</li>
                )
            })}
            </ul>)} */}

            {(filteredLogs.length > 0)&&(
                <div className="myTable">
                <table className="table">
                <thead>
                    <tr>
                        <th>Error ID</th>
                        <th>Developer ID</th>
                        <th>timeStamp</th>
                        <th>Message</th>
                        <th>Severity</th>
                    </tr>

                </thead>
                <tbody>
                    {filteredLogs.map(l => {
                        return(
                            <>
                                <tr key={l.id}>
                                    <td>{l.id}</td>
                                    <td>{l.devId}</td>
                                    <td>{l.timestamp}</td>
                                    <td>{l.message}</td>
                                    <td>{l.severity}</td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>

                </table>
                </div>
                
            )}
            
        </>
    )
}



export default Logs;