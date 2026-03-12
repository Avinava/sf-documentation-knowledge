---
title: "Specifying Named Components"
domain: daas
topic: specifying-named-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.037Z
estimatedTokens: 274
keywords: [Specifying, Named, Components, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t]
---

# Specifying Named Components

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Specifying Named Components

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

To retrieve a component, specify the type of component in the <name\> element and declare each component to be retrieved or deployed in the <members\> element. The following is a sample package.xml project manifest that names two custom objects to be retrieved or deployed:

```

```

Some metadata components are sub-components of another component. This means you must dot-qualify the sub-component with the parent component name.

The following metadata components are defined as part of an object:

-   CustomField
-   Picklist
-   RecordType
-   Weblink
-   ValidationRule

For example, the following code retrieves a validation rule called ValidationRuleName on the Opportunity object:

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>MyCustomObject__c</members>
        <members>MyHelloWorldObject__c</members>
        <name>CustomObject</name>
    </types>
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Opportunity.ValidationRuleName</members>
        <name>ValidationRule</name>
    </types>
    <version>66.0</version>
</Package>
```
