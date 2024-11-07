import {
  getAllCertifycate,
  createCertifycate,
  deleteCertifycate,
} from "@/services/certifycateServices";

const certify = {
  state: {
    userCertificates: [],
  },
  getters: {
    allCertificates: (state) => state.userCertificates,
  },
  mutations: {
    setUserCertificates(state, userCertificates) {
      state.userCertificates = userCertificates;
    },
    addUserCertificate(state, newCertificate) {
      state.userCertificates.push(newCertificate);
    },
    removeUserCertificate(state, id) {
      state.userCertificates = state.userCertificates.filter(
        (certificate) => certificate.id !== id
      );
    },
  },
  actions: {
    async fetchAllUserCertificates({ commit }) {
      try {
        const userCertificates = await getAllCertifycate();
        commit("setUserCertificates", userCertificates);
      } catch (error) {
        console.log("Không lấy được danh sách chứng chỉ:", error);
      }
    },
    async addCertificate({ commit, dispatch }, userCertificate) {
      try {
        await createCertifycate(userCertificate);
        dispatch("fetchAllUserCertificates");
      } catch (error) {
        console.error("Không thêm được chứng chỉ:", error);
      }
    },
    async deleteCertificate({ commit, dispatch }, id) {
      try {
        await deleteCertifycate(id);
        dispatch("fetchAllUserCertificates");
      } catch (error) {
        console.log("Không xóa được chứng chỉ:", error);
      }
    },
  },
};

export default certify;
