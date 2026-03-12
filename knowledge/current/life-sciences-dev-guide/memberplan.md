---
title: "MemberPlan"
domain: life-sciences-dev-guide
topic: memberplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.557Z
estimatedTokens: 1779
keywords: [MemberPlan, insurance, coverage, member, subscriber, Calls, Associated, Objects]
---

# MemberPlan

> Represents details about the insurance coverage for a member or
			subscriber.

# MemberPlan

Represents details about the insurance coverage for a member or subscriber.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

The primary member on the plan is called the subscriber. The other members are dependents.

## Supported Calls

create(),  delete(),  describeLayout(),  describeSObjects(),  getDeleted(),  getUpdated(),  query(),  retrieve(),  search(),  undelete(),  update(),  upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Affiliation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn affiliation to a government service, such as the army or navy. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this member plan is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this member plan ceases to be effective. |
| ExternalIDentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier used to identify the record outside the Salesforce org. |
| GroupNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group number or policy number of the primary member. |
| IssuerNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference number for the issuer of the plan. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastVerification | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this plan was last verified. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the member’s record. |
| MemberNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe member’s reference number for this plan. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name by which the member knows this plan. |
| Notes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes about this member plan. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| PayerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the payer’s Account object record. |
| PayerNetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payer insurance plan or network that is associated with the patient. This field is a relationship field.Relationship NamePayerNetworkRelationship TypeLookupRefers ToHealthcarePayerNetwork |
| PlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup of the Purchaser Plan ID. |
| PrimaryCarePhysician | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the physician providing primary care under this plan. |
| PrimarySecondaryTertiary | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhether this plan is the primary, secondary, or tertiary plan. |
| RelationshipToSubscriber | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe relationship of this member to the plan’s subscriber. Valid options are:SelfSpouseChildUnknownOther Relationship |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this plan record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this plan record on its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this plan record was last changed on the source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the plan is active. |
| SubscriberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the subscriber’s record. |
| VerificationStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the plan’s verification. Valid options are:Active - VerifiedRejectedNot CheckedUnknownInactive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MemberPlanChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 57.0)

Change events are available for the object.

[MemberPlanFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MemberPlanHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[MemberPlanOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[MemberPlanShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- MemberPlanChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- MemberPlanFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- MemberPlanHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- MemberPlanOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- MemberPlanShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
