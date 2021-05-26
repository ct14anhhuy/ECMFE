import { api } from "utils/api";

const getMyContents = async () => {
  return await api.get("/FileInfo/GetFileInfos").then((response) => {
    return response.data;
  });
};

const getImportantContents = async () => {
  return await api.get("/FileInfo/GetImportantFiles").then((response) => {
    return response.data;
  });
};

const getFavoriteContents = async () => {
  return await api.get("/FileInfo/GetFavoriteFiles").then((response) => {
    return response.data;
  });
};

const getSharedContents = async () => {
  return await api.get("/FileInfo/GetSharedFiles").then((response) => {
    return response.data;
  });
};

const getDepartmentContents = async () => {
  return await api.get("/FileInfo/GetDepartmentFiles").then((response) => {
    return response.data;
  });
};

const getTrashContents = async () => {
  return await api.get("/FileInfo/GetTrashContents").then((response) => {
    return response.data;
  });
};

const getContentsFromPath = async (dirId) => {
  return await api
    .get("/FileInfo/GetFileInfosByDirId?dirId=" + dirId)
    .then((response) => {
      return response.data;
    });
};

const searchContents = async (searchStr) => {
  return await api
    .get("/FileInfo/Search?searchContent=" + searchStr)
    .then((response) => {
      return response.data;
    });
};

const changeFavorite = async (fileId, employeeId) => {
  const fileFavorite = {
    fileId,
    employeeId,
  };
  return await api
    .post("/FileFavorite/AddOrRemoveFavoriteFile", fileFavorite)
    .then((response) => {
      return response.data;
    });
};

const changeImportant = async (fileId, employeeId) => {
  const fileImportant = {
    fileId,
    employeeId,
  };
  return await api
    .post("/FileImportant/AddOrRemoveImportantFile", fileImportant)
    .then((response) => {
      return response.data;
    });
};

const addFiles = async (fileInfos) => {
  return await api.post("/FileInfo/AddFiles", fileInfos).then((response) => {
    return response.data;
  });
};

const addFileShares = async (fileShares) => {
  return await api
    .post("/FileShare/AddFileShares", fileShares)
    .then((response) => {
      return response.data;
    });
};

const moveToTrash = async (fileIds) => {
  return await api.post("/Trash/AddFilesToTrash", fileIds).then((response) => {
    return response.data;
  });
};

const recoverFile = async (fileIds) => {
  return await api.post("/Trash/RecoverFile", fileIds).then((response) => {
    return response.data;
  });
};

const deleteFile = async (fileIds) => {
  return await api.post("/Trash/CleanTrash", fileIds).then((response) => {
    return response.data;
  });
};

export const fileInfoService = {
  getMyContents,
  getImportantContents,
  getFavoriteContents,
  getSharedContents,
  getDepartmentContents,
  getTrashContents,
  getContentsFromPath,
  searchContents,
  changeFavorite,
  changeImportant,
  addFiles,
  addFileShares,
  moveToTrash,
  recoverFile,
  deleteFile,
};
