/******************************************/
// Interface - Fundamentals

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

// deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed (readonly)

// console.log('deepwork_49', deepWork);

deepWork.printAuthor();
const result = deepWork.printTitle('is an awesome book');
console.log('result_49', result);

/******************************************/
// Interface - Challenge

interface Computer {
  readonly id: number; // cannot be changed once initialized
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number; // optional property
}

const laptop: Computer = {
  id: 1,
  brand: 'random brand',
  ram: 8, // in GB
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
};

laptop.storage = 512; // assigning value to optional property
console.log('ram_49', laptop.upgradeRam(8)); // upgrades RAM
console.log('laptop_49', laptop);
