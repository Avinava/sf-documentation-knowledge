---
title: "getFieldSets()"
domain: apex-reference
topic: getfieldsets
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.710Z
keywords: [getFieldSets, Returns, field, sets, which, grouping, SObject, fields., Signature, Return, Value, See]
---

# getFieldSets()

> Returns field sets, which is a grouping of the SObject fields.

### getFieldSets()

Returns field sets, which is a grouping of the SObject fields.

#### Signature

public Schema.SObjectTypeFieldSets getFieldSets()

#### Return Value

Type: Schema.SObjectTypeFieldSets

The return value is a special data type. Call the getMap() method to get a map of Strings and SObjectFieldSets.

#### See Also

-   [*Apex Developer Guide*: Using Field Tokens](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_field_tokens.htm "Apex Developer Guide: Using Field Tokens - HTML (New Window)")
    
-   [*Apex Developer Guide*: Describing sObjects Using Schema Method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_describeSObject.htm "Apex Developer Guide: Describing sObjects Using Schema Method - HTML (New Window)")
    
-   [*Apex Developer Guide*: Understanding Apex Describe Information](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_describe_objects_understanding.htm "Apex Developer Guide: Understanding Apex Describe Information - HTML (New Window)")