/** @format */

import { Styledelements } from "../globalsyles/Globalstyles.styled";
import { Container } from "./Schedule.styled";
import Underline from "../underline/Underline";

const Schedule = () => {
  const data = [
    {
      id: 1,
      title: "body building",
      price: "$139 Month",
      time: "Mon-Fri | 08.00am-11.00am",
      image: "schedule1.jpg",
    },
    {
      id: 2,
      title: "yoga",
      price: "$99 Month",
      time: "Mon-Fri | 03.00pm-06.00pm",
      image: "schedule2.jpg",
    },
    {
      id: 3,
      title: "boxing",
      price: "$250 Month",
      time: "Mon-Fri | 11.00am-02.00pm",
      image: "schedule3.jpg",
    },
    {
      id: 4,
      title: "zumba",
      price: "$159 Month",
      time: "Mon-Fri | 08.00am-11.00am",
      image: "schedule4.jpg",
    },
    {
      id: 5,
      title: "abbs blast",
      price: "$299 Month",
      time: "Mon-Fri | 03.00pm-06.00pm",
      image: "schedule5.jpg",
    },
    {
      id: 6,
      title: "weight lifting",
      price: "$250 Month",
      time: "Mon-Fri | 11.00am-02.00pm",
      image: "schedule6.jpg",
    },
  ];
  return (
    <Container data-scroll-section>
      <Styledelements.Heading1>
        <span>ou</span>r schedule
      </Styledelements.Heading1>
      <div className="body">
        {data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="text">
                <Styledelements.Paragraph>
                  {item.price}
                </Styledelements.Paragraph>
                <Styledelements.Heading3>{item.title}</Styledelements.Heading3>
                <Styledelements.Paragraph>{item.time}</Styledelements.Paragraph>
              </div>
              <img src={`./images/background/${item.image}`} alt="" />
            </div>
          );
        })}
      </div>
      <Underline />
    </Container>
  );
};

export default Schedule;
