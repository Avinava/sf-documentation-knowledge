---
title: "PipelineInspectionListView"
domain: sfFieldRef
topic: pipelineinspectionlistview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.327Z
estimatedTokens: 477
keywords: [PipelineInspectionListView, pipeline, view, intelligence, saved, filter, opportunity, records, specific, criteria, account, lead, contact, API, version]
---

# PipelineInspectionListView

> Represents a pipeline view, an intelligence view, or a saved filter. A pipeline view shows a set of opportunity records, based on specific criteria. An intelligence view shows a set of account, lead, or contact records, based on specific criteria. This object is available in API version 53.0 and later.

# PipelineInspectionListView

Represents a pipeline view, an intelligence view, or a saved filter. A pipeline view shows a set of opportunity records, based on specific criteria. An intelligence view shows a set of account, lead, or contact records, based on specific criteria. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PipelineInspectionListView](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_pipelineinspectionlistview.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChangePeriodLiteralType | Change Period Literal Type | picklist |  | 255 |  |  |
| ChangePeriodStartDate | Change Period Start Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DateLiteralType | Date Literal Type | picklist |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Pipeline Inspection List View ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSystemManaged | System Managed | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ListViewId | List View ID | reference |  | 18 |  |  |
| MarketSegments | Market Segments | textarea |  | 131072 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SummaryField | Custom Field Definition ID | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| ViewType | View Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
