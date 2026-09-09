// layouts/MainLayout.tsx

import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="main-layout">
    <header>
      <h1>GeoPulse</h1>
      <h3>Interactive City Dashboard</h3>
    </header>
    <main>
      {children}
    </main>
  </div>
);
