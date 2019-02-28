var mas = [3,5,27,8,1,5,2,89,34,12];

function sakartot(list, callback) {
    if(callback == undefined) {
        return (list.sort((a,b) => a-b));
    }
    else {
        return callback(list.sort((a,b) => a-b));
    }
    
}

function filtret(list) {
    newList = [];
    for(var i = 0; i < list.length; i++) {
        if(list[i] > 5) {
            newList.push(list[i]);
        }
    }
    return newList;
    
}

console.log(sakartot(filtret(mas)));