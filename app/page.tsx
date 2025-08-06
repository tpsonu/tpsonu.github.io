"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Calendar, FileText, Cloud, Server, Database, MessageSquare, Smartphone, PenTool, Mail, Phone, MapPin } from 'lucide-react'
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"

// Simple scroll function to replace react-scroll
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Hey! I'm T P Sonu
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              ☁️ Cloud & DevOps Engineer | AWS Specialist | Infrastructure Automation Expert
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                onClick={() => scrollToSection('work')}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Cloud className="w-10 h-10 text-purple-500" />}
                title="Cloud Architecture"
                description="AWS cloud solutions with EC2, S3, Lambda, IAM, VPC, and CloudWatch. Cost-efficient infrastructure design and deployment."
              />
              <ServiceCard
                icon={<Server className="w-10 h-10 text-pink-500" />}
                title="Infrastructure as Code"
                description="Automated infrastructure provisioning using Terraform and configuration management with Ansible for scalable deployments."
              />
              <ServiceCard
                icon={<Database className="w-10 h-10 text-purple-500" />}
                title="CI/CD & DevOps"
                description="Jenkins pipelines, Git version control, Docker containerization, and automated deployment workflows."
              />
              <ServiceCard
                icon={<FileText className="w-10 h-10 text-pink-500" />}
                title="Linux System Administration"
                description="Red Hat and Ubuntu server management, user access control, LVM optimization, and system monitoring."
              />
              <ServiceCard
                icon={<Github className="w-10 h-10 text-purple-500" />}
                title="Web Server Management"
                description="Apache and Nginx configuration, SSL implementation, and performance optimization for high availability."
              />
              <ServiceCard
                icon={<MessageSquare className="w-10 h-10 text-pink-500" />}
                title="Monitoring & Security"
                description="Zabbix monitoring setup, security compliance, encrypted file transfers, and incident response optimization."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                What I've Built
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Secure WordPress Hosting"
                description="Deployed secure WordPress on Linux with Nginx, MySQL, PHP, achieving 99.9% uptime and 60% faster load times with SSL encryption."
                tags={["Linux", "Nginx", "MySQL", "PHP", "SSL", "WordPress"]}
              />
              <ProjectCard
                title="AWS Cloud Infrastructure"
                description="Managed 15+ AWS services including EC2, Lambda, S3, EFS, EBS resulting in 30% cost-efficient cloud infrastructure."
                tags={["AWS", "EC2", "Lambda", "S3", "Cost Optimization"]}
              />
              <ProjectCard
                title="CI/CD Pipeline Automation"
                description="Implemented Jenkins CI/CD automation with Git version control across all deployment environments for streamlined releases."
                tags={["Jenkins", "Git", "CI/CD", "Automation"]}
              />
              <ProjectCard
                title="Infrastructure as Code"
                description="Automated infrastructure provisioning using Terraform and configuration management with Ansible for scalable deployments."
                tags={["Terraform", "Ansible", "IaC", "Automation"]}
              />
              <ProjectCard
                title="Static Website Deployment"
                description="Deployed static websites on AWS S3 achieving 99.9% uptime and reducing load times by 40% with optimized configurations."
                tags={["AWS S3", "Static Hosting", "Performance"]}
              />
              <ProjectCard
                title="System Monitoring Setup"
                description="Implemented Zabbix monitoring for faster incident response and improved system reliability across infrastructure."
                tags={["Zabbix", "Monitoring", "System Reliability"]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Let's Connect
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-4">Get in touch directly:</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
                    <a
                      href="mailto:sonutp7@gmail.com"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      sonutp7@gmail.com
                    </a>
                    <a
                      href="tel:+916238010129"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      +91 6238010129
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>Kozhikode, Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/tpsonu" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/tpsonu" label="LinkedIn" />
            <SocialIcon icon={<Twitter />} href="https://twitter.com/tpsonu" label="Twitter" />
            <SocialIcon icon={<MessageSquare />} href="https://discord.com/users/tpsonu" label="Discord" />
            <SocialIcon icon={<PenTool />} href="https://medium.com/@tpsonu" label="Medium" />
            <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              className="opacity-50 cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault()
                console.log("Mobile icon click prevented")
              }}
            />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} T P Sonu. All rights reserved.</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">{title}</h3>
      <p className="text-gray-400 mb-4 text-center md:text-left">{description}</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:sonutp7@gmail.com" className="text-purple-400 hover:text-purple-300">
        sonutp7@gmail.com
      </a>
    </div>
  )
}