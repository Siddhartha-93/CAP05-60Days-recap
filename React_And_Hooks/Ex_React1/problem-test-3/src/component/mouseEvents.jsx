import "./MouseEvent.css"
function MouseEvents(prop) {
    let mouse = prop.params
      return (
        <div className="mouseEv">
          <h3>Move your mouse to see its position.</h3>
          <h4>X: {mouse.x} Y: {mouse.y}</h4>
        </div>
      )
    }

export default MouseEvents