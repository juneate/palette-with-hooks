// Include standard Hooks as part of this project
const { useState, useEffect, useContext } = React;


// Component: controls a single Channel of each swatch (R, G or B)
const Channel = (props) => {
  // Create a local variable from our props
  const {rgb} = props;
 
  // Ensure channel is within 0 and 255, then callback to update if changed
  const updateRgb = (channel) => {
    { (255 < channel == channel < 0) && props.handleOnChange(channel) };
  }

  // Render
  return (
    <div class="channel">
      <button type="button" class="btn up" onClick={() => updateRgb(rgb + 1)}>+</button>
      <input type="text" class="txt" value={rgb} onChange={({target}) => updateRgb(Number(target.value))} />
      <button type="button" class="btn down" onClick={() => updateRgb(rgb - 1)}>-</button>
    </div>
  );
};


// Component: a Colour (swatch) row inside of a palette column
const Swatch = (props) => {
  // State variables: r, g, b
  // When these change, the component will re-render
  const [r, setR] = useState(props.red);
  const [g, setG] = useState(props.green);
  const [b, setB] = useState(props.blue);
  
  // Define a background-color for the swatch
  const myStyles = {
    backgroundColor: `rgb(${r},${g},${b})`
  }

  // Render
  return (
    <li class="colour" style={myStyles}>
      <div>rgb(</div>
      <Channel rgb={r} handleOnChange={setR}/>
      <Channel rgb={g} handleOnChange={setG} />
      <Channel rgb={b} handleOnChange={setB} />
      <div>);</div>
    </li>
  );
};


// Component: a single colour Palette column
const Palette = () => {
  // Render
  return (
    <ul class="palette">
      <Swatch red={255} green={0} blue={0} />
      <Swatch red={0} green={255} blue={0} />
      <Swatch red={0} green={0} blue={255} />
    </ul>
  );
};


// Create an instance of the Palette Component, put it into "#app" (index.html)
ReactDOM.render(<Palette />, document.getElementById('app') );