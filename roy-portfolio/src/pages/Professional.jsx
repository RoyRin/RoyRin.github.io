import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download, Github, Book } from 'lucide-react';

const Professional = () => {
  const papers = [
    {
      title: "Unlearning through Data Attribution",
      venue: "GenLaw Workshop",
      year: "2024",
      pdf: "/assets/projects/papers/Unlearning_through_Data_Attribution__genlaw.pdf",
      links: []
    },
    {
      title: "Class Private RAG",
      venue: "Conference",
      year: "2024",
      pdf: "/assets/projects/papers/class_private_RAG.pdf",
      links: []
    },
    {
      title: "Data Unlearning Benchmark",
      venue: "Conference",
      year: "2024",
      pdf: "/assets/projects/papers/data_unlearning_bench.pdf",
      links: []
    },
    {
      title: "Generalized Gaussians",
      venue: "Conference",
      year: "2024",
      pdf: "/assets/projects/papers/generalized_gaussians__10_24.pdf",
      links: []
    },
    {
      title: "When is DP DP?",
      venue: "Conference",
      year: "2024",
      pdf: "/assets/projects/papers/when_is_dp_dp.pdf",
      links: []
    }
  ];

  const projects = [
    {
      title: "ArXiv Scraper & Visualization",
      description: "Interactive graph visualization of academic paper relationships",
      tech: ["Python", "D3.js", "NetworkX"],
      links: [
        { label: "GitHub", url: "#" },
        { label: "Demo", url: "#" }
      ]
    },
    {
      title: "Planetary Simulations",
      description: "Physics-based simulations of planetary movements",
      tech: ["Python", "NumPy", "Matplotlib"],
      links: [
        { label: "GitHub", url: "#" }
      ]
    }
  ];

  const courseProjects = [
    {
      title: "Blockchain Course Project",
      year: "2021",
      description: "Final project on decentralized systems",
      pdf: "/assets/projects/courses/blockchains_course_2021/FOB_Project_Report.pdf"
    },
    {
      title: "Privacy Policy Analysis",
      year: "2021",
      description: "MPC explainer and privacy policy analysis",
      pdfs: [
        { name: "MPC Explainer", url: "/assets/projects/courses/privacy_policy_2021/MPC_explainer_share.pdf" },
        { name: "Final Report", url: "/assets/projects/courses/privacy_policy_2021/privacy_policy_final.pdf" },
        { name: "Presentation", url: "/assets/projects/courses/privacy_policy_2021/privacy_policy_final_presentation.pdf" }
      ]
    },
    {
      title: "Natural Logic in Natural Language",
      year: "2017",
      description: "Semantics course project on natural logic",
      pdfs: [
        { name: "Paper", url: "/assets/projects/courses/semantics_2017/Rinberg_Natural_Logic_in_Natural_Language_Inferences.pdf" },
        { name: "Presentation", url: "/assets/projects/courses/semantics_2017/Natural_Logic_present2.pdf" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Work</h1>
            <p className="text-xl text-gray-600">Research, projects, and academic contributions</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/assets/resume/CV.pdf"
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/royrin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Papers Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <FileText className="w-8 h-8 mr-3 text-primary-600" />
              Academic Papers
            </h2>
            <div className="space-y-6">
              {papers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{paper.title}</h3>
                      <p className="text-gray-600">
                        {paper.venue} • {paper.year}
                      </p>
                    </div>
                    <a
                      href={paper.pdf}
                      className="ml-4 inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded hover:bg-primary-200 transition-colors"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      PDF
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Github className="w-8 h-8 mr-3 text-primary-600" />
              Software Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        {link.label}
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Book className="w-8 h-8 mr-3 text-primary-600" />
              Course Projects
            </h2>
            <div className="space-y-6">
              {courseProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title} ({project.year})
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.pdf && (
                      <a
                        href={project.pdf}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700"
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        View PDF
                      </a>
                    )}
                    {project.pdfs && project.pdfs.map((pdf, i) => (
                      <a
                        key={i}
                        href={pdf.url}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700"
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        {pdf.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Professional;