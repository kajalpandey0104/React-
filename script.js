const number=[1,2,3,4,5,6,7,8,9]

// const sortnumber=number.filter((num)=>num%2==0)
// console.log(sortnumber)

// const finnumber= number.find((num)=>num===5)
// console.log(finnumber)

const finnumber= number.findIndex((num)=>num===5)
console.log(finnumber)


const App = () => {
  return (
    <div className="APP">Hi kajal</div>
    
  )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)