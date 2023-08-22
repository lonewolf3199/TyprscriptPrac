// // // // // // // // // // type Employee = {
// // // // // // // // // //     readonly id: number,
// // // // // // // // // //     name: string,
// // // // // // // // // //     retire: (date: Date) => void
// // // // // // // // // // }

// // // // // // // // // // let employee: Employee = { 
// // // // // // // // // //     id : 1, 
// // // // // // // // // //     name: 'Aman',
// // // // // // // // // //     retire: (date: Date) => {
// // // // // // // // // //         console.log(date);      
// // // // // // // // // //     }
// // // // // // // // // // };

// // // // // // // // // function kgToLbs(weight: number | string): number{
// // // // // // // // //     //Narrowing
// // // // // // // // //     if(typeof weight === 'number')
// // // // // // // // //     return weight*2.2
// // // // // // // // //     else
// // // // // // // // //     return parseInt(weight) * 2.2
// // // // // // // // // }
// // // // // // // // // kgToLbs(10);
// // // // // // // // // kgToLbs('10kg')

// // // // // // // // type Draggable ={
// // // // // // // //     drag: () => void
// // // // // // // // };

// // // // // // // // type Resizable = {
// // // // // // // //     resize: () => void
// // // // // // // // };

// // // // // // // // type UIWidget = Draggable & Resizable;

// // // // // // // // let textbox: UIWidget = {
// // // // // // // //     drag: () => {},
// // // // // // // //     resize: () => {}
// // // // // // // // }

// // // // // // // type Quantity = 50 | 100
// // // // // // // let quantity: Quantity = 100;

// // // // // // // type Metric = 'cm' | 'inch';

// // // // // // function greet(name: string | null | undefined){
// // // // // //     if(name)
// // // // // //     console.log(name.toUpperCase());
// // // // // //     else
// // // // // //     console.log('Hola!');
// // // // // // }

// // // // // // greet(undefined);

// // // // // type Customer = {
// // // // //     birthday? : Date
// // // // // };

// // // // // function getCustomer(id: number): Customer | null | undefined {
// // // // //     return id === 0 ? null: { birthday: new Date() };
// // // // // }

// // // // // let customer = getCustomer(1);
// // // // // // if(customer !== null && customer !== undefined)
// // // // // // We can useoptional property access operator
// // // // // console.log(customer?.birthday?.getFullYear());

// // // // let speed: number | null = null;
// // // // let ride ={ 
// // // //     // Falsy (undeifned, null, '', false, 0)
// // // //     //Nullish coalescing Opeartor
// // // //     speed: speed ?? 30
// // // // }

// // // let phone = <HTMLInputElement> document.getElementById('phone')
// // // // HTMLElement
// // // // HTMLInputElement

// // // phone.value

// // function render(document: unknown){
// //     // Narrowing
// //     if(document instanceof WordDocument){
// //         document.toUpperCase();
// //     }
// //     document.move();
// //     document.fly();
// //     document.whateverWeWant();
// // }

// function reject(message: string): never{
//     throw new Error(message);
// }


// function processEvents(): never{
//     while(true){

//     }
// }

// // processEvents();
// reject('...')
// console.log('Hello Aman');
