import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Annie M.">
        This is best site in this segment, many profiles and the privacy is
        good. Just one word about this site. Simply great site.
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Mark S.">
        It makes everything simple and possible for people like me to connect
        with other like-minded singles. I really appreciate this platform. Well
        done!
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Jessica Y.">
        This is one of the best website I've used in a long time. Quality is
        really good, and it is easy to use. Highly recommended!
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Amelia R.">
        This site is large and is very easy to use. I joined this site 3 months
        ago. I met him on the site and messaged a bit, the chemistry was evident
        right away. So we took up texting, and then phone calls. We met each
        other in person and it was love at first sight. We are now committed to
        each other and credit this site for us ever being able to meet.
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Lia O.">
        Using match was a no brainer. The people were grateful to see me and
        they worshiped me. I like the service and would recommend it any time
        you need a date
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
