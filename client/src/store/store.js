import { createStore } from "vuex";
import user from "./user/User";
import enterprise from "./enterprise/Enterprise";
import certify from "./user/Certify";

export default createStore({
  modules: {
    user,
    enterprise,
    certify,
  },
});
