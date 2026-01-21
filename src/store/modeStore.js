import { create } from 'zustand';

const useModeStore = create((set) => ({
    mode: localStorage.getItem('researchMode') || 'Analyst',
    setMode: (newMode) => {
        localStorage.setItem('researchMode', newMode);
        set({ mode: newMode });
    },
}));

export default useModeStore;
