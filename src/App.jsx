import { Link } from "react-router-dom";

const PROFILE = {
  name: "Rudrapratap Chinhara",
  role: "M.S. by Research Student · Digital Health",
  affiliation: "Koita Centre for Digital Health, Indian Institute of Technology Bombay",
  subtitle: "Deep Learning, Knowledge Graphs and Medical Reasoning | AI for Healthcare",
  email: "rpchinhara@gmail.com",
  linkedin: "https://linkedin.com/in/rudra-chinhara",
  github: "https://github.com/RPChinhara",
  phone: "+91 920-564-5991",
  researchThemes: [
    "Deep Learning and Multimodal AI",
    "Reinforcement Learning for LLMs",
    "Knowledge Graphs",
    "Data Interoperability",
    "Medical Reasoning",
  ],
  about: [
    "I am an M.S. by Research student at the Koita Centre for Digital Health, IIT Bombay, working at the intersection of AI, healthcare, and computational biology. My research interests span multimodal deep learning, vision-language models for medical reasoning, neurosymbolic AI, and knowledge graphs.",
    "I am particularly interested in developing AI systems that combine learned representations with structured biomedical knowledge to support reliable reasoning in healthcare. Alongside model development, I have experience building scalable biomedical data pipelines, harmonizing health data across standards and ontologies, and analyzing biological networks. My broader interests lie in advancing trustworthy, efficient, and knowledge-grounded AI for healthcare."
  ],
};

const RESUME = {
  education: [
    { degree: "M.S. by Research — Digital Health", school: "Indian Institute of Technology, Bombay", gpa: "9.64", period: "Aug 2025 – Jul 2028" },
    { degree: "B.Tech — Computer Science & Engineering", school: "Central University of Haryana", gpa: "8.35", period: "Nov 2020 – Jul 2024" },
  ],
  experience: [
    { role: "Research Intern", org: "Koita Centre for Digital Health, Ashoka University (KCDH-A)", period: "Feb 2024 – Jul 2024", bullets: ["Led a health data interoperability project integrating 253,617+ Indian brand drug records with international databases and mapped 1,799 active ingredients to standard clinical vocabularies.", "Built a modular Python wrapper with API documentation to automate extraction, normalization, ontology mapping, and network construction."] },
    { role: "Research Intern", org: "Centre for Health Analytics and Trends, Ashoka University", period: "Jun 2023 – Aug 2023", bullets: ["Built an end-to-end Python and SQL ETL pipeline for 250,000+ scraped drug records.", "Developed automated schema normalization and validation methods for large-scale metadata standardization."] },
    { role: "Research Intern", org: "Computational Health Sciences Lab, Ashoka University", period: "Apr 2022 – Jul 2022", bullets: ["Developed HPC workflows for large-scale RNA-seq processing and integrated a unified pipeline using 10+ bioinformatics tools.", "Performed disease–gene network analysis to identify associative links for translational research."] },
  ],
  projects: [
    {
      title: "Deep Learning MCQ Visual Question Answering System",
      period: "Apr – May 2026 · IIT Bombay",
      desc: "Built an end-to-end multimodal visual question answering system using Qwen2.5-VL-7B-Instruct to answer deep learning multiple-choice questions from PNG images. Developed image preprocessing, prompt construction, batched inference, and CSV submission generation, improving answer accuracy to 93.3% through contrast enhancement and image preprocessing for text and diagram understanding.",
      tags: ["VQA", "Multimodal AI", "Qwen2.5-VL", "Image Processing"],
    },
    {
      title: "Test-Time Adaptation using TENT",
      period: "Mar – Apr 2026 · IIT Bombay",
      desc: "Reimplemented Test-Time Entropy Minimization (TENT) for online adaptation of deep learning models under distribution shift without source data. Trained ResNet-26 on CIFAR-10 and evaluated robustness on CIFAR-10-C across 15 corruption types. Reduced mean classification error from 46.56% to 24.51% and built a reproducible corruption-wise evaluation and visualization pipeline.",
      tags: ["Test-Time Adaptation", "TENT", "ResNet-26", "Robustness"],
    },
    {
      title: "CNN from Scratch using C++ and Python",
      period: "Feb – Mar 2026 · IIT Bombay",
      desc: "Built a custom deep learning framework with a C++ computational backend and Python frontend, implementing tensor operations, dynamic computation graphs, and reverse-mode automatic differentiation. Trained a lightweight CNN for 32×32 RGB image classification, reaching 96.71% accuracy with 24,234 trainable parameters and an average inference time of about 60 ms.",
      tags: ["C++", "Python", "CNN", "Automatic Differentiation"],
    },
    {
      title: "Gait2Health — Smartphone Gait-Based Deep Learning for Smoking Risk Detection",
      period: "Sep – Nov 2025 · IIT Bombay",
      desc: "Developed a smartphone accelerometer-based digital biomarker system using gait signals from 93 participants to classify smoker and non-smoker patterns. Designed a lightweight hybrid LSTM and feed-forward network for mobile deployment, addressing noisy clinical time-series data with weighted BCE, focal loss, cosine annealing, and warm-restart SGD. Achieved an F1 score of 0.87 and used Integrated Gradients to analyze sensor-channel importance.",
      tags: ["Deep Learning", "Digital Biomarkers", "LSTM", "Explainable AI"],
    },
    {
      title: "Evaluating Structured Physiotherapy with Omaveloxolone for Friedreich Ataxia",
      period: "Sep – Nov 2025 · IIT Bombay",
      desc: "To investigate the potential benefits of combining physiotherapy with Omaveloxolone treatment for Friedreich Ataxia, I designed the data and study infrastructure for a randomized clinical trial. The study followed a two-arm parallel RCT design with power-based sample size estimation and carefully defined eligibility criteria across multiple clinical variables. A detailed Case Report Form was developed with more than 120 structured data fields capturing longitudinal patient outcomes, laboratory markers, genetic information, adverse events, and therapy adherence. All variables were mapped to CDISC SDTM standards to ensure interoperability with regulatory clinical datasets. The work also produced a normalized relational database schema and ER model capable of supporting longitudinal patient monitoring.",
      tags: ["Clinical Trials", "Clinical Data Management", "CDISC SDTM", "Database Design"],
    },
    {
      title: "Causal Analysis of Alcohol Abuse on Employment",
      period: "Sep – Oct 2025 · IIT Bombay",
      desc: "Compared instrumental-variable causal inference methods, including 2SLS, Bivariate Probit, and 2SRI, to estimate the effect of alcohol abuse on employability while addressing endogeneity and omitted-variable bias. Analyzed 9,822 observations across 33 variables and applied Wu-Hausman and Sargan tests. Advanced models estimated a significant negative employment effect of 19–34%, compared with about 2% under baseline linear probability models.",
      tags: ["Causal Inference", "Econometrics", "2SLS", "Statistical Modeling"],
    },
    {
      title: "Tumor Micro-Environment Network Analysis",
      period: "Mar – Apr 2024 · KCDH, Ashoka University",
      desc: "This work examined spatial organization patterns within tumor micro-environments using multiplex immunohistochemistry whole-slide imaging data. Cell-level interaction graphs were constructed from more than forty patient slides using 35 um neighborhood rules to model tumor-immune spatial relationships. Several graph topology features, including mixing score, clustering coefficient, stromal barrier metrics, and modularity, were engineered to characterize tissue architecture. The resulting network representations revealed distinct structural patterns separating cold, mixed, and compartmentalized tumor environments. Additional validation using MIBI sample correlations supported the hypothesized interaction structures.",
      tags: ["Computational Pathology", "Network Analysis", "WSI", "Graph Modeling"],
    },
    {
      title: "Cold Start Item Recommendation System",
      period: "Aug – Dec 2023 · Central University of Haryana",
      desc: "Recommender systems struggle when new items enter the platform without interaction history. To address this cold-start problem, I built a recommendation pipeline using the MovieLens-200k dataset and implemented several algorithms including Attribute-Fused SVD, LearnMAP, LearnAROMA, and DynamicBPR from scratch. The system projects item attributes into latent feature space to generate initial recommendations before sufficient user interactions accumulate. An incremental update mechanism based on DynamicBPR allows item vectors to be updated without retraining the entire model, reducing exploration overhead by roughly 71% while maintaining 95–97% of full-model ranking performance.",
      tags: ["Recommender Systems", "Matrix Factorization", "SVD", "Ranking Models"],
    },
  ],
  skills: [
    { title: "Programming & Systems", items: "Python, R, SQL, Bash, C++, Linux, HPC Clusters, CUDA, Git, API Development, Bioinformatics Toolchains" },
    { title: "AI & Machine Learning", items: "PyTorch, TensorFlow, Deep Learning, Computer Vision, VLMs, LLMs, Generative AI, Prompt Engineering, RAG, LLM Fine-tuning, Efficient AI" },
    { title: "Data Science", items: "Recommendation Systems, Predictive Modeling, Regression, Causal Inference, Time-Series Analysis, Network Analysis, Information Retrieval" },
    { title: "Health Informatics & Data", items: "ETL Pipelines, Data Validation, Biomedical Ontologies, Knowledge Graphs, OMOP CDM, Clinical Data Management, Healthcare Interoperability, FAIR Data Pipelines" },
  ],
  positions: [
    { title: "Class Representative", meta: "DPGC (KCDH), IIT Bombay", description: "Elected representative for the M.S. by Research cohort, working with faculty and the department to represent the cohort, facilitate communication, and coordinate academic activities." },
    { title: "Student Companion", meta: "Institute Student Companion Program (ISCP), IIT Bombay", description: "Selected through an interview for the 330-member institute program. Mentored 10 first-year M.S. by Research students, providing guidance on academics, institute life, and student resources." },
    { title: "NAISH Core Team", meta: "Koita Centre for Digital Health, IIT Bombay", description: "Volunteered on the core team for the National AI Strategy for Health workshop, jointly organized by KCDH at IIT Bombay and Ashoka University." },
  ],
  publications: [
    {
      title: "Ontology-guided harmonization enables unified discovery of public metabolomics studies within and across repositories",
      authors: "S. Banerjee, <strong>R. Chinhara</strong>, P. Jalan, C. Kalle, P. Wangikar, K. Jadhav",
      venue: "bioRxiv preprint",
      year: "2026",
      doi: "10.64898/2026.07.23.740366",
    },
  ],
  awards: [
    { title: "Institute Academic Prize", issuer: "IIT Bombay · Highest CPI in the department", year: "Sep 2026" },
    { title: "Dr. Nitish Thakor Fellowship Award", issuer: "Koita Centre for Digital Health, IIT Bombay · Best Research potential", year: "Mar 2026" },
  ],
};

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Positions", href: "#positions" },
  { label: "Awards", href: "#awards" },
  { label: "Blog", to: "/blog" },
];

const AFFILIATIONS = [
  {
    name: "Koita Centre for Digital Health",
    short: "KCDH",
    href: "https://www.kcdh.iitb.ac.in/",
    logo: "/logos/kcdh-logo.png",
  },
  {
    name: "Indian Institute of Technology Bombay",
    short: "IIT Bombay",
    href: "https://www.iitb.ac.in/",
    logo: "/logos/iitb-logo.png",
  },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="academic-section">
      <div className="academic-section__header">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Record({ title, meta, children, tags, className = "" }) {
  return (
    <article className={`academic-record ${className}`.trim()}>
      <div className="academic-record__header">
        <h3>{title}</h3>
        {meta ? <p className="academic-record__meta">{meta}</p> : null}
      </div>
      {children}
      {tags?.length ? (
        <div className="academic-tag-list">
          {tags.map((tag) => (
            <span key={tag} className="academic-tag">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function App() {
  return (
    <div className="academic-site academic-site--home">
      <header className="academic-topbar">
        <div className="academic-topbar__inner">
          <Link to="/" className="academic-brand">
            {PROFILE.name}
          </Link>
          <nav className="academic-nav" aria-label="Primary">
            {NAV_ITEMS.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ),
            )}
          </nav>
        </div>
      </header>

      <div className="academic-shell">
        <aside className="academic-aside">
          <img className="academic-portrait" src="/profile.jpeg" alt={PROFILE.name} />
          <p className="academic-kicker">{PROFILE.role}</p>
          <h1>{PROFILE.name}</h1>
          <p className="academic-role">{PROFILE.affiliation}</p>
          <p className="academic-side-note">{PROFILE.subtitle}</p>

          <div className="academic-side-block">
            <p className="academic-mini-heading">Affiliations</p>
            <div className="academic-logo-grid">
              {AFFILIATIONS.map((affiliation) => (
                <a
                  key={affiliation.name}
                  href={affiliation.href}
                  target="_blank"
                  rel="noreferrer"
                  className="academic-logo-card"
                  aria-label={affiliation.name}
                >
                  <img src={affiliation.logo} alt={affiliation.name} />
                  <span>{affiliation.short}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="academic-side-block">
            <p className="academic-mini-heading">Contact</p>
            <div className="academic-contact-list">
              <a href={`mailto:${PROFILE.email}`}>
                Email
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`tel:${PROFILE.phone.replaceAll(" ", "")}`}>
                {PROFILE.phone}
              </a>
            </div>
          </div>

          <div className="academic-side-block">
            <p className="academic-mini-heading">Research Themes</p>
            <ul className="academic-compact-list">
              {PROFILE.researchThemes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="academic-content">
          <section id="about" className="academic-section academic-section--intro">
            <div className="academic-section__header">
              <h2>About</h2>
            </div>

            <div className="academic-grid">
              <div>
                {PROFILE.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          <Section id="education" title="Education">
            {RESUME.education.map((item) => (
              <Record
                key={item.degree}
                className="academic-record--education"
                title={item.degree}
                meta={
                  <>
                    <span className="academic-record__meta-line">{item.school}</span>
                    <span className="academic-record__meta-line academic-record__meta-line--subtle">
                      {item.period}
                    </span>
                  </>
                }
              >
                <p className="academic-gpa">
                  <span className="academic-gpa__label">GPA</span>
                  <span className="academic-gpa__value">{item.gpa}/10</span>
                </p>
              </Record>
            ))}
          </Section>

          <Section id="experience" title="Experience">
            {RESUME.experience.map((item) => (
              <Record key={`${item.role}-${item.period}`} title={item.role} meta={`${item.org} · ${item.period}`}>
                <ul className="academic-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </Record>
            ))}
          </Section>

          <Section id="projects" title="Selected Projects">
            {RESUME.projects.map((project) => (
              <Record key={project.title} title={project.title} meta={project.period} tags={project.tags}>
                <p>{project.desc}</p>
              </Record>
            ))}
          </Section>

          <Section id="publications" title="Publications">
            {RESUME.publications.map((publication) => (
              <Record key={publication.title} title={publication.title} meta={`${publication.venue} · ${publication.year}`}>
                <p
                  className="academic-record__authors"
                  dangerouslySetInnerHTML={{ __html: publication.authors }}
                />
                {/* <p>{publication.abstract}</p> */}
                {publication.doi && publication.doi !== "TBA" ? (
                  <p className="academic-link-row">
                    <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noreferrer">
                      DOI: {publication.doi}
                    </a>
                  </p>
                ) : null}
              </Record>
            ))}
          </Section>

          <Section id="skills" title="Skills">
            <div className="academic-skill-table" role="table" aria-label="Skill categories">
              {RESUME.skills.map((skill) => (
                <div className="academic-skill-row" role="row" key={skill.title}>
                  <div className="academic-skill-key" role="cell">
                    {skill.title}
                  </div>
                  <div className="academic-skill-value" role="cell">
                    {skill.items}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="positions" title="Positions of Responsibility">
            {RESUME.positions.map((position) => (
              <Record key={position.title} title={position.title} meta={position.meta}>
                <p>{position.description}</p>
              </Record>
            ))}
          </Section>

          <Section id="awards" title="Awards">
            {RESUME.awards.map((award) => (
              <Record key={award.title} title={award.title} meta={`${award.issuer} · ${award.year}`} />
            ))}
          </Section>

          <footer className="academic-footer">
            {PROFILE.name} · {PROFILE.role} · {PROFILE.affiliation}
          </footer>
        </main>
      </div>
    </div>
  );
}
