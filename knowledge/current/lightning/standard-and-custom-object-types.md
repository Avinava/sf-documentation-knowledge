---
title: "Standard and Custom Object Types"
domain: lightning
topic: standard-and-custom-object-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.422Z
estimatedTokens: 157
keywords: [Standard, Custom, attribute, corresponding, Account]
---

# Standard and Custom Object Types

> An attribute can have a type corresponding to a standard or custom object. For example,
        this is an attribute for a standard Account object:

# Standard and Custom Object Types

An attribute can have a type corresponding to a standard or custom object. For example, this is an attribute for a standard Account object:

```

```

This is an attribute for an Expense\_\_c custom object:

```

```

#### See Also

-   [Using Apex to Work with Salesforce Records](atlas.en-us.lightning.meta/lightning/apex_records.htm "Use Apex only if you need to customize your user interface to do more than what Lightning Data Service allows, such as using a SOQL query to select certain records. Apex provisions data that’s not managed and you must handle data refresh on your own.")

## Code Examples

```
<aura:attribute name="acct" type="Account" />
```

```
<aura:attribute name="expense" type="Expense__c" />
```

## Related Topics

- Using Apex to Work with Salesforce Records (atlas.en-us.lightning.meta/lightning/apex_records.htm)
