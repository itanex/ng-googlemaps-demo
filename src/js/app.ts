namespace GMap {
    let module: ng.IModule = angular.module('app', [
        'uiGmapgoogle-maps'
    ]);

    module.config(GMap.Configuration);

    module.controller('GMapController', GMap.GMapController);
}