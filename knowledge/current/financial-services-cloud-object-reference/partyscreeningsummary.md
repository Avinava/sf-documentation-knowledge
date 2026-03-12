---
title: "PartyScreeningSummary"
domain: financial-services-cloud-object-reference
topic: partyscreeningsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.322Z
estimatedTokens: 1741
keywords: [PartyScreeningSummary, individual, screening, party, API, version, 56.0, later, Calls, Associated, Objects]
---

# PartyScreeningSummary

> Represents information about the individual screening done for a party.
      This object is available in API version 56.0 and later.

# PartyScreeningSummary

Represents information about the individual screening done for a party. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe applicant that's associated with the party screening summary.This field is a relationship field.Relationship NameApplicantRefers ToApplicant |
| IsResultOverridden | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the party profile screening result was overridden.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the party screening summary record. |
| OverriddenById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who is responsible for overriding the party profile screening result.This field is a relationship field.Relationship NameOverriddenByRelationship TypeLookupRefers ToUser |
| OverriddenScreeningDecision | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the overridden result for a party after the screening is complete.Possible values are:ClearOn HoldRejected |
| OverrideDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the party profile screening was overridden. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party profile that's associated with the third-party profile screening.This field is a relationship field.Relationship NamePartyProfileRelationship TypeLookupRefers ToPartyProfile |
| ReportUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the report provided by the third-party profile screening agency. |
| RequestCompletionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the party profile screening request was completed. |
| ResultOverrideComment | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description about the party profile screening. |
| ResultOverrideReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason for overriding the party profile screening request.Possible values are:Manual Verification |
| ScreenedBy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the third-party that conducted the profile screening. |
| ScreeningDecision | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the result of the party profile screening.Possible values are:ClearOn HoldRejected |
| ScreeningRequestDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the screening request for the party profile was submitted. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the party profile screening request.Possible values are:CompletedIn ProgressInitiated |
| ThirdPartyScreeningResult | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe raw JSON or XML payload from the third-party screening system. |
| ThirdPartySreeningIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the profile screening record in the third-party profile screening system. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyScreeningSummaryChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PartyScreeningSummaryFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyScreeningSummaryHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyScreeningSummaryOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PartyScreeningSummaryShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartyScreeningSummaryChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- PartyScreeningSummaryFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PartyScreeningSummaryHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PartyScreeningSummaryOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PartyScreeningSummaryShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
