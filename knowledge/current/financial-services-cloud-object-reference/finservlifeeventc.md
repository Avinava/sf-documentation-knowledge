---
title: "FinServ_LifeEvent__c"
domain: financial-services-cloud-object-reference
topic: finservlifeeventc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.893Z
estimatedTokens: 409
keywords: [FinServ_LifeEvent__c, client’s, life, event, birth, marriage, FinServ, _LifeEvent, Calls]
---

# FinServ_LifeEvent__c

> Represents a client’s life event, such as a birth or
        marriage.

# FinServ\_LifeEvent\_\_c

Represents a client’s life event, such as a birth or marriage.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Client__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndividual the life event is related to. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies is enabled, contains the currency ISO code associated with the record. |
| DiscussionNote__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNotes from past discussions. |
| EventDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the life event. |
| EventType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of life event. Valid values:CollegeNew BabyNew BusinessNew HomeNew JobRetirement |
| FinancialGoal__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFinancial goal that the life event is related to. |
| GoalType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of financial goal implied by the life event. Valid values:Saving for CollegeSaving for Retirement |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the goal in an external data source. |
