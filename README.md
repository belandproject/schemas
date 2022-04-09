# common-schemas

```bash
npm i @beland/schemas
```

### Design considerations

- The main entrypoint of the library export types only (and the helper functions to prevent lockin)
- Every type is also a namespace
- Type names are PascalCase
- Validators and schemas are camelCase

## Generating types, validators and schemas

We will export types that also act as values. We do that using the "namespaces" of typescript. That is, every type is also a JS object, including two properties: `schema` and `validate`. It can also be a const, but a namespace _sounds_ better.

```ts
// Declare type
export type MyType = {
  value: number;
};

// Declare namespace for the type
export namespace MyType {
  export const schema: Schema<MyType> = {
    type: "object",
    properties: {
      value: { type: number },
    },
    additionalProperties: false,
    required: ["value"],
  };

  export const validate = generateValidator<MyType>(schema);
}
```

In that sense, MyType can be both used as type `const a: MyType` and as object `MyType.validate(a)`.
