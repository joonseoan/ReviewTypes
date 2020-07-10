import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.name.firstName() + " " + faker.name.lastName();
    this.location = {
      // because faker.address.lat/lng is string
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
    this.color = "red";
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
