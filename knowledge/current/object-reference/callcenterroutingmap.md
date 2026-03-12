---
title: "CallCenterRoutingMap"
domain: object-reference
topic: callcenterroutingmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.954Z
estimatedTokens: 539
keywords: [CallCenterRoutingMap, Stores, mapping, user, queue, Salesforce, org, external, system’s, call, center, API, version, 53.0, later]
---

# CallCenterRoutingMap

> Stores a mapping between a user or queue in a Salesforce org to a user or
         queue in an external system’s call center. This object is available in API version
      53.0 and later.

# CallCenterRoutingMap

Stores a mapping between a user or queue in a Salesforce org to a user or queue in an external system’s call center. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Access to standard objects requires Salesforce admin privileges or the Customize Application permission.

Access to call center routing map records requires Contact Center Admin, Contact Center Admin (Partner Telephony), Contact Center Supervisor, or Manage Call Centers permission.

## Fields

| Field | Details |
| --- | --- |
| CallCenterId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to a call center.This is a relationship field.Relationship NameCallCenterRelationship TypeLookupRefers ToCallCenter |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name is a combination of the Salesforce user ID or queue name, and the call center ID, with an underscore between these two values.[SALESFORCE_USER_ID]_[CALL_CENTER_ID][SALESFORCE_QUEUE_NAME]_[CALL_CENTER_ID] |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique identifier for the external system’s user or queue. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the MasterLabel. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe master label of the CallCenterRoutingMap. |
| QuickConnect | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Amazon Connect QuickConnectId ARN used to determine agent availability for Omni-Channel call transfers. Available in API version 56.0 and later.This is a polymorphic relationship field. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionLookup field to a Salesforce user or queue.This is a polymorphic relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToGroup, User |
