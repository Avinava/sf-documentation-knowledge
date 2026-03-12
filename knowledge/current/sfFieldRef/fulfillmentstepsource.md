---
title: "FulfillmentStepSource"
domain: sfFieldRef
topic: fulfillmentstepsource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.899Z
estimatedTokens: 299
keywords: [FulfillmentStepSource, link, fulfillment, step, corresponding, order, lines, API, version, 61.0, later]
---

# FulfillmentStepSource

> Represents a link between a fulfillment step and the corresponding
         order lines. This object is available in API version 61.0 and later.

# FulfillmentStepSource

Represents a link between a fulfillment step and the corresponding order lines. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FulfillmentStepSource in the Dynamic Revenue Orchestrator Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Fulfillment Step Source ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SourceIdentifier | Source Identifier | string |  | 18 |  |  |
| SourceLineItemId | SourceLineItem ID | reference |  | 18 |  |  |
| StepId | Fulfillment Step ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VersionGroupIdentifier | Version Group Identifier | string |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
