---
title: "Market Journey Activity DMO"
domain: data-cloud
topic: market-journey-activity-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:14.408Z
estimatedTokens: 753
keywords: [Market, Journey, Activity, DMO, data, model, Data, Cloud, step, activity, within, journey, Builder., API, Name, Category, Primary, Subject, Area, Key]
---

# Market Journey Activity DMO

> The Market Journey Activity data model object (DMO) is a Data Cloud
      DMO for a step or activity within a journey in Journey Builder.

# Market Journey Activity DMO

The Market Journey Activity data model object (DMO) is a Data Cloud DMO for a step or activity within a journey in Journey Builder.

## Object API Name

ssot\_\_MarketJourneyActivity\_\_dlm

## Category

Other

## Primary Subject Area

Market Audience

## Primary Key

Market Journey Activity ID (ssot\_\_Id\_\_c)

## Relationships

| Object | Field | Cardinality | Related Object | Related Field |
| --- | --- | --- | --- | --- |
| Device Application Engagement | Market Journey Activity | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |
| Email Engagement | Market Journey Activity ID | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |
| Message Engagement | Market Journey Activity | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |
| Product Browse Engagement | Market Journey Activity | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |
| Product Order Engagement | Market Journey Activity ID | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |
| Shopping Cart Engagement | Market Journey Activity ID | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |
| Web Search Engagement | Market Journey Activity ID | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |
| Website Engagement | Market Journey Activity ID | Many To One: N:1 | Market Journey Activity | Market Journey Activity ID |

## All Fields

| Field Name | Field API Name | Description | Data Type |
| --- | --- | --- | --- |
| Created Date | ssot__CreatedDate__c | The record’s creation date and time. | dateTime |
| Data Source | ssot__DataSourceId__c | A reference ID to a logical name for a system that is the source of records identified by an external record ID. | text |
| Data Source Object | ssot__DataSourceObjectId__c | A reference ID to the logical name of the object where the record originated, for example, a cloud storage file or another connector’s external object. | text |
| External Record ID | ssot__ExternalRecordId__c | A reference ID to an external data source system. | text |
| External Source ID | ssot__ExternalSourceId__c | A reference ID to the system where the external record ID was assigned. | text |
| Internal Organization | ssot__InternalOrganizationId__c | A reference ID to the business unit or other internal organization that owns the business account. | text |
| Last Modified Date | ssot__LastModifiedDate__c | The date and time when the user last modified the record. | dateTime |
| Market Journey Activity ID | ssot__Id__c | A unique ID used as the primary key for the Market Journey Activity. | text |
| Market Journey Activity Number | ssot__MarketJourneyActivityNbr__c | The number of the activity in Journey Builder. | text |
| Market Journey ID | MarketJourneyId__c | A reference ID for the journey in Journey Builder. | text |
| Name | ssot__Name__c | The name of the journey activity. | text |
