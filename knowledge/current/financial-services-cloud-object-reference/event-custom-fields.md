---
title: "Event Custom Fields"
domain: financial-services-cloud-object-reference
topic: event-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.890Z
estimatedTokens: 243
keywords: [Event, Custom, associated, client, extend, standard, Financial, Services, Cloud]
---

# Event Custom Fields

> Represents an event associated with a client. Custom fields extend the
   standard Event object for use in Financial Services Cloud.

# Event Custom Fields

Represents an event associated with a client. Custom fields extend the standard Event object for use in Financial Services Cloud.

## Fields

| Field Name | Details |
| --- | --- |
| Expectations__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClient expectations that this event relates to. |
| Household__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the household associated with the client. |
| NextSteps__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNext steps for this client event. |
| Objectives__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClient objectives that this event relates to. |
| Regarding__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe nature of the most recent interaction. Valid values:ProspectingOnboardingClient RetentionService |
