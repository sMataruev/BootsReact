import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Horax from "./Horax";


class MyCarousel extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Horax/>
                <Carousel autoPlay showThumbs={false} dynamicHeight={false} emulateTouch={true} showStatus={false}>
                    <div>
                        <img src="http://orig13.deviantart.net/d3cb/f/2010/010/c/a/empire_by_yuseda.jpg"/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="http://orig13.deviantart.net/d3cb/f/2010/010/c/a/empire_by_yuseda.jpg"/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="http://orig13.deviantart.net/d3cb/f/2010/010/c/a/empire_by_yuseda.jpg"/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src="http://orig13.deviantart.net/d3cb/f/2010/010/c/a/empire_by_yuseda.jpg"/>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src="http://orig13.deviantart.net/d3cb/f/2010/010/c/a/empire_by_yuseda.jpg"/>
                        <p className="legend">Legend 4</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default MyCarousel;