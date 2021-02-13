// OBJETOS A CREAR
interface Db {
  getConnection: () => void;
}

class LocalDb implements Db {
  getConnection(): void {
    console.log("Local DB class");
  }
}

class MongoDb implements Db {
  getConnection(): void {
    console.log("Mongo DB class");
  }
}

// CLASES DE FACTORY METHOD
abstract class DbCreator {
  public abstract createDb(): Db;
}

class LocalDbCreator extends DbCreator {
  createDb(): Db {
    return new LocalDb();
  }
}

class MongoDbCreator extends DbCreator {
  createDb(): Db {
    return new MongoDb();
  }
}

// EXAMPLE
function example(dbCreator: DbCreator): void {
  const db = dbCreator.createDb();
  db.getConnection();
}

console.log("Call function example with LocalDbCreator");
example(new LocalDbCreator());

console.log("-----");

console.log("Call function example with MongoDbCreator");
example(new MongoDbCreator());
