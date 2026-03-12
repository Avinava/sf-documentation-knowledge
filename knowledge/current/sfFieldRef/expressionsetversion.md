---
title: "ExpressionSetVersion"
domain: sfFieldRef
topic: expressionsetversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.685Z
estimatedTokens: 515
keywords: [ExpressionSetVersion, specific, version, expression, accessible, API, components, Lightning, Web, LWC, 55.0, later]
---

# ExpressionSetVersion

> Represents information about a specific version of an expression set.
         This object is also accessible through the UI API, which enables its use in components like
         Lightning Web Components (LWC). This object is available in API version 55.0 and
      later.

# ExpressionSetVersion

Represents information about a specific version of an expression set. This object is also accessible through the UI API, which enables its use in components like Lightning Web Components (LWC). This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ExpressionSetVersion in the Expression Set Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiName | API Name | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DecimalScale | Decimal Scale | int | 9 |  |  |  |
| Description | Description | string |  | 255 |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| ExpressionSetDefinitionVerId | ExpressionSetDefinitionVersion ID | reference |  | 18 |  |  |
| ExpressionSetId | Expression Set ID | reference |  | 18 |  |  |
| Id | Expression Set Version ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLoopingEnabled | Looping Enabled | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LatestSimulationResult | Latest Simulation Result | textarea |  | 131072 |  |  |
| LoopEndVariableName | Loop End Variable Name | textarea |  | 255 |  |  |
| LoopIncrementVariableName | Loop Increment Variable Name | textarea |  | 255 |  |  |
| LoopStartVariableName | Loop Start Variable Name | textarea |  | 255 |  |  |
| Name | Version Name | string |  | 255 |  |  |
| Rank | Rank | int | 9 |  |  |  |
| ShouldShowExplExternally | Show Explanation Externally | boolean |  |  |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VersionNumber | Version Number | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
