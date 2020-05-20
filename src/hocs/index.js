import React from "react";
import axios from "axios";

export default function withAuthentication(props) {
 const {history} = props;
	axios.get("http://localhost:8080/check-token").then((res) => {
  	return <>{props.children}</>
  }).catch(() => {
	history.push('/sign');
  });
}
