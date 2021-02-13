# Abstract Factory

Abstract Factory es un patrón de diseño creacional que nos permite producir familias de objetos relacionados sin especificar sus clases concretas.

## Caso de ejemplo

Tenemos una aplicación de muebles y dichos muebles tienes varios tipos (Silla y Cama) y para cada tipo de mueble tienes distintos estilos (Moderno y Retro).
Cuando vendemos muebles no se pueden mezclar los estilos por lo tanto Abstract Factory es la solución ya que nosotros instanciamos una factoría según el estilo por ejemplo la de estilo moderno, y dicha factoría tiene los metodos necesarios para crear sillas o camas del estilo correspondiente.

## Uso

```bash
deno run index.ts
```
