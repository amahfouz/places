// place object
//
// {
//    name: ...,
//    location : {
//      name: ...,
//      latitude: ...,
//      longitude: ...,
//      google_id: ...,
//      address: ...
//    },
//    enabled: ...,
//    proximity: ...
// }

export default class Place {

  constructor(location) {
    this.name = location.name
    this.location = location;
    this.enabled = true;
    this.notes = "";
    this.proximity = Place.PROXIMITY__ARRIVE;
  }

  getSimpleProps() {
    return {
      name : this.name,
      enabled : this.enabled,
      notes : this.notes,
      proximity : this.proximity
    }
  }

  static PROXIMITY__ARRIVE = "ARRIVE";
  static PROXIMITY__LEAVE = "LEAVE";
  static PROXIMITY__AT = "AT";
}
