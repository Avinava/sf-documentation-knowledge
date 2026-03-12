---
title: "ResidentialLoanApplication"
domain: financial-services-cloud-object-reference
topic: residentialloanapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.595Z
estimatedTokens: 3146
keywords: [ResidentialLoanApplication, loan, application, lender, API, version, 47.0, later, Calls, Associated, Objects]
---

# ResidentialLoanApplication

> Represents details about a loan application from the lender. This
		object is available in API version 47.0 and later.

# ResidentialLoanApplication

Represents details about a loan application from the lender. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account related to the loan application. |
| AmortizationTerm | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDuration of the loan in months. |
| AmortizationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAmortization type for the loan.Possible values are:Adjustable RateFixed RateOther |
| ApplicationExtIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies imported data in an external data source (if applicable). |
| BalloonTermMonths | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of months during which the cumulative loan must be repaid. |
| EstateHoldType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLender's lien is on both land and structure (fee simple) or just structure (leasehold).Possible values are:Fee SimpleLeasehold |
| HasOtherLoanFeature | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether loan has other amortization feature. |
| HasPrepaymentPenalty | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether penalty is incurred if borrower pays off loan balance before the loan term expires. |
| ImprovementCost | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionConstruction costs for a construction loan or home improvement costs for a renovation loan. |
| InitialBuydownRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInitial lesser interest rate for the loan. |
| IntOnlyTermMonthCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of months that loan payments are interest only. |
| InterestRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInterest rate for the loan. |
| IsBalloon | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is applying for a balloon payment mortgage. |
| IsBorrowerCommPropState | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether at least one borrower lives in a community property state. |
| IsConstructionConversion | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether loan proceeds to provide permanent financing replacing interim construction financing. |
| IsContractConversion | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether loan proceeds is to pay off balance due on a contract for deed or land contract. |
| IsEnergyRelImprovement | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether loan is to finance energy-related improvements. |
| IsInterestOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is applying for an interest-only mortgage. |
| IsNegativeAmortization | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether loan allows for negative amortization where shortfalls in interest payments are added to the outstanding loan balance. |
| IsPropertyCommPropState | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether property is located in a community property state. |
| IsRenovation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether loan proceeds to finance cost of renovations to the property, and renovation value is included in the property's appraised value. |
| IsSingleClosing | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether construction and permanent loans have a single combined closing. Once construction is complete, the loan converts to a traditional mortgage. |
| IsSubjectToPriorityLien | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether property is currently subject to an energy-related lien that could take priority over the first mortgage lien. |
| IsTempIntRateBuydown | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is applying for loan with an initially reduced interest payment in exchange for an up-front cash deposit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LeaseHoldExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when leasehold expires if land is leased. |
| LoanPurpose | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionWhat the borrower will use the loan for.Values are:OtherPurchaseRefinance |
| LotAcquiredDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the property or land was purchased. |
| LotOriginalCost | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOriginal property cost (refinance) or original land cost (construction). |
| MonthsBeforeFirstAdj | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of months before the first rate adjustment for an adjustable rate loan. |
| MonthsBetweenAdjustments | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of months between subsequent rate adjustments for an adjustable rate loan. |
| MortgageLienType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of mortgage lien associated with this loan application.Possible values are:First LienSubordinate Lien |
| MortgageProgramType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of mortgage program applied for.Values are:ConventionalFHAOtherUSDARuralHousingServiceVA |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the residential loan application. |
| NativeLandTenure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProperty is located on an area reserved by or for an Indian land, village, or tribe to live on and use.Possible values are:Alaska Native Corporation LandFee Simple (On a Reservation)Individual Trust Land (Allotted/Restricted)Tribal Trust Land (Off Reservation)Tribal Trust Land (On a Reservation) |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the opportunity associated with the loan application. |
| OtherAmortizationType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of other amortization type for government loans. |
| OtherLoanFeature | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of other loan amortization feature. |
| OtherLoanPurpose | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhat the borrower will use the loan for if other was specified. |
| OtherMortgageProgramType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the other mortgage type. |
| OtherRefinanceProgType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRefinance program name if other was specified. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record. |
| PrepayPenaltyTermMonth | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of months during which borrower incurs a penalty for early payoff of the loan balance. |
| ProjectType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of project that the property belongs to.Possible values are:CondominiumCooperativePlanned Unit Development(PUD)Property is not located in a project |
| RefinanceProgramType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe applicable refinance program type based on the investor, guarantor, or lender guidelines.Possible values are:Full DocumentationInterest Rate ReductionOtherStreamlined without Appraisal |
| RefinanceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRefinance loan type.Possible values are:Cash OutLimited Cash OutNo Cash Out |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the current status of the loan application.Possible values are:CompletedNewPending |
| TitleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWay the borrower or borrowers take title for the loan.Possible values are:Joint Tenancy with Right of SurvivorshipLife EstateOtherSole OwnershipTenancy by the EntiretyTenancy in Common |
| TotalFinLiabilityMonthlyAmt | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal monthly amount of borrowers' outstanding financial liabilities payments excluding real estate. |
| TotalFinancialAssetAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of borrowers' financial account assets excluding real estate. |
| TotalOtherAssetAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of borrowers' other assets excluding real estate. |
| TotalOtherFinLiabilityMonthlyAmt | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal monthly amount of borrowers' other monthly liability and expense payments excluding real estate. |
| TrustTitleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTitle to be held in a living trust or a land trust.Possible values are:Title Will be Held by a Land TrustTitle Will be Held by an Inter Vivos (Living) Trust |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ResidentialLoanApplicationFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ResidentialLoanApplicationHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ResidentialLoanApplicationOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ResidentialLoanApplicationShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ResidentialLoanApplicationFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ResidentialLoanApplicationHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ResidentialLoanApplicationOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ResidentialLoanApplicationShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
