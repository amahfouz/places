// service for places CRUD

export default class PlacesService {

  static instance = null;

  constructor() {
    if ( ! PlacesService.instance) {
       PlacesService.instance = this;
    }
    return PlacesService.instance;
  }

  getPlaces() {
    return PlacesService.places;
  }

  getByIndex(index) {
    return PlacesService.places[index];
  }

  static places = [
    {
      'name'  : 'Costco',
      'notes' : 'Kitchen Towels\nBottled Water\nBananas',
      'icon'  : 'ios-person'
    },
    {
      'name'  : 'Ralph',
      'notes' : 'Pickup medication\n Diet Coke\n Stamps',
      'icon'  : 'ios-settings'
    }
  ]
}
