/******************************************/
// Type Alias -- Challenge

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

const alice: Employee = {
  id: 1,
  name: 'alice',
  department: 'Sales',
};

const david: Employee = {
  id: 1,
  name: 'david',
  department: 'HR',
};

const huhao: Manager = {
  id: 1,
  name: 'huhao',
  employees: [alice, david],
};

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}

console.log('alice', alice);
console.log('david', david);
console.log('huhao', huhao);

printStaffDetails(huhao);
printStaffDetails(david);

/******************************************/
// Intersection Types

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 2,
  name: 'How to Cook a Dragon',
  price: 15,
};

const book2: Book = {
  id: 3,
  name: 'The Secret Life of Unicorns',
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 4,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 25,
  discount: 0.15,
};

console.log('book1_49', book1);
console.log('book2_49', book2);
console.log('discountedBook_49', discountedBook);
