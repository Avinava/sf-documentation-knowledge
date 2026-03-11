---
title: "Salesforce CRM: ConvReasonReportSegmentDefinition Mapping"
domain: data-cloud
topic: salesforce-crm-convreasonreportsegmentdefinition-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.637Z
keywords: [Salesforce, CRM, ConvReasonReportSegmentDefinition, Mapping, Usage, Data, Bundle, DLO, DMO]
---

# Salesforce CRM: ConvReasonReportSegmentDefinition Mapping

# Salesforce CRM: ConvReasonReportSegmentDefinition Mapping

These data mappings are for the ConvReasonReportSegmentDefinition DLO found in the Services bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

These mappings are used to power Service Intelligence visualizations of contact center performance metrics.

Bundle:

-   Service Cloud

## DLO to DMO Mapping

These data mappings relate to the Conversation Reason Report Segment Definition object used with the CRM connector. You can add or customize the data mappings.

| DLO Field | DLO Field API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| Conversation Reason Report Definition ID | ConvReasonReportDefinitionId__c | Text | Conv Reason Report Segment Def | Conversation Reason Report Definition |
| Conversation Reason Report Segment ID | Id__c | Primary Key | Conv Reason Report Segment Def | Conversation Reason Rpt Sgmt Def ID |
| Label | MasterLabel__c | Text | Conv Reason Report Segment Def | Name |
| Segment Object | SegmentObject__c | Text | Conv Reason Report Segment Def | SegmentObject |
| Segment Type | SegmentType__c | Text | Conv Reason Report Segment Def | Conversation Reason Report Segment Type |
| Target Object | TargetObject__c | Text | Conv Reason Report Segment Def | Target Object |