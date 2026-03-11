---
title: "Class Variables"
domain: apex-guide
topic: class-variables
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.526Z
keywords: [Class, Variables, Versioned, Behavior, Changes]
---

# Class Variables

# Class Variables

To declare a variable, specify the following:

-   Optional: Modifiers, such as public or final, as well as static.
-   Required: The data type of the variable, such as String or Boolean.
-   Required: The name of the variable.
-   Optional: The value of the variable.

Use the following syntax when defining a variable:

```

```

For example:

```

```

## Versioned Behavior Changes

In API version 50.0 and later, scope and accessibility rules are enforced on Apex variables, methods, inner classes, and interfaces that are annotated with @namespaceAccessible. For accessibility considerations, see [NamespaceAccessible Annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm). For more information on namespace-based visibility, see [Namespace-Based Visibility for Apex Classes in Second-Generation Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_namespace_visibility.htm "HTML (New Window)").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_defining.htm "Apex Class Definition")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_defining_methods.htm "Class Methods")