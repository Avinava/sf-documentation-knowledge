---
title: "Conversation Reason Report Segment
      Def
      DMO"
domain: data-cloud
topic: conversation-reason-report-segment-def-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:43.053Z
keywords: [Conversation, Reason, Report, Segment, Def, DMO, Object, API, Name, Category, Primary, Subject, Area, Key, Relationships, Fields]
---

# Conversation Reason Report Segment
      Def
      DMO

# Conversation Reason Report Segment Def DMO

The Conversation Reason Report Segment Def DMO is a Data Cloud data model object for a segment definition of a conversation reason report.

## Object API Name

ssot\_\_ConvReasonReportSegmentDef\_\_dlm

## Category

Other

## Primary Subject Area

## Primary Key

Conv Reason Report Segment Def ID (ssot\_\_Id\_\_c)

## Relationships

None.

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Conversation Reason Report Definition | ssot__ConvReasonReportDefinitionID__c | A reference ID to the report definition the segment belongs to. | text |
| Conversation Reason Report Segment Type | ssot__ConvRsnRptSegmentTypeID__c | A reference ID to the segment type. | text |
| Conv Reason Report Segment Def ID | ssot__Id__c | A unique ID used as the primary key for the conversation reason report segment definition DMO. | text |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DateSourceId__c | A reference ID for the logical name for a system that is the source of records identified by the external record ID. | text |
| Data Source Object | ssot__DateSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the conversation reason report segment definition. | text |
| Name | ssot__Name__c | The name of the conversation reason report segment definition. | text |
| SegmentObject | ssot__SegmentObjectName__c | The name of the segment object for the conversation reason report segment definition. | text |
| Target Object | ssot__TargetObjectName__c | The name of the target object for the conversation reason report segment definition. | text |