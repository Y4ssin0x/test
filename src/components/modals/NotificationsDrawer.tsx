import React from 'react';
import { NOTIFICATIONS_DATA, NotificationItem } from '../../data/clubData';

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
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md h-full bg-[#0b1124] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">notifications</span>
              <h3 className="font-display font-bold text-base text-white uppercase tracking-wider">
                NOTIFICATIONS
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f2ca50] hover:text-black flex items-center justify-center text-slate-300 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <span className="text-xs text-slate-400">Official Club Dispatches</span>
            <button
              onClick={onMarkAllAsRead}
              className="text-xs font-bold text-[#f2ca50] hover:underline cursor-pointer"
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
                    ? 'bg-[#182246]/60 border-[#f2ca50]/40'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-bold text-white line-clamp-1">{n.title}</span>
                  {!n.read && <span className="w-2 h-2 rounded-full bg-[#f2ca50] shrink-0 mt-1" />}
                </div>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{n.desc}</p>
                <div className="flex justify-between items-center mt-2.5 pt-2 border-t border-white/5">
                  <span className="text-[10px] text-slate-400 font-mono">{n.time}</span>
                  <span className="text-[10px] font-bold text-[#f2ca50] flex items-center gap-0.5">
                    <span>Inspect</span>
                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 text-center">
          <p className="text-[11px] text-slate-400">
            Real Madrid Official Applet • Madridista Connect
          </p>
        </div>
      </div>
    </div>
  );
};
