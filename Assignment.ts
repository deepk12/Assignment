/*
//Create enum examples with names constant like different types of fruits name and display particular fruit name using the switch case statements(Ass-1).
enum Fruit {
    Apple = 'Apple',
    Banana = 'Banana',
    Orange = 'Orange',
    Mango = 'Mango',
    Grape = 'Grape',
  }

function displayFruitName(selectedFruit: Fruit): string {
  switch (selectedFruit) {
    case Fruit.Apple:
      return 'Selected fruit: Apple';
    case Fruit.Banana:
      return 'Selected fruit: Banana';
    case Fruit.Orange:
      return 'Selected fruit: Orange';
    case Fruit.Mango:
      return 'Selected fruit: Mango';
    case Fruit.Grape:
      return 'Selected fruit: Grape';
    default:
      return 'Invalid fruit selection';
  }
}

// Example usage:
const selectedFruit: Fruit = Fruit.Banana;
const result: string = displayFruitName(selectedFruit);
console.log(result);
*/


/*
// Create Generic of Array Wrapper which will save the records of products along with an examples(Ass-2).

class ArrayWrapper<T> {
    private records: T[] = [];
  
    addRecord(record: T): void {
      this.records.push(record);
    }
  
    getAllRecords(): T[] {
      return this.records;
    }
  }
  
  // Example usage with products:
  
  interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  // Creating an instance of ArrayWrapper for Product type
  const productArrayWrapper = new ArrayWrapper<Product>();
  
  // Adding product records
  productArrayWrapper.addRecord({ id: 1, name: 'Laptop', price: 999.99 });
  productArrayWrapper.addRecord({ id: 2, name: 'Smartphone', price: 499.99 });
  productArrayWrapper.addRecord({ id: 3, name: 'Headphones', price: 79.99 });
  
  // Getting all product records
  const allProducts: Product[] = productArrayWrapper.getAllRecords();
  
  // Logging the products
  console.log(allProducts);
*/


/*
//Implement the concept of Namespaces and Module with an examples(Ass-3).
namespace MathUtilities {
    export function add(a: number, b: number): number {
      return a + b;
    }
  
    export function subtract(a: number, b: number): number {
      return a - b;
    }
  }
console.log(MathUtilities.add(5, 3));
console.log(MathUtilities.subtract(10, 4));
*/


//Fetch the jsonplaceholder API using the concept of async and await in Typescript(Ass-4).

// app.module.ts
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule // Import HttpClientModule here
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// // data.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

//   constructor(private http: HttpClient) { }

//   async fetchData(): Promise<any> {
//     try {
//       const response = await this.http.get(`${this.apiUrl}/posts`).toPromise();
//       return response;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   }
// }


Ass-5


// // app.component.ts
// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-root',
//   template: `
//     <div *ngIf="loading; else data">
//       Loading...
//     </div>
//     <ng-template #data>
//       <ul>
//         <li *ngFor="let post of posts">
//           {{ post.title }}
//         </li>
//       </ul>
//     </ng-template>
//   `
// })
// export class AppComponent implements OnInit {
//   loading = true;
//   posts: any[] = [];

//   constructor(private dataService: DataService) {}

//   async ngOnInit() {
//     try {
//       this.posts = await this.dataService.fetchData();
//       this.loading = false;
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
// }
