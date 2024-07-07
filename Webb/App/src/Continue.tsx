import { useState } from "react";

function Continue() {
  const [Contintue, setContintue] = useState(0);
  const incrementContinue = () => setContintue(Contintue + 1);
  return <header onClick={() => incrementContinue()}></header>;
}
export default Continue;
