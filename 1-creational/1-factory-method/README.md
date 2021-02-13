# Factory Method

Factory Method es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.

## Caso de ejemplo

Tenemos una aplicación que se conecta a una base de datos en Local y otra en MongoDB, entonces según el caso de uso deberías hacer un new del objeto necesario, aquí es donde entra el Facthory Method, que te hace tener una interfaz, y que tanto la clase Local y la Mongo la implementen, y luego la responsabilidad de hacer el new la abstraemos a otra clase.

## Uso

```bash
deno run index.ts
```
