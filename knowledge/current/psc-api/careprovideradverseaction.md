---
title: "CareProviderAdverseAction"
domain: psc-api
topic: careprovideradverseaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.741Z
estimatedTokens: 1637
keywords: [CareProviderAdverseAction, Captures, adverse, actions, against, provider, malpractice, lawsuits, revoked, licenses, Calls, Special, Access, Rules, Associated]
---

# CareProviderAdverseAction

> Captures adverse actions against the provider, such as malpractice
      lawsuits or revoked licenses.

# CareProviderAdverseAction

Captures adverse actions against the provider, such as malpractice lawsuits or revoked licenses.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Provider Management is enabled in your org. To access the object, you need the Provider Management Access permission set or the Provider Management permission set license. Partner users need the Provider Management for Partner permission set or permission set license.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account this adverse action is associated with. |
| AccreditationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe accreditation that might be affected by this adverse action. |
| ActionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of adverse action that is being taken.Possible values are:AdministrativeDisciplinaryActionCourtOrderFelonyConvictionMalpracticeJudgementMisdemeanorConvictionProbationaryLicense |
| BoardCertificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe board certification that might be affected by this adverse action |
| BusinessLicenseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business license that might be affected by this adverse action. |
| CaseNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case number associated with this adverse action. |
| CourtSentence | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe final sentence by the governing court, if any. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSummary of the adverse action. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this Adverse Action is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this Adverse Action is no longer effective. |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHealthcareProvider that this Adverse Action is associated with |
| Jurisdiction | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the court or goverment body that issued the legal determination. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the adverse action that is being taken. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionTime stamp that indicates when the current user last viewed this record. |
| PractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe practitioner this adverse action record is associated with. |
| ReportingEntity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the entity or organization that reported this action. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique record ID in source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the license or certification, such as "revoked" or "suspended."Possible values are:ActiveRevokedSuspended |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareProviderAdverseActionChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[CareProviderAdverseActionFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareProviderAdverseActionHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareProviderAdverseActionOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CareProviderAdverseActionShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareProviderAdverseActionChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- CareProviderAdverseActionFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- CareProviderAdverseActionHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- CareProviderAdverseActionOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- CareProviderAdverseActionShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
