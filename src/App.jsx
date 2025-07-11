import React from 'react'
import Navbar from './Components/Navbar'
import ToolbarSection from './Components/ToolbarSection'
import Spreadsheet from './Components/Spreadsheet'
import Spreadsheet_items from './Components/Spreadsheet_items'
import Footer from './Components/Footer'

export default function App() {
  const itemlist = [{
    id: 1, job: "Launch social media campaign for  pro...", date: "15-11-2024", status: "In-process", submitter: "Aisha Patel", url: "www.aishapatel...", assigned: "Sophie Choudhury", priority: "Medium", duedate: "20-11-2024", estvalue: ` 6,200,000 \u20B9`
  },
  {
    id: 2, job: "Update press kit for company redesign", date: "28-10-2024", status: "Need to start", submitter: "Irfan Khan", url: "www.irfankhanp...", assigned: "Tejas Pandey", priority: "High", duedate: "30-10-2024", estvalue: ` 3,500,000 \u20B9`
  },
  {
    id: 3, job: "Finallize user testing feedback for app...", date: "05-10-2024", status: "In-process", submitter: "Mark Johnson", url: "www.markjohns...", assigned: "Rachel Lee", priority: "Medium", duedate: "10-12-2024", estvalue: `4,750,000 \u20B9`
  },
  {
    id: 4, job: "Design new features for the website", date: "10-01-2025", status: "Complete", submitter: "Emily Green", url: "www.emilygreen...", assigned: "Tom Wright", priority: "Low", duedate: "15-01-2025", estvalue: `5,900,000 \u20B9`
  },
  {
    id: 5, job: "Prepare financial report for Q4", date: "25-01-2025", status: "Blocked", submitter: "Jessica Brown", url: "www.jessicabro...", assigned: "Kevin Smith", priority: "Low", duedate: "30-01-2025", estvalue: `2,800,000 \u20B9`
  },
   {
     id: 6, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``
  },  
  {
     id: 7, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``
  },
  { id: 8, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``},
  { id: 9, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``},
  {
     id: 10, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``
  },
  { id: 11, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``},
  { id: 12, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``},
   {
     id: 13, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``
  },
  { id: 14, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``},
  { id: 15, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``},
  {
     id: 16, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``
  },
  { id: 17, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``},
  { id: 18, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``},
   {
     id: 19, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``
  },
  { id: 20, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``},
  { id: 21 ,job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``},
  {
     id: 22, job: "", date: "", status: "", submitter: "", url: "", assigned: "", priority: "", duedate: "", estvalue: ``
  }
  ]
  return (
    <>
      <div className='min-w-[1481px] flex flex-col h-screen' >

        <Navbar />
        <ToolbarSection />
 <div className='flex-1 overflow-y-auto'>
        <Spreadsheet_items itemlist={itemlist} /></div>
       <Footer/>
      </div>
    </>
  )
}



