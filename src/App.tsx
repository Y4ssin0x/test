/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundShader } from './components/BackgroundShader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { NewsBentoGrid } from './components/NewsBentoGrid';
import { MatchFixtures } from './components/MatchFixtures';
import { PlayerSpotlight } from './components/PlayerSpotlight';
import { HonoursCabinet } from './components/HonoursCabinet';
import { MembershipSection } from './components/MembershipSection';
import { PartnersAndFooter } from './components/PartnersAndFooter';

// Modals
import { MatchRecapModal } from './components/modals/MatchRecapModal';
import { VirtualTourModal } from './components/modals/VirtualTourModal';
import { TicketBookingModal } from './components/modals/TicketBookingModal';
import { TrophyDetailModal } from './components/modals/TrophyDetailModal';
import { TacticalSynergyModal } from './components/modals/TacticalSynergyModal';
import { MedicalReportModal } from './components/modals/MedicalReportModal';
import { PlayerDetailModal } from './components/modals/PlayerDetailModal';
import { MembershipModal } from './components/modals/MembershipModal';
import { AwayBallotModal } from './components/modals/AwayBallotModal';
import { NotificationsDrawer } from './components/modals/NotificationsDrawer';
import { SearchModal } from './components/modals/SearchModal';

import { NOTIFICATIONS_DATA, NotificationItem, Trophy, Player } from './data/clubData';

export default function App() {
  const [notifications, setNotifications] = useState<NotificationItem[]>(NOTIFICATIONS_DATA);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [isMatchRecapOpen, setIsMatchRecapOpen] = useState(false);
  const [isTicketsOpen, setIsTicketsOpen] = useState(false);
  const [isStadiumTourOpen, setIsStadiumTourOpen] = useState(false);
  const [isTacticalBlueprintOpen, setIsTacticalBlueprintOpen] = useState(false);
  const [isSynergyModalOpen, setIsSynergyModalOpen] = useState(false);
  const [isMedicalReportOpen, setIsMedicalReportOpen] = useState(false);
  const [isAwayBallotOpen, setIsAwayBallotOpen] = useState(false);
  const [selectedTrophy, setSelectedTrophy] = useState<Trophy | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length;

  const handleMarkAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleNotificationAction = (category: 'tickets' | 'match' | 'club') => {
    if (category === 'tickets') setIsTicketsOpen(true);
    else if (category === 'match') setIsMatchRecapOpen(true);
    else if (category === 'club') setIsStadiumTourOpen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAFAFA] text-[#0F172A] selection:bg-[#f2ca50] selection:text-black">
      {/* Procedural WebGL Background Shader Canvas */}
      <BackgroundShader />

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMembership={() => setIsMembershipOpen(true)}
        onOpenTickets={() => setIsTicketsOpen(true)}
        unreadNotificationsCount={unreadNotificationsCount}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section with Embers */}
        <HeroSection
          onOpenMembership={() => setIsMembershipOpen(true)}
          onOpenMatchRecap={() => setIsMatchRecapOpen(true)}
          onOpenTickets={() => setIsTicketsOpen(true)}
          onOpenStadiumTour={() => setIsStadiumTourOpen(true)}
        />

        {/* 2. Latest From Valdebebas (Bento Grid) */}
        <NewsBentoGrid
          onOpenTacticalBlueprint={() => setIsMatchRecapOpen(true)}
          onOpenSynergyModal={() => setIsSynergyModalOpen(true)}
          onOpenStadiumTour={() => setIsStadiumTourOpen(true)}
          onOpenMedicalReport={() => setIsMedicalReportOpen(true)}
        />

        {/* 3. Match Telemetry & Fixtures */}
        <MatchFixtures
          onOpenMatchRecap={() => setIsMatchRecapOpen(true)}
          onOpenTickets={() => setIsTicketsOpen(true)}
          onOpenAwayBallot={() => setIsAwayBallotOpen(true)}
        />

        {/* 4. Player Spotlight & Squad Telemetry */}
        <PlayerSpotlight onOpenPlayerDetails={(p) => setSelectedPlayer(p)} />

        {/* 5. Royal Legacy & Honours (Trophy Cabinet) */}
        <HonoursCabinet onSelectTrophy={(trophy) => setSelectedTrophy(trophy)} />

        {/* 6. Madridista Membership / Shop */}
        <MembershipSection onOpenMembership={() => setIsMembershipOpen(true)} />
      </main>

      {/* Official Footer & Partners */}
      <PartnersAndFooter
        onOpenStadiumTour={() => setIsStadiumTourOpen(true)}
        onOpenMembership={() => setIsMembershipOpen(true)}
        onOpenTickets={() => setIsTicketsOpen(true)}
      />

      {/* Interactive Modals & Drawers */}
      <MatchRecapModal
        isOpen={isMatchRecapOpen}
        onClose={() => setIsMatchRecapOpen(false)}
      />

      <VirtualTourModal
        isOpen={isStadiumTourOpen}
        onClose={() => setIsStadiumTourOpen(false)}
      />

      <TicketBookingModal
        isOpen={isTicketsOpen}
        onClose={() => setIsTicketsOpen(false)}
        onOpenMembership={() => {
          setIsTicketsOpen(false);
          setIsMembershipOpen(true);
        }}
      />

      <TrophyDetailModal
        trophy={selectedTrophy}
        onClose={() => setSelectedTrophy(null)}
      />

      <TacticalSynergyModal
        isOpen={isSynergyModalOpen}
        onClose={() => setIsSynergyModalOpen(false)}
      />

      <MedicalReportModal
        isOpen={isMedicalReportOpen}
        onClose={() => setIsMedicalReportOpen(false)}
      />

      <PlayerDetailModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />

      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
      />

      <AwayBallotModal
        isOpen={isAwayBallotOpen}
        onClose={() => setIsAwayBallotOpen(false)}
      />

      <NotificationsDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllAsRead={handleMarkAllNotificationsAsRead}
        onSelectAction={handleNotificationAction}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPlayer={(p) => setSelectedPlayer(p)}
        onOpenMatchRecap={() => setIsMatchRecapOpen(true)}
        onOpenTickets={() => setIsTicketsOpen(true)}
        onOpenStadiumTour={() => setIsStadiumTourOpen(true)}
      />
    </div>
  );
}
