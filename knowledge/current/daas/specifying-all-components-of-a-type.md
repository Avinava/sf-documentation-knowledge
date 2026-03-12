---
title: "Specifying all Components of a Type"
domain: daas
topic: specifying-all-components-of-a-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.033Z
estimatedTokens: 223
keywords: [Specifying, Components, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t, updated]
---

# Specifying all Components of a Type

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Specifying all Components of a Type

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

To retrieve all components of a particular type, use the wildcard symbol (\*). For example, to retrieve all custom objects:

```

```

The wildcard symbol does not apply to all metadata types. For example, using the wildcard with the CustomObject type name will not retrieve standard objects. To retrieve a standard object, you must explicitly name the object in package.xml. Likewise, if you want to retrieve custom fields defined on standard objects, you must name the object and field.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>CustomObject</name>
    </types>
    <version>66.0</version>
</Package>
```
