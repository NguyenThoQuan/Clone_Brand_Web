import React from "react";
import { PersonFill, ChatDotsFill, HeartFill, CartDashFill } from 'react-bootstrap-icons';
import '../Nav/Nav.scss'

class Nav extends React.Component {
    render() {
        return (
            <>
                <div className="mainListNav">
                    <div className="listNav">
                        <PersonFill color="grey" />
                        <p>Profile</p>
                    </div>
                    <div className="listNav">
                        <ChatDotsFill color="grey" />
                        <p>Message</p>
                    </div>
                    <div className="listNav">
                        <HeartFill color="grey" />
                        <p>Orders</p>
                    </div>
                    <div className="listNav">
                        <CartDashFill color="grey" />
                        <p>My cart</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Nav;