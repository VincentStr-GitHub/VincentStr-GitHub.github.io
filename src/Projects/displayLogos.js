import React, {Component} from "react";
import HTML_Icon from "./TechLogos/html-Icon";
import JS_Icon from "./TechLogos/js-Icon";
import Java_Icon from "./TechLogos/java-Icon";
import React_Icon from "./TechLogos/react-Icon";
import CSS_Icon from "./TechLogos/css-Icon";
import { lazy, Suspense } from 'react';



const DisplayLogos = (props) => {
const logoArr = []
for(let i = 0; i < props.techArr.length ; i++){
 const CurLogo = (lazy(() => import(`./TechLogos/${props.techArr[i].toLowerCase()}-Icon.js`)));
 logoArr.push(
    <Suspense fallback={<div>Loading...</div>}>
      <CurLogo />
    </Suspense>
  );
}
console.log(props.techArr.map(e => e.toLowerCase()))
return logoArr

};



export default DisplayLogos