class Home {
  constructor(rooms, bathrooms, sqFt) {
    this.rooms = rooms;
    this.bathrooms = bathrooms;
    this.sqFt = sqFt;
  }
  getInfo() {
    return `This home has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and is ${this.sqFt} sqFt in area.`;
  }
}

class SingleFamilyHome extends Home {
  constructor(rooms, bathrooms, sqFt, yardSize) {
    super(rooms, bathrooms, sqFt);
    this.yardSize = yardSize;
    getInfo(){
      return `${super.getInfo()} Furthermore, its yard is ${this.yardSize} sqFt.`;
    }
  }
}

class Apartment extends Home {
  constructor(rooms, bathrooms, sqFt, floor){
    super(rooms, bathrooms, sqFt);
    this.floor = floor;
  }
  getInfo(){
    return `${super.getInfo()} Furthermore, it is on floor ${this.floor}`;
  }
}

const apt1 = new Apartment(6, 1, 1200, 2);
console.log(apt1);