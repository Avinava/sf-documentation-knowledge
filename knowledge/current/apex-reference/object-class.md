---
title: "Object Class"
domain: apex-reference
topic: object-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.270Z
estimatedTokens: 1033
namespace: System
keywords: [Contains, implemented, Apex, types., Usage, equals, obj, hashCode, toString, Versioned, Behavior, Changes]
---

# Object Class

> Contains methods that are implemented by all Apex types.

**Namespace:** `System`

# Object Class

Contains methods that are implemented by all Apex types.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

All Apex classes have the Object class as the base class, and therefore implement all the Object class methods.

-   **[Object Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm#apex_System_Object_methods)**


## Object Methods

The following are methods for Object.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm#apex_System_Object_equals)**
    Compares an object to the specified object and returns true if both are equal. Otherwise, returns false.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm#apex_System_Object_hashCode)**
    Returns a hash code for the object.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm#apex_System_Object_toString)**
    Returns a string that represents the object. The string includes the class name of which the object is an instance, the at (@) character, and the unsigned hexadecimal representation of the object’s hash code value.

### equals(obj)

Compares an object to the specified object and returns true if both are equal. Otherwise, returns false.

#### Signature

public Boolean equals(Object obj)

#### Parameters

obj

Type: Object

The object with which to compare.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If x, y, and z are non-null instances of a class, the equals method must be:

-   Reflexive: x.equals(x)
-   Symmetric: x.equals(y) returns true if and only if y.equals(x) returns true
-   Transitive: If x.equals(y) returns true and y.equals(z) returns true, then x.equals(z) returns true
-   Consistent: Multiple invocations of x.equals(y) consistently return true or consistently return false, provided the objects used in comparison are not modified.
-   For any non-null reference value x, x.equals(null) returns false

Use the equals method in your class to simplify comparision of objects. You can use the \== operator to compare objects, or the equals method. For example:

```

```

### hashCode()

Returns a hash code for the object.

#### Signature

public Integer hashCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

-   If the hashCode method is invoked on the same object more than once during execution of an Apex request, it must return the same value.
    -   The hash code value is same provided no information used in equals comparisons on the object is modified.
    -   The hash code value need not remain consistent from one Apex execution request to another execution of the same application.
-   If two objects are equal, based on the equals method, hashCode must return the same value.
-   If two objects are unequal, based on the result of the equals method, it is not required that hashCode return distinct values.

### toString()

Returns a string that represents the object. The string includes the class name of which the object is an instance, the at (@) character, and the unsigned hexadecimal representation of the object’s hash code value.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Versioned Behavior Changes

In API version 57.0 and later, the toString() method only includes member variables of Apex objects that are visible in the current namespace. Non-global properties are suppressed from output when you invoke toString() on managed Apex types. To keep the non-global state of the object visible in debug output, you can explicitly override the toString() method.

## Code Examples

```
// obj1 and obj2 are instances of MyClass
if (obj1 == obj2) {
    // Do something
}

if (obj1.equals(obj2)) {
    // Do something
}
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Object Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm)
- equals(obj) (atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm)
- hashCode() (atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm)
- toString() (atlas.en-us.apexref.meta/apexref/apex_class_System_Object.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
