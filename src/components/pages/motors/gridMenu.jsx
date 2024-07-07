import React from "react";
import { Link } from "react-router-dom";
import {
    BlueButton,
    MotorBrand,
    MotorImgs,
    MotorItemImg,
    MotorItemTexts,
    MotorItems,
    MotorName,
    MotorRating,
    MotorRightBox,
    MotorsButtons,
    MotorsCost,
} from "../../../style/style";
import star from "../../../assets/star.svg";
import { Imgwrapper } from "../../../style/navbarStyle";

const GridMenu = ({ search }) => {
    return (
        <div>
            <MotorRightBox>
                {search.map((value) => (
                    <Link to={`/motor/${value.id}`} key={value.id}>
                        <MotorItems>
                            <MotorItemImg>
                                <MotorImgs src={value.car.photo} />
                            </MotorItemImg>
                            <MotorItemTexts>
                                <MotorName $gridMenu>{value.car.name}</MotorName>
                                <MotorBrand>
                                    <div>{value.car.company}</div>
                                    <MotorRating>
                                        <Imgwrapper src={star} />
                                        <div>{value.car.rating}</div>
                                    </MotorRating>
                                </MotorBrand>
                                <MotorsCost>{value.car.cost}</MotorsCost>
                                <MotorsButtons>
                                    <BlueButton $blue>Order</BlueButton>
                                    <BlueButton>Compare</BlueButton>
                                </MotorsButtons>
                            </MotorItemTexts>
                        </MotorItems>
                    </Link>
                ))}
            </MotorRightBox>
        </div>
    );
};

export default GridMenu;
