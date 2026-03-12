---
title: "AdSpace"
domain: media-developer-guide
topic: adspace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.751Z
estimatedTokens: 1592
keywords: [AdSpace, row, inventory, item, product, media, channel, applicable, space, eligible, creative, size, targeting, API, version]
---

# AdSpace

> Each row represents information about an ad inventory item, such as related
         product, media type, media channel, applicable ad space, eligible creative size, and
         eligible targeting value.  This object is available in API version 65.0 and later.

# AdSpace

Each row represents information about an ad inventory item, such as related product, media type, media channel, applicable ad space, eligible creative size, and eligible targeting value. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdCreativeSizeTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ad creative size type associated with the ad space.This field is a relationship field.Relationship NameAdCreativeSizeTypeRefers ToAdCreativeSizeType |
| AdSpaceSpecificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ad space specification associated with the ad space.This field is a relationship field.Relationship NameAdSpaceSpecificationRefers ToAdSpaceSpecification |
| AdTargetCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ad target category associated with the ad space.This field is a relationship field.Relationship NameAdTargetCategoryRefers ToAdTargetCategory |
| AdTargetSegmentValueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ad target segment value associated with the ad space.This field is a relationship field.Relationship NameAdTargetSegmentValueRefers ToAdTargetSegmentValue |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:ARS—Argentine PesoCNY—Chinese YuanKRW—Korean WonRUB—Russian RoubleUSD—U.S. DollarThe default value is USD. |
| IneligibleIndustry | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the list of industries that the ad space is ineligible for.Possible values are:AgricultureApparelBankingBiotechnologyChemicalsCommunicationsConstructionConsultingEducationElectronicsEnergyEngineeringEntertainmentEnvironmentalFinanceFood & BeverageGovernmentHealthcareHospitalityInsuranceMachineryManufacturingMediaNot For ProfitOtherRecreationRetailShippingTechnologyTelecommunicationsTransportationUtilities |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location associated with the ad space.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| MaximumBookableQuantity | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum quantity of the ad space that can be booked by an advertiser or agency. |
| MediaChannelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe media channel associated with the ad space.This field is a relationship field.Relationship NameMediaChannelRefers ToMediaChannel |
| MediaContentTitleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe media content title associated with the ad space.This field is a relationship field.Relationship NameMediaContentTitleRefers ToMediaContentTitle |
| MediaPrintIssueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe media print issue associated with the ad space.This field is a relationship field.Relationship NameMediaPrintIssueRefers ToMediaPrintIssue |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the media type of the ad space.Possible values are:DigitalPrintRadioTV |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad space. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad space.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product associated with the ad space.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProgramRunType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the program run type that the ad space is eligible for.Possible values are:PremiereRegularRepeat |
| PublisherDayPart | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the publisher's part of the day that the ad space is for.Possible values are:Non-Prime TimePrime Time |
| SponsorshipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of sponsorship that the ad space is eligible for.Possible values are:Co Presented ByPresented BySponsored ByStandard |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unit of measure associated with the ad space.This field is a relationship field.Relationship NameUnitOfMeasureRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdSpaceFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdSpaceHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdSpaceShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
