---
title: "LoanApplicationProperty"
domain: financial-services-cloud-object-reference
topic: loanapplicationproperty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.042Z
estimatedTokens: 1379
keywords: [LoanApplicationProperty, loan, application, finances, API, version, 47.0, later, Calls, Associated, Objects]
---

# LoanApplicationProperty

> Represents details of the property the loan application finances. This
		object is available in API version 47.0 and later.

# LoanApplicationProperty

Represents details of the property the loan application finances. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ExpMonthlyRentalIncome | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEstimated gross monthly rental income per unit if application property is a two to four unit primary residence or investment property. |
| ExpNetMonthlyRentalInc | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEstimated net monthly rental income per unit if application property is a two-to-four unit primary residence or investment property. |
| IsManufacturedHome | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether application property is a manufactured home. |
| IsMixedUseProperty | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether application property includes commercial space set aside for business use. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoanApplicationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLoan application associated with this property. |
| LoanPurposeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionWhat the borrower will use the loan for.Possible values are:OtherPurchaseRefinance |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the loan application property. |
| PropertyAddress | TypeaddressPropertiesFilter, NillableDescriptionPhysical address of the property to be financed. |
| PropertyCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address city. |
| PropertyCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address country. |
| PropertyExtIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies imported data in an external data source (if applicable). This field is unique within your organization. |
| PropertyGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the address’s latitude and longitude coordinates. |
| PropertyLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| PropertyLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| PropertyPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address postal code. |
| PropertyState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address state. |
| PropertyStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address street. |
| PropertyUseType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBorrower's stated use for the property.Possible values are:FHA Secondary ResidenceInvestment PropertyPrimary ResidenceSecondary Residence |
| PropertyValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEstimated present market value of the application property. |
| RequestedLoanAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal loan amount the borrower is applying for. |
| UnitsFinancedCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of units being financed at this address. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LoanApplicationPropertyFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LoanApplicationPropertyHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LoanApplicationPropertyFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- LoanApplicationPropertyHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
