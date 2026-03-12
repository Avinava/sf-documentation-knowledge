---
title: "LoanApplicantAddress"
domain: financial-services-cloud-object-reference
topic: loanapplicantaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.936Z
estimatedTokens: 1190
keywords: [LoanApplicantAddress, borrower's, co-borrower's, current, address, API, version, XX.0, later, Calls, Associated, Objects]
---

# LoanApplicantAddress

> Represents borrower's or co-borrower's current address information.
		This object is available in API version XX.0 and later.

# LoanApplicantAddress

Represents borrower's or co-borrower's current address information. This object is available in API version XX.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AddressExtIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies imported data in an external data source (if applicable). This field is unique within your organization. |
| AddressOwnership | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies borrower's status at residence.Possible values are:Live Rent-FreeOwnRent |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoanApplicantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionBorrower associated with this applicant address. |
| LoanApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLoan application associated with this applicant address. |
| MonthlyRentPayment | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBorrower's monthly rent payment (if applicable). |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the borrower’s address. |
| ResidenceAdditionalMonthCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional months borrower lived at this residence. |
| ResidenceAddress | TypeaddressPropertiesFilter, NillableDescriptionResidence's physical address. |
| ResidenceCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address city. |
| ResidenceCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address country. |
| ResidenceGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the address’s latitude and longitude coordinates. |
| ResidenceLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| ResidenceLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| ResidencePostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address postal code. |
| ResidenceState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address state. |
| ResidenceStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address street. |
| ResidenceYearCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionYears borrower lived at this residence. |
| ResidencyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies borrower's residency status at address.Possible values are:Former ResidenceMailing AddressPresent Address |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LoanApplicantAddressFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LoanApplicantAddressHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LoanApplicantAddressFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- LoanApplicantAddressHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
