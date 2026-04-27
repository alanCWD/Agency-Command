/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { Dashboard } from './pages/Dashboard';
import { Builder } from './pages/Builder';
import { GBPIntegration } from './pages/GBPIntegration';
import { Analytics } from './pages/Analytics';
import { Leads } from './pages/Leads';
import { Coaching } from './pages/Coaching';
import { RestaurantHub } from './pages/RestaurantHub';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden antialiased">
        <TopBar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 bg-slate-100 overflow-y-auto w-full p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/builder" element={<Builder />} />
              <Route path="/gbp" element={<GBPIntegration />} />
              <Route path="/restaurant" element={<RestaurantHub />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/coaching" element={<Coaching />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
