---
title: "Mortgage Information Output"
domain: financial-services-cloud-object-reference
topic: mortgage-information-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.613Z
estimatedTokens: 2111
keywords: [Mortgage, Output]
---

# Mortgage Information Output

> Represents the output of the GET method.

# Mortgage Information Output

Represents the output of the GET method.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Account associated with the application. | Small, 48.0 | 48.0 |
| amortizationTerm | Double | Duration of the amortization in months. | Small, 48.0 | 48.0 |
| amortizationType | String | Amortization type for loan. | Small, 48.0 | 48.0 |
| assets | Asset Output[] | Represents details about the borrower's and co-borrower's current personal and real property. | Big, 48.0 | 48.0 |
| balloonTermMonths | Double | Number of months during which the cumulative loan must be repaid. | Small, 48.0 | 48.0 |
| borrowers | Borrower Output[] | List of borrowers for the loan application. | Big, 48.0 | 48.0 |
| createdById | String | ID of the user who created this record. | Small, 48.0 | 48.0 |
| createdDate | String | Date and time when this record was created. | Small, 48.0 | 48.0 |
| estateHoldType | String | Lender's lien is on both land and structure (fee simple) or just structure (leasehold). | Small, 48.0 | 48.0 |
| extendedFields | Extended Fields Output[] | Represents custom fields related to a loan application. | Big, 48.0 | 48.0 |
| externalId | String | Identifier assigned to imported data by external data source (if applicable). | Small, 48.0 | 48.0 |
| financials | Financial Output[] | Represents transaction details for a loan application. | Big, 48.0 | 48.0 |
| hasOtherLoanFeature | Boolean | Indicates whether loan has other amortization feature. | Small, 48.0 | 48.0 |
| hasPrepaymentPenalty | Boolean | Indicates whether penalty is incurred if borrower pays off loan balance before the loan term expires. | Small, 48.0 | 48.0 |
| id | String | ID of the mortgage record. | Small, 48.0 | 48.0 |
| improvementCost | Double | Construction costs for a construction loan or home improvement costs for a renovation loan. | Small, 48.0 | 48.0 |
| initialBuydownRate | Double | Initial lesser interest rate for the loan. | Small, 48.0 | 48.0 |
| interestOnlyMonthCount | Double | Number of months that loan payments are interest only. | Small, 48.0 | 48.0 |
| interestRate | Double | Interest rate for loan. | Small, 48.0 | 48.0 |
| isBalloon | Boolean | Indicates whether borrower is applying for a balloon payment mortgage. | Small, 48.0 | 48.0 |
| isBorrowerInCommunityPropState | Boolean | Indicates whether the borrower lives in community property state. | Small, 48.0 | 48.0 |
| isConstructionToPermanent | Boolean | Indicates whether at least one borrower lives in a community property state. | Small, 48.0 | 48.0 |
| isContractForDeed | Boolean | Indicates whether loan proceeds is to pay off balance due on a contract for deed or land contract. | Small, 48.0 | 48.0 |
| isDeleted | Boolean | Indicates whether the record is deleted. | Small, 48.0 | 48.0 |
| isEnergyRelatedImprovement | Boolean | Indicates whether loan is to finance energy-related improvements. | Small, 48.0 | 48.0 |
| isInterestOnly | Boolean | Indicates whether borrower is applying for an interest-only mortgage. | Small, 48.0 | 48.0 |
| isNegativeAmortization | Boolean | Indicates whether loan allows for negative amortization where shortfalls in interest payments are added to the outstanding loan balance. | Small, 48.0 | 48.0 |
| isPropInCommunityPropState | Boolean | Indicates whether property is located in a community property state. | Small, 48.0 | 48.0 |
| isRenovation | Boolean | Indicates whether loan proceeds to finance cost of renovations to the property, and renovation value is included in the property's appraised value. | Small, 48.0 | 48.0 |
| isSingleClosing | Boolean | Indicates whether construction and permanent loans have a single combined closing. Once construction is complete, loan converts to a traditional mortgage. | Small, 48.0 | 48.0 |
| isSubjectToPriorityLien | Boolean | Indicates whether property is currently subject to an energy-related lien that could take priority over the first mortgage lien. | Small, 48.0 | 48.0 |
| isTempIntRateBuydown | Boolean | Indicates whether borrower is applying for loan with an initially reduced interest payment in exchange for an up-front cash deposit. | Small, 48.0 | 48.0 |
| lastModifiedById | String | ID of the user who last modified this record. | Small, 48.0 | 48.0 |
| lastModifiedDate | String | Date and time when a user last modified this record. | Small, 48.0 | 48.0 |
| lastReferencedDate | String | Date and time when a user last referenced this record. | Small, 48.0 | 48.0 |
| lastViewedDate | String | Date and time when a user last viewed this record. | Small, 48.0 | 48.0 |
| leaseHoldExpirationDate | String | Date when leasehold expires if land is leased. | Small, 48.0 | 48.0 |
| liabilities | Liability Output[] | Represents details about the borrower and co-borrower current liabilities. | Big, 48.0 | 48.0 |
| loanPurpose | String | Purpose of the loan. | Small, 48.0 | 48.0 |
| lotAcquiredDate | String | Month and year property or land was purchased. | Small, 48.0 | 48.0 |
| lotOriginalCost | Double | Original property cost (refinance) or original land cost (construction). | Small, 48.0 | 48.0 |
| monthsBeforeFirstAdj | Double | Initial period prior to first adjustment in months. | Small, 48.0 | 48.0 |
| monthsBetweenAdjustments | Double | Number of months before the first rate adjustment for an adjustable rate loan. | Small, 48.0 | 48.0 |
| mortgageLienType | String | Type of mortgage lien associated with this loan application. | Small, 48.0 | 48.0 |
| mortgageProgramType | String | Type of mortgage program applied for. | Small, 48.0 | 48.0 |
| name | String | Name of the residential loan application. | Small, 48.0 | 48.0 |
| nativeLandTenure | String | Property is located on an area reserved by or for an Indian land, village, or tribe to live on and use. | Small, 48.0 | 48.0 |
| opportunityId | String | Opportunity associated with the application. | Small, 48.0 | 48.0 |
| otherAmortizationType | String | Description of other amortization type for government loans. | Small, 48.0 | 48.0 |
| otherLoanFeature | String | Description of other loan amortization feature. | Small, 48.0 | 48.0 |
| otherLoanPurpose | String | What the borrower will use the loan for if other was specified. | Small, 48.0 | 48.0 |
| otherMortgageProgramType | String | Description of the other mortgage type. | Small, 48.0 | 48.0 |
| otherRefinanceProgType | String | Refinance program name if other was specified. | Small, 48.0 | 48.0 |
| ownerId | String | ID of the user who owns this record. | Small, 48.0 | 48.0 |
| prepayPenaltyTermMonth | Double | Number of months during which borrower incurs a penalty for early payoff of the loan balance. | Small, 48.0 | 48.0 |
| projectType | String | Specifies the type of project that the property belongs to. | Small, 48.0 | 48.0 |
| properties | Property Output[] | Represents details of the property the loan application finances. | Big, 48.0 | 48.0 |
| refinanceProgramType | String | The applicable refinance program type based on the investor, guarantor, or lender guidelines. | Small, 48.0 | 48.0 |
| refinanceType | String | Refinance loan type. | Small, 48.0 | 48.0 |
| status | String | Indicates the current status of the loan application. | Small, 48.0 | 48.0 |
| systemModstamp | String | Represents details of borrowers who are applying to hold title to the property the loan application finances. | Small, 48.0 | 48.0 |
| titleHolders | Title Holder Output[] | Way the borrower or borrowers take title for the loan. | Big, 48.0 | 48.0 |
| titleType | String | Number of months during which borrower incurs a penalty for early payoff of the loan balance. | Small, 48.0 | 48.0 |
| totalFinLiabilityMonthlyAmt | Double | Total monthly amount of borrowers' outstanding financial liabilities payments excluding real estate. | Small, 48.0 | 48.0 |
| totalFinancialAssetAmount | Double | Total amount of borrowers' financial account assets excluding real estate. | Small, 48.0 | 48.0 |
| totalOtherAssetAmount | Double | Total amount of borrowers' other assets excluding real estate. | Small, 48.0 | 48.0 |
| totalOtherLiabilityMonthlyAmt | Double | Total monthly amount of borrowers' other monthly liability and expense payments excluding real estate. | Small, 48.0 | 48.0 |
| trustTitleType | String | Title to be held in a living trust or a land trust. | Small, 48.0 | 48.0 |

## Related Topics

- Asset Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_mortgage_asset_output.htm)
- Borrower Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_borrower_output.htm)
- Extended Fields Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_extended_fields_output.htm)
- Financial Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_mortgage_financial_output.htm)
- Liability Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_mortgage_liability_output.htm)
- Property Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_mortgage_property_output.htm)
- Title Holder Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_mortgage_title_holder_output.htm)
