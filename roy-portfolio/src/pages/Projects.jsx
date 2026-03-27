import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Question-Asking Compression",
      description: "Live demo for \"Question-Asking\" Compression - a novel technique we invented in our paper which enables the compression of complex text in just 10 bits through the power of question asking! Check out the demo for a live demo of Haiku asking Opus questions.",
      link: "https://qa-compression.royrinberg.com/"
    },
    {
      title: "Privacy Policy Analyzer",
      description: "AI tool that evaluates privacy policies against 18 criteria across five categories and provides a numerical score",
      link: "https://privacy-policy-evaluator.vercel.app/"
    },
    {
      title: "QR Code Generator",
      description: "Generate QR codes instantly from any text or URL",
      link: "https://qr.royrinberg.com/"
    },
    {
      title: "Steganography Demo",
      description: "Interactive platform for hiding secret messages in images and text using various encoding methods",
      link: "https://steganography.royrinberg.com/"
    },
    {
      title: "LaTeX Viewer",
      description: "Write LaTeX mathematical expressions and convert them into rendered PNG or SVG images",
      link: "https://latex.royrinberg.com/"
    },
    {
      title: "Private Secrets in Public Datasets!",
      description: "I scraped a bunch of public datasets and found credentials - some of which are valid! Password is 'demo' (any username).",
      link: "https://secrets.royrinberg.com/"
    },
    {
      title: "Easy Dataset Share",
      description: "Sharing datasets with safeguards for responsible AI progress",
      link: "https://github.com/Responsible-Dataset-Sharing/easy-dataset-share/"
    },
    {
      title: "WikiRAG",
      description: "Offline RAG that returns relevant Wikipedia articles",
      link: "https://github.com/RoyRin/wiki-rag/tree/main"
    },
    {
      title: "Laptop App Blocker",
      description: "Simple macOS app to block distracting applications",
      link: "https://github.com/RoyRin/Laptop-App-Blocker"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Projects</h1>
          <p className="text-gray-600 text-center mb-12">
            One-off projects I've built.
          </p>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 ml-4 flex-shrink-0"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
