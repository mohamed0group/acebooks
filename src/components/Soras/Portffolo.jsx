import React, { Component } from 'react';
import banner from 'assets/img/234.jpg';
import banner2 from 'assets/img/bg28.jpg';
import banner3 from 'assets/img/bg27.jpg';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: banner,
    altText: 'Could I... BE any more happy with this Library?',
    caption: 'ACE Reader 1'
  },
  {
    src: banner2,
    altText: 'This Library is the best. I am so happy with it!',
    caption: 'ACE Reader 2'
  },
  {
    src:banner3,
    altText: 'One word... WOW!!',
    caption: 'ACE Reader 3'
  }
];

class Portffolo extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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
          <img width='100%' height='100%' src={item.src} alt={item.altText} />
          <CarouselCaption className="text-light"captionText={item.caption} captionHeader={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <div>
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
      </div>
    );
  }
}

export default Portffolo;



