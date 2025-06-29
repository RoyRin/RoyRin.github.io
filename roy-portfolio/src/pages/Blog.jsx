import { motion } from 'framer-motion';
import { ExternalLink, PenTool } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <PenTool className="w-16 h-16 text-primary-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">My Writing</h1>
          <p className="text-xl text-gray-600 mb-8">
            I write about public-interest technology and privacy on various platforms.
          </p>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technically Private</h2>
              <p className="text-gray-600 mb-6">
                My Substack where I explore topics at the intersection of technology and privacy.
              </p>
              <a
                href="https://technicallyprivate.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Visit Substack
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Medium Articles</h2>
              <p className="text-gray-600 mb-6">
                Longer-form articles about public-interest technology and my journey in tech.
              </p>
              <a
                href="https://royrinberg.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
              >
                Read on Medium
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 p-6 bg-primary-50 rounded-lg"
          >
            <p className="text-gray-700">
              I'm a big proponent of{' '}
              <a
                href="https://www.swyx.io/learn-in-public/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                learning in public
              </a>
              . Writing helps me clarify my thoughts and share knowledge with the community.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;