import React from 'react';
import { UserRole } from '../types';
import { Leaf, Package, BarChart3, Users, ShieldCheck } from 'lucide-react';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-earth-900 via-earth-800 to-earth-900 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
         <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-nature-800 blur-3xl"></div>
         <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-earth-600 blur-3xl"></div>
      </div>

      <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full border-2 border-earth-200 z-10 relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nature-100 text-nature-700 mb-4 shadow-inner">
            <Leaf size={32} />
          </div>
          <h1 className="text-3xl font-bold text-earth-900">ShroomTrack ERP</h1>
          <p className="text-earth-600 mt-2">Select your role to access the system</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => onLogin(UserRole.ADMIN)}
            className="w-full flex items-center p-3 rounded-xl border border-earth-300 bg-earth-50 hover:border-earth-500 hover:bg-white transition-all group"
          >
            <div className="p-2 bg-earth-200 rounded-lg group-hover:bg-earth-800 group-hover:text-white text-earth-800 transition-colors">
              <ShieldCheck size={20} />
            </div>
            <div className="ml-4 text-left">
              <h3 className="font-semibold text-earth-900">Operations Manager</h3>
              <p className="text-xs text-earth-500">Full Access Main Dashboard</p>
            </div>
          </button>

          <div className="border-t border-earth-200 my-2"></div>

          <button
            onClick={() => onLogin(UserRole.PROCESSING_WORKER)}
            className="w-full flex items-center p-3 rounded-xl border border-earth-200 hover:border-nature-500 hover:bg-nature-50 transition-all group"
          >
            <div className="p-2 bg-earth-100 rounded-lg group-hover:bg-nature-100 text-earth-700 group-hover:text-nature-700 transition-colors">
              <Users size={20} />
            </div>
            <div className="ml-4 text-left">
              <h3 className="font-semibold text-earth-900">Processing Worker</h3>
              <p className="text-xs text-earth-500">Log deliveries, wash & dry</p>
            </div>
          </button>

          <button
            onClick={() => onLogin(UserRole.PACKING_STAFF)}
            className="w-full flex items-center p-3 rounded-xl border border-earth-200 hover:border-nature-500 hover:bg-nature-50 transition-all group"
          >
            <div className="p-2 bg-earth-100 rounded-lg group-hover:bg-nature-100 text-earth-700 group-hover:text-nature-700 transition-colors">
              <Package size={20} />
            </div>
            <div className="ml-4 text-left">
              <h3 className="font-semibold text-earth-900">Packing Staff</h3>
              <p className="text-xs text-earth-500">Label, QR scan, and store</p>
            </div>
          </button>

          <button
            onClick={() => onLogin(UserRole.FINANCE_CLERK)}
            className="w-full flex items-center p-3 rounded-xl border border-earth-200 hover:border-nature-500 hover:bg-nature-50 transition-all group"
          >
            <div className="p-2 bg-earth-100 rounded-lg group-hover:bg-nature-100 text-earth-700 group-hover:text-nature-700 transition-colors">
              <BarChart3 size={20} />
            </div>
            <div className="ml-4 text-left">
              <h3 className="font-semibold text-earth-900">Finance Clerk</h3>
              <p className="text-xs text-earth-500">Inventory & Financial Dashboard</p>
            </div>
          </button>
        </div>
        
        <div className="mt-8 text-center text-xs text-earth-400">
          Integrated with Google Sheets & Apps Script
        </div>
      </div>
    </div>
  );
};

export default Login;