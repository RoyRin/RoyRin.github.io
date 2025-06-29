import { motion } from 'framer-motion';
import { ArrowRight, FileText, Users, Camera, Bike, PenTool, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const maintainedResources = [
    {
      title: "Academic Privacy Researchers in North America",
      description: "Google sheet tracking privacy researchers",
      link: "https://docs.google.com/spreadsheets/d/1-M6Tv94S9Oa07D3ehzVkeRIAsktuIpC4hDO7gGf1ous/edit?gid=0#gid=0",
      icon: Shield
    },
    {
      title: "Public-Interest Technology Resources",
      description: "Comprehensive resource list for working in public-interest tech",
      link: "https://royrinberg.medium.com/resources-for-working-in-public-interest-technology-78a74e7fd712",
      icon: Users
    },
    {
      title: "Slurm Computing Guide",
      description: "Guide on using Slurm with video tutorial",
      link: "https://fascinated-zircon-5bc.notion.site/FASRC-Computing-1c14c3845c4c8046bbd6f2bac85fc067",
      video: "https://www.youtube.com/watch?v=Pak8OOLDNkQ",
      icon: FileText
    },
    {
      title: "Internet Addiction Reduction",
      description: "Aggressive steps to be less addicted to the internet",
      link: "https://docs.google.com/presentation/d/11ZJdjvSWC22nw8pm7j8gEiv8ZjuhaDv9klX1x3hzmC0/edit?slide=id.p#slide=id.p",
      icon: Shield
    }
  ];

  const hobbies = [
    { name: "Writing", icon: PenTool, link: "https://technicallyprivate.substack.com/" },
    { name: "Drone Photography", icon: Camera },
    { name: "Bike Polo", icon: Bike },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm Roy Rinberg
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                CS PhD student at Harvard, passionate about{' '}
                <span className="text-primary-600 font-semibold">privacy technology</span> and{' '}
                <span className="text-primary-600 font-semibold">Trustworthy Machine Learning</span>.
                Advised by Professor Salil Vadhan and Seth Neel.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/professional"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="mailto:royrin@gmail.com"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="/assets/profile_pic.jpg"
                alt="Roy Rinberg"
                className="rounded-2xl shadow-xl w-full max-w-sm mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Maintained Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Resources I Maintain
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {maintainedResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                          >
                            View Resource
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </a>
                          {resource.video && (
                            <a
                              href={resource.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                            >
                              Watch Video
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Being Helpful */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Being Helpful</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I enjoy communicating my work and talking with individuals who want to learn more about 
                computer science research and academia. As someone who pivoted from industry to academia, 
                I'm particularly sympathetic to the difficulties in such a transition.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you're in industry and trying to enter academia, please don't hesitate to reach out.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I used to help young Ukrainian students applying to universities with{' '}
                <a 
                  href="https://mentorukraine.bravegeneration.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  MentorUkraine
                </a>
                . I strongly recommend this organization.
              </p>
            </motion.div>

            {/* Communities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Communities</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Technically Private</h3>
                  <p className="text-gray-700">
                    Creator and organizer of a group of mostly graduate students across many universities 
                    discussing Privacy and Security.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Columbia CS Research</h3>
                  <p className="text-gray-700">
                    Conducted research with Professor Rachel Cummings and Professor Steven Bellovin on Private ML.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Ouster</h3>
                  <p className="text-gray-700">
                    Early-stage software engineer for 3 years at a lidar company.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">My Hobbies</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {hobbies.map((hobby, index) => {
                const Icon = hobby.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    {hobby.link ? (
                      <a
                        href={hobby.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors"
                      >
                        {hobby.name}
                      </a>
                    ) : (
                      <span className="text-lg font-medium text-gray-900">{hobby.name}</span>
                    )}
                  </motion.div>
                );
              })}
            </div>
            <p className="mt-8 text-gray-600">
              Also collecting a{' '}
              <a
                href="https://docs.google.com/presentation/d/1wArCxGAAvkJcy0inWeKua3Ra7LkJDhApcso8cJ1Aon8/edit#slide=id.g1223166de6e_0_7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                list of how organizations advertise privacy
              </a>
              {' '}(please send me more!)
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;