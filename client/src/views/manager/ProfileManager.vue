<template>
  <div class="profile-container" v-if="user">
    <div class="profile-content">
      <!-- Profile Image Section -->
      <div class="profile-image-section">
        <b class="profile-image-title">Ảnh đại diện</b>
        <div class="profile-image-container">
          <img :src="user.avatar" alt="Profile Photo" class="profile-photo" />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ptit-k5.appspot.com/o/avarta.png?alt=media&token=ebb63796-12c9-44c4-ba02-f26c8831fcd4"
            alt=""
            class="profile-icon"
          />
        </div>
        <div class="image-instructions">
          <p>Kích thước ảnh nhỏ nhất: 200 x 200px,</p>
          <p>định dạng PNG hoặc JPG</p>
        </div>
      </div>

      <!-- Profile Form Section -->
      <div class="profile-form-section">
        <b class="profile-title">Cập nhật thông tin cá nhân</b>
        <p class="profile-manage">
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </p>
        <form class="profile-form" @submit.prevent="showConfirmModal">
          <div class="form-profile">
            <div class="form-left">
              <label for="username">Tên đăng nhập</label>
              <div class="input-wrapper">
                <input
                  type="text"
                  id="username"
                  :value="user.userName"
                  disabled
                />
              </div>

              <label for="email">Email</label>
              <div class="input-wrapper">
                <input type="email" id="email" v-model="user.email" disabled />
              </div>

              <label for="phone">Số điện thoại</label>
              <div class="input-wrapper">
                <input type="text" id="phone" v-model="user.phone" />
                <BxSolidEditAlt class="input-icon" />
              </div>
            </div>

            <div class="form-right">
              <label for="name">Tên</label>
              <div class="input-wrapper">
                <input type="text" id="name" v-model="user.firstName" />
                <MdCancel class="input-icon" />
              </div>

              <label for="birthdate">Ngày sinh</label>
              <div class="input-wrapper">
                <input type="date" id="birthdate" v-model="user.birthdate" />
              </div>

              <label for="gender">Giới tính</label>
              <div class="input-wrapper">
                <select id="gender" v-model="user.gender">
                  <option>Nam</option>
                  <option>Nữ</option>
                  <option>Khác</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="cancel-btn">Hủy</button>
            <button type="submit" class="update-btn">Cập nhật</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div v-else>
    <p>Đang tải thông tin người dùng...</p>
  </div>
</template>

<script setup>
import { MdCancel, BxSolidEditAlt } from "@kalimahapps/vue-icons";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import Swal from "sweetalert2";

const store = useStore();
const userId = JSON.parse(localStorage.getItem("UserLogin")).id;
const user = computed(() => store.state.user.currentUser);

onMounted(() => {
  store.dispatch("fetchUserById", userId);
});

const showConfirmModal = () => {
  Swal.fire({
    title: "Xác nhận cập nhật",
    text: "Bạn có chắc chắn muốn cập nhật thông tin?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Có, cập nhật",
    cancelButtonText: "Hủy",
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch("updateUser", user.value);
      Swal.fire("Cập nhật!", "Thông tin đã được cập nhật.", "success");
    }
  });
};
</script>

<style scoped>
.image-instructions {
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
}
.profile-title {
  font-size: 20px;
}
.profile-content {
  display: flex;
  gap: 80px;
  align-items: flex-start;
  width: 100%;
  margin-left: 70px;
}

.profile-icon {
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-left: 105px;
  margin-top: -35px;
}

.profile-image-title {
  margin-right: 200px;
  margin-bottom: 10px;
  font-size: 20px;
}

.profile-image-container {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
}

.profile-manage {
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
  margin-top: 10px;
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-form-section {
  flex: 1;
}

.profile-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-profile {
  display: flex;
  gap: 20px;
}

.form-right,
.form-left {
  display: flex;
  flex-direction: column;
  flex: 1;
}

label {
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

input,
select {
  width: 100%;
  padding: 8px;
  font-size: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.input-icon {
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  color: #666;
  cursor: pointer;
}

.form-actions {
  display: flex;
  gap: 15px;
  margin-left: 250px;
}

.cancel-btn {
  background-color: #f0f0f0;
  padding: 10px 20px;
  width: 100px;
  border: none;
  border-radius: 4px;
  color: #555;
  cursor: pointer;
}

.update-btn {
  background-color: #d32f2f;
  width: 150px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
</style>
