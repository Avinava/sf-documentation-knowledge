---
title: "Type Resolution and System Namespace for
Types"
domain: apex-guide
topic: type-resolution-and-system-namespace-for-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:46.608Z
keywords: [Type, Resolution, System, Namespace, Types]
---

# Type Resolution and System Namespace for
Types

# Type Resolution and System Namespace for Types

Because the type system must resolve user-defined types defined locally or in other classes, the Apex parser evaluates types as follows:

1.  For a type reference TypeN, the parser first looks up that type as a scalar type.
2.  If TypeN is not found, the parser looks up locally defined types.
3.  If TypeN still is not found, the parser looks up a class of that name.
4.  If TypeN still is not found, the parser looks up system types such as sObjects.

For the type T1.T2 this could mean an inner type T2 in a top-level class T1, or it could mean a top-level class T2 in the namespace T1 (in that order of precedence).

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_precedence.htm "Namespace, Class, and Variable Name Precedence")