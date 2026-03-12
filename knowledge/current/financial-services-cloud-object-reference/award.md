---
title: "Award"
domain: financial-services-cloud-object-reference
topic: award
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.580Z
estimatedTokens: 1103
keywords: [Award, person's, organization's, professional, awards, Calls, Associated, Objects]
---

# Award

> Represents a person's or organization's professional awards.

# Award

Represents a person's or organization's professional awards.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the organization receiving the award.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AwardDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate award was received. |
| AwardedBy | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the issuing organization. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPerson who received the award and is listed as a contact.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHealthcare provider that this award is associated with.This field is a relationship field.Relationship NameHealthcareProviderRelationship TypeLookupRefers ToHealthcareProvider |
| Identifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIssuing organization's identifier for the award recipient. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionAward name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record.This field is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAward status. Example values:InactiveRevokedDraftVerified |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the person who received the award and is listed as a user.This field is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCurrent award status. Example values:AuthorizedPendingUnverified |
| VerifiedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAward was validated on this date. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AwardChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 61.0)

Change events are available for the object.

[AwardFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AwardHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[AwardOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[AwardShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
