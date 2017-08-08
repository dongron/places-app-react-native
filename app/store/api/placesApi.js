import RestClient from "react-native-rest-client";
import base from "./base";

export default class PlacesApi extends RestClient {

    radius = '500'; //meters
    types = {
        restaurants: 'restaurant',
        bars: 'bar',
        caffees: 'cafe',
        gyms: 'gym'
    };


    constructor() {
        super(base.googlePlacesUrl);
    }

    getNearbyRestaurants(lat = 50.824592, lng = 19.105755, radius = this.radius) {
        let url = '/place/nearbysearch/json?location=' + lat + ',' + lng
            + '&radius=' + this.radius + '&type=' + this.types.restaurants
            + '&key=' + base.googleApiKey;
        console.log('requsting address', url);
        return this.GET(url).then(response => this.parseResponse(response));
    }


    getCoordinates(searchPlace) {
        let url = '/geocode/json?address=' + searchPlace;
        console.log('requsting address', url);
        return this.GET(url).then(response => this.parseCoordData(response));
    }

    parseResponse(response) {
        return response.results;
    }

    parseCoordData(response) {
        console.log('==response status', response.status);
        if (response.status !== "OK") {
            return 0;
        }
        let coordinates = {
            latitude: response.results[0].geometry.location.lat || 0,
            longitude: response.results[0].geometry.location.lng || 0
        };
        console.log('REST lat & long', coordinates.latitude, coordinates.longitude);
        return coordinates;
    }
};
