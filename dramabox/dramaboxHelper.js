import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const getToken = async () => {
 
};

/**
 * Generate headers lengkap siap pakai
 */
export const getHeaders = async () => {
  //const { token, deviceId, attributionPubParam, uuid } = await getToken();
  //console.log(token, deviceId)
  //"Tn": `Bearer ${token}`,
  return {
  "Host": "sapi.dramaboxdb.com",
  "version": "451",
  "package-name": "com.storymatrix.drama",
  "p": "46",
  "cid": "DASEO1000000",
  "apn": "2",
  "country-code": "ID",
  "mchid": "DBDASEO1000000",
  "mbid": "41000122043",
  "tz": "-420",
  "language": "en",
  "mcc": "510",
  "locale": "en_US",
  "is_root": "1",
  "device-id": "91e7c588-9bac-44db-ab2c-6ee6d8fd4841",
  "nchid": "DRA1000042",
  "instanceid": "3c82f22583ef583f93192455bbc75357",
  "md": "SM-G975N",
  "store-source": "store_google",
  "mf": "SAMSUNG",
  "local-time": "2025-10-09 21:42:18.055 +0700",
  "time-zone": "+0700",
  "brand": "samsung",
  "lat": "0",
  "is_emulator": "0",
  "current-language": "in",
  "ov": "9",
  "userid": "303494776",
  "afid": "1759947747328-768190153054812103",
  "android-id": "ffffffffffb9274cc0b9274cc000000000",
  "srn": "720x1280",
  "ins": "1759947747457",
  "is_vpn": "1",
  "build": "Build/PQ3B.190801.10101846",
  "pline": "ANDROID",
  "vn": "4.5.1",
  "over-flow": "new-fly",
  "tn": "Bearer ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnlaV2RwYzNSbGNsUjVjR1VpT2lKVVJVMVFJaXdpZFhObGNrbGtJam96TURNME9UUTNOelo5LnU4U1RGb0R2eTJTcVhSRWRVUU1fRHlILU5LTXU3ZmNWOXdyb29Rb3dIZHM=",
  "sn": "aZtQ0je2uv7xyW7T+lOi7cvoo+d+n2rc/suT4bcOcDHDzHsRlRAyxKPDL61e/oaQmjCZWs/1SIs8GVsNEeA0wLieGj8QTn5ePWouyntkE/zhJWP226JSmuNRHnF2ODnbosHu0qeMn4NI5kXqS8gPpKpA2TAnA4kNrFbvpKZdtzT1CT4c5ExHg3QpE01r+SgLkWmHdfa87pWoO5UqeKhBob+UNIM7wbAPdBeUeCT/8TUtyJJImohfMs+uo4FWHO2UD32tVV4KL+lrft1bePiK4MRWT5ibnC6Sbbw0aNLog7+2FX5n0DMBZObN1lTtinnG+UffFT54euPeD2KECv/nnw==",
  "active-time": "672696",
  "content-type": "application/json; charset=UTF-8",
  "accept-encoding": "gzip",
  "user-agent": "okhttp/4.10.0"
};
};

export default { getToken, getHeaders };
