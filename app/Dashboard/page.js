"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { 
  BarChart, 
  Users, 
  FileText, 
  Settings, 
  LogOut 
} from 'lucide-react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login');
    },
  });
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      return; // Do nothing while loading
    }
    setIsLoading(false);
  }, [status]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h2>
        </div>
        <nav className="mt-8">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-200">
            <BarChart className="mr-3" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
            <Users className="mr-3" />
            Users
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
            <FileText className="mr-3" />
            Properties
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
            <Settings className="mr-3" />
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome, {session.user.name}</h1>
          <button 
            onClick={() => signOut()} 
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            <LogOut className="mr-2" size={18} />
            Sign Out
          </button>
        </div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Properties Listed</h3>
            <p className="text-3xl font-bold">567</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">New Inquiries</h3>
            <p className="text-3xl font-bold">89</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Revenue</h3>
            <p className="text-3xl font-bold">$12,345</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap">Added new property</td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-06-15</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                  <td className="px-6 py-4 whitespace-nowrap">Updated profile</td>
                  <td className="px-6 py-4 whitespace-nowrap">2023-06-14</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
