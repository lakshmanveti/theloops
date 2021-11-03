import React, {useState,useEffect} from "react";
import './App.css';
import { Draggable, Droppable } from 'react-drag-and-drop'

const App = () => {
 const [source, setSource] = useState("");
 const [target, setTarget] = useState("");
 const [type, setType] = useState("");

 const onDrop = (type,data)=> {
  setType(type);
   if(type=='source') setSource(data.integration);
   else setTarget(data.integration)
    // => banana 
 }
return (
    <div className="page">
<div className="menu-left">
  <div className="logo">
    <i className="fab fa-stumbleupon-circle" />
  </div>
  <div className="menu-item">
    <i className="fas fa-home" />
  </div>
  <div className="menu-item">
    <i className="fas fa-th-large" />
  </div>
  <div className="menu-item">
    <i className="fas fa-digital-tachograph" />
  </div>
  <div className="menu-item">
    <i className="fas fa-users" />
  </div>
  <div className="menu-item selected">
    <i className="fas fa-plug" />
  </div>
  <div className="menu-item">
    <i className="fas fa-chart-bar" />
  </div>
  <div className="menu-item float-bottom">
    <i className="fas fa-cog" />
  </div>
</div>
<div className="menu-top">
  <div className="title">
    <span>INTERGRATIONS</span>
    <i className="fas fa-arrow-right" />
    <span className="highlight">STITCHING</span>
  </div>
  <div className="menu-right">
    <div className="menu-item red-dot">
      <i className="fas fa-bell" />
    </div>
    <div className="menu-item selected">
      <i className="fas fa-user" />
    </div>
  </div>
</div>
<div className="content">
  <div className="title-bar">
    <div className="title">Data Stitching</div>
    <div className="sub-title">In order for Loops functionalities to start working you'll need to connect some data sources. Explore all of our connectors or click on a functionality below so we can guide you on what connectors you need to integrate to get things going.</div>
    <div className="clear-all" />
  </div>
  <div className="heading">Select your integration</div>
  <div className="card">
    <div className="card-head">Connect your first integration to another integration.</div>
    <div className="card-body">
      <div className="drop-container">
        <Droppable className={"drop-item"+(source?' active':'')} types={['integration']} onDrop={onDrop.bind(this, "source")}>{source?source:'Drag the integration from below to start'}</Droppable>
        <div className="link">
          <i className="fas fa-link" />
        </div>
        <Droppable className={"drop-item dot"+(target?' active':'')}  types={['integration']} onDrop={onDrop.bind(this, "target")}>{target?target:'Drag target integration'}</Droppable>
      </div>
      <div className="divider" />
      <div className="app-list">
        <Draggable className="app"  type="integration" data="Zendesk">
          <div className="icon">
            <i className="fas fa-desktop" />
          </div>
          <div className="cont">
            <div>Zendesk</div>
            <div>Upskill Support Reps</div>
          </div>
        </Draggable>
        <Draggable className="app"  type="integration" data="PDTest">
          <div className="icon green">
            <i className="fas fa-boxes" />
          </div>
          <div className="cont">
            <div>PDTest</div>
          </div>
        </Draggable>
        <Draggable className="app"  type="integration" data="SentryLogTtest">
          <div className="icon red">
            <i className="fab fa-creative-commons-sa" />
          </div>
          <div className="cont">
            <div>SentryLogTtest</div>
          </div>
        </Draggable>
        <Draggable className="app"  type="integration" data="Sandbox1">
          <div className="icon blue">
            <i className="fas fa-toolbox" />
          </div>
          <div className="cont">
            <div>Sandbox1</div>
          </div>
        </Draggable>
        <Draggable className="app"  type="integration" data="Service Application 1">
          <div className="icon blue">
            <i className="fab fa-servicestack" />
          </div>
          <div className="cont">
            <div>Service Application 1</div>
          </div>
        </Draggable>
      </div>
    </div>
  </div>
</div>


<div className="float-menu">
  <div className="menu-item red-dot">
    <i className="fas fa-bars" />
  </div>
  <div className="menu-item selected">
    <i className="fas fa-info-circle" />
  </div>
  <div className="menu-item selected">
    <i className="fas fa-cog" />
  </div>
</div>
</div>
  )
}

export default App


// class App extends Component {
//   onDrop(data, type) {
//     console.log(data, type)
//     // => banana 
//   }
//   render() {
//     return (
//       <div className="page">
//   <div className="menu-left">
//     <div className="logo">
//       <i className="fab fa-stumbleupon-circle" />
//     </div>
//     <div className="menu-item">
//       <i className="fas fa-home" />
//     </div>
//     <div className="menu-item">
//       <i className="fas fa-th-large" />
//     </div>
//     <div className="menu-item">
//       <i className="fas fa-digital-tachograph" />
//     </div>
//     <div className="menu-item">
//       <i className="fas fa-users" />
//     </div>
//     <div className="menu-item selected">
//       <i className="fas fa-plug" />
//     </div>
//     <div className="menu-item">
//       <i className="fas fa-chart-bar" />
//     </div>
//     <div className="menu-item float-bottom">
//       <i className="fas fa-cog" />
//     </div>
//   </div>
//   <div className="menu-top">
//     <div className="title">
//       <span>INTERGRATIONS</span>
//       <i className="fas fa-arrow-right" />
//       <span className="highlight">STITCHING</span>
//     </div>
//     <div className="menu-right">
//       <div className="menu-item red-dot">
//         <i className="fas fa-bell" />
//       </div>
//       <div className="menu-item selected">
//         <i className="fas fa-user" />
//       </div>
//     </div>
//   </div>
//   <div className="content">
//     <div className="title-bar">
//       <div className="title">Data Stitching</div>
//       <div className="sub-title">In order for Loops functionalities to start working you'll need to connect some data sources. Explore all of our connectors or click on a functionality below so we can guide you on what connectors you need to integrate to get things going.</div>
//       <div className="clear-all" />
//     </div>
//     <div className="heading">Select your integration</div>
//     <div className="card">
//       <div className="card-head">Connect your first integration to another integration.</div>
//       <div className="card-body">
//         <div className="drop-container">
//           <Droppable className="drop-item" types={['integration']} onDrop={this.onDrop.bind(this, "source")}>Drag the integration from below to start</Droppable>
//           <div className="link">
//             <i className="fas fa-link" />
//           </div>
//           <Droppable className="drop-item dot"  types={['integration']} onDrop={this.onDrop.bind(this, "target")}>Drag target integration</Droppable>
//         </div>
//         <div className="divider" />
//         <div className="app-list">
//           <Draggable className="app"  type="integration" data="Zendesk">
//             <div className="icon">
//               <i className="fas fa-desktop" />
//             </div>
//             <div className="cont">
//               <div>Zendesk</div>
//               <div>Upskill Support Reps</div>
//             </div>
//           </Draggable>
//           <Draggable className="app"  type="integration" data="PDTest">
//             <div className="icon green">
//               <i className="fas fa-boxes" />
//             </div>
//             <div className="cont">
//               <div>PDTest</div>
//             </div>
//           </Draggable>
//           <Draggable className="app"  type="integration" data="SentryLogTtest">
//             <div className="icon red">
//               <i className="fab fa-creative-commons-sa" />
//             </div>
//             <div className="cont">
//               <div>SentryLogTtest</div>
//             </div>
//           </Draggable>
//           <Draggable className="app"  type="integration" data="Sandbox1">
//             <div className="icon blue">
//               <i className="fas fa-toolbox" />
//             </div>
//             <div className="cont">
//               <div>Sandbox1</div>
//             </div>
//           </Draggable>
//           <Draggable className="app"  type="integration" data="Sandbox1">
//             <div className="icon blue">
//               <i className="fab fa-servicestack" />
//             </div>
//             <div className="cont">
//               <div>Service Application 1</div>
//             </div>
//           </Draggable>
//         </div>
//       </div>
//     </div>
//   </div>
 

//   <div className="float-menu">
//     <div className="menu-item red-dot">
//       <i className="fas fa-bars" />
//     </div>
//     <div className="menu-item selected">
//       <i className="fas fa-info-circle" />
//     </div>
//     <div className="menu-item selected">
//       <i className="fas fa-cog" />
//     </div>
//   </div>
// </div>
//     );
//   }
// }

// export default App;
