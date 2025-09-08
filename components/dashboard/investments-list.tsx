"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, ArrowUpDown } from "lucide-react"

export default function InvestmentsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState("all")
  const [sortBy, setSortBy] = useState("date")
  const [sortOrder, setSortOrder] = useState("desc")

  // Mock data for investments
  const investments = [
    {
      id: 1,
      project: "MIH Karmo 1 Project",
      date: "2023-01-12",
      status: "Active",
      duration: "24 months",
      maturityDate: "2025-01-12",
      type: "Residential",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      project: "MIH Karmo 2 Project",
      date: "2023-03-05",
      status: "Active",
      duration: "36 months",
      maturityDate: "2026-03-05",
      type: "Commercial",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      project: "MIH 2.6 Hectors Project",
      date: "2023-04-22",
      status: "Pending",
      duration: "18 months",
      maturityDate: "2024-10-22",
      type: "Residential",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      project: "MIH Residences",
      date: "2022-11-15",
      status: "Completed",
      duration: "12 months",
      maturityDate: "2023-11-15",
      type: "Residential",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      project: "MIH Plaza",
      date: "2022-08-30",
      status: "Active",
      duration: "30 months",
      maturityDate: "2025-02-28",
      type: "Commercial",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Filter investments based on search query and filter
  const filteredInvestments = investments.filter((investment) => {
    const matchesSearch = investment.project.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filter === "all" || investment.status.toLowerCase() === filter.toLowerCase()
    return matchesSearch && matchesFilter
  })

  // Sort investments
  const sortedInvestments = [...filteredInvestments].sort((a, b) => {
    let comparison = 0
    if (sortBy === "date") {
      comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
    } else if (sortBy === "project") {
      comparison = a.project.localeCompare(b.project)
    }
    return sortOrder === "asc" ? comparison : -comparison
  })

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("desc")
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">My Investments</h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search investments..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => toggleSort("project")}
                >
                  <div className="flex items-center">
                    Project
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => toggleSort("date")}
                >
                  <div className="flex items-center">
                    Date
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedInvestments.map((investment) => (
                <tr key={investment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 relative rounded-md overflow-hidden">
                        <Image
                          src={investment.image || "/placeholder.svg"}
                          alt={investment.project}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{investment.project}</div>
                        <div className="text-sm text-gray-500">{investment.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{new Date(investment.date).toLocaleDateString()}</div>
                    <div className="text-sm text-gray-500">
                      Maturity: {new Date(investment.maturityDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        investment.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : investment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {investment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link
                      href={`/dashboard/investments/${investment.id}`}
                      className="text-orange-500 hover:text-orange-600"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {sortedInvestments.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No investments found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
