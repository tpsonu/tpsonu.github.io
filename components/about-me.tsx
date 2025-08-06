"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from 'lucide-react'

const timelineData = [
  {
    id: 1,
    company: "IPSR Solutions Ltd",
    role: "Cloud & DevOps Intern",
    period: "Sep 2024 - Feb 2025",
    location: "Kozhikode, Kerala",
    type: "Internship",
    logo: "/images/ipsr-logo.png", // Updated to use the actual IPSR logo
    skills: ["AWS", "Jenkins", "Docker", "Terraform", "Ansible", "Linux"],
    achievements: [
      "Improved web service uptime by 20% through Apache and Nginx configuration",
      "Managed 10+ Linux instances, reducing access issues by 25%",
      "Deployed 15+ AWS services resulting in 30% cost-efficient infrastructure",
      "Achieved 99.9% uptime for static websites on AWS S3",
      "Reduced load times by 40% through optimization"
    ]
  },
]

const educationData = [
  {
    id: 1,
    institution: "Holy Cross Institute of Management and Technology",
    degree: "Bachelor of Commerce (Finance)",
    period: "2018 - 2021",
    location: "Kozhikode, Kerala",
    subjects: ["Financial Management", "Business Strategy", "Accounting", "Economics", "Market Fundamentals", "Business Law"]
  }
]

const skillsData = {
  "Cloud Platforms": [
    { name: "AWS (EC2, S3, Lambda)", proficiency: 85 },
    { name: "Azure", proficiency: 70 },
    { name: "CloudWatch", proficiency: 80 },
    { name: "IAM & VPC", proficiency: 75 },
  ],
  "DevOps & Automation": [
    { name: "Jenkins", proficiency: 80 },
    { name: "Docker", proficiency: 75 },
    { name: "Terraform", proficiency: 70 },
    { name: "Ansible", proficiency: 65 },
  ],
  "Systems & Monitoring": [
    { name: "Linux (RHEL, Ubuntu)", proficiency: 90 },
    { name: "Nginx & Apache", proficiency: 85 },
    { name: "Zabbix", proficiency: 75 },
    { name: "Git & GitHub", proficiency: 80 },
  ],
}

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              About Me
            </span>
            <span className="ml-2">☁️💻</span>
          </h2>
          
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/images/profile.jpg"
                  alt="T P Sonu"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Aspiring Cloud & DevOps professional ☁️ with 6 months of hands-on experience. Passionate about building scalable, secure cloud solutions using AWS, automation tools, and modern DevOps practices. 🚀
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    🚀 <strong>Hello, I'm T P Sonu!</strong>
                  </p>
                  <p className="mb-4">
                    An <strong>aspiring Cloud and DevOps professional</strong> with <strong>6 months of internship experience</strong> at IPSR Solutions Ltd. I'm passionate about building <strong>scalable, secure, and efficient cloud solutions</strong> that drive business success.
                  </p>
                  <p className="mb-4">
                    My expertise spans across <strong>AWS cloud platforms</strong>, <strong>CI/CD pipelines</strong>, <strong>containerization with Docker</strong>, and <strong>infrastructure automation</strong> using tools like Terraform and Ansible. I've successfully managed <strong>15+ AWS services</strong> and improved system performance significantly.
                  </p>
                  <p className="mb-4">
                    I'm a <strong>quick learner</strong> and <strong>effective problem solver</strong>, always eager to contribute to innovative projects. Whether it's optimizing cloud infrastructure costs by 30% or achieving 99.9% uptime for web applications, I bring dedication and technical expertise to every challenge.
                  </p>
                  <p>
                    Based in <strong>Kozhikode, Kerala</strong>, I'm ready to take on new challenges and contribute to the next generation of cloud-native solutions! ☁️⚡
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Professional Experience
              </span>
              <span className="ml-2 text-white">💼</span>
            </h3>
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800"
                >
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                    <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.logo || "/placeholder.svg"}
                        alt={item.company}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      <h4 className="text-lg text-purple-400">{item.company}</h4>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{item.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h5 className="text-lg font-semibold text-white mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm">{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Education
              </span>
              <span className="ml-2 text-white">🎓</span>
            </h3>
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800"
                >
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                    <h4 className="text-lg text-purple-400">{item.institution}</h4>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {item.subjects.map((subject, subjectIndex) => (
                      <span
                        key={subjectIndex}
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Technical Skills
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ name, proficiency }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  )
}
