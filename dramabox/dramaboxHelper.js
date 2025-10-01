import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export const getToken = async () => {
  try {
    const url = "https://sapi.dramaboxdb.com/drama-box/ap001/bootstrap";
    const deviceId = uuidv4(35);
    const headers = {
      "User-Agent": "okhttp/4.10.0",
      "Accept-Encoding": "gzip",
      "Content-Type": "application/json",
      "tn": "",
      "version": "430",
      "vn": "4.3.0",
      "cid": "DRA1000042",
      "package-name": "com.storymatrix.drama",
      "apn": "1",
      "device-id": deviceId,
      "language": "in",
      "current-language": "in",
      "p": "43",
      "time-zone": "+0800",
      "content-type": "application/json; charset=UTF-8"
    };
    
    const data = {
      distinctId: ""
    };
    
    const res = await axios.post(url, data, { headers })
    if(!res.data?.data?.user){
      return getToken();
    }
    const tokenData = {
      token: res.data.data.user.token,
      deviceId,
      timestamp: Date.now(),
    };

    return tokenData;
  } catch (error) {
    console.error("[ERROR] Gagal mengambil token:", error);
    throw error;
  }
};

/**
 * Generate headers lengkap siap pakai
 */
export const getHeaders = async () => {
  const { token, deviceId } = await getToken();

  return {
    "Host": "sapi.dramaboxdb.com",
    "Tn": `Bearer ${token}`,
    "Version": "430",
    "Vn": "4.3.0",
    "Cid": "DALPF1057826",
    "Package-Name": "com.storymatrix.drama",
    "Apn": "1",
    "Device-Id": `${deviceId}`,
    "device-id": deviceId,
    "Language": "in",
    "Current-Language": "in",
    "P": "43",
    "Time-Zone": "+0800",
    "md": "Redmi Note 8",
    "Ov": "14",
    "Mf": "XIAOMI",
    "Brand": "Xiaomi",
    "Content-Type": "application/json; charset=UTF-8",
    "User-Agent": "okhttp/4.10.0",
  };
};

export default { getToken, getHeaders };
