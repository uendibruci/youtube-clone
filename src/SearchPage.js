import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://images.ctfassets.net/aq13lwl6616q/2gqVi4hhjq9vgvdh63UoKZ/c763c6f7e98a80eb2800bbe5eb9d690d/react_native_zero_to_mastery.png"
        channel="Uendi Bruci"
        verified
        subs="660K"
        noOfVideos={382}
        description="Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more."
      />
      <hr />
      <VideoRow
        views="1.5K"
        subs="340K"
        description="Do you want a free course in ReactJs?"
        timestamp="4 minutes ago"
        channel="Uendi Bruci"
        title="Let's build a YouTube Clone"
        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191231190155/Top-7-Skills-You-Must-Know-Before-You-Learn-ReactJS.png"
      />
      <VideoRow
        views="1.5K"
        subs="340K"
        description="Do you want a free course in ReactJs?"
        timestamp="4 minutes ago"
        channel="Uendi Bruci"
        title="Let's build a YouTube Clone"
        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191231190155/Top-7-Skills-You-Must-Know-Before-You-Learn-ReactJS.png"
      />
      <VideoRow
        views="1.5K"
        subs="340K"
        description="Do you want a free course in ReactJs?"
        timestamp="4 minutes ago"
        channel="Uendi Bruci"
        title="Let's build a YouTube Clone"
        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191231190155/Top-7-Skills-You-Must-Know-Before-You-Learn-ReactJS.png"
      />
    </div>
  );
}

export default SearchPage;
