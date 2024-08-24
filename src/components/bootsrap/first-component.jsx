import CustomRectangleCard from "./custom-card"

const Firstcomponent=()=>{
    return(


        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
       <CustomRectangleCard title={"john"} text={"React developer"}/>
      </div>
      <div className="col-sm-4">

      <CustomRectangleCard title={"michael"} text={"angular developer"}/>
        
      </div>
      <div className="col-sm-4">

      <CustomRectangleCard title={"michael"} text={"angular developer"}/>

        


        

       
      </div>
    </div>
  </div>
</>






    )
}
export default Firstcomponent