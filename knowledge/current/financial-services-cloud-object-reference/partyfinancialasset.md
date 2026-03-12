---
title: "PartyFinancialAsset"
domain: financial-services-cloud-object-reference
topic: partyfinancialasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.167Z
estimatedTokens: 1758
keywords: [PartyFinancialAsset, financial, asset, owned, individual, account, API, version, 61.0, later, Calls, Special, Access, Rules, Associated]
---

# PartyFinancialAsset

> Represents information about the financial asset owned by an
         individual or account. This object is available in API version 61.0 and
      later.

# PartyFinancialAsset

Represents information about the financial asset owned by an individual or account. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This is a standard object and is available only when you turn on the Financial Account Management Standard Objects setting.

## Fields

| Field | Details |
| --- | --- |
| ApplicantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe applicant associated with the financial asset.This field is a relationship field.Relationship NameApplicantRelationship TypeLookupRefers ToApplicant |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset owned by the party.This field is a polymorphic relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, contains the currency ISO code associated with the record.Valid value is USD.The default value is USD. |
| DeclarationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the asset is declared. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the asset. |
| IsLienExisting | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicate whether there is a lien on the financial asset.The default value is false. |
| IsReadOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the party financial asset is read only (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| MakeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe make name of the asset. |
| ModelName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model name of the asset. |
| ModelYear | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model year of the asset. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the party financial asset. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the party financial asset record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| OwnershipEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the ownership of the asset ends. |
| OwnershipPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe share owned by the party in percentage. |
| OwnershipStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the ownership of the asset starts. |
| OwnershipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ownership type of the asset.Valid values are:IndividualJoint |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party that owns the asset.This field is a polymorphic relationship field.Relationship NamePartyRelationship TypeLookupRefers ToAccount, Applicant, Contact, PartyProfile |
| PartyProfileId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe party profile that owns the financial asset.This field is a relationship field.Relationship NamePartyProfileRefers ToPartyProfile |
| PayoffDueAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe payoff due amount of the party financial asset. |
| PledgeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the party pledges as a collateral against a financial asset. |
| PurchaseAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the party paid for the financial asset. |
| SerialNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe serial number of the financial asset. |
| SourceSystemIdentifier | Typeexternal lookupPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the party asset in an external system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the asset.Valid values are:ActiveInactive |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of asset. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe usage type of the party financial asset.Valid values are:CashFlow—Cash FlowClaimVehicleAndAssetLoanOrigination—Loan Origination |
| ValuationAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe worth of the asset after valuation. |
| VerificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the asset valuation was done. |
| ValuationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the asset valuation was done. |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe verification status of the party financial asset. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[partyfinancialassetFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[partyfinancialassetHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- partyfinancialassetFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- partyfinancialassetHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
