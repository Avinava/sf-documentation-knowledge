---
title: "Data Types"
domain: apex-guide
topic: data-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:48.039Z
keywords: [Data, Types]
---

# Data Types

# Data Types

In Apex, all variables and expressions have a data type, such as sObject, primitive, or enum.

-   A primitive, such as an Integer, Double, Long, Date, Datetime, String, ID, or Boolean (see [Primitive Data Types](atlas.en-us.apexcode.meta/apexcode/langCon_apex_primitives.htm "Apex uses the same primitive data types as SOAP API, except for higher-precision Decimal type in certain cases."))
-   An sObject, either as a generic sObject or as a specific sObject, such as an Account, Contact, or MyCustomObject\_\_c (see [Working with sObjects](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SObjects.htm "In this developer guide, the term sObject refers to any object that can be stored in the Lightning platform database.") in Chapter 4.)
-   A collection, including:
    -   A list (or array) of primitives, sObjects, user defined objects, objects created from Apex classes, or collections (see [Lists](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists.htm "A list is an ordered collection of elements that are distinguished by their indices. List elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types."))
    -   A set of primitives (see [Sets](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_sets.htm "A set is an unordered collection of elements that do not contain any duplicates. Set elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types."))
    -   A map from a primitive to a primitive, sObject, or collection (see [Maps](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_maps.htm "A map is a collection of key-value pairs where each unique key maps to a single value. Keys and values can be any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types."))
-   A typed list of values, also known as an enum (see [Enums](atlas.en-us.apexcode.meta/apexcode/langCon_apex_enums.htm "An enum is an abstract data type with values that each take on exactly one of a finite set of identifiers that you specify. Enums are typically used to define a set of possible values that don’t otherwise have a numerical order. Typical examples include the suit of a card, or a particular season of the year."))
-   Objects created from user-defined Apex classes (see [Classes, Objects, and Interfaces](atlas.en-us.apexcode.meta/apexcode/apex_classes.htm "Apex classes are modeled on their counterparts in Java. You’ll define, instantiate, and extend classes, and you’ll work with interfaces, Apex class versions, properties, and other related class concepts."))
-   Objects created from system supplied Apex classes
-   Null (for the null constant, which can be assigned to any variable)

Methods can return values of any of the listed types, or return no value and be of type Void.

Type checking is strictly enforced at compile time. For example, the parser generates an error if an object field of type Integer is assigned a value of type String. However, all compile-time exceptions are returned as specific fault codes, with the line number and column of the error. For more information, see [Debugging Apex](atlas.en-us.apexcode.meta/apexcode/apex_debugging.htm "Apex provides debugging support. You can debug your Apex code using the Developer Console and debug logs.").

-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_primitives.htm "Primitive Data Types")