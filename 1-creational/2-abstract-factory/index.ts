// OBJETOS A CREAR
interface Chair {
  sit: () => void;
}

interface Bed {
  sleep: () => void;
}

class ChairModern implements Chair {
  sit(): void {
    console.log("Sit in Chair Modern");
  }
}

class ChairRetro implements Chair {
  sit(): void {
    console.log("Sit in Chair Retro");
  }
}

class BedModern implements Bed {
  sleep(): void {
    console.log("Sleep in Bed Modern");
  }
}

class BedRetro implements Bed {
  sleep(): void {
    console.log("Sleep in Bed Retro");
  }
}

// ABSTRACT FACTORY
interface FurnitureFactory {
  createChair: () => Chair;
  createBed: () => Bed;
}

class ModernFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ChairModern();
  }
  createBed(): Bed {
    return new BedModern();
  }
}

class RetroFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ChairRetro();
  }
  createBed(): Bed {
    return new BedRetro();
  }
}

// EXAMPLE
function example(furnitureFactory: FurnitureFactory): void {
  const chair = furnitureFactory.createChair();
  const bed = furnitureFactory.createBed();

  chair.sit();
  bed.sleep();
}

console.log("Call function example with ModernFactory");
example(new ModernFactory());

console.log("-----");

console.log("Call function example with RetroFactory");
example(new RetroFactory());
