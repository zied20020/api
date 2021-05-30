import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Card from "./Card";
import axios from "axios";

import * as location from "../1055-world-locations.json";
import * as success from "../1127-success.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function PreLoader2() {
    const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
    const fetchData = async () => {
        try {
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          setUsers(res.data);
          setLoading(true);
        } catch (error) {
          console.log("err");
        }
      };
      setTimeout(() => {
        setcompleted(true);
      }, 2000);
    
      fetchData();
    }, 5000);
    }, []);

  return (
      <>
    <div >
      {!completed ? (
        <>
          {!loading ? (
            <Lottie options={defaultOptions1} height={200} width={200} />
          ) : (
            <Lottie options={defaultOptions2} height={100} width={100} />
          )}
        </>
      ) : (<div className="bb">{
          users.map((user) =><div ><Card user={user} key={user.char_id}/></div>)
        }</div> )}
    </div>
    </>);
}

export default PreLoader2;
