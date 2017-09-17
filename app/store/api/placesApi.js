import RestClient from "react-native-rest-client";
import base from "./base";

export default class PlacesApi extends RestClient {

    // https://developers.google.com/places/web-service/intro
    radius = '500'; //meters
    maxwidth = '300';
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

    getPlacePhoto(photoRef = 'CnRnAAAAL3n0Zu3U6fseyPl8URGKD49aGB2Wka7CKDZfamoGX2ZTLMBYgTUshjr') {
        let url = base.googlePlacesUrl + '/place/photo?photoreference=' + photoRef
            + '&key=' + base.googleApiKey + '&maxwidth=' + this.maxwidth;
        let testRef = 'https://maps.googleapis.com/maps/api/place/photo'
            + '?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyBHZ8fmIFZwSrV8XevHQzJIsLWdPwfBuA4'

        console.log(url);
        console.log(testRef);
        return fetch(url).then(response => {console.warn('RESP', response); return response.url});
    }

    getPlaceDetails(placeId = "67ac7ef4e4c289bd9cd1a402f86b27e3c7481bd1") {
        let url = '/place/details/json?placeid=' + placeId;
        return this.GET(url).then(response => this.parseResponse(response));
    }


    getCoordinates(searchPlace) {
        let url = '/geocode/json?address=' + searchPlace;
        console.log('requsting address', url);
        return this.GET(url).then(response => this.parseCoordData(response));
    }

    parseResponse(response) {
        console.log('response', response, response.results);
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
