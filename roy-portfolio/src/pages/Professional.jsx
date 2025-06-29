import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download, Github, Book, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Professional = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedAbstracts, setExpandedAbstracts] = useState({});

  const allPapers = [
    {
      title: "Easy Data Unlearning Bench",
      authors: "Roy Rinberg, Pol Pugidemont, Matin Pawelczyk, Volkan Cevher",
      venue: "ICML 2025 Workshop on Machine Unlearning for Generative AI (Workshop)",
      year: "2025",
      type: "workshop",
      description: "A comprehensive benchmark for evaluating machine unlearning methods across diverse datasets and model architectures.",
      abstract: "Evaluating machine unlearning methods remains technically challenging, with recent benchmarks requiring complex setups and significant engineering overhead. We introduce a unified and extensible benchmarking suite that simplifies the evaluation of unlearning algorithms using the KLoM (KL divergence of Margins) metric (GRP+24). Our framework provides precomputed model ensembles, oracle outputs, and streamlined infrastructure for running evaluations out of the box. By standardizing setup and metrics, it enables reproducible, scalable, and fair comparison across unlearning methods. We aim for this benchmark to serve as a practical foundation for accelerating research and promoting best practices in machine unlearning. Our code and data are publicly available.",
      pdf: "/assets/projects/papers/data_unlearning_bench.pdf",
      links: [
        { label: "GitHub", url: "https://github.com/RoyRin/data-unlearning-bench/" },
        { label: "Hugging Face", url: "https://huggingface.co/datasets/royrin/KLOM-models/tree/main" },
        { label: "Workshop", url: "https://mugenworkshop.github.io/" }
      ]
    },
    {
      title: "Attribute-to-Delete: Machine Unlearning via Datamodel Matching",
      authors: "R. Rinberg, K. Georgiev, S. Park, S. Garg, A. Ilyas, S. Neel, A. Madry",
      venue: "ICML 2025 (Conference)",
      venueFull: "ICML 2025",
      year: "2025",
      type: "conference",
      arxiv: "https://arxiv.org/abs/2410.23232",
      links: [
        { label: "Blog", url: "http://bit.ly/unlearning-via-datamodels" },
        { label: "Twitter", url: "https://x.com/RoyRinberg/status/1856437062876180759" }
      ]
    },
    {
      title: "When is Differentially Private Finetuning Actually Private?",
      authors: "R. Rinberg, M. Pawelczyk",
      venue: "NeurIPS 2024 (Workshop)",
      venueFull: "NeurIPS SFLLM Workshop 2024",
      year: "2024",
      type: "workshop",
      pdf: "/assets/projects/papers/when_is_dp_dp.pdf",
      links: [
        { label: "Blog", url: "https://technicallyprivate.substack.com/p/when-is-differentially-private-finetuning" },
        { label: "Twitter", url: "https://x.com/RoyRinberg/status/1844733168802271248" }
      ]
    },
    {
      title: "Beyond Laplace and Gaussian: Exploring the Generalized Gaussian Mechanism for Private Machine Learning",
      authors: "R. Rinberg, I. Shumailov, R. Cummings, N. Papernot",
      venue: "arXiv (Preprint)",
      venueFull: "arXiv preprint",
      year: "2024",
      type: "preprint",
      arxiv: "https://arxiv.org/abs/2506.12553",
      links: []
    },
    {
      title: "Have it your way: Individualized Privacy Assignment for DP-SGD",
      authors: "F. Boenisch, C. Mühl, A. Dziedzic, R. Rinberg, N. Papernot",
      venue: "NeurIPS 2023 (Conference)",
      venueFull: "NeurIPS 2023",
      year: "2023",
      type: "conference",
      arxiv: "https://arxiv.org/abs/2303.17046",
      links: []
    },
    {
      title: "Individualized PATE: Differentially Private Machine Learning with Individual Privacy Guarantees",
      authors: "F. Boenisch, C Mühl, R. Rinberg, J. Ihrig, A. Dziedzic",
      venue: "PoPETs 2023 (Conference)",
      venueFull: "PoPETs 2023",
      year: "2023",
      type: "conference",
      arxiv: "https://arxiv.org/abs/2202.10517",
      links: []
    },
    {
      title: "Privacy when Everyone is Watching: An SOK on Anonymity on the Blockchain",
      authors: "R. Rinberg, N. Agarwal",
      venue: "IACR ePrint (Preprint)",
      venueFull: "IACR Cryptology ePrint Archive",
      year: "2022",
      type: "preprint",
      eprint: "https://eprint.iacr.org/2022/985",
      links: []
    },
    {
      title: "NL-Augmenter: A Framework for Task-Sensitive Natural Language Augmentation",
      authors: "Multiple authors",
      venue: "arXiv (Preprint)",
      venueFull: "arXiv preprint",
      year: "2022",
      type: "preprint",
      arxiv: "https://arxiv.org/abs/2112.02721",
      links: []
    },
    {
      title: "Creolizing the Web",
      authors: "A. Tamaskar, R. Rinberg, S. Chakraborty, B. Mishra",
      venue: "arXiv (Preprint)",
      venueFull: "arXiv preprint",
      year: "2021",
      type: "preprint",
      arxiv: "https://arxiv.org/abs/2102.12382",
      links: []
    }
  ];

  const filteredPapers = selectedFilter === 'all' 
    ? allPapers 
    : allPapers.filter(paper => paper.type === selectedFilter);

  const toggleAbstract = (index) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getTagStyle = (type) => {
    switch (type) {
      case 'workshop':
        return 'bg-blue-100 text-blue-800';
      case 'conference':
        return 'bg-green-100 text-green-800';
      case 'preprint':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTagLabel = (type) => {
    switch (type) {
      case 'workshop':
        return 'Workshop';
      case 'conference':
        return 'Conference';
      case 'preprint':
        return 'Preprint';
      default:
        return 'Paper';
    }
  };

  const [selectedProjectFilter, setSelectedProjectFilter] = useState('all');

  const allProjects = [
    {
      title: "ArXiv Scraper & Visualization",
      description: "Interactive graph visualization of academic paper relationships",
      type: "software",
      links: [
        { label: "GitHub", url: "#" },
        { label: "Demo", url: "#" }
      ]
    },
    {
      title: "WikiRAG",
      description: "An open-source RAG system built on Wikipedia for fast lookup",
      type: "software",
      links: [
        { label: "GitHub", url: "https://github.com/RoyRin/wiki-rag/tree/main" },
        { label: "Hugging Face", url: "https://huggingface.co/royrin/wiki-rag" },
        { label: "Twitter", url: "https://x.com/RoyRinsberg/status/1932163645703942342" }
      ]
    },
    {
      title: "Blockchain Course Project",
      year: "2021",
      description: "Final project on decentralized systems",
      type: "report",
      pdf: "/assets/projects/courses/blockchains_course_2021/FOB_Project_Report.pdf"
    },
    {
      title: "Privacy Policy Analysis",
      year: "2021",
      description: "MPC explainer and privacy policy analysis",
      type: "report",
      pdfs: [
        { name: "MPC Explainer", url: "/assets/projects/courses/privacy_policy_2021/MPC_explainer_share.pdf" },
        { name: "Final Report", url: "/assets/projects/courses/privacy_policy_2021/privacy_policy_final.pdf" },
        { name: "Presentation", url: "/assets/projects/courses/privacy_policy_2021/privacy_policy_final_presentation.pdf" }
      ]
    }
  ];

  const filteredProjects = selectedProjectFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.type === selectedProjectFilter);

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
                href="https://www.linkedin.com/in/roy-rinberg/"
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
            
            <div className="mb-4">
              <a
                href="https://scholar.google.com/citations?hl=en&user=D_d_d8wAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Google Scholar Profile
                <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>

            {/* Filter Buttons */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFilter === 'all'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Papers
                </button>
                <button
                  onClick={() => setSelectedFilter('conference')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFilter === 'conference'
                      ? 'bg-green-600 text-white'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  Conference Papers
                </button>
                <button
                  onClick={() => setSelectedFilter('workshop')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFilter === 'workshop'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  Workshop Papers
                </button>
                <button
                  onClick={() => setSelectedFilter('preprint')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFilter === 'preprint'
                      ? 'bg-gray-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Preprints
                </button>
              </div>
            </div>

            {/* Papers List */}
            <div className="space-y-6">
              {filteredPapers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getTagStyle(paper.type)}`}>
                          {getTagLabel(paper.type)}
                        </span>
                        <span className="text-gray-500 text-sm">{paper.year}</span>
                      </div>
                      <p className="text-gray-600 font-medium mb-3">{paper.venue}</p>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{paper.title}</h4>
                      {paper.authors && (
                        <p className="text-gray-600 mb-3">{paper.authors}</p>
                      )}
                      {paper.description && (
                        <p className="text-gray-700 mb-3 font-bold">{paper.description}</p>
                      )}
                      {paper.abstract && (
                        <div className="mb-3">
                          <button
                            onClick={() => toggleAbstract(index)}
                            className="flex items-center text-primary-600 hover:text-primary-700 font-medium mb-2 transition-colors"
                          >
                            <span className="mr-1">Abstract</span>
                            {expandedAbstracts[index] ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>
                          {expandedAbstracts[index] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-600 text-sm leading-relaxed">{paper.abstract}</p>
                            </motion.div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {paper.pdf && (
                      <a
                        href={paper.pdf}
                        className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        PDF
                      </a>
                    )}
                    {paper.arxiv && (
                      <a
                        href={paper.arxiv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors font-medium"
                      >
                        arXiv
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                    {paper.eprint && (
                      <a
                        href={paper.eprint}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors font-medium"
                      >
                        ePrint
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                    {paper.links.map((link, linkIndex) => {
                      const getLinkStyle = (label) => {
                        switch (label.toLowerCase()) {
                          case 'blog':
                            return 'bg-teal-100 text-teal-700 hover:bg-teal-200';
                          case 'twitter':
                            return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
                          case 'github':
                            return 'bg-gray-800 text-white hover:bg-gray-900';
                          case 'hugging face':
                            return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200';
                          case 'workshop':
                            return 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200';
                          default:
                            return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
                        }
                      };
                      
                      return (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors font-medium ${getLinkStyle(link.label)}`}
                        >
                          {link.label}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      );
                    })}
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
              Projects
            </h2>

            {/* Filter Buttons */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedProjectFilter('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedProjectFilter === 'all'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => setSelectedProjectFilter('software')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedProjectFilter === 'software'
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                >
                  Software
                </button>
                <button
                  onClick={() => setSelectedProjectFilter('report')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedProjectFilter === 'report'
                      ? 'bg-green-600 text-white'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  Reports
                </button>
              </div>
            </div>

            {/* Projects List */}
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                          project.type === 'software' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {project.type === 'software' ? 'Software' : 'Report'}
                        </span>
                        {project.year && (
                          <span className="text-gray-500 text-sm">({project.year})</span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.pdf && (
                      <a
                        href={project.pdf}
                        className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        PDF
                      </a>
                    )}
                    {project.pdfs && project.pdfs.map((pdf, i) => (
                      <a
                        key={i}
                        href={pdf.url}
                        className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        {pdf.name}
                      </a>
                    ))}
                    {project.links && project.links.map((link, i) => {
                      const getLinkStyle = (label) => {
                        switch (label.toLowerCase()) {
                          case 'blog':
                            return 'bg-teal-100 text-teal-700 hover:bg-teal-200';
                          case 'twitter':
                            return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
                          case 'github':
                            return 'bg-gray-800 text-white hover:bg-gray-900';
                          case 'hugging face':
                            return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200';
                          case 'workshop':
                            return 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200';
                          case 'demo':
                            return 'bg-pink-100 text-pink-700 hover:bg-pink-200';
                          default:
                            return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
                        }
                      };
                      
                      return (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors font-medium ${getLinkStyle(link.label)}`}
                        >
                          {link.label}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      );
                    })}
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