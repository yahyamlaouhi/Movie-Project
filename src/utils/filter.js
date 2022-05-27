import _ from 'lodash';

export function filter(items,name){
    let filteredItem;
if (name===null){
    filteredItem=items
}else{
 filteredItem=items.filter(i=>i.genre.name==name);
}
return filteredItem;
    
    // _.slice(items,startIndex)
    // _.take()
    
}