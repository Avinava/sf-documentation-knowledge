---
title: "Incident"
domain: sfFieldRef
topic: incident
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:00.799Z
estimatedTokens: 644
keywords: [Incident, any, unplanned, business, interruption, wide-sweeping, impacts, requires, urgent, fix, documenting, history, registration, closure, API]
---

# Incident

> An Incident is any unplanned business interruption that has wide-sweeping
         impacts and requires an urgent fix. This object contains the details of the incident,
         documenting the history of the incident from registration to closure. This object is
      available in API version 53.0 and later.

# Incident

An Incident is any unplanned business interruption that has wide-sweeping impacts and requires an urgent fix. This object contains the details of the incident, documenting the history of the incident from registration to closure. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Incident](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_incident.htm "HTML (New Window)") in the Agentforce IT Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Category | Category | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DetectedDateTime | Detected Date Time | datetime |  |  |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| Id | Incident ID | id |  | 18 |  |  |
| Impact | Impact | picklist |  | 40 |  |  |
| IncidentNumber | Incident Number | string |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsMajorIncident | Major Incident | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentIncidentId | Parent Incident ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 40 |  |  |
| PriorityOverrideReason | Priority Override Reason | string |  | 255 |  |  |
| ReportedMethod | Reported Method | picklist |  | 40 |  |  |
| ResolutionDateTime | Resolution Date Time | datetime |  |  |  |  |
| ResolutionSummary | Resolution Summary | textarea |  | 32000 |  |  |
| ResolvedById | Resolved By ID | reference |  | 18 |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCode | Status Code | picklist |  | 255 |  |  |
| SubCategory | Sub Category | picklist |  | 40 |  |  |
| Subject | Subject | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |
| Urgency | Urgency | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
