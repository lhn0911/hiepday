import baseUrl from "../../api";

export async function getAllCertifycate() {
  try {
    const response = await baseUrl.get("/userCertificate");
    return response.data;
  } catch (error) {
    console.log("không lấy được chứng chỉ hồ sơ", error);
    throw new Error("không lấy được chứng chỉ hồ sơ");
  }
}

export async function createCertifycate(userCertificate) {
  try {
    await baseUrl.post("/userCertificate", userCertificate);
  } catch (error) {
    console.log("không thêm được chứng chỉ hồ sơ", error);
    throw new Error("không thêm được chứng chỉ hồ sơ");
  }
}

export async function deleteCertifycate(id) {
  try {
    await baseUrl.delete(`/userCertificate/${id}`);
  } catch (error) {
    console.log("không xóa được chứng chỉ hồ sơ", error);
    throw new Error("không xóa được chứng chỉ hồ sơ");
  }
}
