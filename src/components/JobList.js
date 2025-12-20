import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
  "Johnson & Johnson (Global Services)": {
    jobTitle: "Automation & GenAI Intern",
    duration: "Jun 2025 – Aug 2025",
    desc: [
      "Worked on JAIDA, J&J’s internal GenAI digital assistant serving 138,000+ employees across Procurement, HR, and Clinical Operations, enabling enterprise-scale access to structured and unstructured data.",
      "Designed and enhanced multilingual data ingestion pipelines, including document parsing, metadata extraction, normalization, indexing, and translation workflows for healthcare and enterprise content.",
      "Developed dynamic translation and query-handling features for healthcare-specific use cases such as employee benefits, clinical summaries, and safety protocols.",
      "Built an automated traceability system to monitor model performance, feature rollouts, and deployments across production environments."
    ]
  },

  "The Data Mine – Yamaha Precision Propellers Inc.": {
    jobTitle: "Undergraduate Data Science Researcher",
    duration: "Jan 2025 – May 2025",
    desc: [
      "Led end-to-end development of a production-grade automated scheduling system for a marine propeller factory, generating optimized workforce schedules from operational constraints and historical onsite data.",
      "Built robust data pipelines to ingest, scrape, clean, and integrate workforce availability, machine utilization, and job queue data, translating factory requirements into executable scheduling logic.",
      "Developed an interactive Streamlit dashboard to visualize schedules, constraint trade-offs, real-time resource allocation, and efficiency metrics, resulting in a 30% improvement in factory productivity."
    ]
  },

  "Purdue University – Computer Science Department": {
    jobTitle: "Undergraduate CS Teaching Assistant",
    duration: "Aug 2024 – Present",
    desc: [
      "Hold office hours and mentor 100+ students in programming fundamentals, Git/GitHub workflows, Linux terminal usage, and LaTeX documentation for CS 193 (Development Tools).",
      "Instruct students on data acquisition, cleaning, wrangling, and exploratory analysis using Python and SQL across CSV, JSON, and HTML datasets, emphasizing reproducible workflows.",
      "Incoming TA for CS 242 (Data Science, Spring 2026), mentoring students in Python and R for data wrangling, dimensionality reduction, and hypothesis testing pipelines."
    ]
  },

  "Purdue College of Science": {
    jobTitle: "COSINE Calculus Tutor (Substitute)",
    duration: "Aug 2024 – Present",
    desc: [
      "Serve as a COSINE math tutor at Purdue University, specializing in Calculus I, II, III, and Pre-Calculus for undergraduate students.",
      "Assist students in understanding complex mathematical concepts and improving analytical problem-solving skills.",
      "Lead group tutoring sessions to support coursework mastery and exam preparation."
    ]
  },

  "STAR LABS Surat": {
    jobTitle: "Avionics Intern",
    duration: "Jun 2022 – Jul 2022",
    desc: [
      "Collaborated with IIT Madras Aerospace students to design a static test pad for high-powered rockets, improving system reliability by 20%.",
      "Used Proteus for avionics simulation and SolidWorks for mechanical design, contributing to technical validation and testing accuracy.",
      "Worked cross-functionally to apply avionics and mechanical engineering principles in a real-world aerospace testing environment."
    ]
  }
};

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map((descItem, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <li>{descItem}</li>
              </FadeInSection>
            ))}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
