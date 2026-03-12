---
title: "Object Schema Details Available Using  $ObjectType"
domain: pages
topic: object-schema-details-available-using-objecttype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.416Z
estimatedTokens: 740
keywords: [Schema, $ObjectType, variable, access, objects, organization, label, accessibility]
---

# Object Schema Details Available Using  $ObjectType

> Use the $ObjectType global variable to access schema
            information about the objects in your organization. For example, to access the name,
            label, and accessibility of an object.

# Object Schema Details Available Using $ObjectType

Use the $ObjectType global variable to access schema information about the objects in your organization. For example, to access the name, label, and accessibility of an object.

The information available using $ObjectType is a subset of the information available using the Apex describe result, the DescribeSObjectResult system object. This table describes the attributes available from the $ObjectType global variable.

| Name | Data Type | Description |
| --- | --- | --- |
| fields | Special | This attribute can’t be used by itself. Instead, fields should be followed by a field member variable name, and then a field attribute. For example,{!$ObjectType.Account.fields.Name.Label} |
| fieldSets | Special | This attribute can’t be used by itself. Instead, fieldSets should be followed by a field set name, and used in an iteration component. For example,<apex:repeat      value="{!$ObjectType.Contact.FieldSets.properNames}"      var="f"> |
| keyPrefix | String | The three-character prefix code for the object. Record IDs are prefixed with three-character codes that specify the object type. For example, accounts have a prefix of 001 and opportunities have a prefix of 006).$ObjectType returns a value for objects that have a stable prefix. For object types that don’t have a stable or predictable prefix, this field is blank. Pages that rely on these codes can use this way of determining object types to ensure forward compatibility. |
| label | String | The object’s label, which often matches the object name. For example, an organization in the medical industry might change the label for Account to Patient. This label matches the one used in the Salesforce user interface. |
| labelPlural | String | The object’s plural label, which often matches the object name. For example, an organization in the medical industry might change the plural label for Account to Patients. This label matches the one used in the Salesforce user interface. |
| name | String | The name of the object. |
| accessible | Boolean | true if the current user can see this object, false otherwise. |
| createable | Boolean | true if the object can be created by the current user, false otherwise. |
| custom | Boolean | true if the object is a custom object, false if it’s a standard object. |
| deletable | Boolean | true if the object can be deleted by the current user, false otherwise. |
| mergeable | Boolean | true if the object can be merged with other objects of its type by the current user, false otherwise. |
| queryable | Boolean | true if the object can be queried by the current user, false otherwise |
| searchable | Boolean | true if the object can be searched by the current user, false otherwise. |
| undeletable | Boolean | true if the object can’t be undeleted by the current user, false otherwise. |
| updateable | Boolean | true if the object can be updated by the current user, false otherwise. |

## Code Examples

```
<apex:repeat 
    value="{!$ObjectType.Contact.FieldSets.properNames}" 
    var="f">
```
