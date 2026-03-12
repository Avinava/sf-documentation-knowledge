---
title: "Classes and Collections"
domain: apex-guide
topic: classes-and-collections
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:32.514Z
estimatedTokens: 212
keywords: [Classes, Collections, Lists, maps, used, classes, interfaces, same, ways, lists, sObjects., means, example, user-defined, data, key, map., Likewise, create, set]
---

# Classes and Collections

> Lists and maps can be used with classes and interfaces, in the same ways that lists and maps can
   be used with sObjects. This means, for example, that you can use a user-defined data type for the
   value or the key of a map. Likewise, you can create a set of user-defined objects.

# Classes and Collections

Lists and maps can be used with classes and interfaces, in the same ways that lists and maps can be used with sObjects. This means, for example, that you can use a user-defined data type for the value or the key of a map. Likewise, you can create a set of user-defined objects.

If you create a map or list of interfaces, any child type of the interface can be put into that collection. For instance, if the List contains an interface i1, and MyC implements i1, then MyC can be placed in the list.

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_casting_collections.htm "Collection Casting")

#### See Also

-   [Using Custom Types in Map Keys and Sets](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_maps_keys_userdefined.htm "You can add instances of your own Apex classes to maps and sets.")

## Related Topics

- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_casting_collections.htm)
- Using Custom Types in Map Keys and Sets (atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_maps_keys_userdefined.htm)
