---
title: "Using Constructors"
domain: apex-guide
topic: using-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.552Z
estimatedTokens: 580
keywords: [code, invoked, created, blueprint, write, every, doesn't, user-defined, no-argument, visibility, containing]
---

# Using Constructors

> A constructor is code that is invoked when an object is created from the class
      blueprint. You do not need to write a constructor for every class. If a class doesn't have a
      user-defined constructor, a default, no-argument constructor with the same visibility as the
      containing class 

# Using Constructors

A constructor is code that is invoked when an object is created from the class blueprint. You do not need to write a constructor for every class. If a class doesn't have a user-defined constructor, a default, no-argument constructor with the same visibility as the containing class is generated.

The syntax for a constructor is similar to a method, but it differs from a method definition in that it never has an explicit return type and it is not inherited by the object created from it.

After you write the constructor for a class, you must use the new keyword in order to instantiate an object from that class, using that constructor. For example, using the following class:

```

```

A new object of this type can be instantiated with this code.

```

```

If you write a constructor that takes arguments, you can then use that constructor to create an object using those arguments.

If you create a constructor that takes arguments, and you still want to use a no-argument constructor, you must create your own no-argument constructor in your code. After you create a constructor for a class, you no longer have access to the default, no-argument public constructor.

In Apex, a constructor can be overloaded, that is, there can be more than one constructor for a class, each having different parameters. This example illustrates a class with two constructors: one with no arguments and one that takes a simple Integer argument. It also illustrates how one constructor calls another constructor using the this(...) syntax, also know as constructor chaining.

```

```

New objects of this type can be instantiated with this code.

```

```

Every constructor that you create for a class must have a different argument list. In this example, all of the constructors are possible.

```

```

When you define a new class, you are defining a new data type. You can use class name in any place you can use other data type names, such as String, Boolean, or Account. If you define a variable whose type is a class, any object you assign to it must be an instance of that class or subclass.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_defining_methods.htm "Class Methods")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm "Access Modifiers")

## Code Examples

```apex
public class TestObject {

   // The no argument constructor 
   public TestObject() {
      // more code here
  }
}
```

```
TestObject myTest = new TestObject();
```

```apex
public class TestObject2 {

private static final Integer DEFAULT_SIZE = 10;

Integer size;

   //Constructor with no arguments
   public TestObject2() {
       this(DEFAULT_SIZE); // Using this(...) calls the one argument constructor    
   }

   // Constructor with one argument 
   public TestObject2(Integer ObjectSize) {
     size = ObjectSize;  
   }
}
```

```
TestObject2 myObject1 = new TestObject2(42);
  TestObject2 myObject2 = new TestObject2();
```

```apex
public class Leads {

  // First a no-argument constructor 
  public Leads () {}

  // A constructor with one argument
  public Leads (Boolean call) {}

  // A constructor with two arguments
  public Leads (String email, Boolean call) {}

  // Though this constructor has the same arguments as the 
  // one above, they are in a different order, so this is legal
  public Leads (Boolean call, String email) {}
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_defining_methods.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm)
