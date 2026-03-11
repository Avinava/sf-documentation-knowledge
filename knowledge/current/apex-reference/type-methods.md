---
title: "Type Methods"
domain: apex-reference
topic: type-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.002Z
keywords: [Type, Methods, Returns, true, specified, type, equal, current, otherwise, returns, false., equals, typeToCompare, Signature, Parameters, Return, Value, Example, forName, fullyQualifiedName]
---

# Type Methods

> Returns true if
the specified type is equal to the current type; otherwise, returns false.

## Type Methods

The following are methods for Type.

-   **[equals(typeToCompare)](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_System_Type_equals)**  
    Returns true if the specified type is equal to the current type; otherwise, returns false.
-   **[forName(fullyQualifiedName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_System_Type_forName)**  
    Returns the type that corresponds to the specified fully qualified class name.
-   **[forName(namespace, name)](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_System_Type_forName_2)**  
    Returns the type that corresponds to the specified namespace and class name.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_System_Type_getName)**  
    Returns the name of the current type.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_System_Type_hashCode)**  
    Returns a hash code value for the current type.
-   **[isAssignableFrom(sourceType)](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#unique_2126496259)**  
    Returns true if an object reference of the specified type can be assigned from the child type; otherwise, returns false.
-   **[newInstance()](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_System_Type_newInstance)**  
    Creates an instance of the current type and returns this new instance.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_System_Type_toString)**  
    Returns a string representation of the current type, which is the type name.

### equals(typeToCompare)

Returns true if the specified type is equal to the current type; otherwise, returns false.

#### Signature

public Boolean equals(Object typeToCompare)

#### Parameters

typeToCompare

Type: Object

The type to compare with the current type.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### forName(fullyQualifiedName)

Returns the type that corresponds to the specified fully qualified class name.

#### Signature

public static System.Type forName(String fullyQualifiedName)

#### Parameters

fullyQualifiedName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The fully qualified name of the class to get the type of. The fully qualified class name contains the namespace name, for example, MyNamespace.ClassName.

#### Return Value

Type: System.Type

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

-   This method returns null if called outside a managed package to get the type of a non-global class in a managed package. This is because the non-global class isn’t visible outside the managed package. For Apex saved using Salesforce API version 27.0 and earlier, this method does return the corresponding class type for the non-global managed package class.
-   When called from an installed managed package to get the name of a local type in an organization with no defined namespace, the forName(fullyQualifiedName) method returns null. Instead, use the forName(namespace, name) method and specify an empty string or null for the namespace argument.
-   A call to Type.forName() can cause the class to be compiled.

### forName(namespace, name)

Returns the type that corresponds to the specified namespace and class name.

#### Signature

public static System.Type forName(String namespace, String name)

#### Parameters

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The namespace of the class. If the class doesn't have a namespace, set the namespace argument to null or an empty string.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the class.

#### Return Value

Type: System.Type

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

-   This method returns null if called outside a managed package to get the type of a non-global class in a managed package. This is because the non-global class isn’t visible outside the managed package. For Apex saved using Salesforce API version 27.0 and earlier, this method does return the corresponding class type for the non-global managed package class.
-   Use this method instead of forName(fullyQualifiedName) if it’s called from a managed package installed in an organization with no defined namespace. To get the name of a local type, set the namespace argument to an empty string or null. For example, Type t = Type.forName('', 'ClassName');.
-   A call to Type.forName() can cause the class to be compiled.

#### Example

This example shows how to get the type that corresponds to the ClassName class and the MyNamespace namespace.

```

```

#### Versioned Behavior Changes

In API version 60.0 and later, using an invalid namespace while calling this method returns null. Previously, Apex allowed you to specify an invalid namespace such as Type.forName('InvalidNamespace', 'OuterClass.InnerClass') or use an outer class as a namespace such as Type.forName('OuterClass', 'InnerClass') with indeterminate results.

### getName()

Returns the name of the current type.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

This example shows how to get a Type’s name. It first obtains a Type by calling forName, then calls getName on the Type object.

```

```

### hashCode()

Returns a hash code value for the current type.

#### Signature

public Integer hashCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

The returned hash code value corresponds to the type name hash code that [String.hashCode](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_hashCode "Returns a hash code value for this string.") returns.

### isAssignableFrom(sourceType)

Returns true if an object reference of the specified type can be assigned from the child type; otherwise, returns false.

#### Signature

public Boolean isAssignableFrom(Type sourceType)

#### Parameters

sourceType

The type of the object with which you are checking compatibility.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The method returns true when the method is invoked as parentType.isAssignableFrom(childType). When invoked in any of the following ways, the method returns false:

-   childType.isAssignableFrom(parentType)
-   typeA.isAssignableFrom(TypeB) where TypeB is a sibling of TypeA
-   typeA.isAssignableFrom(TypeB) where TypeB and TypeA are unrelated

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

A childType is the child of a parentType when it implements an interface, extends a virtual or abstract class, or is the same System.Type as the parentType.

#### Usage

Unlike the instanceof operator, this method allows you to check type compatibility without having to create a class instance. This method eliminates static compile-time dependencies that instanceof requires.

The following code demonstrates how a typical ISV customer can use isAssignableFrom() to check compatibility between a customer-defined type (customerProvidedPluginType) and a valid plugin type.

```

```

#### Example

The following code snippet first defines sibling classes A and B that both implement the Callable interface and an unrelated class C. Then, it explores several type comparisons using isAssignableFrom().

```

```

```

```

```

```

```

```

```

```

```

```

```

```

### newInstance()

Creates an instance of the current type and returns this new instance.

#### Signature

public Object newInstance()

#### Return Value

Type: Object

#### Usage

Because newInstance returns the generic object type, you should cast the return value to the type of the variable that will hold this value.

This method enables you to instantiate a Type that implements an interface and call its methods while letting someone else provide the methods’ implementation. For example, a package developer can provide an interface that a subscriber who installs the package can implement. The code in the package calls the subscriber's implementation of the interface methods by instantiating the subscriber’s Type.

#### Example

This example shows how to create an instance of a Type. It first gets a Type by calling forName with the name of a class (ShapeImpl), then calls newInstance on this Type object. The newObj instance is declared with the interface type (Shape) that the ShapeImpl class implements. The return value of the newInstance method is cast to the Shape type.

```

```

### toString()

Returns a string representation of the current type, which is the type name.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method returns the same value as getName. String.valueOf and System.debug use this method to convert their Type argument into a String.

#### Example

This example calls toString on the Type corresponding to a list of Integers.

```

```