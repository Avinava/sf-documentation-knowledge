---
title: "CareRequestConfiguration"
domain: sfFieldRef
topic: carerequestconfiguration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.253Z
estimatedTokens: 345
namespace: NamespacePrefix
keywords: [CareRequestConfiguration, record, service, drug, admission, associated, care]
---

# CareRequestConfiguration

> Represents the details for a record type such as service request,
         drug request, or admission request. One or more record types can be associated with a care
         request.

**Namespace:** `NamespacePrefix`

# CareRequestConfiguration

Represents the details for a record type such as service request, drug request, or admission request. One or more record types can be associated with a care request.

For more information, see CareRequestConfiguration in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CareRequestRecordType | Care Request Record Type | string |  | 255 |  |  |
| CareRequestRecords | Care Request Records | multipicklist |  | 4099 | 0 |  |
| CareRequestType | Care Request Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Care Request Configuration ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDefaultRecordType | Default record type | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
