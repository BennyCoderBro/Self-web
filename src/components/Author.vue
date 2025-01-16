<template >
  <div class="bg-container">
    <div style="width: 100%;padding:50px 0px">
      <h1 class="text-center mb-4" style="font-size: 50px;color: black;">Welcome to Benny's Website</h1>
      <div class="header text-center" style="color:black;">
          <img src="/src/assets/avatar.jpg" alt="Avatar" class="profile-img mb-3" 
            @click="launchConfetti"
          />
          <h1>{{ name }}</h1>
          <p>{{ title }}</p>
        </div>
    </div>
    <div class="profile-container">
      <!-- Header Section -->
      <!-- About Me Section -->
      <div class="section card">
        <h3>About Me</h3>
        <p>{{ bio }}</p>
      </div>
      <div class="section card">
        <h3>Educations</h3>
        <div v-for="school in schools" :key="school.title" class="project-card">
          <h4>{{ school.title }}</h4>
          <h5>{{ school.major }} - {{ school.dates }}</h5>
        </div>
      </div>
      <!-- Work Experience Section -->
      <div class="section card">
        <h3>Work Experience</h3>
        <div v-for="experience in experiences" :key="experience.title" class="experience-card">
          <h4>{{ experience.title }}</h4>
          <p><strong>{{ experience.company }}</strong> - {{ experience.date }}</p>
          <p v-for="point in  experience.description">{{ point }}</p>
        </div>
      </div>

      <!-- Projects Section -->
      <div class="section card">
        <h3>Projects</h3>
        <div v-for="project in projects" :key="project.title" class="project-card">
          <h4>{{ project.title }}</h4>
          <p v-for="point in project.description">{{ point }}</p>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="section card">
        <h3>Contact</h3>
        <p>Email: <a :href="'mailto:' + email">{{ email }}</a></p>
        <p>LinkedIn: <a :href="linkedin" target="_blank">View Profile</a></p>
      </div>
      <div class="section card">
        <h3>Interests</h3>
        <ul>
          <li v-for="interest in interests" :key="interest">{{ interest }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import confetti from 'canvas-confetti';
export default {
  name: 'ProfileComponent',
  data() {
    return {
      name: 'Benny(Zhihao) Yang',
      title: 'Data Engineer | Data Analyst | Full-Stack Dev | WashU MSBA | U of Toronto BSc',
      bio: 'I am a data-driven professional with expertise in analytics, machine learning, and web development. Passionate about technology, I enjoy creating impactful solutions',
      interests: ['Skiing', 'Basketball'],
      email: 'zhihaoyang@wustl.edu',
      linkedin: 'https://www.linkedin.com/in/bennyyanglove',
      experiences: [
        {
          title: 'Data Engineer',
          company: 'Huawei Technologies Co., Ltd',
          date: 'June 2022 - July 2023',
          description: [
            '- Collaborated with partner quality teams to research and implement machine learning methods, optimizing benchmarking for compliance investigations within the codebase.',
            '- Established daily code review API and anomaly capture visualization from databases, resolving over 20,000 instances of dead code and saving 40 engineering hours annually.',
            '- Audited and optimized code-accessible group data, resolving duplicates and improving audit efficiency by 80%.'
          ]
        },
        {
          title: 'Marketing Data Analytics Intern',
          company: 'Deli Group Inc.',
          date: 'May 2024 - August 2024',
          description: [
            '- Applied factor regression and product map visualizations to identify high-impact market opportunities with Top 10 U.S. retailers, driving a $50M project.',
            '- Developed U.S. market-specific proposals, refining designs and launching 10+ targeted products.',
            '- Spearheaded Amazon Basics Home Storage project, optimizing material usage and reducing production costs by 30%.'
          ]
        }
      ],
      projects: [
      {
          title: 'Finance Research Practicum',
          description: [
            '- Developed an interactive finance-oriented LLM model with backend/frontend support, achieving 90% accuracy in finance-related query responses.',
            '- Scraped and processed 1GB of data from EDGAR, enabling fine-tuning LLM training.',
            '- Designed keyword extraction and binary classification to improve model performance.'
          ]
        },
        {
          title: 'Futura Nonprofit Start-up',
          description: [
            '- Built an ROI model using 20 variables and 10K data points, demonstrating societal and financial impacts.',
            '- Designed an interactive web-based front-end interface that attracted 3 investors and facilitated decision-making.'
          ]
        }
      ],
      schools: [
        {
          title: 'Washington University in St. Louis',
          dates:'2023.08 - 2024.12',
          major: 'Master of Science in Business Analytics'
        },
        {
          title: 'University of Toronto',
          dates:'2017.09 - 2021.06',
          major: 'Bachelor of Science in Applied Statistics'
        }
      ],
      showSecret: false,
    };
  },
  methods: {
    launchConfetti() {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }
}
</script>

<style scoped>
.profile-container {
  width: 80%;
  margin: 0px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.95;
}
.bg-container {
  background-image: url('/src/assets/background.jpg');
  background-size: cover; /* 背景图片等比例填充整个屏幕 */
  background-position: center; /* 图片居中显示 */
  background-repeat: no-repeat; /* 禁止图片重复 */;
  width: 100%;
  height: 100%;
  margin: 0px;
  border-radius: 2px;
}
.header {
  margin: 50px;
}
.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 10px;
}
.section {
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.project-card, .experience-card {
  margin-top: 10px;
  padding: 10px;
}
</style>
