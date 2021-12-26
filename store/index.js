export const state = () => ({
  activeSection: 1,
})

export const mutations = {
  setActiveSection(state, id) {
    state.activeSection = id
  },
}
