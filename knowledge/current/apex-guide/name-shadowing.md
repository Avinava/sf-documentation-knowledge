---
title: "Name Shadowing"
domain: apex-guide
topic: name-shadowing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.631Z
estimatedTokens: 295
keywords: [Name, Shadowing, Member, variables, shadowed, local, variables—in, particular, function, arguments., allows, standard, Java, form]
---

# Name Shadowing

> Member variables can be shadowed by local variables—in particular
function arguments. This allows methods and constructors of the standard
Java form:

# Name Shadowing

Member variables can be shadowed by local variables—in particular function arguments. This allows methods and constructors of the standard Java form:

```

```

Member variables in one class can shadow member variables with the same name in a parent classes. This can be useful if the two classes are in different top-level classes and written by different teams. For example, if one has a reference to a class C and wants to gain access to a member variable M in parent class P (with the same name as a member variable in C) the reference should be assigned to a reference to P first.

Static variables can be shadowed across the class hierarchy—so if P defines a static S, a subclass C can also declare a static S. References to S inside C refer to that static—in order to reference the one in P, the syntax P.S must be used.

Static class variables cannot be referenced through a class instance. They must be referenced using the raw variable name by itself (inside that top-level class file) or prefixed with the class name. For example:

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_naming_conventions.htm "Naming Conventions")

## Code Examples

```
Public Class Shadow {
  String s;
  Shadow(String s) { this.s = s; } // Same name ok
  setS(String s) { this.s = s; } // Same name ok
}
```

```apex
public class p1 { 
  public static final Integer CLASS_INT = 1;
  public class c { };
}
p1.c c = new p1.c();
// This is illegal
// Integer i = c.CLASS_INT;
// This is correct
Integer i = p1.CLASS_INT;
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_naming_conventions.htm)
