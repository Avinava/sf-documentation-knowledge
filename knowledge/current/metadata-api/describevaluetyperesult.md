---
title: "DescribeValueTypeResult"
domain: metadata-api
topic: describevaluetyperesult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.490Z
estimatedTokens: 922
keywords: [DescribeValueTypeResult, that’s, useful, developers, working, declarative, metadata, ValueTypeField, PicklistEntry]
---

# DescribeValueTypeResult

> Contains information about a value type that’s useful for developers working with
  declarative metadata.

# DescribeValueTypeResult

Contains information about a value type that’s useful for developers working with declarative metadata.

The [describeValueType()](atlas.en-us.api_meta.meta/api_meta/meta_describeValueType.htm "Retrieves the metadata describing a given metadata type (value type).") call returns a DescribeValueTypeResult object.

Each DescribeValueTypeResult object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| apiCreatable | boolean | Indicates whether this value type can be created through the createMetadata() call (true) or not (false).This field is available in API version 36.0 and later. |
| apiDeletable | boolean | Indicates whether this value type can be created through the deleteMetadata() call (true) or not (false).This field is available in API version 36.0 and later. |
| apiReadable | boolean | Indicates whether this value type can be created through the readMetadata() call (true) or not (false).This field is available in API version 36.0 and later. |
| apiUpdatable | boolean | Indicates whether this value type can be created through the updateMetadata() call (true) or not (false).This field is available in API version 36.0 and later. |
| parentField | ValueTypeField | Information about the parent of this value type. Parent field information is useful for metadata types that are specified with the parent in their name, such as custom fields, email templates, workflow rules, and reports. For example, the full name of a custom field includes the sObject that contains it (for example, Account.field1__c). Similarly, the full name of an email template includes the folder where the template is stored (for example, MyFolder/EmailTemplate1).If the value type has no parent, this field is null.This field is available in API version 36.0 and later. |
| valueTypeFields | ValueTypeField[] | One or more metadata components and their attributes. |

## ValueTypeField

This object is returned as part of the DescribeValueTypeResult and represents the metadata for one field. Each ValueTypeField has these properties.

| Name | Type | Description |
| --- | --- | --- |
| fields | ValueTypeField | The ValueTypeField object for the next field, if any. |
| foreignKeyDomain | string | If isForeignKey is True, foreignKeyDomain is the type of object, such as Account or Opportunity. |
| isForeignKey | boolean | True if the field is a foreign key. That means this field is the primary key in a different database table. |
| isNameField | boolean | True if this value type field is a fullName field; otherwise False. |
| minOccurs | int | 1 if this field is required, 0 otherwise. |
| name | string | The name of this value type field. The name is null for parent fields. |
| picklistValues | PicklistEntry[] | The individual picklist values if the field is a picklist. |
| soapType | string | The data type of the field, such as boolean or double. |
| valueRequired | boolean | Required. Indicates whether this value type field must have a value (true) or can be null (false). |

## PicklistEntry

This object is returned as part of the DescribeValueTypeResult and represents the metadata for one picklist value. Each PicklistEntry has these properties.

| Name | Type | Description |
| --- | --- | --- |
| active | boolean | True if the picklist value is active and displayed in the drop-down list for the picklist field in the user interface. False if the picklist value is inactive. |
| defaultValue | boolean | True if the picklist value is a default value, otherwise, False. |
| label | string | Display name of this item in the picklist. |
| validFor | string |  |
| value | string | Value of this item in the picklist. |

## Related Topics

- describeValueType() (atlas.en-us.api_meta.meta/api_meta/meta_describeValueType.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- deleteMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm)
- readMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_readMetadata.htm)
- updateMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_updateMetadata.htm)
