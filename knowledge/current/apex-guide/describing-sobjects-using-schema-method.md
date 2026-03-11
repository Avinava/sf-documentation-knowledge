---
title: "Describing sObjects Using Schema Method"
domain: apex-guide
topic: describing-sobjects-using-schema-method
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.053Z
keywords: [Describing, sObjects, Schema, Method, See]
---

# Describing sObjects Using Schema Method

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