---
title: "Differences Between Apex Classes and Java Classes"
domain: apex-guide
topic: differences-between-apex-classes-and-java-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.575Z
keywords: [Differences, Between, Apex, Classes, Java, See]
---

# Differences Between Apex Classes and Java Classes

# Differences Between Apex Classes and Java Classes

Apex classes and Java classes work in similar ways, but there are some significant differences.

These are the major differences between Apex classes and Java classes:

-   Inner classes and interfaces can only be declared one level deep inside an outer class.
-   Static methods and variables can only be declared in a top-level class definition, not in an inner class.
-   An inner class behaves like a static Java inner class, but doesn’t require the static keyword. An inner class can have instance member variables like an outer class, but there is no implicit pointer to an instance of the outer class (using the this keyword).
-   The private access modifier is the default, and means that the method or variable is accessible only within the Apex class in which it is defined. If you do not specify an access modifier, the method or variable is private.
-   Specifying no access modifier for a method or variable and the private access modifier are synonymous.
-   The public access modifier means the method or variable can be used by any Apex in this application or namespace.
-   The global access modifier means the method or variable can be used by any Apex code that has access to the class, not just the Apex code in the same application. This access modifier should be used for any method that needs to be referenced outside of the application, either in the SOAP API or by other Apex code. If you declare a method or variable as global, you must also declare the class that contains it as global.
-   Methods and classes are final by default.
    -   The virtual definition modifier allows extension and overrides.
    -   The override keyword must be used explicitly on methods that override base class methods.
-   Methods defined in an interface have the same access modifier (public or global) as the interface.
-   Exception classes must extend either exception or another user-defined exception.
    -   Their names must end with the word exception.
    -   Exception classes have four implicit constructors that are built-in, although you can add others.
-   Classes and interfaces can be defined in triggers and anonymous blocks, but only as local.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_casting.htm "Classes and Casting")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_creating.htm "Class Definition Creation")

#### See Also

-   [Exceptions in Apex](atlas.en-us.apexcode.meta/apexcode/apex_exception_definition.htm "Exceptions note errors and other events that disrupt the normal flow of code execution. throw statements are used to generate exceptions, while try, catch, and finally statements are used to gracefully recover from exceptions.")