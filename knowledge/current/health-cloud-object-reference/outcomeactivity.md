---
title: "OutcomeActivity"
domain: health-cloud-object-reference
topic: outcomeactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.740Z
estimatedTokens: 734
keywords: [OutcomeActivity, junction, Outcome, that's, activity, undertaken, organization, achieve, API, version, 59.0, later, Calls, Special, Access]
---

# OutcomeActivity

> Represents a junction between Outcome and the object that's related
         to the activity undertaken by an organization to achieve that outcome. This object is
      available in API version 59.0 and later.

# OutcomeActivity

Represents a junction between Outcome and the object that's related to the activity undertaken by an organization to achieve that outcome. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available in products where the Health Cloud Foundation (for Health Cloud) or Health Cloud Starter (for Life Sciences Cloud), and Patient Program Outcome Management permission sets are assigned to users.

## Fields

| Field | Details |
| --- | --- |
| CareProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care program associated with the outcome activity.This field is a relationship field.This field is available in API version 61.0 and later with the Patient Program Outcome Management permission set.Relationship NameCareProgramRelationship TypeLookupRefers ToCareProgram |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a user last referenced this outcome activity. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a user last viewed this outcome activity. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the outcome activity. |
| OutcomeActivityType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of activity that's associated with the outcome, such as care program.Possible values are:Care Program —This value is available from API version 61.0 and later. |
| OutcomeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe outcome that's associated with the outcome activity.This field is a relationship field.Relationship NameOutcomeRelationship TypeMaster-DetailRefers ToOutcome |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OutcomeActivityFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[OutcomeActivityHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
