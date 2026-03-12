---
title: "FinancialGoalParty"
domain: financial-services-cloud-object-reference
topic: financialgoalparty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.279Z
estimatedTokens: 249
keywords: [FinancialGoalParty, junction, financial, goal, person, account, API, version, 59.0, later, Calls]
---

# FinancialGoalParty

> Represents a junction between the financial goal and the person account.
      This object is available in API version 59.0 and later.

# FinancialGoalParty

Represents a junction between the financial goal and the person account. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account to which the financial goal party is associated.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| FinancialGoalId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe financial goal to which the financial goal party is associated.This field is a relationship field.Relationship NameFinancialGoalRelationship TypeLookupRefers ToFinancialGoal |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the financial goal party. |
