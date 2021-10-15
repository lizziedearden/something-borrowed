import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';
import mystic from '../resources/mystic.jpg';
import passport from '../resources/passport.jpg';
import sugarrun from '../resources/sugarrun.jpg';
import thewatercure from '../resources/thewatercure.jpg';



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function CarouselOne() {
    return(
<Carousel responsive={responsive}>
  <div className = "item1" align = "center"> 
        <Card imageSrc = {mystic} alt font-size="13p"
            text ="'If everyone were cast in the same mould, there would be no such thing as beauty'"/>      
 </div>
 <div className = "item2" align = "center"> 
    <Card imageSrc = {passport} 
            text = "'..nature of reality and our place in the cosmos.'"/>  
 </div>
 <div className = "item3" align = "center"> 
      <Card imageSrc = {sugarrun} 
            text = "'There’s something inside us that makes the world treat us like it does but that’s all just training wheels. We’re ready now, we’re building.'"/>  
 </div>
 <div className = "item4" align = "center"> 
    <Card imageSrc = {thewatercure} 
            text = "'Thinking yourself uniquely terrible is its own form of narcissism.'"/>  
 </div>
</Carousel>
)}




