---
title: "FinServ_FinancialAccount__c"
domain: financial-services-cloud-object-reference
topic: finservfinancialaccountc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.133Z
estimatedTokens: 4632
keywords: [FinServ_FinancialAccount__c, financial, account, investment, bank, insurance, policy, FinServ, _FinancialAccount, Calls]
---

# FinServ_FinancialAccount__c

> Represents a financial account such as an investment account, bank
   account, or insurance policy.

# FinServ\_FinancialAccount\_\_c

Represents a financial account such as an investment account, bank account, or insurance policy.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccrualFrequency__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency the interest is accrued on the financial account.Possible values are:AnnualDailyMonthlyQuarterlyThe default value is Daily. |
| AccruedInterest__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe interest accrued on the financial account in the current statement period. |
| Address1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet address line 1 for mailing address. |
| Address2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet address line 2 for mailing address. |
| ApplicationDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when this individual submitted the financial account application. |
| APY__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAnnual percentage yield. (Can be fractional.) |
| AssetRebalance__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Sort, UpdateDescriptionIndicates whether automatic portfolio rebalancing applies to this financial account (true) or not (false). |
| AvailableCredit__c | TypecurrencyPropertiesCreate, , Filter, Nillable, Sort, UpdateDescriptionTotal current available credit for this financial account. |
| AverageBalance__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionAverage amount of money in the financial account, over a time period. |
| Balance__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionAmount of money in the financial account. |
| BalanceLastStatement__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionAccount balance posted on last statement. |
| BookedDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate charge or credit booked to account. |
| BranchCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe branch code of the financial account. |
| BranchName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe branch name of the financial account. |
| CashBalance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCash available in the financial account. |
| CashLimit__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMaximum cash withdrawal or advance amount. |
| City__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity for mailing address. |
| CloseDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when this financial account was closed. |
| CollateralDesc__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of collateral provided for loan. |
| Country__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry for mailing address. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies is enabled, contains the currency ISO code associated with the record. |
| CurrentPostedBalance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCurrent posted balance in account. |
| DailyWithdrawalLimit__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount that can be withdrawn in one day. |
| Description__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the financial account. |
| Discretionary__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the advisor has discretionary trading authority for this financial account (true) or not (false). |
| DrawPeriodMonths__c | TypedoublePropertiesCreateFilter, Nillable, SortUpdateDescriptionNumber of months an individual can withdraw funds from a credit account. |
| EscrowBalance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCurrent balance in escrow account. |
| ExpectedCloseDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExpected date when the debit account or loan closes. |
| FinancialAccountChargesAndFees__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Charges and Fees record for the account. |
| FinancialAccountNumber__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the financial account in an external data source. Label is Account Number. |
| FinancialAccountSource__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionData source. Label is Source. Valid values:IntegratorManual EntryPending |
| FinancialAccountType__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of financial account. Label is Type. Valid values:401(a)401(k)403(b)529 PlanBrokerageCash Management AccountCDCheckingCredit CardDiscount BrokerageFixed AnnuityIndividual LifeIRAMutual FundProfit SharingRollover IRARoth IRASavingsTerm LifeVariable LifeWhole Life |
| HardwareSerial__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe serial number of hardware associated with the account. |
| HeldAway__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this financial account is managed or administered externally (true) or in-house (false). |
| HoldingCount__c | TypedoublePropertiesFilter, Nillable, SortDescriptionNumber of holdings within this financial account. Calculated by roll-up summary. Label is Number of Holdings. |
| Household__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHousehold that this financial account rolls up to. |
| IncomingVolume__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe volume of transactions coming in through the service. |
| InsurancePaidYearToDate__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of insurance paid in the current tax year. |
| InsuredAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe insured value that an insurance policy covers. |
| InterestBalance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe interest balance on the financial account. |
| InterestPaidYearToDate__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of interest paid in the current tax year. |
| InsurancePolicy__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy associated with this financial account. |
| InterestRate__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInterest rate as a percent. |
| InvestmentObjectives__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionPurpose of this financial account. Valid values:SafetyIncomeGrowthTax OptimizationLiquidity |
| JointOwner__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionJoint owner of this financial account. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionTimestamp for when this financial account last had a task or event action associated with the record. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed a record related to this record. |
| LastTransactionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for the last transaction on the account. |
| LastUpdated__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTimestamp for when data for the financial account was last updated by an external data source. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the current user last viewed this record. |
| LienHolder__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of lien holder on the financial account. |
| LoanAmount__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionAmount of the loan. |
| LoanEndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionEnd date for the loan. |
| LoanTermMonths__c | TypedoublePropertiesCreateFilter, Nillable, SortUpdateDescriptionLoan term in months. |
| Managed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this financial account is managed or administered (true), or not (false). |
| MinimumBalance__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMinimum balance requirement for this financial account. |
| MinimumPayment__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMinimum monthly payment on account. |
| ModelPortfolio__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionModel asset allocation for the financial account. Valid values:ConservativeModerateBalancedGrowthAggressive |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the financial account. |
| NickName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNickname of the financial account. |
| OpenDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the financial account was opened. |
| OutgoingVolume__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe volume of transactions going out through the service. |
| OverDraftAllowed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the financial account allows an overdraft (true) or not (false). |
| OverDraftLinkedAccount__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the linked overdraft account. |
| OverdraftProtection__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the customer accepts overdraft protection and its associated fees. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the financial account record. |
| Ownership__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of ownership for the account. Valid values:IndividualJointTrust |
| OwnerType__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndividual’s ownership role (primary or joint) for the account. |
| PaperlessDelivery__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAccount owner elects to receive electronic delivery of financial account documents (true) or not (false). |
| PaymentAmount__c | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionMinimum monthly payment on account. |
| PaymentDueDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when payment due on the account. |
| PaymentFrequency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFrequency of payments on the account. Valid values:WeeklyBiweeklyMonthlyQuarterlySemiannuallyAnnually |
| PendingDeposits__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDeposits pending on the account. |
| PendingWithdrawals__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionWIthdrawals pending on the account. |
| Performance1Yr__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPerformance measured over the past year. |
| Performance3Yr__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPerformance measured over the past three years. |
| PerformanceMTD__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPerformance measured over the past month-to-date. |
| PerformanceQTD__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPerformance measured over the past quarter-to-date. |
| PerformanceYTD__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPerformance measured over the past calendar year-to-date. |
| PolicyTerm__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe period of coverage provided by the policy. |
| PostalCode__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal code for mailing address. |
| Premium__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount paid to the insurer for insurance policy coverage. |
| PrimaryBankerIdentifier__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the primary banker who manages the financial account. |
| PrimaryBankerName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the primary banker who manages the financial account. |
| PrimaryOwner__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPrimary owner of the financial account. |
| PrincipalBalance__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPrincipal balance on the loan account. |
| PrincipalPaidYearToDate__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount paid against the principal in the current tax year. |
| ProductName__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPolicy product name. |
| PropTaxPaidYearToDate__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of property tax paid in the current tax year. |
| RebalanceFrequency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFrequency of portfolio rebalancing for this financial account. Valid values:MonthlyQuarterlySemiannuallyAnnually |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type associated with this financial account. |
| RecordTypeName__c | TypestringPropertiesFilter, Nillable, SortDescriptionRecord type for this financial account. The value is copied from RecordType.Name and can’t be changed. Label is Record Type. |
| RenewalDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when insurance policy renewal is due. |
| RepaymentPeriodMonths__c | TypedoublePropertiesCreateFilter, Nillable, SortUpdateDescriptionRepayment period in months. |
| RoutingNumber__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBank routing number. |
| SecondaryBankerIdentifier__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the secondary banker who manages the financial account. |
| SecondaryBankerName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the secondary banker who manages the financial account. |
| ServiceProvider__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCustodian or recordkeeper of this financial account. |
| ServiceType__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe type of service undertaken. |
| SourceSystemId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies the financial account in an external data source. |
| State__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState for mailing address. |
| StatementFrequency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFrequency statements are issued. Valid values:MonthlyBiweeklyQuarterlyAnnually |
| Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of this financial account. Valid values:OpenClosedOn HoldPending |
| TargetLimit__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe limit on items or value that the service processes. |
| TaxID__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTax Identification Number associated with this financial account. |
| TaxStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of tax treatment this financial account qualifies for. Valid values:NonqualifiedQualified |
| TermDepositMaturityDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date a fixed term deposit matures. |
| TimeHorizon__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInvestment time frame for this financial account. Valid values:Long TermMedium TermShort Term |
| TotalCreditLimit__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal credit limit. |
| TotalHoldAmountAsOfDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the total hold amount is relevant. |
| TotalHoldAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total hold amount on the financial account. |
| Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of account. Valid values:BrokerageDiscount BrokerageCDCheckingCash Management AccountCredit CardSavingsMutual Fund, Fixed AnnuityVariable AnnuityManaged AccountIndividual LifeTerm LifeVariable LifeWhole Life |
