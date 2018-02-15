import React, {Component} from "react";
import Box from "../../components/Box";
import CenteredContent from "../../components/CenteredContent";

class Job extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CenteredContent>
        Voltar
        <Box>Job</Box>
      </CenteredContent>
    );
  }
}

export default Job;
