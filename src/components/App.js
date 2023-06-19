import Main from "./Main";
import Image from "./Image";
import Plus from "./Plus";

import plusData from '../data/plusData'

function App() {

  const renderedPlus = plusData.map((plus) => {
    return <Plus key={plus.id} h1={plus.h1} icon={plus.icon} text={plus.text}/>
  })
  return (
    <div className="app">
      <Main/>
      <Image/>
      {renderedPlus}
    </div>
  );
}

export default App;
