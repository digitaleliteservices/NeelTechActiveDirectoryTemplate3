import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What types of training formats does the MCSE course offer?",
      a: "We provide flexible learning options including live instructor-led classes (both online and classroom), which allow you to engage directly with trainers and perform hands-on activities, as well as self-paced training through our LMS platform, where you can learn at your own convenience with access to recorded videos and study materials."
    },
    {
      q:"Who benefits most from the self-paced MCSE training?",
      a:"Self-paced learning suits learners who need flexibility due to personal schedules, or those who prefer studying independently and at their own rhythm. This mode provides comprehensive resources, and if desired, you can still join live sessions later on."
    },

    {
      q: "Is it possible to upgrade from self-paced to live sessions?",
      a: "Yes, if you begin with self-paced training but later prefer live interactive sessions, you can easily switch by paying the fee difference. This lets you customize your learning experience as your needs change."
    },
    {
      q:"After finishing the course, can I still get support if I have questions?",
      a:"Definitely! Our trainers remain available through WhatsApp to answer any questions or clarify doubts even after your course ends, helping you stay confident as you prepare for certification or job interviews."
    },
    {
      q: "Will I receive an official certificate after completion?",
      a: "Yes, upon successful completion, you will be awarded a certificate from Neel Technologies, validating your skills and accomplishments for potential employers."
    },
    {
      q:"How are practical exercises handled during the training?",
      a:"Training is hands-on and interactive. You will perform live labs with direct guidance from instructors, and have access to remote lab environments to practice real-world scenarios."
    },
    {
      q:"What if I miss a live class session? Can I catch up later?",
      a:"All live sessions are recorded and uploaded to our LMS, so you can review any missed classes anytime. Additionally, you can reach out to trainers via WhatsApp for clarifications, and you may also attend the missed session in a future batch."
    },
    {
      q: "How long do I have access to the LMS materials?",
      a: "You retain access to the LMS content well beyond course completion, allowing you to revisit lectures, notes, and labs whenever you need to refresh your knowledge."
    },
    {
      q: "How much does the MCSE certification exam cost, and what are the payment methods?",
      a: "Certification costs vary based on your region and testing center. For detailed pricing, please contact us directly or fill out an enquiry form. We accept multiple payment options including credit/debit cards, net banking, and UPI."
    },
    {
      q:"What kind of practical projects will I complete during this course?",
      a:"You will work on real-world projects such as configuring Active Directory services, managing network infrastructure (DNS, DHCP), deploying storage solutions like Blob and Disk storage, setting up virtualization with Hyper-V, and securing Windows servers."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-heading">Common Queries</h2>
          <p className="text-slate-500">Everything you need to know about the MCSE program.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="reveal-on-scroll border border-slate-100 rounded-2xl overflow-hidden hover:border-[#005DAA]/20 transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left outline-none bg-transparent border-none cursor-pointer"
              >
                <span className="font-bold text-slate-800">{faq.q}</span>
                {openIndex === idx ? (
                  <Minus className="text-[#005DAA] flex-shrink-0" />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 animate-slide-up text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;