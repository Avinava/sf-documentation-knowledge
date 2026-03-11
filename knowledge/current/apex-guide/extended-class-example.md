---
title: "Extended Class Example"
domain: apex-guide
topic: extended-class-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.558Z
keywords: [Extended, Class, Example]
---

# Extended Class Example

# Extended Class Example

The following is an extended example of a class, showing all the features of Apex classes. The keywords and concepts introduced in the example are explained in more detail throughout this chapter.

```

```

This code example illustrates:

-   A top-level class definition (also called an outer class)
-   Static variables and static methods in the top-level class, as well as static initialization code blocks
-   Member variables and methods for the top-level class
-   Classes with no user-defined constructor — these have an implicit, no-argument constructor
-   An interface definition in the top-level class
-   An interface that extends another interface
-   Inner class definitions (one level deep) within a top-level class
-   A class that implements an interface (and, therefore, its associated sub-interface) by implementing public versions of the method signatures
-   An inner class constructor definition and invocation
-   An inner class member variable and a reference to it using the this keyword (with no arguments)
-   An inner class constructor that uses the this keyword (with arguments) to invoke a different constructor
-   Initialization code outside of constructors — both where variables are defined, as well as with anonymous blocks in curly braces ({}). Note that these execute with every construction in the order they appear in the file, as with Java.
-   Class extension and an abstract class
-   Methods that override base class methods (which must be declared virtual)
-   The override keyword for methods that override subclass methods
-   Abstract methods and their implementation by concrete sub-classes
-   The protected access modifier
-   Exceptions as first class objects with members, methods, and constructors

This example shows how the class above can be called by other Apex code:

```

```

This code example illustrates:

-   Construction of the outer class
-   Construction of an inner class and the declaration of an inner interface type
-   A variable declared as an interface type can be assigned an instance of a class that implements that interface
-   Casting an interface variable to be a class type that implements that interface (after verifying this using the instanceof operator)

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_extending.htm "Extending a Class")