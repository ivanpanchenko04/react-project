import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import one from "../img/one.jpg";
import two from "../img/two.jpg";
import three from "../img/three.jpg";

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={one}
                        alt="One"/>
                    <Carousel.Caption>
                        <h3>First image</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={two}
                        alt="Two"/>
                    <Carousel.Caption>
                        <h3>Second image</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={three}
                        alt="Three"/>
                    <Carousel.Caption>
                        <h3>Third image</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBoxHk;
