<template>
  <div class="container">
    <div>
      <h2>Danh sách Doanh nghiệp</h2>
      <p>Hãy xem và cập nhật doanh nghiệp của bạn.</p>
    </div>

    <div class="add-enterprise">
      <button @click="addEnterprise">
        <span>
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </span>
        Thêm Doanh nghiệp
      </button>
    </div>
  </div>
</template>
  
  <script setup>
const addEnterprise = () => {
  console.log("Add enterprise clicked");
};
</script>
  
  <style scoped>
.add-enterprise {
  margin: 16px 0;
}

button {
  font-size: larger;
  font-weight: 500;
  background-color:  #F8E9EA;
  color: #dc2626;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
.container {
  display: flex;
  justify-content: space-between;
  padding: 16px;
}
h2 {
  font-size: larger;
  font-weight: 500;
}
p{
  color: #6b6a6a;
}
</style>
  
  