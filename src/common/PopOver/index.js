import React from "react";
import Popover, { ArrowContainer } from "react-tiny-popover";
import Button from "../Button";
import { withRouter } from "react-router-dom";

const PopOver = ({ toggle, settoggle, logoutHandler, user, history }) => {
  return (
    <Popover
      isOpen={toggle}
      position={["bottom"]}
      padding={10}
      onClickOutside={() => settoggle(false)}
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor={"#97aabd"}
          arrowSize={16}
          // arrowStyle={{ opacity: 0.7 }}
        >
          <div
            style={{ backgroundColor: "#97aabd" }}
            onClick={() => settoggle(!toggle)}
            className="popover-container"
          >
            <h2 className="title-class mb2">
              {user && user.firstName + " " + user.lastName}
            </h2>
            <p className="title-class">{user.roll}</p>
            <Button
              btnText="manage account"
              width="200px"
              margin="1rem 0 0 0"
              signUp
              onClick={() => {
                history.push("/dashboard");
              }}
            />
            <Button
              btnText="log out"
              width="200px"
              margin="1rem 0 0 0"
              signUp
              onClick={logoutHandler}
            />
          </div>
        </ArrowContainer>
      )}
    >
      {(
        ref // if you'd like access to the ref itself for some reason, you can provide a function as a child into which the ref will be injected
      ) => (
        <div ref={ref} onClick={() => settoggle(!toggle)}>
          {/* Click me! */}
        </div>
      )}
    </Popover>
  );
};

export default withRouter(PopOver);
