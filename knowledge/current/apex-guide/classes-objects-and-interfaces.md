---
title: "Classes, Objects, and Interfaces"
domain: apex-guide
topic: classes-objects-and-interfaces
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.401Z
estimatedTokens: 761
keywords: [Classes, Objects, Interfaces, Apex, classes, modeled, their, counterparts, Java., You’ll, define, instantiate, extend, you’ll, work, interfaces, versions, related, concepts.]
---

# Classes, Objects, and Interfaces

> Apex classes are modeled on their counterparts in Java. You’ll define, instantiate,
        and extend classes, and you’ll work with interfaces, Apex class versions, properties, and
        other related class concepts.

# Classes, Objects, and Interfaces

Apex classes are modeled on their counterparts in Java. You’ll define, instantiate, and extend classes, and you’ll work with interfaces, Apex class versions, properties, and other related class concepts.

1.  [Classes](atlas.en-us.apexcode.meta/apexcode/apex_classes_understanding.htm)
    As in Java, you can create classes in Apex. A class is a template or blueprint from which objects are created. An object is an instance of a class.
2.  [Interfaces](atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm)
    An interface is like a class in which none of the methods have been implemented—the method signatures are there, but the body of each method is empty. To use an interface, another class must implement it by providing a body for all of the methods contained in the interface.
3.  [Keywords](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords.htm)
    Apex provides the keywords final, instanceof, super, this, transient, with sharing and without sharing.
4.  [Annotations](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation.htm)
    An Apex annotation modifies the way that a method or class is used, similar to annotations in Java. Annotations are defined with an initial @ symbol, followed by the appropriate keyword.
5.  [Classes and Casting](atlas.en-us.apexcode.meta/apexcode/apex_classes_casting.htm)
    In general, all type information is available at run time. This means that Apex enables casting, that is, a data type of one class can be assigned to a data type of another class, but only if one class is a subclass of the other class. Use casting when you want to convert an object from one data type to another.
6.  [Differences Between Apex Classes and Java Classes](atlas.en-us.apexcode.meta/apexcode/apex_classes_java_diffs.htm)
    Apex classes and Java classes work in similar ways, but there are some significant differences.
7.  [Class Definition Creation](atlas.en-us.apexcode.meta/apexcode/apex_classes_creating.htm)
    Use the class editor to create a class in Salesforce.
8.  [Namespace Prefix](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_prefix.htm)
    The Salesforce application supports the use of namespace prefixes. Namespace prefixes are used in managed AppExchange packages to differentiate custom object and field names from names used by other organizations.
9.  [Apex Code Versions](atlas.en-us.apexcode.meta/apexcode/apex_classes_version_settings_intro.htm)
    To aid backwards-compatibility, classes and triggers are stored with the version settings for a specific Salesforce API version.
10.  [Lists of Custom Types and Sorting](atlas.en-us.apexcode.meta/apexcode/apex_classes_list_sorting.htm)
     Lists can hold objects of your user-defined types (your Apex classes). Lists of user-defined types can be sorted.
11.  [Using Custom Types in Map Keys and Sets](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_maps_keys_userdefined.htm)
     You can add instances of your own Apex classes to maps and sets.

## Related Topics

- Classes (atlas.en-us.apexcode.meta/apexcode/apex_classes_understanding.htm)
- Interfaces (atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm)
- Keywords (atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords.htm)
- Annotations (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation.htm)
- Classes and Casting (atlas.en-us.apexcode.meta/apexcode/apex_classes_casting.htm)
- Differences Between Apex Classes and Java Classes (atlas.en-us.apexcode.meta/apexcode/apex_classes_java_diffs.htm)
- Class Definition Creation (atlas.en-us.apexcode.meta/apexcode/apex_classes_creating.htm)
- Namespace Prefix (atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_prefix.htm)
- Apex Code Versions (atlas.en-us.apexcode.meta/apexcode/apex_classes_version_settings_intro.htm)
- Lists of Custom Types and Sorting (atlas.en-us.apexcode.meta/apexcode/apex_classes_list_sorting.htm)
