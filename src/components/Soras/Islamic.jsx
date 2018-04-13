import React, { Component } from 'react';

import Hifz from 'assets/img/A practical guide for Hifz ul Quran.jpg';
import islam from 'assets/img/islam.jpg';
import quran from 'assets/img/quran.jpg';
import posila from 'assets/img/posila.jpg';
import muslim from 'assets/img/muslim.jpg';
import ACE from 'assets/img/ACE.png';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
var ps;


const items = [
  {
    src:Hifz ,
    altText: 'Islamic'
  },
  {
    src:islam ,
    altText: 'Islamic'
  },
  {
    src: quran ,
    altText: 'Islamic'
  },
  {
    src:  posila,
    altText: 'Islamic'
  },
  {
    src:muslim ,
    altText: 'Islamic'
  },
  {
    src: ACE,
    altText: 'Islamic'
  }
];
class Islamic extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.activeRoute.bind(this);
  }
// verifies if routeName is the one active (in browser input)
activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
}
componentDidMount(){
    if(navigator.platform.indexOf('Win') > -1){
        ps = new PerfectScrollbar(this.refs.sidebar,{suppressScrollX: true, suppressScrollY: false});
    }
}
componentWillUnmount(){
    if(navigator.platform.indexOf('Win') > -1){
        ps.destroy();
    }
}

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="img-fluid" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
    
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}



export default Islamic;
