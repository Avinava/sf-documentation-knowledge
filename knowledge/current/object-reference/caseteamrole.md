---
title: "CaseTeamRole"
domain: object-reference
topic: caseteamrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.350Z
estimatedTokens: 234
keywords: [CaseTeamRole, case, team, role, Every, member, “Customer, Contact”, “Case, Manager.”, Calls, Special, Access, Rules]
---

# CaseTeamRole

> Represents a case team role. Every
        case team member has a role on a case, such as “Customer Contact” or
        “Case Manager.”

# CaseTeamRole

Represents a case team role. Every case team member has a role on a case, such as “Customer Contact” or “Case Manager.”

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only users with read access to the Case object can access this object.

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA value that represents the type of access granted to the target Group for cases. The possible values are:NoneReadEdit |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the case team role. |
| PreferencesVisibleInCSP | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether or not the case team role is visible to Customer Portal users. |
