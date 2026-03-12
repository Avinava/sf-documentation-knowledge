---
title: "FinServ Task Custom Fields"
domain: financial-services-cloud-object-reference
topic: finserv-task-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.907Z
estimatedTokens: 234
keywords: [FinServ, Task, Custom, associated, client, extend, standard, Financial, Services, Cloud]
---

# FinServ Task Custom Fields

> Represents a task associated with a client. Custom fields extend the
   standard Task object for use in Financial Services Cloud.

# FinServ Task Custom Fields

Represents a task associated with a client. Custom fields extend the standard Task object for use in Financial Services Cloud.

## Fields

| Field Name | Details |
| --- | --- |
| Expectations__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExpectations that this task relates to. |
| Household__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the household associated with the individual. |
| NextSteps__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNext steps for this task. |
| Objectives__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionObjectives that this task relates to. |
| Regarding__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe nature of this task. Valid values:ProspectingOnboardingClient RetentionService |
