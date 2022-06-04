import React from 'react';
import "./textStyle.css"


function MainText(props) {
    return (
        <div style={props.modeStyle}>
            <p className="textItem">
                New
                According to YouTuber Coreteks and Moore’s Law is Dead who is quoting a leaker “Kepler”
                AMD is set to launch its Radeon RX 6600 XT graphics card at 399 USD. This is allegedly
                the current pricing plan for this Navi 23 based model.
                While neither of the sources is sure that this is the final price, it seems quite interesting
                that both have shared the exact same rumor in a span of a few hours. It clearly shows that AMD’s
                internal pricing information is leaking. Judging from how accurate previous reporting by those YouTubers was,
                the information shouldn’t just be ignored, although the 399 USD price tag is a lot more than was expected. In fact, this is just 80 USD less than RX 6700XT’s MSRP.
            </p>
        </div>
    )
}
export default MainText