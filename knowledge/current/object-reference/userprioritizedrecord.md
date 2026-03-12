---
title: "UserPrioritizedRecord"
domain: object-reference
topic: userprioritizedrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.881Z
estimatedTokens: 597
keywords: [UserPrioritizedRecord, records, Pipeline, Inspection, Account, Intelligence, Contact, Lead, users, flag, tracking, views, filters, API, version]
---

# UserPrioritizedRecord

> Represents records that Pipeline Inspection, Account Intelligence, Contact Intelligence, and Lead Intelligence users flag as important for tracking in pipeline and intelligence views and filters. This object is available in API version 53.0 and later.

# UserPrioritizedRecord

Represents records that Pipeline Inspection, Account Intelligence, Contact Intelligence, and Lead Intelligence users flag as important for tracking in pipeline and intelligence views and filters. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

To use UserPrioritizedRecord in Pipeline Inspection and the Account Intelligence, Contact Intelligence, and Lead Intelligence views, enable the Pipeline Inspection user permission and the Pipeline Inspection setting.

## Fields

| Field | Details |
| --- | --- |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who marked this record as important.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| TargetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the target object that is marked as important. Supported objects include:AccountContactLeadOpportunityThis field is a polymorphic relationship field.Relationship NameTargetRelationship TypeLookupRefers ToAccountContactLeadOpportunity |
| TargetKeyPrefix | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe key prefix of the target object that is marked as important. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UserPrioritizedRecordOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[UserPrioritizedRecordShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- UserPrioritizedRecordOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- UserPrioritizedRecordShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
