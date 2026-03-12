---
title: "FinServ Account Custom Fields"
domain: financial-services-cloud-object-reference
topic: finserv-account-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.829Z
estimatedTokens: 5027
keywords: [FinServ, Account, Custom, individual, pertains, their, dealings, firm, review, frequency, service, tier, extend, standard, Financial]
---

# FinServ Account Custom Fields

> Represents information about an individual that pertains to their
   dealings with your firm, such as their review frequency or service tier. Custom fields extend the
   standard Account object for use in Financial Services Cloud.

# FinServ Account Custom Fields

Represents information about an individual that pertains to their dealings with your firm, such as their review frequency or service tier. Custom fields extend the standard Account object for use in Financial Services Cloud.

## Fields

| Field Name | Details |
| --- | --- |
| AssetCategory__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe subcategory of asset type. Possible values are:AllocationAlternativeCommoditiesInternational EquityMunicipal BondSector EquityTaxable BondU.S. Equity |
| AssetCategoryName__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe market capitalization and investing style. Possible values are:Large GrowthLarge ValueLarge BlendSmall GrowthSmall ValueSmall BlendMid-Cap GrowthMid-Cap ValueMid-Cap Blend |
| AssetClass__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe major category of asset type. Possible values are:Alternative InvestmentsCash EquivalentsEquitiesFixed Income |
| AUM__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionValue of this individual’s financial accounts that your firm manages. Calculated as the sum of TotalAUMPrimaryOwner__c and TotalAUMJointOwner__c. |
| BankNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies a financial institution for electronic purposes. |
| BorrowingHistory__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRating of this individual’s borrowing history.Valid values:ExcellentModeratePoorLimited to No History |
| IsDisputed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the financial transaction is a disputed transaction. |
| BorrowingPriorities__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPrimary goal for loan application.Valid values:Build EquityDebt ConsolidationEducationInvestmentsLarge Capital PurchasesProperty PurchaseRenovations |
| BranchCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies an office or building of a financial institution. Code format is based on the financial institution.Record type for this account. The value is copied from RecordType.Name and can’t be changed. |
| BranchName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLocation name for a financial institution office.Record type for this account. The value is copied from RecordType.Name and can’t be changed. |
| ClaimsOnHouseholdPolicies__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of claims raised for the active policies that the policyholder's primary household owns. |
| ClientCategory__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRates the value of this individual’s business with your firm. Label is Category. Valid values:PlatinumGoldSilverBronzeInvestments |
| CreatedByMe__c | TypeintegerPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the user contact was converted from this lead. |
| CreditRating__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAssessment of creditworthiness.Valid values:ExcellentGoodFairPoor |
| CreditScore__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumerical rating of borrower’s creditworthiness. |
| ConversionDateTime__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time and date on which the lead was converted. |
| CustomerID__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFinancial institution's identification number for this individual (80 characters)Record type for this account. The value is copied from RecordType.Name and can’t be changed. |
| CustomerSegment__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionIndividual’s market segment. Valid values:BorrowerLong-Term GrowthMass AffluentMass MarketMillennialTransactionalWealth Accumulation |
| CustomerType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndividual’s financial category.Valid values:BorrowerInvestorRelationalTransaction |
| DisputeReason__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionReason for the dispute. Valid values are:Duplicate TransactionsTransaction not recognizedSuspected FraudOthers |
| EventLocation__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the life event occurred. This is a compound field of type Address and combines these fields:EventLocationCityEventLocationCountryEventLocationGeocodeAccuracyEventLocationLatitudeEventLocationLongitudeEventLocationPostalCodeEventLocationStateEventLocationStreet |
| FinancialAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the financial account, such as an investment account, bank account, or insurance policy, that is associated with this case. |
| FinancialInterests__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThis individual’s financial areas of interest. Valid values:Municipal BondsFixed IncomeEnergyTechnologyCRMAAPLGOOGRetirementCollege Planning |
| Household__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe household with which this opportunity is associated. |
| HouseholdPolicies__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of active policies that the policyholder's primary household owns. |
| IndividualId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRead only. Unique ID that relates this individual’s account record to its contact record. |
| IndividualType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of individual. Valid values:IndividualGroup(Blank) - If this value is blank, then the Individual Type is Business.NoteThis field is for Salesforce internal-use only. This field can’t be changed. |
| InvestmentExperience__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis individual’s investment experience. Valid values:ExperiencedModerately ExperiencedModerately InexperiencedInexperienced |
| InvestmentObjectives__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThis individual’s preference for growth versus income investments. Valid values:Conservative IncomeIncomeBalancedGrowthAggressive Growth |
| KYCDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the Know Your Customer compliance program was completed for this individual. |
| KYCStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the Know Your Customer compliance program for a specific individual. |
| LastInteraction__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the last meeting or call. |
| LastReview__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the last review. |
| LastTransactionDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the last transaction. |
| LastTransactionDateJointOwner__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the last transaction - joint owner. |
| LastTransactionDatePrimaryOwner__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the last transaction - primary owner. |
| LastUsedChannel__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionMost recent contact channel. Valid values:BranchCall CenterMobileWebOther |
| LengthOfRelationship__c | TypedoublePropertiesFilter, Nillable, SortDescriptionIndividual’s tenure with the financial institution. |
| LifetimeValue__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndividual’s lifetime net asset value to your financial institution. |
| MarketingSegment__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionMarket segments that characterize this individual. Valid values:Mass AffluentHigh Net WorthFemale InvestorMillennial |
| NetWorth__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionValue of this individual’s assets minus liabilities. |
| NextInteraction__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the next meeting or call. |
| NextReview__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the next review. |
| NextStatementDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the next statement. |
| Notes__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionImportant notes about the individual. Label is Important Notes. |
| PersonalInterests__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionPersonal areas of interest. Valid values:CookingCollege BasketballEnvironmentHikingBikingWine |
| PrimaryContact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRead only. ID of the contact record associated with this individual’s account record. |
| RecordTypeName__c | TypestringPropertiesFilter, Nillable, SortDescriptionRecord type for this account. The value is copied from RecordType.Name and can’t be changed. |
| ReferredByContact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExternal contact referring this individual. |
| ReferredByUser__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInternal Salesforce user who made the referral. |
| RelationshipStartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate this individual started working with your company. |
| ReviewFrequency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFrequency of reviews. Valid values:MonthlyQuarterlyAnnually |
| RiskTolerance__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLevel of risk this individual is comfortable with. Valid values:AggressiveConservativeModerateNone |
| ServiceModel__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionService level assigned to this individual. Valid values:Tier 1Tier 2Tier 3 |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies this individual in an external data source. |
| Stage__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the stage of the deal. Possible values are:ClosedExecutionMandatePitch |
| Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndividual’s status with your firm. Valid values:ActiveClosedDeceasedDelinquentDormantInactiveOnboardingProspect |
| TimeHorizon__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndividual’s investment time frame. Valid values:Long TermMedium TermShort Term |
| TotalAUMJointOwner__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value of financial accounts that your company manages, for which this individual is the joint owner of jointly owned accounts. |
| TotalAUMPrimaryOwner__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value of financial accounts that your company manages, for which this individual is the primary owner of either separately owned or jointly owned accounts. |
| TotalBankDeposits__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionValue of this individual’s accounts. Calculated as the sum of TotalBankDepositsPrimaryOwner__c and TotalBankDepositsJointOwner__c. |
| TotalBankDepositsJointOwner__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value of accounts, for which this individual is the joint owner of jointly owned accounts. |
| TotalBankDepositsPrimaryOwner__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value of accounts, for which this individual is the primary owner of either separately owned or jointly owned accounts. |
| TotalClaimAmountPaid__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount paid for all claims for the active policies for a policyholder's primary household. |
| TotalFinAcctsJointOwner__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal value of financial account balances (excluding insurance policies), for which this individual is the joint owner of jointly owned accounts. Label is Total Financial Accounts Joint Owner. |
| TotalFinAcctsPrimaryOwner__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal value of financial account balances (excluding insurance policies), for which this individual is the primary owner of either separatley owned or jointly owned accounts. Label is Total Financial Accounts Primary Owner. |
| TotalFinancialAccounts__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionValue of all financial accounts, excluding insurance policies. Calculated as the sum of TotalBankDeposits__c and TotalInvestments__c. |
| TotalHeldFinAcctsJointOwner__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal value of held financial account balances, for which this individual is the joint owner of jointly owned accounts. Label is Total Held Financial Accounts Joint. |
| TotalHeldFinAcctsPrimaryOwner__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal value of held financial account balances, for which this individual is the primary owner of either separately owned or jointly owned accounts. Label is Total Held Financial Accounts Primary. |
| TotalHouseholdPremiums__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total premiums for all active policies for a policyholder's primary household. |
| TotalInsurance__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionValue of this individual’s insurance policies. Calculated as the sum of TotalInsurancePrimaryOwner__c and TotalInsuranceJointOwner__c. |
| TotalInsuranceJointOwner__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value of insurance policies, for which the individual is the joint owner of jointly owned accounts. |
| TotalInsurancePrimaryOwner__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value of insurance policies, for which the individual is the primary owner of either separately owned or jointly owned accounts. |
| TotalInvestments__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionValue of investment accounts. Calculated as the sum of TotalInvestmentsPrimaryOwner__c and TotalInvestmentsJointOwner__c. |
| TotalInvestmentsJointOwner__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value of investment accounts, for which the individual is the joint owner of jointly owned accounts. |
| TotalInvestmentsPrimaryOwner__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value of investment accounts, for which the individual is the primary owner of either separately owned or jointly owned accounts. |
| TotalLiabilities__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionValue of individual’s liabilities, stored as a negative value. Calculated as the sum of TotalLiabilitiesPrimaryOwner__c and TotalLiabilitiesJointOwner__c. |
| TotalLiabilitiesJointOwner__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value of liabilities, for which this individual is the joint owner of jointly owned liabilities. |
| TotalLiabilitiesPrimaryOwner__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value of liabilities, for which this individual is the primary owner of either separately owned or jointly owned liabilities. |
| TotalNonfinancialAssets__c | TypedoublePropertiesFilter, Nillable, SortDescriptionValue of tangible assets such as collectibles or precious metals. Calculated as the sum of TotalNonfinancialAssetsPrimaryOwner__c and TotalNonfinancialAssetsJointOwner__c. |
| TotalNonfinancialAssetsJointOwner__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value of tangible assets such as collectibles or precious metals, for which this individual is the joint owner of jointly owned assets. |
| TotalNonfinancialAssetsPrimaryOwner__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value of tangible assets such as collectibles or precious metals, for which this individual is the primary owner of either separately owned or jointly owned assets. |
| TotalNumberOfFinAccounts__c | TypeIntegerPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal numbers of financial accounts that are managed by a specific firm. |
| TotalNumberOfFinAccountsJointOwner__c | TypeIntegerPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal numbers of financial accounts for which the client is a joint owner. |
| TotalNumberOfFinAccountsPrimaryOwner__c | TypeIntegerPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal numbers of financial accounts for which the client is the primary owner. |
| TotalOutstandingCredit__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionValue of a client's total outstanding credit from the financial accounts that are managed by a specific firm. |
| TotalOutstandingCreditJointOwner__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionValue of the total outstanding credit for which the client is a joint owner from the financial accounts that are managed by a specific firm. |
| TotalOutstandingCreditPrimaryOwner__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionValue of the total outstanding credit for which the client is the primary owner from the financial accounts that are managed by a specific firm. |
| TotalPremium__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPolicyholder’s total annual premium. |
| TotalRevenue__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal amount of revenue for a client. |
| TransactionSubtype__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSubtype of transaction, such as:Cash DepositOn-Us Check DepositTransit Check DepositForeign Cash DepositBill PaymentEFTATM DepositATM WithdrawalPOS withdrawalMisc. CreditMisc. DebitLoan PaymentMortgage PaymentCredit Card PaymentCredit Card Cash AdvanceInternal Funds TransferReversalInterest EarnedFeeMerchant Charge |
| WaiverReason__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason for waiving the charges or fees, such as:Duplicate fees chargedFees DiscoveryMaintain customer relationshipNotification not receivedOthers |
| WalletShare__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRead only. Percentage of this individual’sfinancial assets that your company manages or administers. Calculated as the percent of financial accounts that are held (FinancialAccount__c.HeldAway is false). |
