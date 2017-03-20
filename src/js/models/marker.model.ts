namespace GMap.Models {
    export class Marker {
        public id: number;
        public options: Models.MarkerOption;

        static count: number = 0;

        constructor(
            public title: string,
            public latitude: number,
            public longitude: number
        ) {
            this.options =  new Models.MarkerOption(title);

            Marker.count++;
            this.id = Marker.count;
        }
    }
}