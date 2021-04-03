import InfoEmail from "./InfoEmail";

export const emailServiceId=e=>{
    const serviceId = InfoEmail[0].serviceId;
    return serviceId;
}
export const emailTemplateId=e=>{
    const templateId = InfoEmail[0].templateId;
    return templateId;
}
export const emailUserId=e=>{
    const userId = InfoEmail[0].userId;
    return userId;
}