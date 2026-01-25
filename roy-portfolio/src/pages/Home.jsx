import { motion } from 'framer-motion';
import { ArrowRight, FileText, Users, Camera, Bike, PenTool, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const maintainedResources = [

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
    },
    {
      title: "Laptop App Blocker",
      description: "Simple App to block apps on your laptop (on Macbook)",
      link: "https://github.com/RoyRin/Laptop-App-Blocker",
      icon: Shield
    }, 
    {
      title: "Knee-based trivia",
      description: "Collection of knee-related trivia and facts",
      link: "https://docs.google.com/presentation/d/1zW7Huh_dClm8sshkAHaHmejCTIiOBY5Lltb767cj2fc/edit?slide=id.p#slide=id.p",
      icon: FileText
    },
    {
      title: "Academic Privacy Researchers in North America",
      description: "Google sheet tracking privacy researchers",
      link: "https://docs.google.com/spreadsheets/d/1-M6Tv94S9Oa07D3ehzVkeRIAsktuIpC4hDO7gGf1ous/edit?gid=0#gid=0",
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
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                I'm a CS PhD student at Harvard, and I work on{' '}
                <span className="spoiler">privacy</span> and security in machine learning.
                I'm advised by Professor{' '}
                <a
                  href="https://salil.seas.harvard.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Salil Vadhan
                </a>  and Professor{' '}
                <a
                  href="https://www.boazbarak.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Boaz Barak
                </a>.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                I lost my PhD funding in the{' '}
                <a
                  href="https://www.thecrimson.com/article/2025/4/15/funding-freeze-april-trump/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Harvard funding cuts
                </a>. I am now supported by a grant from Coefficient Giving (previously Open Philanthropy).
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/professional"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  View My Research
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src={isHovered ? "/assets/basketball.jpg" : "/assets/profile_pic.jpg"}
                alt="Roy Rinberg"
                className="rounded-2xl shadow-xl w-full max-w-sm mx-auto transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Am I Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Who Am I?
            </h2>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">My academic research:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Check out my{' '}
                <Link
                  to="/professional"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  research page
                </Link>{' '}
                for my research publications.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Writing:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
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
              <p className="text-gray-700 leading-relaxed mb-6">
                I sometimes write about public-interest tech and privacy on{' '}
                <a 
                  href="https://technicallyprivate.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  substack
                </a> or{' '}
                <a 
                  href="https://royrinberg.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Medium
                </a>.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Being helpful</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I enjoy communicating my work and talking with individuals who want to learn more about computer science research and academia. As someone who pivoted from industry to academia, I'm particularly sympathetic to the difficulties in such a transition; so especially if you're in industry and trying to enter academia, please don't hesitate to reach out.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                I used to help young Ukrainian students applying to universities, with{' '}
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

              <h3 className="text-xl font-bold text-gray-900 mb-4">Past  Communities</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                I did a CS Research Master's at Columbia where I conducted research with{' '}
                <a 
                  href="https://www.rachelcummings.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Professor Rachel Cummings
                </a> and{' '}
                <a 
                  href="https://www.cs.columbia.edu/~smb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Professor Steven Bellovin
                </a> on Private ML. I was an early-stage software engineer for 3 years at{' '}
                <a 
                  href="https://www.ouster.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Ouster
                </a>, a lidar company.  I created and organize the group{' '}
                <a 
                  href="https://www.technicallyprivate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Technically Private
                </a>
                : a group of <em>mostly</em> graduate students across many universities, who talk about Privacy and Security. If you're interested in joining - send a request to the above link. 
              </p>

              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Things I've done:</strong>
              </p>

              <p className="text-gray-700 leading-relaxed mb-2 mt-4">
                <strong>Teaching:</strong>
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>
                  <a
                    href="https://www.lesswrong.com/posts/gcFB2RT5vpKHbH4ic/reflections-on-ta-ing-harvard-s-first-ai-safety-course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Reflections on TA-ing Harvard's first AI Safety course
                  </a>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-2 mt-4">
                <strong>Projects I've done:</strong>
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>
                  <a
                    href="https://github.com/Responsible-Dataset-Sharing/easy-dataset-share/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Easy Dataset Share
                  </a> - Sharing datasets with safeguards for responsible AI progress
                </li>
                <li>
                  <a
                    href="https://github.com/RoyRin/wiki-rag/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    WikiRAG
                  </a> - Offline RAG that returns relevant Wikipedia articles
                </li>
                <li>
                  <a
                    href="https://github.com/RoyRin/Laptop-App-Blocker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Laptop App Blocker
                  </a> - Simple macOS app to block distracting applications
                </li>
                <li>
                  <a
                    href="https://www.imdb.com/name/nm10516715/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Under the Tree
                  </a> - 2nd Assistant Camera (short film)
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-2 mt-4">
                <strong>Miscellaneous things I've made:</strong>
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>
                  <a
                    href="https://docs.google.com/presentation/d/11ZJdjvSWC22nw8pm7j8gEiv8ZjuhaDv9klX1x3hzmC0/edit?slide=id.p#slide=id.p"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    (Aggressive) steps I've taken to be less addicted to the internet
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/presentation/d/1wArCxGAAvkJcy0inWeKua3Ra7LkJDhApcso8cJ1Aon8/edit#slide=id.g1223166de6e_0_7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    List of how organizations advertise privacy
                  </a> (if you have more, please send them to me!)
                </li>
                <li>
                  <a
                    href="https://docs.google.com/presentation/d/1zW7Huh_dClm8sshkAHaHmejCTIiOBY5Lltb767cj2fc/edit?slide=id.p#slide=id.p"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Knee-based trivia
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/document/d/1llfi530nyTob-zdJQAuNin5rYTuxWJHmoXTmkWIhoSs/edit?tab=t.0#heading=h.1wrw3d8lf0h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    "A security organization within the AI safety space"
                  </a> - A Google doc that I have circulated around
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-2 mt-4">
                <strong>Career Guides I maintain:</strong>
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1-M6Tv94S9Oa07D3ehzVkeRIAsktuIpC4hDO7gGf1ous/edit?gid=0#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Google sheet of Academic Privacy researchers in North America
                  </a>
                </li>
                <li>
                  <a
                    href="https://royrinberg.medium.com/resources-for-working-in-public-interest-technology-78a74e7fd712"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Resource List for Working in Public-Interest Technology
                  </a>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-2 mt-4">
                <strong>Random Pedagogical things I've done:</strong>
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>
                  <a
                    href="https://fascinated-zircon-5bc.notion.site/FASRC-Computing-1c14c3845c4c8046bbd6f2bac85fc067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Guide on using Slurm
                  </a> with an associated{' '}
                  <a
                    href="https://www.youtube.com/watch?v=Pak8OOLDNkQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    YouTube video
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/presentation/d/1bk4ffEKVvkgVSYf2Et1BAkSmAffH3m8w5m1wcpHkTVY/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Quick start on how to use Overleaf
                  </a> with an associated{' '}
                  <a
                    href="https://youtu.be/6qHxnAOr_00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    YouTube video
                  </a>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-2 mt-6">
                <strong>My hobbies:</strong>
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>
                  <a
                    href="https://technicallyprivate.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Writing, ideally
                  </a>!
                </li>
                <li>
                  <Link
                    to="/drone-photos"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Drone Photography
                  </Link>, but uploading photos can be such a pain
                </li>
                <li>
                  <span className="line-through text-gray-500">Frisbee</span> <span className="line-through text-gray-500">Climbing</span> <span className="line-through text-gray-500">Triathloning</span>{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Hardcourt_Bike_Polo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Bike Polo
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;