import React from 'react';
import { NotificationItem } from '../../data/clubData';

interface NotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  onMarkAllAsRead: () => void;
  onSelectAction: (category: 'tickets' | 'match' | 'club') => void;
}

export const NotificationsDrawer: React.FC<NotificationsDrawerProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllAsRead,
  onSelectAction,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-md h-full bg-white border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto text-slate-900">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-500 text-[20px]">notifications</span>
              <h3 className="font-display font-bold text-base text-slate-900 uppercase tracking-wider">
                NOTIFICATIONS
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <span className="text-xs text-slate-500">Official Club Dispatches</span>
            <button
              onClick={onMarkAllAsRead}
              className="text-xs font-bold text-amber-700 hover:underline cursor-pointer"
            >
              Mark all as read
            </button>
          </div>

          {/* List */}
          <div className="space-y-3 mt-2">
            {notifications.map((n) => (
              <div
                key={n.id}
                onClick={() => {
                  onSelectAction(n.category);
                  onClose();
                }}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  !n.read
                    ? 'bg-amber-50/70 border-amber-300 shadow-2xs'
                    : 'bg-slate-50 border-slate-200 hover:border-amber-300'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-bold text-slate-900 line-clamp-1">{n.title}</span>
                  {!n.read && <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1" />}
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{n.desc}</p>
                <div className="flex justify-between items-center mt-2.5 pt-2 border-t border-slate-200/60">
                  <span className="text-[10px] text-slate-400 font-mono">{n.time}</span>
                  <span className="text-[10px] font-bold text-amber-700 flex items-center gap-0.5">
                    <span>Inspect</span>
                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 text-center">
          <p className="text-[11px] text-slate-400">
            Real Madrid Official Applet • Madridista Connect
          </p>
        </div>
      </div>
    </div>
  );
};
