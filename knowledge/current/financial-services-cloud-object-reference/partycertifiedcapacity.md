---
title: "PartyCertifiedCapacity"
domain: financial-services-cloud-object-reference
topic: partycertifiedcapacity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.108Z
estimatedTokens: 1756
keywords: [PartyCertifiedCapacity, captured, certificate, capacity, party's, work, timeline, recovery, API, version, 56.0, later, Calls, Associated, Objects]
---

# PartyCertifiedCapacity

> Represents the information captured from the certificate of capacity, such as the party's capacity to work, a timeline for recovery, and return to work. This object is available in API version 56.0 and later.

# PartyCertifiedCapacity

Represents the information captured from the certificate of capacity, such as the party's capacity to work, a timeline for recovery, and return to work. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Capacity | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of capacity the party is able to work. |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Claim associated with the Party Certified Capacity.This field is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Possible values are:AED—UAE DirhamCAD—Canadian DollarGBP—British PoundJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the period the certificate is effective for. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the period the certificate is effective for. |
| ExpectedWorkReturnDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected date the party returns to work. |
| FullCapacityFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the party has the full capacity to work. |
| IssueDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date the certificate was issued. |
| IssuerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Issuer of the Party Certified Capacity.This field is a polymorphic relationship field.Relationship NameIssuerRelationship TypeLookupRefers ToAccount, Contact, HealthcareProvider |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the party certified capacity. |
| NoCapacityEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the certified period in which the party has no capacity to work. |
| NoCapacityStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the certified period in which the party has no capacity to work. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe Owner associated with the Party Certified Capacity.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartialCapacityEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the certified period in which the party has some capacity to work. |
| PartialCapacityStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the certified period in which the party has some capacity to work. |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Party associated with the Party Certified Capacity.This field is a polymorphic relationship field.Relationship NamePartyRelationship TypeLookupRefers ToAccount, ClaimParticipant, Contact |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the certificate.Possible values are:ActiveExpiredPending ApprovalSubmitted |
| UsageType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionInternal field. Specifies the application using the entity to populate data.Possible values are:Claim |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyCertifiedCapacityChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 63.0 and later.

[PartyCertifiedCapacityFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyCertifiedCapacityHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyCertifiedCapacityOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartyCertifiedCapacityShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartyCertifiedCapacityChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- PartyCertifiedCapacityFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PartyCertifiedCapacityHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PartyCertifiedCapacityOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PartyCertifiedCapacityShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
