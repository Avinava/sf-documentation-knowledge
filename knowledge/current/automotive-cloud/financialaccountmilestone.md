---
title: "FinancialAccountMilestone"
domain: automotive-cloud
topic: financialaccountmilestone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.233Z
estimatedTokens: 1309
keywords: [FinancialAccountMilestone, events, lifecycle, financial, account, API, version, 60.0, later, Calls, Associated, Objects]
---

# FinancialAccountMilestone

> Represents the events in the lifecycle of a financial account. This
      object is available in API version 60.0 and later.

# FinancialAccountMilestone

Represents the events in the lifecycle of a financial account. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe address associated with the milestone. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city where the milestone occurred. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the milestone occurred. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the milestone. |
| ExpiredDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expiration date of the milestone. |
| FinancialAccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the financial account that's associated with the milestone.This field is a relationship field.Relationship NameFinancialAccountRelationship TypeMaster-detailRefers ToFinancialAccount (the master object) |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the milestone location’s latitude and longitude coordinates.Possible values are:AddressBlockCityCountyExtendedZip—Extended ZipNearAddress—Near AddressNeighborhoodStateStreetUnknownZip |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the milestone location. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the location associated with the milestone.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the milestone location. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| MilestoneDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date on which the milestone occurred. |
| MilestoneType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of milestone.Possible values are:Asset RepossessedBeneficiary AddedDebt Charged OffMarked DelinquentPayment DeferredTitle Transferred |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the milestone. |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the location where the milestone occurred. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the milestone in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external system from where the record was imported. |
| Stage | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the stage of the milestone.Possible values are:ActiveExpiredTentative |
| StageComment | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe comments about the stage of the milestone. For example, the reason for marking the milestone as tentative. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state where the milestone occurred. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street where the milestone occurred. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the financial account milestone.Possible values are:Automotive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinancialAccountMilestoneFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[FinancialAccountMilestoneHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
