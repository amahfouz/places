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

  setSimpleProps(props) {
    this.name = props.name;
    this.notes = props.notes;
    this.enabled = props.enabled;
    this.proximity = props.proximity;
  }

  static PROXIMITY__NEAR = "NEAR";
  static PROXIMITY__ARRIVE = "ARRIVE";
  static PROXIMITY__LEAVE = "LEAVE";

  static PROXIMITY__OPTIONS = [
      { key: Place.PROXIMITY__NEAR, label: "I am NEARBY"},
      { key: Place.PROXIMITY__ARRIVE, label: "I ARRIVE"},
      { key: Place.PROXIMITY__LEAVE, label: "I LEAVE"},
  ];
}
