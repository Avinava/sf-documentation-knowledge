---
title: "Access Modifiers"
domain: apex-guide
topic: access-modifiers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.407Z
estimatedTokens: 1227
keywords: [Access, Modifiers, Apex, allows, protected, access, modifiers, defining, variables., Note, Versioned, Behavior, Changes]
---

# Access Modifiers

> Apex allows you to use the private, protected, public, and global access modifiers
         when defining methods and variables.

# Access Modifiers

Apex allows you to use the private, protected, public, and global access modifiers when defining methods and variables.

While triggers and anonymous blocks can also use these access modifiers, they aren’t as useful in smaller portions of Apex. For example, declaring a method as global in an anonymous block doesn’t enable you to call it from outside of that code.

For more information on class access modifiers, see [Apex Class Definition](atlas.en-us.apexcode.meta/apexcode/apex_classes_defining.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Methods defined in an interface have the same access modifier as the interface (public or global). For more information, see [Interfaces](atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm "An interface is like a class in which none of the methods have been implemented—the method signatures are there, but the body of each method is empty. To use an interface, another class must implement it by providing a body for all of the methods contained in the interface.").

By default, a method or variable is visible only to the Apex code *within the defining class*. Explicitly specify a method or variable as public in order for it to be available to other classes in the same application namespace (see [Namespace Prefix](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_prefix.htm "The Salesforce application supports the use of namespace prefixes. Namespace prefixes are used in managed AppExchange packages to differentiate custom object and field names from names used by other organizations.")). You can change the level of visibility by using the following access modifiers:

private

This access modifier is the default, and means that the method or variable is accessible only within the Apex class in which it’s defined. If you don’t specify an access modifier, the method or variable is private.

protected

This means that the method or variable is visible to any inner classes in the defining Apex class, and to the classes that extend the defining Apex class. You can only use this access modifier for instance methods and member variables. This setting is strictly more permissive than the default (private) setting, just like Java.

public

This means that the method or variable is accessible by all Apex within a specific package. For accessibility by all second-generation (2GP) managed packages that share a namespace, use public with the @NamespaceAccessible annotation. Using the public access modifier in no-namespace packages implicitly renders the Apex code as @NamespaceAccessible.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

In Apex, the public access modifier isn’t the same as it is in Java. This was done to discourage joining applications, to keep the code for each application separate. In Apex, if you want to make something public like it is in Java, you must use the global access modifier.

For more information on namespace-based visibility, see [Namespace-Based Visibility for Apex Classes in Second-Generation Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_namespace_visibility.htm "HTML (New Window)").

global

This means the method or variable can be used by any Apex code that has access to the class, not just the Apex code in the same application. This access modifier must be used for any method that must be referenced outside of the application, either in SOAP API or by other Apex code. If you declare a method or variable as global, you must also declare the class that contains it as global.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

We recommend using the global access modifier rarely, if at all. Cross-application dependencies are difficult to maintain.

To use the private, protected, public, or global access modifiers, use the following syntax:

```

```

For example:

```

```

## Versioned Behavior Changes

In API version 65.0 and later, an abstract or override method requires a protected, public, or global access modifier. If one of these access modifiers isn’t explicitly included in the method declaration, then method access defaults to private. Private access is invalid for these method types because the implementing class can’t access the abstract method. Therefore, if you attempt to declare an abstract or override method without an allowed access modifier, you get the compilation error Abstract methods require at least one of the following: global, public, protected.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_constructors.htm "Using Constructors")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_static.htm "Static and Instance Methods, Variables, and Initialization Code")

## Code Examples

```apex
[(none)|private|protected|public|global] declaration
```

```apex
// private variable s1
private string s1 = '1';

// public method getsz()
public string getsz() { 
   ... 
}
```

## Related Topics

- Apex Class Definition (atlas.en-us.apexcode.meta/apexcode/apex_classes_defining.htm)
- Interfaces (atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm)
- Namespace Prefix (atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_prefix.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_constructors.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_static.htm)
