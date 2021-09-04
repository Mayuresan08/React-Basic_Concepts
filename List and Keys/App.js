import React from 'react';
function ListItems(props)
{
  return <li>{props.value}</li>
}
function List ()
{ 
    const numbers = [1,2,3,4,5];
    const listNumbers=numbers.map((a)=>{
        return <ListItems key={a.toString()} value={a}/>});

        return<ul>{listNumbers}</ul>
}

export default  List
