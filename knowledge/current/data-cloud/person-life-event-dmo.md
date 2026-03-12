---
title: "Person Life Event DMO"
domain: data-cloud
topic: person-life-event-dmo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.428Z
estimatedTokens: 398
keywords: [Person, Life, Event, DMO, major, individual, Provided, Financial, Services, Cloud, Data, Kit, API, version, later]
---

# Person Life Event DMO

> Represents a major life event for an individual. Provided in the Financial Services
      Cloud Data Kit. This DMO is available in API version 58 and later.

# Person Life Event DMO

Represents a major life event for an individual. Provided in the Financial Services Cloud Data Kit. This DMO is available in API version 58 and later.

## API Name

ssot\_\_PersonLifeEvent\_\_dlm

## Category

Profile

## Primary Subject Area

Party

## Primary Key Label

Person Life Event (ssot\_Id\_c).

## Relationships

| DMO Label | DMO Field Label | Cardinality | Related DMO Label | Related DMO Field Label | Data Bundle or Origin |
| --- | --- | --- | --- | --- | --- |
| Person Life Event | Individual ID | Many To One (N:1) | Individual | ID | Financial Services Cloud |

## Fields

| Label | API Name | Description | Data Type | Data Bundle or Origin |
| --- | --- | --- | --- | --- |
| Event Expiry Date | ssot__EventExpiryDate__c | The date when the life event expires. | Date Time | Financial Services Cloud |
| Person Life Event ID | ssot__Id__c | The primary key. | Text | Financial Services Cloud |
| Individual ID | ssot__IndividualId__c | The party ID associated to the life event. | Text | Financial Services Cloud |
| Is Event Expired | ssot__IsEventExpired__c | Indicates if the event is expired. | Text | Financial Services Cloud |
| Person Life Event Date Time | ssot__PersonLifeEventDateTime__c | The date of the life event. | Date Time | Financial Services Cloud |
| Person Life Event Type | ssot__PersonLifeEventType__c | The type of the life event. | Text | Financial Services Cloud |
| Is Next Major Life Event | ssot__isNextMajorLifeEvent__c | Indicates if the record is the next major life event. | Text | Financial Services Cloud |
