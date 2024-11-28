// import Image from "next/image";
// import { brainwaveSymbol, check } from "../assets";
// import { collabApps, collabContent, collabText } from "../constants";
// import Button from "./Button";
// import Section from "./Section";
// import { LeftCurve, RightCurve } from "./design/Collaboration";
// import { ImagesSliderDemo } from "./ImageSlider";

// const Collaboration = () => {
//   return (
    
//     <Section className="flex" crosses>
    
//       <div className="container lg:flex">
//         <div className="max-w-[25rem]">
//           <h2 className="h2 mb-4 md:mb-8">
//           هوشمندسازی جایگاه های سوخت سی ان جی
//           </h2>
//           <p>طرحی کلیدی برای زیرساخت های کشور
//           </p>

//           <ul className="max-w-[22rem] mb-10 md:mb-14">
//             {collabContent.map((item) => (
//               <li className="mb-3 py-3" key={item.id}>
//                 <div className="flex items-center">
//                   <Image className="m-1" src={check} width={24} height={24} alt="check" />
//                   <h6 className="body-2 ml-5">{item.title}</h6>
//                 </div>
//                 {item.text && (
//                   <p className="body-2 mt-3 text-n-4">{item.text}</p>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <Button>فواید استقرار سامانه <br /> در جایگاه شما</Button>
//         </div>

//         <div className="">
        
//           <div className="">
        

//         {/*
//          <LeftCurve />
//          <RightCurve />
//          */}
//            </div>
//         </div>
//       </div>
//          <div className="flex ml-10 w-full h-full  ">
//         <ImagesSliderDemo/>
//       </div>
//     </Section>
//   );
// };

// export default Collaboration;
