import React from 'react';
import './App.css';
import Step from './Step.js';
import Branch from './Branch.js'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentId: "001",
      previousIds: ["001"]
    }
    this.handleBranch = this.handleBranch.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }

  handleBranch (currentId, targetId) {
    let newPreviousIds = [...this.state.previousIds];
    if(currentId !== targetId){
      this.setState({currentId: targetId, previousIds: newPreviousIds.concat(currentId)});
    }
  }

  handleReturn () {
    let newPreviousIds = [...this.state.previousIds];
    if(newPreviousIds.length > 1){
      let newCurrentId = newPreviousIds.pop();
      this.setState({currentId: newCurrentId, previousIds: newPreviousIds});
    }
  }

  render() {
      let currentSubworkflow = getSubworkflowByID(this.state.currentId, this.props.workflow);
      return (
      <div className="App">
        <h1 id="app-title">Proof of Owneship Workflow</h1>      
        <div id="app-steps">{renderSubworkflowSteps(currentSubworkflow)}</div>
        <div id="app-branch">{renderSubworkflowBranch(currentSubworkflow, this.handleBranch, this.state.currentId)}</div>
        <button id="return" onClick={this.handleReturn}><span>&#8617;</span></button>
      </div>
    );
  }
}

const getSubworkflowByID = (id, workflow) => {
  for(let i = 0; i < workflow.length; i++){
    if(workflow[i].id === id) {
      return workflow[i];
    }
  }
  return {};
}

const renderSubworkflowSteps = (subworkflow) => {
  return (
  <div>
    {subworkflow.steps.map((step, index) => <Step id={"s"+index} title={step.title} detail={step.detail}/>)}
  </div>
  );
}

const renderSubworkflowBranch = (subworkflow, hFunc, currentId) => {
  return (
    <div>
      {subworkflow.branch.map((branch, index) => <Branch id={"b" + index} condition={branch.condition} targetId={branch.targetId} currentId={currentId} handleBranch={hFunc}/>)}
    </div>
  )
}

export default App;
