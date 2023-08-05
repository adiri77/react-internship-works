import React from 'react'
let arr=[
    {name:"ADITYA",branch:"CSE"},
    {name:"aman",branch:"CSE(DS)"},
    {name:"sachin",branch:"CSE(DS)"},
    {name:"sachin",branch:"CSE(DS)"},
    {name:"sachin",branch:"CSE(DS)"}
]
export default function Demo() {
  return (
    <>
    {
    arr.map(
        (obj)=>{
            return(
            <p>Your Name is {obj.name} . And your branch is {obj.branch}</p>
            )
        }
        )
    }
        </>
  )
}
