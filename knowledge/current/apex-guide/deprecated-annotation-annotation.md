---
title: "Deprecated Annotation Annotation"
domain: apex-guide
topic: deprecated-annotation-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.499Z
estimatedTokens: 647
keywords: [Deprecated, Annotation, identify, classes, exceptions, enums, interfaces, variables, longer, referenced, subsequent, releases, managed, package, they]
---

# Deprecated Annotation Annotation

> Use the Deprecated annotation to identify methods, classes, exceptions, enums,
                interfaces, or variables that can no longer be referenced in subsequent releases of
                the managed
                    package in which they reside. This annotation is useful when you’re
     

# Deprecated Annotation Annotation

Use the Deprecated annotation to identify methods, classes, exceptions, enums, interfaces, or variables that can no longer be referenced in subsequent releases of the [managed package](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_dev.htm "Salesforce supports the creation and distribution of Apex through different types of packages. Understand the distinctions between package types, and recognize that Apex behavior can vary across them.") in which they reside. This annotation is useful when you’re refactoring code in managed packages as the requirements evolve. New subscribers can’t see the deprecated elements, while the elements continue to function for existing subscribers and API integrations.

The following code snippet shows a deprecated method. The same syntax can be used to deprecate classes, exceptions, enums, interfaces, or variables.

```

```

Note the following rules when deprecating Apex identifiers:

-   Unmanaged packages can’t contain code that uses the deprecated keyword.
-   When an Apex item is deprecated, all [global](atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm#modifier_global) access modifiers that reference the deprecated identifier must also be deprecated. Any global method that uses the deprecated type in its signature, either in an input argument or the method return type, must also be deprecated. A deprecated item, such as a method or a class, can still be referenced internally by the package developer.
-   webservice methods and variables can’t be deprecated.
-   You can deprecate an enum but you can’t deprecate individual enum values.
-   You can deprecate an interface but you can’t deprecate individual methods in an interface.
-   You can deprecate an abstract class but you can’t deprecate individual abstract methods in an abstract class.
-   You can’t remove the Deprecated annotation to undeprecate something in Apex after you’ve released a package version where that item in Apex is deprecated.

For more information about package versions, see [Managed Package Types](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_dev.htm "Salesforce supports the creation and distribution of Apex through different types of packages. Understand the distinctions between package types, and recognize that Apex behavior can vary across them.").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm "AuraEnabled Annotation Annotation")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_future.htm "Future Annotation")

## Code Examples

```apex
@Deprecated
  // This method is deprecated. Use myOptimizedMethod(String a, String b) instead.
  global void myMethod(String a) {
   
}
```

## Related Topics

- managed
                    package (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_dev.htm)
- global (atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm)
- Managed Package Types (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_dev.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_future.htm)
