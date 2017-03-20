namespace GMap {
    export class GMapController {

        public center = { latitude: 47.671853, longitude: -122.121328 };
        public zoom: number = 15;

        public markers: Models.Marker[] = [
            // new Models.Marker('Seattle Coder Camps',  47.671853, -122.121328),
            // new Models.Marker('Houston Coder Camps', 29.552561, -95.395219),
            // new Models.Marker('San Francisco Coder Camps', 37.809499, -122.253665)
        ];

        static $inject = [
            '$http'
        ];

        constructor (
            $http: ng.IHttpService
        ) {
            $http.get<Models.Marker[]>('data/markers.json')
                .then((result) => {
                    result.data.forEach((element) => {
                        this.markers.push(new Models.Marker(element.title, element.latitude, element.longitude));
                    })
                })
                .catch((response) => console.log('Failed to read the Markers file', response));
        }
    }
}