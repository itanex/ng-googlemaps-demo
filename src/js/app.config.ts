namespace GMap {
    Configuration.$inject = [
        'uiGmapGoogleMapApiProvider'
    ];

    export function Configuration(
        uiGmapGoogleMapApiProvider: any
    ) {
        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
        });
    }
}