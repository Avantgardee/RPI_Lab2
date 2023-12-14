import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function Timeline(props) {
  return (
    <>
      <div className="Timeline-container">
        <VerticalTimeline>
          {props.timeline.map((item, key) => (
            <VerticalTimelineElement
              key={key}
              className="vertical-timeline-element--work"
              contentStyle={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: 400,
              }}
              contentArrowStyle={{
                borderRight: "7px solid #808080",
              }}
              date={item.date}
              dateClassName="date"
              iconStyle={{ background: "#000000", color: "#000" }}
            >
              <h2
                className="vertical-timeline-element-title"
                style={{
                  fontSize: "32px",
                }}
              >
                {item.title}
              </h2>
              <p
                className="vertical-timeline-element-description"
                style={{
                  fontSize: "24px",
                }}
              >
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Timeline;