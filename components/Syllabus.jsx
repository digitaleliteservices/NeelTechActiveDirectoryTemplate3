import React, { useState } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';

const Syllabus = () => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      title: 'Microsoft Server Fundamentals, Workgroup & Domain Environments',
      details: `Learning Objective:
Understand server fundamentals, workgroup and domain environments, and core server roles.

Topics Covered:
• Introduction to servers
• Client vs Server operating systems
• Workgroup vs Domain models
• Domain environment setup
• Server roles and responsibilities
• Server installation basics
• Server Core vs GUI`
    },
    {
      title: 'Installing and Configuring Windows Server',
      details: `Learning Objective:
Learn how to install Windows Server and perform essential configuration tasks.

Topics Covered:
• Windows Server installation methods
• GUI vs Server Core installation
• Post-installation configuration
• Managing server roles and features
• Windows Admin Center overview
• Server Manager basics
• System updates and patching`
    },
    {
      title: 'Active Directory Domain Services (AD DS)',
      details: `Learning Objective:
Understand Active Directory architecture and domain management.

Topics Covered:
• Active Directory concepts
• Installing AD DS
• Domain Controllers
• Forests, Domains, and OUs
• FSMO roles
• AD structure basics`
    },
    {
      title: 'User and Group Management in Active Directory',
      details: `Learning Objective:
Manage users, groups, and computers efficiently in AD.

Topics Covered:
• User and computer accounts
• Group types and scopes
• AGDLP model
• Delegation of control
• Best practices`
    },
    {
      title: 'Group Policy Management',
      details: `Learning Objective:
Control and configure domain settings using Group Policies.

Topics Covered:
• Group Policy basics
• Creating and linking GPOs
• Inheritance and enforcement
• Common user and computer policies
• Troubleshooting GPOs`
    },
    {
      title: 'Managing File Systems and Permissions',
      details: `Learning Objective:
Secure and manage file access using permissions.

Topics Covered:
• NTFS vs Share permissions
• File sharing configuration
• Permission inheritance
• Auditing file access
• Storage management`
    },
    {
      title: 'DNS and DHCP Configuration',
      details: `Learning Objective:
Configure DNS and DHCP services for network operations.

Topics Covered:
• DNS fundamentals
• Forward & reverse lookup zones
• DHCP scopes and reservations
• Redundancy and failover
• IP address management`
    },
    {
      title: 'Introduction to Virtualization with Hyper-V',
      details: `Learning Objective:
Create and manage virtual machines using Hyper-V.

Topics Covered:
• Virtualization concepts
• Installing Hyper-V
• Virtual switches
• Creating and managing VMs
• VHD/VHDX disks`
    },
    {
      title: 'Managing and Monitoring Server Performance',
      details: `Learning Objective:
Monitor and troubleshoot server performance.

Topics Covered:
• Task Manager & Resource Monitor
• Performance Monitor
• Event Viewer
• Health monitoring
• Remote management`
    },
    {
      title: 'Security and Updates',
      details: `Learning Objective:
Secure Windows Server and keep it updated.

Topics Covered:
• Windows Firewall
• User rights and permissions
• Account policies
• Windows Updates
• Windows Defender
• BitLocker basics`
    },
    {
      title: 'Backup and Disaster Recovery',
      details: `Learning Objective:
Protect and recover server data efficiently.

Topics Covered:
• Windows Server Backup
• Backup scheduling
• System State backup
• File recovery
• Disaster recovery planning`
    },
    {
      title: 'Introduction to PowerShell for Windows Server',
      details: `Learning Objective:
Automate administrative tasks using PowerShell.

Topics Covered:
• PowerShell basics
• Cmdlets and pipelines
• Managing users and services
• Writing simple scripts
• Automation best practices`
    }
  ];

  return (
    <section id="syllabus" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-xs font-bold mb-4">
            <BookOpen size={14} />
            MASTER THE CORE
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Comprehensive Syllabus
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto">
            12 practical modules designed for real-world Microsoft Server expertise.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {modules.map((module, idx) => (
            <div key={idx} className="border rounded-2xl bg-white">
              <button
                onClick={() =>
                  setActiveModule(activeModule === idx ? null : idx)
                }
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">
                    {module.title}
                  </h4>
                </div>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeModule === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeModule === idx
                    ? 'max-h-[500px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="bg-slate-50 rounded-xl p-5 text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {module.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Syllabus;
