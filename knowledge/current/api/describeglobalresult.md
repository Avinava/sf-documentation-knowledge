---
title: "DescribeGlobalResult"
domain: api
topic: describeglobalresult
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.037Z
estimatedTokens: 1157
keywords: [DescribeGlobalResult, describeGlobal, call, DescribeGlobalSObjectResult]
---

# DescribeGlobalResult

> The describeGlobal() call returns a DescribeGlobalResult object.

# DescribeGlobalResult

The describeGlobal() call returns a DescribeGlobalResult object.

The DescribeGlobalResult object has the following properties.

| Name | Type | Description |
| --- | --- | --- |
| encoding | string | Specifies how an org’s data is encoded, such as UTF-8 or ISO-8859-1. |
| maxBatchSize | int | Maximum number of records allowed in a create(), update(), or delete() call. |
| sobjects | DescribeGlobalSObjectResult[] | List of result objects that returns information about the available objects for your org. Available in API version 17.0 and later. This property enhances the information that was previously available in the types property. |
| types | string[] | List of available objects for your org. You iterate through this list to retrieve the object string that you pass to describeSObjects().Beginning with API version 17.0, this property is no longer supported. Use the name property in DescribeGlobalSObjectResult instead. |

## DescribeGlobalSObjectResult

Represents the properties for one of the objects available for your org. Each object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| activateable | boolean | Reserved for future use. |
| createable | boolean | Indicates whether the object can be created via the create() call (true) or not (false). |
| custom | boolean | Indicates whether the object is a custom object (true) or not (false). |
| customSetting | boolean | Indicates whether the object is a custom setting object (true) or not (false). |
| dataTranslationEnabled | boolean | Indicates whether data translation is enabled for the object (true) or not (false). Available in API version 49.0 and later. |
| deepCloneable | boolean | Reserved for future use. |
| deletable | boolean | Indicates whether the object can be deleted via the delete() call (true) or not (false). |
| deprecatedAndHidden | boolean | Reserved for future use. |
| feedEnabled | boolean | Indicates whether Chatter feeds are enabled for the object (true) or not (false). This property is available in API version 19.0 and later. |
| isInterface | boolean | Reserved for future use. |
| keyPrefix | string | Three-character prefix code in the object ID. Object IDs are prefixed with three-character codes that specify the type of the object. For example, Account objects have a prefix of 001 and Opportunity objects have a prefix of 006. Note that a key prefix can sometimes be shared by multiple objects so it does not always uniquely identify an object.Use the value of this field to determine the object type of a parent in those cases where the child may have more than one object type as parent (polymorphic). For example, you may need to obtain the keyPrefix value for the parent of a Task or Event. |
| label | string | Label text for a tab or field renamed in the user interface, if applicable, or the object name, if not. For example, an organization representing a medical vertical might rename Account to Patient. Tabs and fields can be renamed in the Salesforce user interface. See the Salesforce online help for more information. |
| labelPlural | string | Label text for an object that represents the plural version of an object name, for example, “Accounts.” |
| layoutable | boolean | Indicates whether the object supports the describeLayout() call (true) or not (false). |
| mergeable | boolean | Indicates whether the object can be merged with other objects of its type (true) or not (false). true for leads, contacts, and accounts. |
| mruEnabled | boolean | Indicates whether Most Recently Used (MRU) list functionality is enabled for the object (true) or not (false). |
| name | string | Name of the object. This name is equivalent to an entry in the types list that is no longer supported, beginning with API version 17.0. |
| queryable | boolean | Indicates whether the object can be queried via the query() call (true) or not (false). |
| replicateable | boolean | Indicates whether the object can be replicated via the getUpdated() and getDeleted() calls (true) or not (false). |
| retrieveable | boolean | Indicates whether the object can be retrieved via the retrieve() call (true) or not (false). |
| searchable | boolean | Indicates whether the object can be searched via the search() call (true) or not (false). |
| triggerable | boolean | Indicates whether the object supports Apex triggers. |
| undeletable | boolean | Indicates whether an object can be undeleted using the undelete() call (true) or not (false). |
| updateable | boolean | Indicates whether the object can be updated via the update() call (true) or not (false). |

## Related Topics

- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- delete() (atlas.en-us.api.meta/api/sforce_api_calls_delete.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- describeLayout() (atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm)
