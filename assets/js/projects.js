/* Add projects here. Keep evidence paths relative to the portfolio root. */
window.PORTFOLIO_PROJECTS = [
  {
    id:"logistics-network", title:"Logistics Company Network Design", category:"Networking", status:"Completed",
    summary:"Designed a network architecture for a logistics company, configured network devices and tested connectivity to ensure all devices were reachable.",
    problem:"A logistics company requires a structured network design that enables connected devices and reliable communication.",
    objectives:["Design a suitable network architecture","Configure network devices","Test connectivity between devices"],
    technologies:["Cisco Packet Tracer","Network configuration"],
    contributions:["Network architecture design","Device configuration","Connectivity testing"],
    implementation:"The network topology was designed and devices were configured. Connectivity tests were performed to verify reachability across the network.",
    challenges:"Detailed challenge notes can be added when project documentation is available.",
    solutions:"Configuration and connectivity testing were used to verify the design.",
    outcomes:"All devices were tested for reachability as part of the completed project.",
    future:["Add a detailed network diagram","Document addressing and device configuration decisions"],
    evidence:[
      {type:"image",title:"Network topology",file:"assets/evidence/logistics-network/topology.png",caption:"Add the final network topology screenshot here."},
      {type:"pdf",title:"Project documentation",file:"assets/evidence/logistics-network/report.pdf",caption:"Add the project report when available."}
    ],
    links:[]
  },
  {
    id:"retail-security", title:"Retail Shop Security System", category:"Cybersecurity", status:"Prototype",
    summary:"A prototype security system developed using Debian Linux.",
    problem:"A retail environment needs practical security measures to protect systems and support responsible access.",
    objectives:["Explore security controls in a retail context","Build a prototype using Debian Linux"],
    technologies:["Debian Linux"],
    contributions:["Prototype development"],
    implementation:"The project is currently documented at prototype level. Add confirmed implementation details, screenshots and security documentation as development progresses.",
    challenges:"Awaiting additional project details.",
    solutions:"Awaiting additional project details.",
    outcomes:"Prototype.",
    future:["Document implemented security controls","Add system screenshots and test evidence","Describe the retail environment and threat model"],
    evidence:[{type:"image",title:"Prototype screenshot",file:"assets/evidence/retail-security/prototype.png",caption:"Add a screenshot of the Debian Linux prototype."}],
    links:[]
  },
  {
    id:"fare-collection", title:"Automated Fare Collection System", category:"Software & Security", status:"In Progress",
    summary:"An automated fare collection system for public transport, with emphasis on implementing user access controls, securing data and managing backup files.",
    problem:"Public transport fare collection requires a structured approach to user access, data protection and backup management.",
    objectives:["Implement user access controls","Secure system data","Manage backup files"],
    technologies:["Technology stack awaiting confirmation"],
    contributions:["User access control implementation","Data security considerations","Backup file management"],
    implementation:"The project is in progress. Add confirmed architecture, database design, security implementation and interface details as they are completed.",
    challenges:"Awaiting documentation.",
    solutions:"Awaiting documentation.",
    outcomes:"In progress.",
    future:["Document system architecture","Add database design and interface screenshots","Record backup and recovery tests"],
    evidence:[{type:"image",title:"System interface",file:"assets/evidence/fare-collection/interface.png",caption:"Add an interface screenshot when available."}],
    links:[]
  },
  {
    id:"campus-daily", title:"Campus Daily Website", category:"Web Development", status:"Completed",
    summary:"A campus communication platform designed to keep students informed about activities and updates. It supports communication with administration, access to course materials, quick registration and order placement.",
    problem:"Students need a central platform to access campus information and communicate with relevant campus roles.",
    objectives:["Provide a central campus information platform","Support student registration and access","Enable communication and campus service features"],
    technologies:["PHP","MySQL","HTML","CSS"],
    contributions:["Website planning and development"],
    implementation:"The project uses a PHP and MySQL web application structure with HTML and CSS. Add further confirmed features, screenshots and implementation details as evidence is prepared.",
    challenges:"Add specific development challenges when documented.",
    solutions:"Add confirmed solutions when documented.",
    outcomes:"Completed project. Detailed outcome evidence can be added.",
    future:["Add JavaScript if confirmed as part of the implementation","Document role permissions and security controls","Add database diagram and feature demonstrations"],
    evidence:[
      {type:"image",title:"Homepage",file:"assets/evidence/campus-daily/homepage.png",caption:"Add the Campus Daily homepage screenshot."},
      {type:"image",title:"Student dashboard",file:"assets/evidence/campus-daily/dashboard.png",caption:"Add a student dashboard screenshot."},
      {type:"pdf",title:"Project report",file:"assets/evidence/campus-daily/report.pdf",caption:"Add the project report when available."}
    ],
    links:[]
  }
];