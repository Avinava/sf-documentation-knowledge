---
title: "Object Types"
domain: lightning
topic: object-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.419Z
estimatedTokens: 306
keywords: [attribute, corresponding, Checking]
---

# Object Types

> An attribute can have a type corresponding to an Object. For example:

# Object Types

An attribute can have a type corresponding to an Object. For example:

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=lightning)

#### Warning

We recommend using type="Map" instead of type="Object" to avoid some deserialization issues on the server. For example, when an attribute of type="Object" is serialized to the server, everything is converted to a string. Deep expressions, such as v.data.property can throw an exception when they are evaluated as a string on the server. Using type="Map" avoids these exceptions for deep expressions, and other deserialization issues.

## Checking for Types

To determine a variable type, use typeof or a standard JavaScript method instead. The instanceof operator is unreliable due to the potential presence of multiple windows or frames.

#### See Also

-   [Using Apex to Work with Salesforce Records](atlas.en-us.lightning.meta/lightning/apex_records.htm "Use Apex only if you need to customize your user interface to do more than what Lightning Data Service allows, such as using a SOQL query to select certain records. Apex provisions data that’s not managed and you must handle data refresh on your own.")

## Code Examples

```
<aura:attribute name="data" type="Object" />
```

## Related Topics

- Using Apex to Work with Salesforce Records (atlas.en-us.lightning.meta/lightning/apex_records.htm)
