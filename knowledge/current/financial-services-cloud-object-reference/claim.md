---
title: "Claim"
domain: financial-services-cloud-object-reference
topic: claim
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.704Z
estimatedTokens: 2233
keywords: [Claim, claims, life, auto, home, Calls, Associated, Objects]
---

# Claim

> Represents the types of claims, such as life, auto, or home.

# Claim

Represents the types of claims, such as life, auto, or home.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account related to the claim. |
| ActualAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual amount that was billed for the repair of damages. |
| ApprovedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount that was approved for the repair of damages based on an agent's inspection. |
| AssessmentDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the claim was officially assessed. |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the case that created the claim. |
| ClaimLossDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date and time when the incident took place.Available in API version 66.0 and later. |
| ClaimReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for initiating the claim. |
| ClaimReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category that the claim reason belongs to. For example, natural disaster, accident. |
| ClaimType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the claim. For example, home, auto, annuity, life, or workers’ compensation. |
| EstimatedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated cost of damages given by the owner or the repair shop. |
| FinalizedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the claim was marked resolved, with claim status as approved or rejected. |
| FinancialAuthorityStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the financial authority status of the claim.Possible values are:Authority ApprovedAuthority DeniedNo Authority PendingPending Authority |
| FnolChannel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe channel through which the loss was reported.Possible values are:ChatbotMobilePhoneWeb |
| IncidentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe incident to which a claim pertains. For example, a claim associated with a catastrophe. This field is available in API version 54.0 and later.This is a relationship field.Relationship NameIncidentRelationship TypeLookupRefers ToIncident |
| IncidentSite | TypeaddressPropertiesFilter, NillableDescriptionThe place where the incident took place.This is a compound field of type Address and combines these fields: IncidentSiteCity, IncidentSiteCountry, IncidentSiteGeocodeAccuracy, IncidentSiteLatitude, IncidentSiteLongitude, IncidentSitePostalCode, IncidentSiteState, and IncidentSiteStreet. For more information, see Address Compound Fields. |
| InitiationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the claim was initiated. |
| InsuredAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the asset that is insured. |
| IsAuthoritiesNotified | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the authorities have been informed about the incident. The default value is False. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the claim has been closed. The default value is False. |
| IsDrivable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the vehicle is drivable after the incident. The default value is False. |
| IsInhabitable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the property is inhabitable after the incident. The default value is False. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LossDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the incident took place. |
| LossType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the loss for which the claim was initiated. For example, partial loss, repair, replacement. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe claim number in the claims management system. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner. |
| PolicyNumberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the parent insurance policy related to the claim. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product that's associated with the claim. This field is available from API version 65.0 and later. |
| RecordSource | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the source application context for the record.Available in API version 66.0 and later.Possible values are:DigitalInsuranceNull |
| RenewalChannel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe channel through which the insurance policy associated with this claim was renewed. This field is deprecated in API version 48.0 and will be removed in API version 52 (the Summer ’21 release).Possible values are:ChatbotMobilePhoneWeb |
| RepairShop | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the repair shop where the damaged vehicle was repaired. |
| RepairShopLocation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe location of the repair shop where the damaged vehicle was repaired. |
| ReportDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp for when the incident report was filled out. |
| ReportNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe number of the incident report. |
| ReportingAuthority | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the authority who filled out the incident report. |
| Severity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe severity of the claim. For example, high, medium, or low. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this record in the source system. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the claim. |
| Summary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the claim. |
| VisitDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe timestamp for when the agent visited the site of the incident or the place where the vehicle was moved after the incident. |
| VisitSite | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe site that the agent visited. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ClaimChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 63.0 and later.

## Related Topics

- ClaimChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
