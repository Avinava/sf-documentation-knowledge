---
title: "Apex Properties"
domain: apex-guide
topic: apex-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.682Z
estimatedTokens: 1286
keywords: [Apex, similar, variable, however, additional, things, code, before, it’s, accessed, returned., used, validate, data, change, made, prompt, action, Automatic, Access]
---

# Apex Properties

> An Apex property is similar to a variable;
                however, you can do additional things in your code to a property value before it’s
                accessed or returned. Properties can be used to validate data before a change is
                made, to prompt an action when data is change

# Apex Properties

An Apex property is similar to a variable; however, you can do additional things in your code to a property value before it’s accessed or returned. Properties can be used to validate data before a change is made, to prompt an action when data is changed (such as altering the value of other member variables), or to expose data that is retrieved from some other source (such as another class).

Property definitions include one or two code blocks, representing a get accessor and a set accessor:

-   The code in a get accessor executes when the property is read.
-   The code in a set accessor executes when the property is assigned a new value.

If a property has only a get accessor, it’s considered read-only. If a property has only a set accessor, it’s considered write-only. A property with both accessors is considered read-write.

To declare a property, use the following syntax in the body of a class:

```

```

Where:

-   access\_modifier is the access modifier for the property. The access modifiers that can be applied to properties include: public, private, global, and protected. In addition, these definition modifiers can be applied: static and transient. For more information on access modifiers, see [Access Modifiers](atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm).
-   return\_type is the type of the property, such as Integer, Double, sObject, and so on. For more information, see [Data Types](atlas.en-us.apexcode.meta/apexcode/langCon_apex_data_types.htm "In Apex, all variables and expressions have a data type, such as sObject, primitive, or enum.").
-   property\_name is the name of the property

For example, the following class defines a property named prop. The property is public. The property returns an integer data type.

```

```

The following code segment calls the BasicProperty class, exercising the get and set accessors:

```

```

Note the following:

-   The body of the get accessor is similar to that of a method. It must return a value of the property type. Executing the get accessor is the same as reading the value of the variable.
-   The get accessor must end in a return statement.
-   We recommend that your get accessor not change the state of the object that it’s defined on.
-   The set accessor is similar to a method whose return type is void.
-   When you assign a value to the property, the set accessor is invoked with an argument that provides the new value.
-   In API version 42.0 and later, unless a variable value is set in a set accessor, you can’t update its value in a get accessor.
-   When the set accessor is invoked, the system passes an implicit argument to the setter called value of the same data type as the property.
-   Properties can’t be defined on [interface](atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm "An interface is like a class in which none of the methods have been implemented—the method signatures are there, but the body of each method is empty. To use an interface, another class must implement it by providing a body for all of the methods contained in the interface.").
-   Apex properties are based on their counterparts in C#, with the following differences:
    -   Properties provide storage for values directly. You don’t need to create supporting members for storing values.
    -   It’s possible to create automatic properties in Apex. For more information, see [Using Automatic Properties](#apex_automatic_properties).

## Using Automatic Properties

Properties don’t require additional code in their get or set accessor code blocks. Instead, you can leave get and set accessor code blocks empty to define an automatic property. Automatic properties allow you to write more compact code that is easier to debug and maintain. They can be declared as read-only, read-write, or write-only. The following example creates three automatic properties:

```

```

The following code segment exercises these properties:

```

```

## Using Static Properties

When a property is declared as static, the property's accessor methods execute in a static context. Therefore, accessors don’t have access to non-static member variables defined in the class. The following example creates a class with both static and instance properties:

```

```

The following code segment calls the static and instance properties:

```

```

## Using Access Modifiers on Property Accessors

Property accessors can be defined with their own access modifiers. If an accessor includes its own access modifier, this modifier overrides the access modifier of the property. The access modifier of an individual accessor must be more restrictive than the access modifier on the property itself. For example, if the property has been defined as public, the individual accessor can’t be defined as global. The following class definition shows additional examples:

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_static.htm "Static and Instance Methods, Variables, and Initialization Code")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_extending.htm "Extending a Class")

## Code Examples

```
Public class BasicClass {

   // Property declaration
   access_modifier return_type property_name {
      get {
         //Get accessor code block
      }
      set {
         //Set accessor code block
      }
   } 
}
```

```apex
public class BasicProperty {
   public integer prop {
      get { return prop; }
      set { prop = value; }
   }
}
```

```apex
BasicProperty bp = new BasicProperty();
bp.prop = 5;                   // Calls set accessor
System.assertEquals(5, bp.prop);   // Calls get accessor
```

```apex
public class AutomaticProperty {
   public integer MyReadOnlyProp { get; }
   public double MyReadWriteProp { get; set; }
   public string MyWriteOnlyProp { set; }
}
```

```apex
AutomaticProperty ap = new AutomaticProperty();
ap.MyReadOnlyProp = 5;                 // This produces a compile error: not writable
ap.MyReadWriteProp = 5;                // No error
System.assertEquals(5, ap.MyWriteOnlyProp);   // This produces a compile error: not readable
```

## Related Topics

- Access
               Modifiers (atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm)
- Data Types (atlas.en-us.apexcode.meta/apexcode/langCon_apex_data_types.htm)
- interface (atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_static.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_extending.htm)
