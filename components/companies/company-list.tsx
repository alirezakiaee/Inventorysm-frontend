"use client"
 
import { Checkbox } from "@/components/ui/checkbox"
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
export default function CompanyList() {
  const companies = useQuery(api.companies.get) ?? [];

  if (companies === undefined) return <div>Loading...</div>;
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="row-span-2 border border-dashed rounded-lg shadow-sm p-4">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
      <div className="border border-dashed rounded-lg shadow-sm p-4">
        <h1 className="text-2xl font-bold">Company list</h1>
        <div className="flex items-center space-x-2">
          {companies.map(({companyName},idx)=>(<div key={idx}><Checkbox id="company" className="align-middle"/>
          <label
            htmlFor="company"
            className="ml-2 align-middle text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {companyName}
          </label>
          </div>)
          )}
        </div>
      </div>
      <div className="border border-dashed rounded-lg shadow-sm p-4">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
    </div>
  );
}