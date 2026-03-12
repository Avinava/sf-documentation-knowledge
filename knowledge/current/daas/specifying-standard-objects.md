---
title: "Specifying Standard Objects"
domain: daas
topic: specifying-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.040Z
estimatedTokens: 224
keywords: [Specifying, Standard, Objects, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t]
---

# Specifying Standard Objects

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Specifying Standard Objects

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

To retrieve standard objects and/or custom fields on standard objects, you must name the component in package.xml. The following package.xml file will retrieve a single field EngineeringReqNumber\_\_c, on the Case object, as well as the entire Account object.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

Custom objects and standard objects should be specified in the same <types\> section, the one containing <name\>CustomObject</name\>.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Case.EngineeringReqNumber__c</members>
        <name>CustomField</name>
    </types>
    <types>
        <members>Account</members>
        <name>CustomObject</name>
    </types>
    <version>66.0</version>
</Package>
```
