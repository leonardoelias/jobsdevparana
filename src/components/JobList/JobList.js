import React, {Component} from "react";
import JobPreview from "../JobPreview";

class JobList extends Component {
  render() {
    return (
      <div>
        {this.props.jobs && this
          .props
          .jobs
          .map(job => <JobPreview key={job.id} job={job}/>)}
      </div>
    );
  }
}

export default JobList;
