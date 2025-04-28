function binarySearch(logs, filterOptions){

    let filteredLogs = [];
    console.log(logs);
    console.log(filterOptions);

    filteredLogs = logs.filter((l) => {
        let fbyid = true;
        let fbytime = true;
        let fbysev = true;

        if(filterOptions.devId != ''){
            fbyid = (l.devId.toLowerCase() == filterOptions.devId.toLowerCase());
        }

        if(filterOptions.severity != '' && filterOptions.severity != 'all'){
            fbysev = (l.severity == filterOptions.severity);
        }

        if(filterOptions.timestamp != ''){
            fbytime = (l.timestamp == filterOptions.timestamp);
        }

        return fbyid && fbytime && fbysev;
        
    })

    return filteredLogs
}  

// function findFirst(){

// }

// function findLast(){

// }

// function filterByDevId(logs){
    
// }

// function severityPriority(sev){
//     if(sev == 'low')-++
//         return 
// }
export default binarySearch