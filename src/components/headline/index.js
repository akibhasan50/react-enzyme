import React, { Component } from "react";
import PropTypes from "prop-types";

export default function Headline(props) {
  const { header, desc } = props;

  if (!header) {
    return null;
  }
  return (
    <div data-test="HeadlineComponent">
      <h1 data-test="header">{header}</h1>
      <p data-test="desc">{desc}</p>
    </div>
  );
}

Component.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  // Complex example for working with PropTypes (not used in component)
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
};
