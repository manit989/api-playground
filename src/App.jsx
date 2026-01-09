import { useState } from "react";

import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [method,setMethod] = useState("GET");
  const [headers,setHeaders] = useState({});
  const [body,setBody] = useState("{}");
  const [response,setResponse] = useState({meow:1});

  return (
    <div className="flex flex-col p-8">
      <Title/>
      <div className="flex flex-row gap-40 p-10">
        <RequestForm url={url} setUrl={setUrl} method={method} setMethod={setMethod} headers={headers} setHeaders={setHeaders} body={body} setBody={setBody}/>
        <Response response={response}/>
      </div>
    </div>
  );
}

function RequestForm(props) {
  const [headerKey,setHeaderKey] = useState("");
  const [headerValue,setHeaderValue] = useState("");

  function addHeader() {
          const newHeaders = {...(props.headers),[headerKey]:headerValue};
          props.setHeaders(newHeaders);
  }

  return (
    <div className="bg-black flex flex-col gap-4 p-4 border-4 border-white rounded-md">
      <p className="text-xl text-white">URL</p>
      <input name="method" type="text" className="bg-white" value={props.url} onChange={(e)=>props.setUrl(e.target.value)}/>
      <div>
        <input name="method" type="radio" className="accent-blue-500" />
        <label for="phone" className="text-white text-s" onClick={()=>props.setMethod("GET")}> GET</label>
      </div>
      <div>
        <input name="method" type="radio" className="accent-blue-500"/>
        <label for="phone" className="text-white text-s" onClick={()=>props.setMethod("POST")}> POST</label>
      </div>
      <div>
        <input name="method" type="radio" className="accent-blue-500"/>
        <label for="phone" className="text-white text-s" onClick={()=>props.setMethod("PUT")}> PUT</label>
      </div>
      <div>
        <input name="method" type="radio" className="accent-blue-500"/>
        <label for="phone" className="text-white text-s" onClick={()=>props.setMethod("DELETE")}> DELETE</label>
      </div>
      <div>
        <p className="text-xl text-white">Headers</p>
        <input type="text" className="bg-white m-1" value={headerKey} onChange={(e)=>setHeaderKey(e.target.value)}/>
        <input type="text" className="bg-white m-1" value={headerValue} onChange={(e)=>setHeaderValue(e.target.value)}/>
        <button className="bg-gray-500 hover:bg-gray-400 text-white text-xs m-1 py-1 px-1" onClick={()=>addHeader()}>Add header</button>
      </div>
      <p className="text-xl text-white">Body</p>
      <textarea className="bg-white" rows="4" cols="50" value={props.body} onChange={(e)=>props.setBody(e.target.value)}></textarea>
      <button className="bg-gray-500" >Submit</button>
    </div>
  );
}

function Response(props) {
  return (
          <div className="flex flex-col gap-4 p-4 border-4 border-white rounded-md">
            <p className="text-2xl text-white">Response.json</p>
            <pre className="text-white">
                {JSON.stringify(props.response)}
            </pre>
          </div>
  );
}

function Title(){
  return (
    <p className="text-3xl text-white text-center">API Playground</p>
  );

}

export default App;
