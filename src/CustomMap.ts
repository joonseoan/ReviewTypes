// import { User } from "./User";
// import { Company } from "./Company";

// [ Important: Interface is just to be class. But not class.
// It can not be a parent of the class]

// Interface has the first role like literally a interface between class to class withouth parent-child relation.
//  to the attributes and methods are used in another class. Use "implements"

// The second role defines the argument types
// Therefore, it can be exported and can get access to another class by "implements"
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // [ Solution 3]
  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  // [ Solution 2]
  // addMarker(mappable: User | Company) {
  //   const marker = new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     },
  //   });

  //   marker.addListener("click", () => {
  //     const infoWindow = new google.maps.InfoWindow({
  //       content: mappable.markerContent(),
  //     });

  //     infoWindow.open(this.googleMap, marker);
  //   });
  // }

  // [ Solution 1]
  /*
  addCompanyMarker(company: Company) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: company.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  addUserMarker(user: User): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        // content must be string
        content: user.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
  */
}
