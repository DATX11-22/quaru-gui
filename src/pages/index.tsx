import { useEffect, useState } from "react"
import init, {add} from "wasm"

export default function Home() {
  const [ans, setAns] = useState(0);
  useEffect(() => {
    init().then(() => {
      setAns(add(1,1));
    });
  });
  return (
    <>
      <div>
        <p>1 + 1 = {ans}</p>
      </div>
    </>
  )
}
