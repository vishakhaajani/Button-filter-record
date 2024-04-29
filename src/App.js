import Record from "./Record";
import { Category , Product } from "./Data";
import { useState } from "react";

function App() {

  const [record , setRecord] = useState(Product)

  const filterData = (val) => {
    if(val == "all"){
      setRecord(Product)
    }
    else{
      let Fdata = Product.filter(item => item.category === val)
      setRecord(Fdata)
    }
  }

  return (
    <div className="App">
      <Record category = {Category} product = {record} filterBtn = {filterData}/>
    </div>
  );
}

export default App;
