export const stateMgr = {
  state: { counter: 0 },
  updateState(newState) {
    this.state = { ...this.state, ...newState };
  },
  getState() {
    return { ...this.state };
  },
};
