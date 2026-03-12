---
title: "Managed Apex Considerations for Package Subscribers"
domain: apex-guide
topic: managed-apex-considerations-for-package-subscribers
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:33.708Z
estimatedTokens: 374
keywords: [Managed, Apex, Considerations, Package, Subscribers, keep, mind]
---

# Managed Apex Considerations for Package Subscribers

> As you use managed Apex, keep these considerations in mind.

# Managed Apex Considerations for Package Subscribers

As you use managed Apex, keep these considerations in mind.

-   If a package developer deprecates a global Apex identifier in a managed package, you can only reference that identifier if you specify a package version between the creation and the deprecation of the identifier. Identifiers include global Apex methods, classes, exceptions, enums, interfaces, properties, and class variables. This behavior applies to both static and dynamic references, such as identifiers accessed with the [Type.forName()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_type.htm#apex_System_Type_forName "HTML (New Window)") method, the [instanceof](atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_instanceof.htm) keyword, and the [ApexTypeImplementor](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextypeimplementor.htm "HTML (New Window)") object.
-   Similarly, if a package developer deletes a schema from a managed package, you can only reference the schema in Apex if you specify a package version before the deletion of the schema. This behavior applies to both static and dynamic references, such as objects and fields accessed with [Schema.describe()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_schema.htm#apex_System_Schema_methods "HTML (New Window)") methods.

## Related Topics

- instanceof (atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_instanceof.htm)
