import axios from "axios";
import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import { DramaboxApp } from "./sign.js";

function generateTimestamp() {
  return Date.now();
}

function generateLocalTime() {
  const now = new Date();
  const offsetMinutes = -now.getTimezoneOffset();
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const pad = (n) => String(Math.floor(Math.abs(n))).padStart(2, "0");
  const hours = pad(offsetMinutes / 60);
  const minutes = pad(offsetMinutes % 60);
  const tz = `${sign}${hours}${minutes}`;
  return `${now.toISOString().replace("T", " ").replace("Z", "")} ${tz}`;
}

function randomUUID() {
  return crypto.randomUUID();
}

function randomAndroidId() {
  return "ffffffff" + crypto.randomBytes(4).toString("hex") + "000000000";
}

function randomAfid() {
  return `${Date.now()}-${BigInt(Math.floor(Math.random() * 10 ** 18)).toString()}`;
}

function fakeSN() {
  return crypto.randomBytes(256).toString("base64");
}

export const getToken = async () => {
  try {
    const timestamp = generateTimestamp();
    const url = `https://sapi.dramaboxdb.com/drama-box/ap001/bootstrap?timestamp=${timestamp}`;
    const localTime = generateLocalTime();
    const deviceId = randomUUID();
    const aid = randomAndroidId();
    const afid = randomAfid();
    const headers = {
      "version": "451",
      "package-name": "com.storymatrix.drama",
      "p": "46",
      "cid": "DRA1000042",
      "apn": "0",
      "country-code": "",
      "mchid": "",
      "mbid": "",
      "tz": "-420",
      "language": "en",
      "mcc": "310",
      "locale": "en_US",
      "is_root": "0",
      "device-id": deviceId,
      "nchid": "DRA1000042",
      "instanceid": "",
      "md": "SM-G975N",
      "store-source": "store_google",
      "mf": "SAMSUNG",
      "local-time": localTime,
      "time-zone": "+0700",
      "brand": "samsung",
      "lat": "1",
      "is_emulator": "1",
      "current-language": "en",
      "ov": "9",
      "userid": "",
      "afid": afid,
      "android-id": aid,
      "srn": "720x1280",
      "ins": "",
      "is_vpn": "1",
      "build": "Build/PQ3B.190801.10101846",
      "pline": "ANDROID",
      "vn": "4.5.1",
      "over-flow": "new-fly",
      "tn": "",
      "active-time": Math.floor(Math.random() * 20000).toString(),
      "content-type": "application/json; charset=UTF-8",
      "accept-encoding": "gzip",
      "user-agent": "okhttp/4.10.0",
    };
    

    const body = JSON.stringify({ distinctId: null });
    headers['sn'] = DramaboxApp.dramabox(`${headers}${timestamp}${afid}${deviceId}${aid}`);
    const res = await axios.post(url, { distinctId: null }, {headers});

    if(!res.data?.data?.user){
      console.log(headers['sn'])
      return await getToken();
    }
    console.log(res.data.data)
    const tokenData = {
      token: res.data.data.user.token,
      deviceId,
      uuid: res.data.data.user.uid,
      attributionPubParam: res.data.data.attributionPubParam,
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
  //const { token, deviceId, attributionPubParam, uuid } = await getToken();
  //console.log(token, deviceId)
  //"Tn": `Bearer ${token}`,
  return {
    "version": "451",
    "package-name": "com.storymatrix.drama",
    "p": "46",
    "cid": 'DASEO1000000',
    "apn": "0",
    "country-code": "ID",
    "mchid": 'DBDASEO1000000',
    "mbid": '41000122043',
    "tz": "-420",
    "language": "en",
    "mcc": "310",
    "locale": "en_US",
    "is_root": "1",
    "device-id": '91e7c588-9bac-44db-ab2c-6ee6d8fd4841',
    "nchid": "DRA1000042",
    "instanceid": "3c82f22583ef583f93192455bbc75357",
    "md": "SM-G975N",
    "store-source": "store_google",
    "mf": "SAMSUNG",
    "local-time": "2025-10-07 21:26:11.682 +0700",
    "time-zone": "+0700",
    "brand": "samsung",
    "lat": "0",
    "is_emulator": "0",
    "current-language": "en",
    "ov": "9",
    "userid": '303494776',
    "afid": "1759947747328-768190153054812103",
    "android-id": "ffffffffb9274cc0b9274cc000000000",
    "srn": "720x1280",
    "is_vpn": "1",
    "build": "Build/PQ3B.190801.10101846",
    "pline": "ANDROID",
    "vn": "4.5.1",
    "over-flow": "new-fly",
    "tn": `Bearer ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnlaV2RwYzNSbGNsUjVjR1VpT2lKVVJVMVFJaXdpZFhObGNrbGtJam96TURNME9UUTNOelo5LnU4U1RGb0R2eTJTcVhSRWRVUU1fRHlILU5LTXU3ZmNWOXdyb29Rb3dIZHM=`,
    "sn": "JFDUEtrtmKvfdRvfxSLxwYXH7a9NzzY41ztJtUL3K2tyW/TeTQXUsA0t40H9OmhbJjN32YozxnqwYYaeeMTBAi67Du21y+QB4EHB41fujZfBChSFRQS7QIViKjvPCzr0yDwqgyRS1nYiRAh4JV3Rqn8PwD0+VGuakQapgC85QHNDmBNtVb1dD0XGVjevb6iR9tB4AzYlWB3yG0D2iXJbSB40E6zEblQ/2FG3g9vj+hEz6SzVHYSs+PJAN12bLjl7N8/YxbejGGZd82NMhxEwJIXcgauKaeFrj2X2NvC6fT4jw6ZrCsh6SBxo2YG25K3fFnJBxwMbJWAHbU3PqjlrGg==",
    "content-type": "application/json; charset=UTF-8",
    "accept-encoding": "gzip",
    "user-agent": "okhttp/4.10.0",
    attributionPubParam
  };
};

export default { getToken, getHeaders };
