import axios from "axios";

const getHeader = () => {
  const token = localStorage.getItem("userInfo");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

const getHeaderUpload = () => {
  const token = localStorage.getItem("userToken");
  return {
    Authorization: `Bearer ${token}`,
  };
};

export function getApi(url) {
  return axios({
    method: "get",
    url,
  });
}

export function deleteApi(url, data) {
  return axios({
    method: "delete",
    url,
    data: { id: data.id },
    headers: getHeader(),
  });
}

export function postApi(url, data) {
  return axios({
    method: "post",
    url,
    data,
    headers: getHeader(),
  });
}

export function putApi(url, data) {
  return axios({
    method: "put",
    url,
    data,
    headers: getHeader(),
  });
}

export function uploadApi(url, data) {
  let formData = new FormData();
  formData.append("fileUpload", data.fileUpload);
  formData.append("folder", data.folder);
  return axios({
    method: "post",
    url,
    data: formData,
    headers: getHeaderUpload(),
  });
}
