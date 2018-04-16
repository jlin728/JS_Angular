class Bike {
      constructor(
            public price: number,
            public max_speed: number,
            public miles = 0,
      ) {
            // this.price = price;
            // this.max_speed = max_speed;
            // this.miles = miles;
      };


      displayInfo() {
            console.log(`Price: $${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}`);
            return this;
      }

      ride() {
            this.miles += 10;
            console.log(`Riding... `);
            return this;
      }

      reverse() {
            if (this.miles < 5) {
                  this.miles = 0;
            } else {
                  this.miles -= 5;
                  console.log(`Reversing... `)
            }
            return this;
      }

}

const Kawasaki = new Bike(5000, 250);
const Toyota = new Bike(2000, 220);
const Ducati = new Bike(10000, 500);


Ducati.ride().reverse().reverse().reverse().reverse();
Ducati.displayInfo();
