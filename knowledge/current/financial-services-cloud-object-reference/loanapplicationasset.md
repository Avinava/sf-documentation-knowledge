---
title: "LoanApplicationAsset"
domain: financial-services-cloud-object-reference
topic: loanapplicationasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.000Z
estimatedTokens: 1788
keywords: [LoanApplicationAsset, borrower's, co-borrower's, current, personal, real, API, version, 47.0, later, Calls, Associated, Objects]
---

# LoanApplicationAsset

> Represents details about the borrower's and co-borrower's current personal
			and real property. This object is available in API version 47.0 and later.

# LoanApplicationAsset

Represents details about the borrower's and co-borrower's current personal and real property. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount number associated with financial institution holding asset. |
| AccountType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies asset account type.Possible values are:BondsBridge Loan ProceedsCash Value of Life InsuranceCertificate of DepositCheckingIndividual Development AccountMoney MarketMutual FundRetirementStock OptionsStocksTrust Account |
| AssetClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies which asset class total to include the asset's value in.Possible values are:FinancialOtherReal Estate |
| AssetExtIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies imported data in an external data source (if applicable). This field is unique within your organization. |
| AssetType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies type of other asset.Possible values are:Earnest MoneyEmployer AssistanceOtherProceeds from Real Estate Property to be sold on or before closingProceeds from Sale of Non-Real Estate AssetRent CreditSecured Borrowed FundsSweat EquityTrade EquityUnsecured Borrowed Funds |
| CashOrMarketValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAsset's cash or current market value. |
| DispositionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReal estate asset's planned future use.Possible values are:Pending SaleRetainedSold |
| FinancialInstitutionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of financial institution where financial account is held. |
| GrossMonthlyRentalIncome | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBorrower's monthly rent income collected on real estate asset. |
| IsJointAsset | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates asset is held jointly. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoanApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the loan application associated with this asset. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the loan application asset. |
| NetMonthlyRentalIncome | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBorrower's net monthly income on real estate asset. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record. |
| PresentMarketValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCash value of real estate asset if sold today. |
| RealEstateAddress | TypeaddressPropertiesFilter, NillableDescriptionReal estate asset's address. |
| RealEstateCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address city. |
| RealEstateCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address country. |
| RealEstateGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the address’s latitude and longitude coordinates. |
| RealEstateLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| RealEstateLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| RealEstateMonthlyExpense | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBorrower's monthly real estate asset expenses including insurance, maintenance, taxes, and miscellaneous costs. |
| RealEstatePostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address postal code. |
| RealEstateState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address state. |
| RealEstateStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address street. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LoanApplicationAssetFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LoanApplicationAssetHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LoanApplicationAssetOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LoanApplicationAssetShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LoanApplicationAssetFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- LoanApplicationAssetHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- LoanApplicationAssetOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LoanApplicationAssetShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
