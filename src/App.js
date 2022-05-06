import * as React from 'react';

function App() {
  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => setToggled(prev => !prev);
  return (
    <p onClick={handleClick}>
      State is {toggled ? 'ON' : 'OFF'}
    </p>
  );
}

export default App;
