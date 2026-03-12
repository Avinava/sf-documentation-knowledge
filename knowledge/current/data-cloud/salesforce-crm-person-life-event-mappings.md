---
title: "Salesforce CRM: Person Life Event Mappings"
domain: data-cloud
topic: salesforce-crm-person-life-event-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.593Z
estimatedTokens: 232
keywords: [Salesforce, CRM, Person, Life, Event, Mappings, data, mappings, PersonLifeEvent, DLO, found, Financial, Services, Cloud, bundle, Connector, Data, Cloud., Usage, Bundle]
---

# Salesforce CRM: Person Life Event Mappings

> These data mappings are for the PersonLifeEvent DLO found in Financial Services Cloud
  bundle of the Salesforce CRM Connector for Data Cloud.

# Salesforce CRM: Person Life Event Mappings

These data mappings are for the PersonLifeEvent DLO found in Financial Services Cloud bundle of the Salesforce CRM Connector for Data Cloud.

## Usage and Data Bundle

Bundle:

-   Financial Services Cloud

## DLO to DMO Mapping

These data mappings relate to the PersonLifeEvent object included in the Salesforce CRM connector and how that data connects to DMOs.

| DLO Field | DLO API Name | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- | --- |
| ExpirationDate |  | dateTime | Person Life Event | Event Expiry Date |
| Id |  | id | Person Life Event | Person Life Event Id |
| PrimaryPersonId |  | text | Person Life Event | Individual |
| IsExpired |  | boolean | Person Life Event | IsEventExpired |
| EventDate |  | dateTime | Person Life Event | Person Life Event Date Time |
| EventType |  | picklist | Person Life Event | Person Life Event TYpe |
