import request from "../utils/request";

//用户水滴信息
export function userWaterInfo() {
    return request.get("/userWaterInfo");
}

//生成水滴任务
export function makeTaskPhase(data) {
    return request.get("/makeTaskPhase", data);
}

//用户浇水
export function memberWatering(data) {
    return request.get("/memberWatering", data);
}