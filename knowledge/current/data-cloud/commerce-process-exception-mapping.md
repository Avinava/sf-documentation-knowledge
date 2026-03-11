---
title: "Commerce: Process Exception Mapping"
domain: data-cloud
topic: commerce-process-exception-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.922Z
keywords: [Commerce, Process, Exception, Mapping, DLO, DMO]
---

# Commerce: Process Exception Mapping

# Commerce: Process Exception Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Process Exception data is about events related to a business process or data that affects normal order processing. Errors in programs or communication aren’t process exceptions, but can cause process exceptions.

## DLO to DMO Mapping

These data mappings relate to the ProcessException object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | ProcessException | id |
| CaseId | reference | ProcessException | CaseId |
| Category | picklist | ProcessException | ProcessExceptionCategoryId |
| Description | textarea | ProcessException | Description |
| ExternalReference | string | ProcessException | Message |
| Message | string | ProcessException | Message |
| OrderSummaryId | reference | ProcessException | SalesOrderId |
| Priority | picklist | ProcessException | ProcessExceptionPriorityId |
| Severity | picklist | ProcessException | ProcessExceptionSeverityId |
| SeverityCategory | picklist | ProcessException | ProcessExceptionSeverityCategoryId |
| Status | picklist | ProcessException | ProcessExceptionStatusId |
| StatusCategory | picklist | ProcessException | ProcessExceptionStatusCategoryId |
| SystemModstamp | dateTime | ProcessException | SystemModstamp |