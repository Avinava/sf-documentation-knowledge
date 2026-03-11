---
title: "getFields()"
domain: apex-reference
topic: getfields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.710Z
keywords: [getFields, Returns, fields, SObject, being, described., Signature, Return, Value, Usage, See]
---

# getFields()

> Returns the fields that make up the SObject being described.

### getFields()

Returns the fields that make up the SObject being described.

#### Signature

public Schema.SObjectTypeFields getFields()

#### Return Value

Type: Schema.SObjectTypeFields

The return value is a special data type. Call the getMap() method to get a map of Strings and SObjectFields.

#### Usage

When you describe SObjects and their fields from within an Apex class, custom fields of new field types are returned regardless of the API version that the class is saved in. If a field type, such as the geolocation field type, is available only in a recent API version, components of a geolocation field are returned even if the class is saved in an earlier API version.

#### See Also

-   [*Apex Developer Guide*: Using Field Tokens](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_field_tokens.htm "Apex Developer Guide: Using Field Tokens - HTML (New Window)")
    
-   [*Apex Developer Guide*: Describing sObjects Using Schema Method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_describeSObject.htm "Apex Developer Guide: Describing sObjects Using Schema Method - HTML (New Window)")
    
-   [*Apex Developer Guide*: Understanding Apex Describe Information](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_describe_objects_understanding.htm "Apex Developer Guide: Understanding Apex Describe Information - HTML (New Window)")