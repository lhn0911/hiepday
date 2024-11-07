import {
  getAllEnterprise,
  getEnterpriseById,
  updateEnterprise,
  addEnterprise,
} from "@/services/enterpriseServices";

const enterprise = {
  state: {
    enterprises: [],
    currentEnterprise: null,
  },
  mutations: {
    setEnterprises(state, enterprises) {
      state.enterprises = enterprises;
    },
    setCurrentEnterprise(state, enterprise) {
      state.currentEnterprise = enterprise;
    },
    updateEnterpriseMutation(state, updateEnterprise) {
      const index = state.enterprises.findIndex(
        (enterprise) => enterprise.id === updateEnterprise.id
      );
      if (index !== -1) {
        state.enterprises.splice(index, 1, updateEnterprise);
      }
    },
  },
  actions: {
    async fetchAllEnterprise({ commit }) {
      try {
        const enterprises = await getAllEnterprise();
        commit("setEnterprises", enterprises);
      } catch (error) {
        console.log("Không lấy được enterprise", error);
      }
    },
    async fetchEnterpriseById({ commit }, id) {
      try {
        const enterprise = await getEnterpriseById(id);
        commit("setCurrentEnterprise", enterprise);
      } catch (error) {
        console.log("Không lấy được enterprise", error);
      }
    },
    async addEnterprise({ dispatch }, enterpriseData) {
      try {
        await addEnterprise(enterpriseData);
        await dispatch("fetchAllEnterprise");
      } catch (error) {
        console.log("Không thêm được enterprise", error);
      }
    },
    async updateEnterprise({ commit }, enterpriseData) {
      try {
        await updateEnterprise(enterpriseData);
        commit("updateEnterpriseMutation", enterpriseData);
      } catch (error) {
        console.log("Lỗi không update được enterprise", error);
      }
    },
  },
  getters: {
    allEnterprise: (state) => state.enterprises,
    currentEnterprise: (state) => state.currentEnterprise,
  },
};

export default enterprise;
