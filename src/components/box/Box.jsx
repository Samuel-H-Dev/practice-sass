export default function Box(){

  return(
    <div className="box-container">
        <h1>Box H1</h1>
        <h2>Box H2</h2>
        <h3>Box H3</h3>

        <div className="box-child">
        <h4>Box H4</h4>

      <div className="box-grandchild">
        <p>box Grandchild</p>
      </div>
        </div>
        
      <div className="box-child2">
        <div className="box-grandchild">
          <p> box grandchild 2</p>
        </div> 

      </div>

    </div>
  )
}