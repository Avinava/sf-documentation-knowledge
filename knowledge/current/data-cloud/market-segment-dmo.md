---
title: "Market Segment DMO"
domain: data-cloud
topic: market-segment-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.119Z
estimatedTokens: 635
keywords: [Market, Segment, DMO, Data, Cloud, model, group, people, share, common, characteristics, grouped, marketing, purposes, API]
---

# Market Segment DMO

> The Market Segment DMO is a Data Cloud data model object (DMO) for a group
      of people who share one or more common characteristics, grouped for marketing
      purposes.

# Market Segment DMO

The Market Segment DMO is a Data Cloud data model object (DMO) for a group of people who share one or more common characteristics, grouped for marketing purposes.

## Object API Name

ssot\_\_MarketSegment\_\_dlm

## Category

Other

## Primary Subject Area

Market Audience

## Primary Key

Market Segment ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Website Engagement | Market Segment | Many To One: N:1 | Market Segment | Market Segment ID |
| Device Application Engagement | Market Segment | Many To One: N:1 | Market Segment | Market Segment ID |
| Email Engagement | Market Segment | Many To One: N:1 | Market Segment | Market Segment ID |
| Message Engagement | Market Segment | Many To One: N:1 | Market Segment | Market Segment ID |
| Product Browse Engagement | Market Segment | Many To One: N:1 | Market Segment | Market Segment ID |
| Product Order Engagement | Market Segment | Many To One: N:1 | Market Segment | Market Segment ID |
| Shopping Cart Engagement | Market Segment | Many To One: N:1 | Market Segment | Market Segment ID |
| Web Search Engagement | Market Segment | Many To One: N:1 | Market Segment | Market Segment ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The date the record was created. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID for the logical name for a system that is the source of records identified by external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID for the logical name of the object where this record came from, whether that is a name of a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID for the system in which the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date when a user last modified the record. | dateTime |
| Market Segment ID | ssot__Id__c | A unique ID used as primary key for the Market Segment DMO. | text |
| Name | ssot__Name__c | The display name of market segment. | text |
