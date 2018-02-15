import React, {Component} from "react";
import Button from "../Button";
import styled from "styled-components";
import {Link} from "react-router-dom";
import PinSVG from "../../shared/components/PinSVG";

const JobLink = styled(Link)`
  width: 100%;
  margin: 0 auto 20px;
  border-radius: 6px;
  min-height: 104px;
  background-color: #fff;
  transition: box-shadow 0.2s ease-in;
  border: 1px solid #e3e3e3;
  padding: 19px;
  align-items: flex-start;
  align-items: center;
  display: flex;
  text-align: left;

  &:hover,
  &:active,
  &:focus {
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.1);
  }

  Button {
    margin-left: 1rem;
  }
`;

const StyledJobsBody = styled.div `
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  strong {
    font-size: 14px;
    color: #c5c5c5;
  }
  h2 {
    font-size: 28px;
    color: #73c39f;
    margin: 0;
  }
  time {
    font-size: 12px;
    color: #c5c5c5;
  }
`;

const StyledJobsAvatar = styled.div `
  margin-right: 1rem;
  text-align: left;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  img {
    max-width: 125px;
    max-height: 125px;
    margin-right: 15px;
    display: inline-block;
  }
`;
const StyledJobsRight = styled.div `
  overflow: hidden;
  margin-left: 10px;
  text-align: left;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
`;

class JobPreview extends Component {
  state = {};
  render() {
    const {
      job,
      ...rest
    } = this.props;

    return (
      <JobLink to={job.url}>
        <StyledJobsAvatar>
          <img src={job.avatar}/>
        </StyledJobsAvatar>
        <StyledJobsBody>
          <strong>{job.company}</strong>
          <h2>{job.title}</h2>
          <time>{job.date}</time>
        </StyledJobsBody>
        <StyledJobsRight>
          <Button outline icon={< PinSVG size = {
            14
          } />}>
            {job.city}, {job.state}
          </Button>
          <Button>{job.type}</Button>
        </StyledJobsRight>
      </JobLink>
    );
  }
}

export default JobPreview;
