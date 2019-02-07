(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .service('carrerService', carrerService);

  carrerService.$inject = ['$http', '$q', '$log'];

  function carrerService($http, $q, $log) {
    const carrerAPI = {
      addCarrer: _addCarrer,
      getCarrers: _getCarrers,
      updateCarrer: _updateCarrer
    };
    return carrerAPI;

    function _addCarrer(pnewcarrer) {
      let response,
        tempData = {
          'carrerName': pnewcarrer.getCarrerName(),
          'carrerCode': pnewcarrer.getCarrerCode(),
          'carrerDegree': pnewcarrer.getCarrerDegree(),
          'carrerState': pnewcarrer.getCarrerState()
        };

      let request = $.ajax({
        url: 'http://localhost:4000/api/save_carrer',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: tempData
      });

      request.done((res) => {
        response = res.success;
        console.log(res.error);
      });

      request.fail((error) => {
        response = error;
        console.log(response.error);
      });

      return response;
    }

    function _getCarrers() {
      let deferred = $q.defer(),
        carrerList = [];

      $http.get('/api/get_all_carrers').then((res) => {
        if (res.data != []) {
          res.data.forEach(obj => {
            let tempCarrer = Object.assign(new Carrer(), obj);
            carrerList.push(tempCarrer);
          });
        }
        deferred.resolve(carrerList);
      });

      return deferred.promise;

    }

    function _updateCarrer(pedituser) {}

  }
})();
