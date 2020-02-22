import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'any'
})
export class GMapStatisService {

    readonly gmapStaticUrl: string = 'https://maps.googleapis.com/maps/api/staticmap?'
    readonly styleMap: string = '&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels%7Cvisibility:off&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.country%7Celement:geometry.fill%7Cvisibility:on&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x00a0d7%7Cvisibility:on%7Cweight:0.5&style=feature:administrative.country%7Celement:labels.text%7Ccolor:0x00a0d7%7Clightness:25%7Cvisibility:simplified%7Cweight:0.5&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Cvisibility:off&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=480x360'
    readonly sizeAndScale: string = '&size=250x400&scale=2'
    readonly key: string = `&key=${environment.mapsApiKey}`

    constructor() {}

    getMapUrl(center: string, country: string): string {
        return this.gmapStaticUrl + `&center=${center}` + `&visible=${country}` + this.sizeAndScale + this.key + this.styleMap
    }
}