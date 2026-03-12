---
title: "Describing sObjects Using Schema Method"
domain: apex-guide
topic: describing-sobjects-using-schema-method
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.333Z
estimatedTokens: 329
keywords: [Describing, sObjects, Schema, alternative, tokens, describe, calling, describeSObjects, passing, sObject, want]
---

# Describing sObjects Using Schema Method

> As an alternative to using tokens, you can describe sObjects by
calling the describeSObjects Schema method and passing one or more sObject type names for the
sObjects you want to describe.

# Describing sObjects Using Schema Method

As an alternative to using tokens, you can describe sObjects by calling the describeSObjects Schema method and passing one or more sObject type names for the sObjects you want to describe.

This example gets describe metadata information for two sObject types—The Account standard object and the Merchandise\_\_c custom object. After obtaining the describe result for each sObject, this example writes the returned information to the debug output, such as the sObject label, number of fields, whether it is a custom object or not, and the number of child relationships.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_permissions.htm "Understanding Describe Information Permissions")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeTabs.htm "Describing Tabs Using Schema Methods")

#### See Also

-   [DescribeSObjectResult.fields()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm "DescribeSObjectResult.fields() - HTML (New Window)")

-   [DescribeSObjectResult.fieldsets()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm "DescribeSObjectResult.fieldsets() - HTML (New Window)")

## Code Examples

```apex
// sObject types to describe
String[] types = new String[]{'Account','Merchandise__c'};

// Make the describe call
Schema.DescribeSobjectResult[] results = Schema.describeSObjects(types);

System.debug('Got describe information for ' + results.size() + ' sObjects.');

// For each returned result, get some info
for(Schema.DescribeSobjectResult res : results) {
    System.debug('sObject Label: ' + res.getLabel());
    System.debug('Number of fields: ' + res.fields.getMap().size());
    System.debug(res.isCustom() ? 'This is a custom object.' : 'This is a standard object.');
    // Get child relationships
    Schema.ChildRelationship[] rels = res.getChildRelationships();
    if (rels.size() > 0) {
        System.debug(res.getName() + ' has ' + rels.size() + ' child relationships.');
    }
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_permissions.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describeTabs.htm)
