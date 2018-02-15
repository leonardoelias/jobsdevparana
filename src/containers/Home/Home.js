import React, {Component} from "react";
import JobList from "../../components/JobList";
import CenteredContent from "../../components/CenteredContent";

class Home extends Component {
  constructor(props) {
    super(props);

    const jobs = [];

    for (let i = 0; i < 10; i++) {
      jobs.push({
        id: i,
        url: "/job/" + i,
        avatar: "https://media-exp2.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAwsAAAAJGY3N2Ey" +
            "MWY5LTAyODgtNDRhNy05ZjUyLTc2YmNkN2MxODM2Mw.png",
        company: "Entria",
        title: "Desenvolvedor front-end",
        date: "3 dias",
        city: "Maringá",
        state: "PR",
        type: "Freelancer"
      });
    }

    this.state = {
      jobs
    };
  }

  render() {
    const {jobs} = this.state;

    return (
      <CenteredContent>
        <JobList key="jobsLists" jobs={jobs}/>
      </CenteredContent>
    );
  }
}

export default Home;
