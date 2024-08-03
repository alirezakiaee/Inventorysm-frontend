import CompanyList from '@/components/companies/company-list'
import MobileNav from '@/components/nav/mobile-nav'
import SideBar from '@/components/nav/side-bar'
import React from 'react'

export default function Companies() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      <MobileNav title="Companies" />
    </div>
  )
}
