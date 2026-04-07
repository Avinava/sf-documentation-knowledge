---
title: "ProviderVisitChangedEvent"
domain: life-sciences-dev-guide
topic: providervisitchangedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:01.494Z
estimatedTokens: 260
keywords: [ProviderVisitChangedEvent, event, manipulation, operation, performed, provider, visit, record, API, 65.0]
---

> Represents an event for a data manipulation operation performed on a provider
         visit record. This object is available in API version 65.0 and later.

# ProviderVisitChangedEvent

Represents an event for a data manipulation operation performed on a provider visit record. This object is available in API version 65.0 and later.

## Supported Calls

create(), describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| OperationType | TypepicklistPropertiesCreate, Nillable, Restricted picklistDescriptionSpecifies the type of the data manipulation operation.Possible values are:DeleteInsertUpdateUpsert |
| SourceType | TypepicklistPropertiesCreate, Nillable, Restricted picklistDescriptionSpecifies the source type of the event.Possible values are:MobileWeb |
| UserIdentifier | TypestringPropertiesCreate, NillableDescriptionThe user ID of the Provider Visit record owner. It indicates the user who either created or last updated the visit. |
| VisitId | TypereferencePropertiesCreate, NillableDescriptionThe ID of the Provider Visit record that triggered the event. It links the event to a specific visit.This field is a relationship field.Relationship NameVisitRefers ToVisit |
