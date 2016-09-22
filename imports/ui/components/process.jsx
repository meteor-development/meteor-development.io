import React from 'react';

const Process = () => (
  <div className="ui vertical segment">
    <h1 className="ui header center aligned">Our Process</h1>

    <div className="ui container">
      <div className="ui vertical segment">
        <h2 className="ui header">
          Discover
          <div className="sub header">The first step to working together is for us to really get to know you and truly understand your product vision.</div>
        </h2>
        <p>We want to understand who you are and how you like to work, in order to build a strong and transparent working relationship with you. To determine if we are a good fit for each other, and to make sure we can rapidly unlock value for you, our strategists and developers will ask a lot of questions to help us understand what you want to build, who you’re building it for, and what key assumptions we’ll need to test once we get the product in front of real users.</p>
      </div>
      <div className="ui vertical segment">
        <h2 className="ui header">
          Define
          <div className="sub header">Before we begin writing any code, we want to create a clear roadmap and set transparent expectations to make sure we are completely aligned.</div>
        </h2>
        <p>We will assign you with a Project Lead and a Strategist who will provide consulting and coaching on your project to set the scope, prioritize features, plan out the roadmap, and outline user experience. They will then tap the right resources (designers and developers) for the project. If you’ve not already done it, your assigned team will help you translate customer/user insights into user stories, and user stories into key features - which will help us define your product roadmap.</p>
      </div>
      <div className="ui vertical segment">
        <h2 className="ui header">
          Develop
          <div className="sub header">At this point, we will start to dig into the architecture of the project. We will present designs to you and have working software up that you can see and continuously monitor to view our progress.</div>
        </h2>
        <p>As we navigate through the roadmap together, we will provide weekly updates and be available to answer any questions help you stay connected to the process as we pilot through any technical and timeline challenges.</p>
      </div>
      <div className="ui vertical segment">
        <h2 className="ui header">
          Deploy
          <div className="sub header">Once we reach the end of the roadmap and have completed the scope of the project, we are ready to officially launch your product. It is time to celebrate, and to learn, as we see how real users are interacting with the product. This is great, because real-world users will often uncover insights and product optimization opportunities that were non-obvious before launch, but will help make the product better in future versions.</div>
        </h2>
        <p>Once we launch and clean up any small bugs or issues that may arise, we will also revisit your plan for how to keep your application updated in the future.</p>
      </div>
    </div>
  </div>
);

export default Process;
