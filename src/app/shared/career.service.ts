import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class CareerService {
  private positions = [
    {
      title: "Full Stack Developer",
      experience: "1-2 Years",
      imageUrl: "",
      JobDescription: [
        "Samudra Technologies are looking for a Full Stack Developer with 1 to 3 years of experience to build software using languages and technologies of the .NET framework, .NET Core, and JavaScript.You will create applications from scratch, configure existing systems, and provide user support.In this role, you should be able to write functional code with a sharp eye for spotting defects.You should be a team player and an excellent communicator.",
        "If you are also passionate about .NET, JavaScript, and software design/architecture, we would like to meet you.Your goal will be to work with internal teams to design, develop, and maintain software."
      ],
      rolesResponsibilities: [
        "Participate in requirements analysis.",
        "Collaborate with internal teams to produce software design and architecture.",
        "Write clean, scalable code using various programming languages.",
        "Test and deploy applications and systems.",
        "Revise, update, refactor and debug code.",
        "Improve existing software.",
        "Develop documentation throughout the software development life cycle (SDLC).",
        "Serve as an expert on applications and provide technical support."
      ],
      PreferredQualification: "Bachelor’s degree in Computer Science."
    },
    {
      title: "Business Development Executive",
      experience: "1 to 3 Years",
      imageUrl: "https://www.zealousys.com/wp-content/uploads/2018/12/career-bde.png",
      JobDescription: [
        "Samudra Technologies is looking for a Business Development Executive with 1 to 3 years of experience in IT sales and business development. The ideal candidate will identify new business opportunities, build client relationships, and drive revenue growth.",
        "In this role, you will be responsible for lead generation, market research, and sales strategy execution. You should have excellent communication skills, a strong sales mindset, and the ability to work independently as well as in a team.",
        "If you are passionate about sales, client management, and business expansion, we would love to meet you. Your goal will be to collaborate with internal teams and develop strategies to grow our business."
    ],
      rolesResponsibilities: [
        "Identify new business opportunities through market research and networking.",
        "Develop and maintain strong client relationships to generate leads and business growth.",
        "Prepare and deliver compelling sales pitches and presentations to potential clients.",
        "Negotiate contracts, pricing, and business terms with clients and stakeholders.",
        "Collaborate with internal teams to develop tailored solutions that meet client needs.",
        "Monitor industry trends and competitor activities to identify new business strategies.",
        "Achieve and exceed sales targets through strategic planning and execution.",
        "Provide regular reports and insights on sales performance, market trends, and client feedback."
    ],
      PreferredQualification: "MBA preferred."
    }
  ];

  getAllJobs() {
    return this.positions;
  }

  getJobByTitle(title: string) {
    return this.positions.find(job => job.title === title);
  }
}
