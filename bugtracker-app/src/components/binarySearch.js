function binarySearch(logs, filterOptions){

    let filteredLogs = [];
    console.log(logs);
    console.log(filterOptions);

    if(filterOptions.timestamp != ''){
        logs.sort((a, b) => {
            return a.timestamp - b.timestamp;
        });

        let index = findByTimeStamp(logs, filterOptions.timestamp);
        if(index != -1){
            filteredLogs.push(logs[index]);
        }

        return filteredLogs;
        
    }

    logs.sort((a, b) => {
        return a.timestamp - b.timestamp;
    })


    filteredLogs = logs.filter((l) => {
        let fbyid = true;
       
        let fbysev = true;

        if(filterOptions.devId != ''){
            fbyid = (l.devId.toLowerCase() == filterOptions.devId.toLowerCase());
        }

        if(filterOptions.severity != '' && filterOptions.severity != 'all'){
            fbysev = (l.severity == filterOptions.severity);
        }

       

        return fbyid && fbysev;
        
    })

    return filteredLogs
} 

function findByTimeStamp(logs, time){
    let l = 0;
    let h = logs.length-1;

    while(l <= h){
        let m = l + Math.floor((h-l)/2);

        if(logs[m].timestamp == time){
            return m;
        }

        if(logs[m].timestamp > time){
            h = m-1;
        }else
            l = m+1;
    }

    return -1;
}


export default binarySearch