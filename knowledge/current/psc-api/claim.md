---
title: "Claim"
domain: psc-api
topic: claim
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.784Z
estimatedTokens: 2065
keywords: [Claim, claims, life, auto, home, Calls, Special, Access, Rules, Associated, Objects]
---

# Claim

> Represents the types of claims, such as life, auto, or home.

# Claim

Represents the types of claims, such as life, auto, or home.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object on your Public Sector Solutions org, Benefit Disbursement must be enabled and you must have the Benefit Disbursement Access permission set or the Benefit Disbursement permission set license.

To access this object on your Experience Cloud site, users need the Benefit Assistance Community Access permission set or the Benefit Assistance for Communities permission set license.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account related to the claim.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActualAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual amount that was billed for the repair of damages. |
| ApprovedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount that was approved for the repair of damages based on an agent's inspection. |
| AssessmentDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the claim was officially assessed. |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the case that created the claim.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| ClaimReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for initiating the claim. |
| ClaimReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category that the claim reason belongs to. For example, natural disaster, accident.Picklist values aren't predefined for this field. Before you create a record, ensure that your Salesforce admin has defined picklist values based on your organization’s requirement. |
| ClaimType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the claim.Picklist values aren't predefined for this field. Before you create a record, ensure that your Salesforce admin has defined picklist values based on your organization’s requirement. |
| EstimatedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated cost of damages given by the owner or the repair shop. |
| FinalizedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the claim was marked resolved, with claim status as approved or rejected. |
| FnolChannel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe channel through which the loss was reported. |
| IncidentSite | TypeaddressPropertiesFilter, NillableDescriptionThe place where the accident took place.This is a compound field of type Address and combines these fields: IncidentSiteCity, IncidentSiteCountry, IncidentSiteGeocodeAccuracy, IncidentSiteLatitude, IncidentSiteLongitude, IncidentSitePostalCode, IncidentSiteState, and IncidentSiteStreet. For more information, see Address Compound Fields. |
| InitiationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the claim was initiated. |
| IsAuthoritiesNotified | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the authorities have been informed about the accident.The default value is false. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the claim has been closed.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LossDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the accident took place. |
| LossType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the loss for which the claim was initiated.Picklist values aren't predefined for this field. Before you create a record, ensure that your Salesforce admin has defined picklist values based on your organization’s requirement. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The claim number in the claims management system. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RenewalChannel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe channel through which the insurance policy associated with this claim was renewed. |
| ReportDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp for when the accident report was filled out. |
| ReportNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe number of the accident report. |
| ReportingAuthority | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the authority who filled out the accident report. |
| Severity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe severity of the claim.Picklist values aren't predefined for this field. Before you create a record, ensure that your Salesforce admin has defined picklist values based on your organization’s requirement. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique ID of this record in the source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the claim. |
| Summary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the claim. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe usage type of the record.Possible values are:AutomotiveManufacturing |
| VisitDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp for when the agent visited the site of the accident or the place where the vehicle was moved after the accident. |
| VisitSite | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe site that the agent visited. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClaimHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClaimShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ClaimFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- ClaimHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- ClaimShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
