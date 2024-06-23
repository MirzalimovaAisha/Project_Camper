import React from "react";
import { RegistrateContainer, RegistrateContainerItem } from "../style/style";

// imgs
import x from "../assets/x.svg";

import {
    LoginInput,
    LoginLines,
    LoginText,
    SignInButton,
    SpaceBetweenWrapper,
} from "../style/style";
import { Link } from "react-router-dom";

const Registrate = () => {
    return (
        <div>
            <RegistrateContainer>
                <RegistrateContainerItem>
                    <div
                        style={{
                            background: "white",
                            padding: "33px",
                            width: "500px",
                            borderRadius: "20px",
                            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.10)",
                        }}
                    >
                        <span>
                            <h2>Registrate</h2>
                            <Link to={'/'}>
                                <img src={x} alt="x" />
                            </Link>
                        </span>
                        <LoginText $title>Email</LoginText>
                        <LoginInput
                            type="email"
                            id="email"
                            placeholder="Your email"
                        />

                        <LoginText $title>Password</LoginText>
                        <LoginInput
                            type="password"
                            id="pwd"
                            placeholder="Your password"
                        />
                        <LoginText $title>Repeat your password</LoginText>
                        <LoginInput
                            $last
                            type="password"
                            id="pwd"
                            placeholder="Your password"
                        />

                        <SpaceBetweenWrapper>
                            <div>
                                <input type="checkbox" id="keep-me" />
                                <LoginText>Keep me logged in</LoginText>
                            </div>
                        </SpaceBetweenWrapper>

                        <SignInButton>REGISTRATE</SignInButton>
                    </div>
                </RegistrateContainerItem>
            </RegistrateContainer>
        </div>
    );
};

export default Registrate;
