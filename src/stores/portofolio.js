import { defineStore } from 'pinia'

export const usePortofolioStrore = defineStore('portfolio', {
  state: () => ({
    portfolio: [
      { id: 1, name: 'Project 1', description: 'Project 1 description' },
      { id: 2, name: 'Project 2', description: 'Project 2 description' },
    ],
  }),
  getters: {
    totalProject: (state) => state.portofolio.length,
  },
  actions: {
    addProjects(projects) {
      this.portfolio.push(projects)
    },
  },
})
