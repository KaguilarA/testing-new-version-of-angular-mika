(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .factory('dataStorageFactory', dataStorageFactory);

  dataStorageFactory.$inject = ['$q', '$log', '$http'];

  function dataStorageFactory($q, $log, $http) {

    const localAPI = {
      getItem: _getItem,
      setItem: _setItem,
      removeItem: _removeItem,
      get: _get,
      put: _put
    };
    return localAPI;

    function _getItem(pCollection) {
      let lsData = localStorage.getItem(pCollection);

      if (lsData != null) {
        lsData = JSON.parse(lsData);
      }

      return lsData;
    }

    function _setItem(pCollectionId, pData) {
      localStorage.setItem(pCollectionId, pData);
    }

    function _removeItem(pCollectionId) {
      localStorage.removeItem(pCollectionId);
    }

    function _put(pUrl, pParams, pCallBack) {
      let deferred = $q.defer(),
        condition;

      $http.put(pUrl, pParams).then(pCallBack);

      return deferred.promise;
    }

    function _get(pUrl, pCallBack) {
      let deferred = $q.defer(),
        data;

      $http.put(pUrl).then(pCallBack);

      return deferred.promise;
    }

  }
})();
