import React, { createContext, useContext, useEffect, useState } from 'react';

interface Settings {
  darkMode: boolean;
  defaultLanguage: string;
  autoCopy: boolean;
  vibration: boolean;
  microphone: boolean;
}

interface SettingsContextType {
  settings: Settings;
  updateSetting: <K extends keyof Settings>(
    key: K,
    value: Settings[K]
  ) => void;
}

const defaultSettings: Settings = {
  darkMode: false,
  defaultLanguage: 'en',
  autoCopy: true,
  vibration: true,
  microphone: false,
};

const SettingsContext = createContext<SettingsContextType | null>(null);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(() => {
    const saved = localStorage.getItem('settings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
    document.body.classList.toggle('dark', settings.darkMode);
  }, [settings]);

  const updateSetting = (key: keyof Settings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used inside SettingsProvider');
  return ctx;
};
