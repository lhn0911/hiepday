<template>
  <div class="header">
    <div class="header-left">
      <div class="logo">
        <img
          src="../../images/logo.png"
          alt="RK Jobs Logo"
          class="logo-image"
        />
      </div>
      <div class="nav-links">
        <a class="nav-link">Việc làm</a>
        <a class="nav-link">Hồ sơ & CV</a>
        <a class="nav-link">Về chúng tôi</a>
        <a class="nav-link">Liên hệ</a>
      </div>
    </div>
    <div class="header-right">
      <div class="language-selector" @click="toggleDropdown">
        <img
          :src="
            selectedLanguage === 'VN'
              ? 'https://media.istockphoto.com/id/1215463190/vector/vietnam-flag.jpg?s=612x612&w=0&k=20&c=Xk--hZ18G0ze17OXJQya36AZW8iRWkSYl0KBwtnKaU4='
              : 'https://images.vexels.com/media/users/3/163966/isolated/preview/6ecbb5ec8c121c0699c9b9179d6b24aa-england-flag-language-icon-circle.png?w=360'
          "
          :alt="selectedLanguage"
          class="flag"
        />
        {{ selectedLanguage }}
        <div v-if="isDropdownOpen" class="dropdown-menu">
          <div class="dropdown-item" @click="handleLanguageChange('VN')">
            <img src="../../assets/VN.png" alt="VN" class="flag" />
            VN
          </div>

          <div class="dropdown-item" @click="handleLanguageChange('EN')">
            <img
              src="https://images.vexels.com/media/users/3/163966/isolated/preview/6ecbb5ec8c121c0699c9b9179d6b24aa-england-flag-language-icon-circle.png?w=360"
              alt="EN"
              class="flag"
            />
            EN
          </div>
        </div>
        <span class="arrow">
          <img src="../../images/arrow-down.png" alt="" />
        </span>
      </div>
      <div class="auth-buttons">
        <button class="signup-button">Đăng ký</button>
        <button class="login-button">Đăng nhập</button>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const isDropdownOpen = ref(false);
const selectedLanguage = ref("VN");

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const handleLanguageChange = (language) => {
  selectedLanguage.value = language;
  isDropdownOpen.value = false;
};
</script>
  
  <style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  height: 80px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  width: 100%;
  top: 0;
  z-index: 50;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 100px;
}

.logo {
  position: relative;
  left: 32px;
}

.logo-image {
  height: 32px;
  width: 138px;
}

.arrow img {
  height: 16px;
  width: 16px;
}

.nav-links {
  display: flex;
  gap: 40px;
  font-weight: 500;
}

.nav-link {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #9e1c3f;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  right: 32px;
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
}

.flag {
  width: 25px;
  height: 19px;
  /* object-fit: cover; */
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  z-index: 10;
}

.dropdown-item {
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.signup-button {
  padding: 8px 16px;
  border: 1px solid #666;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.signup-button:hover {
  background-color: #f0f0f0;
}

.login-button {
  padding: 8px 16px;
  background-color: #9e1c3f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #7e1632;
}
</style>
  