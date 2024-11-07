import baseUrl from "../../api";

export async function getAllEnterprise(){
    try{
        const response = await baseUrl.get("/enterprise");
        console.log(response.data);
        return response.data
        
    } catch (err){
        console.log("Lỗi lấy enterprise", err);
        throw new Error("Không lấy được enterprise");
        
    }
}

export async function getEnterpriseById(id) {
    try{
        const response = await baseUrl.get(`/enterprise/${id}`);
        return response.data;
    }catch(err){
        console.log("lỗi khi lấy enterprise",err);
        throw new Error("Không thấy được enterprise");
        
    }
    
}

export async function updateEnterprise({id, updateDataEnterprise}) {
    try {
        await baseUrl.patch(`/enterprise/${id}`,updateDataEnterprise);
    }catch(err){
        console.log("Lỗi sửa enterprise", err);
        throw new Error("Không sửa được enterprise")
        
    }
    
}

export async function addEnterprise(enterpriseData) {
    try {
        await baseUrl.post("/enterprise",enterpriseData)
    } catch (error) {
        console.log("Lỗi thêm enterprise",error);
        throw new Error("Không thêm được enterprise")
        
    }
}