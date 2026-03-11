---
title: "Collections"
domain: apex-guide
topic: collections
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.013Z
keywords: [Collections, Note, See]
---

# Collections

# Collections

Collections in Apex can be lists, sets, or maps.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

There is no limit on the number of items a collection can hold. However, there is a general limit on heap size.

-   **[Lists](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists.htm)**  
    A list is an ordered collection of elements that are distinguished by their indices. List elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types.
-   **[Sets](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_sets.htm)**  
    A set is an unordered collection of elements that do not contain any duplicates. Set elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types.
-   **[Maps](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_maps.htm)**  
    A map is a collection of key-value pairs where each unique key maps to a single value. Keys and values can be any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types.
-   **[Parameterized Typing](atlas.en-us.apexcode.meta/apexcode/langCon_apex_parameterized_types.htm)**  
    Apex, in general, is a statically-typed programming language, which means users must specify the data type for a variable before that variable can be used.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_primitives.htm "Primitive Data Types")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_enums.htm "Enums")

#### See Also

-   [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.")