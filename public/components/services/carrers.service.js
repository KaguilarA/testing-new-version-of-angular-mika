(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .service('carrerService', carrerService);

  carrerService.$inject = ['$http', '$q', '$log'];

  function carrerService($http, $q, $log) {
    const carrerAPI = {
      addCarrer: _addCarrer,
      getCarrer: _getCarrer,
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

    function _getCarrer() {
      let carrerListTemp = [],
        carrerList = [];

      let request = $.ajax({
        url: 'http://localhost:4000/api/get_all_carrers',
        type: 'get',
        contentType: 'aplication/x-www-form-urlencoded;charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      });

      request.done((carrersDB) => {
        carrerListTemp = carrersDB;
      })
      request.fail(() => {
        carrerListTemp = [];
        console.log('Ocurrió un error');
      });

      if (carrerListTemp != []) {
        carrerListTemp.forEach(obj => {
          let tempCarrer = Object.assign(new Carrer(), obj);
          carrerList.push(tempCarrer);

        });
      }

      return carrerList;
    }

    function _updateCarrer(pedituser) {}

  }
})();
