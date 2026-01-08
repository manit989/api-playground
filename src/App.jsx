import { useState } from "react";

import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [method,setMethod] = useState("GET");
  const [headers,setHeaders] = useState([]);
  const [body,setBody] = useState("");
  const [response,setResponse] = useState("");

  return (
    <div className="flex flex-col p-8">
      <Title/>
      <div className="flex flex-row gap-40 p-10">
        <RequestForm/>
        <Response response={response}/>
      </div>
    </div>
  );
}

function RequestForm() {
  return (
    <div className="bg-black flex flex-col gap-4 p-4">
      <p className="text-xl text-white">URL</p>
      <input name="method" type="text" className="bg-white"/>
      <div>
        <input name="method" type="radio" className="accent-blue-500" checked/>
        <label for="phone" className="text-white text-s"> GET</label>
      </div>
      <div>
        <input name="method" type="radio" className="accent-blue-500"/>
        <label for="phone" className="text-white text-s"> POST</label>
      </div>
      <div>
        <input name="method" type="radio" className="accent-blue-500"/>
        <label for="phone" className="text-white text-s"> PUT</label>
      </div>
      <div>
        <input name="method" type="radio" className="accent-blue-500"/>
        <label for="phone" className="text-white text-s"> DELETE</label>
      </div>
      <div>
        <p className="text-xl text-white">Headers</p>
        <input type="text" className="bg-white m-1" placeholder=" key"/>
        <input type="text" className="bg-white m-1" placeholder=" value"/>
        <button className="bg-gray-500 hover:bg-gray-400 text-white text-xs m-1 py-1 px-1">Add header</button>
      </div>
      <p className="text-xl text-white">Body</p>
      <textarea name="comments" className="bg-white" rows="4" cols="50" placeholder="{}"></textarea>
    </div>
  );
}

function Response(props) {
  return (
    <textarea name="comments" className="bg-white" rows="4" cols="50" placeholder={props.response}></textarea>
  );
}

function Title(){
  return (
    <p className="text-3xl text-white text-center">API Playground</p>
  );

}

export default App;
