import { create } from "zustand";

interface BearCounterState {
  bears: number;
  addBears: () => void;
}

const useBearCounterStore = create<BearCounterState>()((set) => {
  return {
    bears: 0,
    addBears: () => {
      set((currentState) => {
        return {
          ...currentState,
          bears: currentState.bears + 1,
        };
      });
    },
  };
});

export const BerarCounter = (): React.ReactNode => {
  const { bears, addBears } = useBearCounterStore();
  return (
    <>
      <div className="bear-counter-root">
        <p> {bears} bears in zoo</p>
        <button onClick={addBears}>Add bears</button>
      </div>
    </>
  );
};
