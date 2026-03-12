---
title: "IndividualApplicationItem"
domain: object-reference
topic: individualapplicationitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.217Z
estimatedTokens: 700
keywords: [IndividualApplicationItem, Captures, individual, application, input, data, run-time, API, version, 58.0, later, Calls, Special, Access, Rules]
---

# IndividualApplicationItem

> Captures individual application input data that is used during run-time.
      This object is available in API version 58.0 and later.

# IndividualApplicationItem

Captures individual application input data that is used during run-time. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only with the EAndU Cloud Program Access permission set.

## Fields

| Field | Details |
| --- | --- |
| IndividualApplicationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Individual Application parent object associated with the Individual Application Item.This field is a relationship field.Relationship NameIndividualApplicationRelationship TypeLookupRefers ToIndividualApplication |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the object related to the Individual Application. |
| RelatedItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related object associated with the Individual Application Item.This field is a polymorphic relationship field.Relationship NameRelatedItemRelationship TypeLookupRefers ToBenefit, ProgramProduct |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the approval status of the Individual Application.Possible values are:ApprovedDeclinedIn ProgressPending |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IndividualApplicationItemChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[IndividualApplicationItemFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[IndividualApplicationItemHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[IndividualApplicationItemOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[IndividualApplicationItemShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
