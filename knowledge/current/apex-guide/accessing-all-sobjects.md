---
title: "Accessing All sObjects"
domain: apex-guide
topic: accessing-all-sobjects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.315Z
estimatedTokens: 532
keywords: [Accessing, sObjects, Schema, getGlobalDescribe, map, represents, relationship, between, sObject, names, keys, tokens, values, example, Note]
---

# Accessing All sObjects

> Use the Schema getGlobalDescribe method to return a map that represents the relationship between
all sObject names (keys) to sObject tokens (values). For example:

# Accessing All sObjects

Use the Schema getGlobalDescribe method to return a map that represents the relationship between all sObject names (keys) to sObject tokens (values). For example:

```

```

The map has the following characteristics:

-   It is dynamic, that is, it is generated at runtime on the sObjects currently available for the organization, based on permissions.
-   The sObject names are case insensitive.
-   The keys are prefixed with the namespace, if any.\*
-   The keys reflect whether the sObject is a custom object.

\* Starting with Apex saved using Salesforce API version 28.0, the keys in the map that getGlobalDescribe returns are always prefixed with the namespace, if any, of the code in which it is running. For example, if the code block that makes the getGlobalDescribe call is in namespace NS1, and a custom object named MyObject\_\_c is in the same namespace, the key returned is NS1\_\_MyObject\_\_c. For Apex saved using earlier API versions, the key contains the namespace only if the namespace of the code block and the namespace of the sObject are different. For example, if the code block that generates the map is in namespace N1, and an sObject is also in N1, the key in the map is represented as MyObject\_\_c. However, if the code block is in namespace N1, and the sObject is in namespace N2, the key is N2\_\_MyObject\_\_c.

Standard sObjects have no namespace prefix.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If the getGlobalDescribe method is called from an installed managed package, it returns sObject names and tokens for Chatter sObjects, such as NewsFeed and UserProfileFeed, even if Chatter is not enabled in the installing organization. This is not true if the getGlobalDescribe method is called from a class not within an installed managed package.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeTabs.htm "Describing Tabs Using Schema Methods")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_data_categories.htm "Accessing All Data Categories Associated with an sObject")

## Code Examples

```apex
Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeTabs.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_data_categories.htm)
