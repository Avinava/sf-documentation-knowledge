---
title: "Understanding Apex Core Concepts"
domain: apex-guide
topic: understanding-apex-core-concepts
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:33.844Z
estimatedTokens: 2111
keywords: [Understanding, Apex, Core, Concepts, code, typically, contains, many, things, you're, familiar, programming, languages., Version, Settings, Naming, Variables, Classes, Expressions, Tip]
---

# Understanding Apex Core Concepts

> Apex code typically contains many things that you're familiar with from other
        programming languages.

# Understanding Apex Core Concepts

Apex code typically contains many things that you're familiar with from other programming languages.

Programming elements in Apex ![Programming Elements in Apex Code](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2FAC_Elements.png&folder=apexcode)

The section describes the basic functionality of Apex, as well as some of the core concepts.

## Using Version Settings

In the Salesforce user interface you can specify a version of the Salesforce API against which to save your Apex class or trigger. This setting indicates not only the version of SOAP API to use, but which version of Apex as well. You can change the version after saving. Every class or trigger name must be unique. You can’t save the same class or trigger against different versions.

You can also use version settings to associate a class or trigger with a particular version of a managed package that is installed in your organization from AppExchange. This version of the managed package continues to be used by the class or trigger if later versions of the managed package are installed, unless you manually update the version setting. To add an installed managed package to the settings list, select a package from the list of available packages. The list is only displayed if you have an installed managed package that is not already associated with the class or trigger.

![The Apex Class Edit page. The Version Settings tab is selected and the Version is set to 16.0.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2FAPI_version.jpg&folder=apexcode)

For more information about using version settings with managed packages, see About Package Versions in Salesforce Help.

## Naming Variables, Methods and Classes

You can’t use any of the Apex reserved keywords when naming variables, methods, or classes. These include words that are part of Apex and the Lightning Platform, such as list, test, or account, as well as [reserved keywords](atlas.en-us.apexcode.meta/apexcode/apex_reserved_words.htm "These words can be used only as keywords.").

## Using Variables and Expressions

Apex is a strongly-typed language, that is, you must declare the data type of a variable when you first refer to it. Apex data types include basic types such as Integer, Date, and Boolean, as well as more advanced types such as lists, maps, objects, and sObjects.

Variables are declared with a name and a data type. You can assign a value to a variable when you declare it. You can also assign values later. Use the following syntax when declaring variables:

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=apexcode)

#### Tip

The semi-colon at the end of preceding codeblock is *not* optional. You must end all statements with a semi-colon.

The following are examples of variable declarations:

```

```

In Apex, all primitive data type arguments, such as Integer or String, are passed into methods by value. This fact means that any changes to the arguments exist only within the scope of the method. When the method returns, the changes to the arguments are lost.

Non-primitive data type arguments, such as sObjects, are passed into methods by reference. Therefore, when the method returns, the passed-in argument still references the same object as before the method call. Within the method, the reference can't be changed to point to another object, but the values of the object's fields can be changed.

## Using Statements

A statement is any coded instruction that performs an action.

In Apex, statements must end with a semicolon and can be one of these types:

-   Assignment, such as assigning a value to a variable
-   Conditional (if-else)
-   Loops:
    -   Do-while
    -   While
    -   For
-   Locking
-   Data Manipulation Language (DML)
-   Transaction Control
-   Method Invoking
-   Exception Handling

A block is a series of statements that are grouped with curly braces and can be used in any place where a single statement is allowed. For example:

```

```

In cases where a block consists of only one statement, the curly braces can be left off. For example:

```

```

## Using Collections

Apex has the following types of collections:

-   Lists (arrays)
-   Maps
-   Sets

A list is a collection of elements, such as Integers, Strings, objects, or other collections. Use a list when the sequence of elements is important. You can have duplicate elements in a list.

The first index position in a list is always 0.

To create a list:

-   Use the new keyword
-   Use the List keyword followed by the element type contained within <> characters.

Use the following syntax for creating a list:

```

```

The following example creates a list of Integer, and assigns it to the variable My\_List. Remember, because Apex is strongly typed, you must declare the data type of My\_List as a list of Integer.

```

```

For more information, see [Lists](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists.htm "A list is an ordered collection of elements that are distinguished by their indices. List elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types.").

A set is a collection of unique, unordered elements. It can contain primitive data types, such as String, Integer, Date, and so on. It can also contain more complex data types, such as sObjects.

To create a set:

-   Use the new keyword
-   Use the Set keyword followed by the primitive data type contained within <> characters

Use the following syntax for creating a set:

```

```

The following example creates a set of String. The values for the set are passed in using the curly braces {}.

```

```

For more information, see [Sets](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_sets.htm "A set is an unordered collection of elements that do not contain any duplicates. Set elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types.").

A map is a collection of key-value pairs. Keys can be any primitive data type. Values can include primitive data types, as well as objects and other collections. Use a map when finding something by key matters. You can have duplicate values in a map, but each key must be unique.

To create a map:

-   Use the new keyword
-   Use the Map keyword followed by a key-value pair, delimited by a comma and enclosed in <> characters.

Use the following syntax for creating a map:

```

```

The following example creates a map that has a data type of Integer for the key and String for the value. In this example, the values for the map are being passed in between the curly braces {} as the map is being created.

```

```

For more information, see [Maps](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_maps.htm "A map is a collection of key-value pairs where each unique key maps to a single value. Keys and values can be any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types.").

## Using Branching

An if statement is a true-false test that enables your application to do different things based on a condition. The basic syntax is as follows:

```

```

For more information, see [Conditional (If-Else) Statements](atlas.en-us.apexcode.meta/apexcode/langCon_apex_if_else.htm "The conditional statement in Apex works similarly to Java.").

## Using Loops

While the if statement enables your application to do things based on a condition, loops tell your application to do the same thing again and again based on a condition. Apex supports the following types of loops:

-   Do-while
-   While
-   For

A Do-while loop checks the condition after the code has executed.

A While loop checks the condition at the start, before the code executes.

A For loop enables you to more finely control the condition used with the loop. In addition, Apex supports traditional For loops where you set the conditions, as well as For loops that use lists and SOQL queries as part of the condition.

For more information, see [Loops](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops.htm "Apex supports five types of procedural loops.").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm "What is Apex?")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_intro_when_use_apex.htm "When Should I Use Apex?")

## Code Examples

```
datatype​ variable_name [ = value];
```

```
// The following variable has the data type of Integer with the name Count, 
// and has the value of 0.
Integer Count = 0;
// The following variable has the data type of Decimal with the name Total. Note 
// that no value has been assigned to it.
Decimal Total;
// The following variable is an account, which is also referred to as an sObject.
Account MyAcct = new Account();
```

```apex
if (true) {
    System.debug(1);
    System.debug(2);
} else {
    System.debug(3);
    System.debug(4);
}
```

```apex
if (true) 
    System.debug(1);
else 
    System.debug(2);
```

```apex
List <datatype> list_name
   [= new List<datatype>();] |
   [=new List<datatype>{value [, value2. . .]};] |
   ;
```

## Related Topics

- reserved
                    keywords (atlas.en-us.apexcode.meta/apexcode/apex_reserved_words.htm)
- Lists (atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists.htm)
- Sets (atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_sets.htm)
- Maps (atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_maps.htm)
- Conditional (If-Else) Statements (atlas.en-us.apexcode.meta/apexcode/langCon_apex_if_else.htm)
- Loops (atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_intro_when_use_apex.htm)
