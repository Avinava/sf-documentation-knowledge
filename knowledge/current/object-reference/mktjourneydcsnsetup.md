---
title: "MktJourneyDcsnSetup"
domain: object-reference
topic: mktjourneydcsnsetup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.915Z
estimatedTokens: 346
keywords: [MktJourneyDcsnSetup, collection, Marketing, Cloud, Engagement, journeys, interact, Salesforce, Flow, API, version, 65.0, later, Calls]
---

# MktJourneyDcsnSetup

> Represents a collection of Marketing Cloud Engagement journeys that you can
         interact with by using Salesforce Flow in Marketing Cloud. This object is available in
      API version 65.0 and later.

# MktJourneyDcsnSetup

Represents a collection of Marketing Cloud Engagement journeys that you can interact with by using Salesforce Flow in Marketing Cloud. This object is available in API version 65.0 and later.

You can use interaction data from a Marketing Cloud Engagement journey to trigger a Flow, or to configure decision activities in a Flow.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique Marketing Cloud business unit ID to use with the collection of journeys‌. This ID is configured in Marketing Cloud, and is different from the Member ID (MID) or Enterprise ID (EID) of your Marketing Cloud Engagement account.This field is a relationship field.Relationship NameBusinessUnitRefers ToBusinessUnit |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the collection of journeys. |
| EnterpriseIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Enterprise ID (EID) of your parent Marketing Cloud Engagement account. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA name for the collection of journeys. |
