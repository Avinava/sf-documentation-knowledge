---
title: "IntegrationProviderAttr"
domain: sfFieldRef
topic: integrationproviderattr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.684Z
estimatedTokens: 422
keywords: [IntegrationProviderAttr, attributes, definition, integration, provider, API, version, 57.0, later]
---

# IntegrationProviderAttr

> Represents information about the attributes that are used in the definition
         for an integration provider. This object is available in API version 57.0 and
      later.

# IntegrationProviderAttr

Represents information about the attributes that are used in the definition for an integration provider. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IntegrationProviderAttr in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Data Type | picklist |  | 255 |  |  |
| DateTimeValue | Date Time Value | datetime |  |  |  |  |
| DateValue | Date Value | date |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| DoubleValue | Double Value | double |  |  | 18 | 0 |
| Id | Integration Provider Attribute ID | id |  | 18 |  |  |
| IntegerValue | Integer Value | int | 9 |  |  |  |
| IntegrationProviderDefId | Integration Provider Definition ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRequired | Required | boolean |  |  |  |  |
| IsTrueOrFalseValue | Is True Or False Value | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Primary Label | string |  | 80 |  |  |
| PercentageValue | Percentage Value | percent |  |  | 3 | 0 |
| StringValue | String Value | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
