---
title: "CareProviderAdverseAction"
domain: health-cloud-object-reference
topic: careprovideradverseaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.478Z
estimatedTokens: 1773
keywords: [CareProviderAdverseAction, Captures, adverse, actions, against, provider, malpractice, lawsuits, revoked, licences, API, version, 47.0, later, Calls]
---

# CareProviderAdverseAction

> Captures adverse actions against the provider, such as malpractice lawsuits or revoked licences. This object is available in API version 47.0 and later.

# CareProviderAdverseAction

Captures adverse actions against the provider, such as malpractice lawsuits or revoked licences. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account this adverse action is associated with. |
| AccreditationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe accreditation that might be affected by this adverse action. |
| ActionIssueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the adverse action was issued by the regulatory authority. |
| ActionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of adverse action that is being taken.Possible values are:AdministrativeDisciplinaryActionCourtOrderFelonyConvictionMalpracticeJudgementMisdemeanorConvictionProbationaryLicense |
| BoardCertificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe board certification that might be affected by this adverse action |
| BusinessLicenseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business license that might be affected by this adverse action. |
| CaseNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case number associated with this adverse action. |
| CourtSentence | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe final sentence by the governing court, if any. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSummary of the adverse action. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this Adverse Action is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this Adverse Action is no longer effective. |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHealthcareProvider that this Adverse Action is associated with |
| IncidentDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the incident took place that resulted in the adverse action. |
| IncidentReportedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the incident was reported to the regulatory authority. |
| InsurancePolicyNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of the insurance policy associated with an adverse action. |
| InsuranceProviderName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the insurance provider that issued the policy associated with an adverse action. |
| Jurisdiction | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the court or goverment body that issued the legal determination. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the adverse action that is being taken. |
| PenaltyAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe penalty amount imposed for an adverse action. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionTime stamp that indicates when the current user last viewed this record. |
| PractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe practitioner this adverse action record is associated with. |
| RegulatoryBody | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the regulatory authority to which the incident was reported. |
| RegulatoryBodyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of regulatory authority to which the incident was reported. |
| ReportingEntity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the entity or organization that reported this action. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique record ID in source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the license or certification, such as "revoked" or "suspended."Possible values are:ActiveRevokedSuspended |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareProviderAdverseActionChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[CareProviderAdverseActionFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareProviderAdverseActionHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CareProviderAdverseActionChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CareProviderAdverseActionFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareProviderAdverseActionHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
