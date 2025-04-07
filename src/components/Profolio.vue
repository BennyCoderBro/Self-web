<template>
    <div class="author-page">
      <section class="author-header">
        <h1 class="author-name">Benny Yang</h1>
        <p class="author-title">Data Scientist | Data Analyst | Data Engineer | Full-Stack Developer</p>
        <div class="avatar">
          <div>
            <img src="/src/assets/selfie.png" alt="Avatar" class="profile-img" @click="launchConfetti" />
            <!-- 联系方式浮动图标（含浮窗） -->
            <div class="contact-icons">
              <!-- 微信图标 -->
              <div class="floating-icon">
                📱
                <transition name="fade">
                  <div class="tooltip">
                    WeChat: yangzhihaolove
                    <div class="tooltip-arrow"></div>
                  </div>
                </transition>
              </div>

              <!-- 邮箱图标 -->
              <div class="floating-icon" >
                📧
                <transition name="fade">
                  <div class="tooltip">
                    Email: zhihaoyang@wustl.edu
                    <div class="tooltip-arrow"></div>
                  </div>
                </transition>
              </div>
              <!-- GitHub / LinkedIn 外链 -->
              <a href="https://github.com/BennyCoderBro?tab=repositories" target="_blank" class="floating-icon">🐱
                <transition name="fade">
                  <div class="tooltip">
                    GitHub
                    <div class="tooltip-arrow"></div>
                  </div>
                </transition>
              </a>
              <a href="https://www.linkedin.com/in/bennyyanglove/" target="_blank" class="floating-icon">💼
                <transition name="fade">
                  <div class="tooltip">
                    LinkedIn
                    <div class="tooltip-arrow"></div>
                  </div>
                </transition>
              </a>
            </div>
          </div>
          <div class="intro-text">
                <strong>🎓 Undergraduate</strong><br> University of Toronto, BSc in Applied Statistics
                <br><strong>🎓 Graduate</strong><br> Washington University in St. Louis, MS in Business Analytics (Customer Analytics)
                <br><strong>💼 Experiences </strong><br> Former Data Engineer at Huawei
                <br><strong>🏆 Latest Achievement</strong><br>Earned Google Advanced Data Analytics Certification
                <br><strong>🚀 Status</strong><br>Currently pursuing data-related job opportunities!
          </div>
        </div>
      </section>
      <!-- PORTFOLIO SECTION -->
      <section class="portfolio-section">
        <h2>Portfolio</h2>
        <p>This section showcases selected projects demonstrating Benny's practical experience in LLMs, data engineering, NLP, dashboarding, and statistical modeling.</p>
        <div v-for="project in projects" :key="project.title" class="project-card">
          <details>
            <summary class="project-title">{{ project.title }}</summary>
            <div class="project-content">
              <img v-if="project.img" :src="project.img" alt="project screenshot" class="project-screenshot" />
              <p class="project-background"><em>{{ project.background }}</em></p>
              <ul>
                <li v-for="point in project.description" :key="point">{{ point }}</li>
              </ul>
              <p>
                <a :href="project.link" target="_blank" v-if="project.link !== ''">🔗 Project Link</a>
              </p>
            </div>
          </details>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Profolio",
    data() {
      return {
        projects:
          [
            {
            title: 'Quantum Text Classification with MiniLM - Mar 2025',
            background: 'Built a robust NLP pipeline to classify quantum computing research papers using transformer-based models.',
            description: [
              'Applied MiniLM transformer for multi-class classification on quantum abstracts and titles.',
              'Enhanced data with custom preprocessing and synonym augmentation using WordNet.',
              'Used HuggingFace Trainer with early stopping and metric logging (accuracy & F1-score).',
              'Exported predictions to CSV and misclassified samples to Excel for error analysis.'
            ],
            link: 'https://github.com/BennyCoderBro/LLM-Text-Classification',
            img: '/src/assets/flowchart.png'
          },
          {
            title: 'LLM-Powered Financial Q&A Assistant - Dec 2024',
            background: 'Simulated a domain-specific financial LLM pipeline using SEC filings to enable real-time institutional Q&A.',
            description: [
              'Scraped and processed 1GB+ SEC EDGAR filings; converted 10-Ks into Q&A-ready text corpora.',
              'Built Flask-based backend with structured prompt templates for R&D, cash flow, ESG, and risks.',
              'Designed endpoints ready for integration with LLMs like GPT or embedding-based search engines.',
              'Supported frontend demo deployment for live querying and performance testing.'
            ],
            link: 'https://github.com/BennyCoderBro/LLMChatbot',
            img: '/src/assets/chatbot.png'
          },
          {
            title: 'YouTube Global Insights Dashboard with Tableau - Nov 2024',
            background: 'Led dashboard development to visualize global YouTube creator patterns and socioeconomic drivers.',
            description: [
              'Connected and cleaned 2023 YouTube dataset (28 variables) from Kaggle using Tableau.',
              'Built interactive dashboards with maps, quadrant charts, sunbursts, and animated bar plots.',
              'Explored unemployment, earnings, and category distribution over time and geography.',
              'Recommended creator incentives and localization strategies for platform growth.'
            ],
            link: 'https://docs.google.com/presentation/d/14_Sgays5MgasBWuv0FdqfNHyyLtpveYN/edit?usp=sharing&ouid=109011212620781523655&rtpof=true&sd=true',
            img: '/src/assets/tableau.png'
          },
          {
            title: 'Fiscal Impact Simulation for Youth Reconnection Program - Apr 2024',
            background: 'Developed a fiscal model to quantify tax uplift and welfare savings from a youth reintegration initiative.',
            description: [
              'Built projection formula combining tax contributions and reduced service dependency.',
              'Simulated 4 cycles of reintegration with variable wage and consumption assumptions.',
              'Estimated cumulative government savings and positive community effects (e.g., crime reduction).',
              'Presented actionable insights for long-term policy investment and scaling.'
            ],
            link: 'https://docs.google.com/document/d/1npQfK9PuNWRZ0xd8qekHSgQQ0d1s9D8w/edit?usp=sharing&ouid=109011212620781523655&rtpof=true&sd=true',
            img: '/src/assets/reconnect.png'
          },
          {
            title: 'EV Consumer Segmentation Research - Dec 2024',
            background: 'Performed customer segmentation to identify EV buyer personas using survey data and clustering.',
            description: [
              'Analyzed 198 valid responses covering demographics, tech adoption, and EV intent.',
              'Preprocessed and standardized data, followed by k-means clustering into 4 key segments.',
              'Identified tech-savvy high-income buyers as the top-priority market segment.',
              'Delivered data-driven recommendations for targeted marketing strategies.'
            ],
            link: 'https://drive.google.com/file/d/1VYL1KLSZJA3rq4u-4_mVPx5uma_1Pkwz/view?usp=sharing',
            img: '/src/assets/evcar.png'
          },
          {
            title: 'Huawei DevOps Data Quality Dashboard - Jul 2023',
            background: 'Developed and maintained a data pipeline and real-time dashboard for monitoring product development quality and process anomalies in Huawei’s internal DevOps system.',
            description: [
              'Designed and implemented an end-to-end ETL pipeline for multi-source system logs, commit records, and defect metadata using SQL and PySpark.',
              'Built data cleansing and aggregation layers for aligning cross-system entities (code fields, modules, responsible teams).',
              'Created a real-time quality watch dashboard using internal BI tools and custom Python scripts to track rule violations and defect injection.',
              'Implemented data anomaly detection rules using statistical thresholds and historical baselines to auto-flag process irregularities.',
              'Optimized pipeline execution time by 40% via partitioning and job dependency restructuring, ensuring daily on-time report delivery for over 15 business units.'
            ],
            link: '',
            img: '/src/assets/devops.png'
          },
          {
            title: 'Access Group Clustering & Anomaly Detection At Huawei - Aug 2023',
            background: 'Analyzed and optimized the permission group structure in Huawei’s internal system to detect anomalies, reduce redundancy, and enhance permission governance.',
            description: [
              'Extracted group membership, user roles, creator metadata, and group nesting structure from internal access control logs and databases.',
              'Performed data cleaning to remove invalid, orphaned, and test groups; standardized naming and merged duplicates.',
              'Applied unsupervised clustering (KMeans + cosine similarity) based on group-role vectors to identify overlapping or redundant permission groups.',
              'Detected outlier groups using distance metrics and created visual summary of group cohesion and cross-function contamination.',
              'Delivered business insights on optimization, recommending merge/removal of ~18% low-value or inconsistent groups, improving security and manageability.'
            ],
            link: '',
            img: '/src/assets/access.png'
          },
          {
            title: 'Toronto Weather Forecast with ARIMA - Apr 2021',
            background: 'Implemented classic time series modeling in R to predict daily average temperature in Toronto.',
            description: [
              'Preprocessed and visualized 3 years of daily average temperature data.',
              'Performed stationarity tests, auto ARIMA tuning, and residual diagnostics.',
              'Trained final ARIMA model with a next-day forecast error of 0.1°C.',
              'Validated model reliability and interpretability for use in microclimate analysis.'
            ],
            link: '',
            img: '/src/assets/arima.png'
          }
        ]
      }
    },
    methods: {
      
    }
  };
  </script>
  
  <style scoped>
  .author-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Helvetica Neue', sans-serif;
  }
  
  .author-header {
    text-align: center;
  }
  
  .author-name {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 3px;

  }
  
  .author-title {
    font-size: 1.2rem;
    color: #666;
  }
  
  section {
    margin-bottom: 2rem;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  p, ul {
    font-size: 1rem;
    line-height: 1.6;
    color: #444;
  }
  
  ul {
    padding-left: 1.2rem;
  }

  .avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
  padding: 20px 0px;
}

.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-top:0px
}

.profile-img:hover {
  transform: scale(1.05);
}


.intro-text {
  padding-left: 40px;
  width:100%;
  font-size: 14px;
  text-align: left;
  line-height: 27px;
}
.floating-icon {
  font-size: 20px;
  color: white;
  width: 40px;
  height: 25px;
  line-height: 20px;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.tooltip {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #333;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 999;
  text-align: center;
  pointer-events: none;
}

/* 悬停时显示 */
.floating-icon:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

/* 箭头 */
.tooltip-arrow {
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid white;
}
.contact-icons {
  display: flex;
  /*justify-content: center;   水平居中 */
  /*align-items: center;        垂直居中 */
  padding: 30px 10% 0px;
  gap: 30px;
  justify-content: space-around;  /* 均匀分布，两边也有空隙 */
  

}
/* 动画 */

.portfolio-section {
  padding: 60px 20px;
  max-width: 960px;
  margin: 0 auto;
  font-family: 'Helvetica Neue', sans-serif;
}

.portfolio-section h2 {
  font-size: 32px;
  margin-bottom: 10px;
  color: #222;
  border-bottom: 2px solid #ccc;
  padding-bottom: 8px;
}

.portfolio-section p {
  color: #555;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.6;
}

.project-card {
  background: #f9f9f9;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.project-title {
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  color: #2a4f8d;
}

.project-content {
  margin-top: 15px;
}

.project-screenshot {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
}

.project-background {
  font-style: italic;
  color: #666;
  margin-bottom: 12px;
}

.project-content ul {
  padding-left: 20px;
  margin-bottom: 10px;
}

.project-content ul li {
  margin-bottom: 8px;
  color: #333;
}

.project-content a {
  color: #007acc;
  text-decoration: none;
}

.project-content a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .avatar {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    padding: 20px 10px;
  }

  .intro-text {
    padding-left: 0;
    font-size: 15px;
    width: 100%;
    line-height: 26px;
  }

  .profile-img {
    width: 160px;
    height: 160px;
  }

  .contact-icons {
    align-items: center;
    gap: 20px;
  }
}


  </style>
  