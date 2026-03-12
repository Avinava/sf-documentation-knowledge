---
title: "Complaint Info Wrapper"
domain: financial-services-cloud-object-reference
topic: complaint-info-wrapper
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.296Z
estimatedTokens: 644
keywords: [Complaint, Info, Wrapper, Input, representation]
---

# Complaint Info Wrapper

> Input representation of the complaint details.

# Complaint Info Wrapper

Input representation of the complaint details.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account associated with the complainant. | Optional | 58.0 |
| additionalInfo | Map<String, Generic Object Wrapper> | Additional details of the complaint. | Optional | 58.0 |
| complaintSubType | String | Subtype of the complaint. Possible values are:Account Opening/ClosureAttempts to Collect Debt not OwedAuto Debit MandateCash not DispensedCommunication TacticsCredit Limit ChangedCredit Report / Credit ScoreDelays / TimescalesDisputes over sum/chargesErrors / not following instructionsFraud HandlingInaccessible ATMsInaccessible Branch EntrancesInaccessible WebsiteInaccessible Mobile banking featuresMisleading AdvertisingMobile Banking - Features or FunctionalityNo Written Notification About DebtOnline Banking Features or FunctionalityOther General Admin/Customer ServiceOthersProblem when Making PaymentsProduct Disclosure InformationProduct Performance/FeaturesUnauthorized Transaction(s)Unclear ArrangementUnclear GuidanceUnsuitable Advice | Required | 58.0 |
| complaintType | String | Type of the complaint. Possible values are:Accessibility IssuesAdvising, Selling and ArrangingDigital or TechnologyFinancial Hardships or CollectionsGeneral Admin/ Customer ServiceInformation, sums/charges or product performanceLending / CreditMarketing or Corporate CommunicationsOthersTransaction Related | Required | 58.0 |
| description | String | Description of the complaint. | Optional | 58.0 |
| email | String | Email ID of the complainant. | Optional | 58.0 |
| incidentDate | String | Date the complaint-related incident occurred. | Required | 58.0 |
| priority | String | Priority of the complaint. Possible values are:CriticalHighLowMediumThe default value is Medium. | Optional | 58.0 |
| productType | String | Product type related to the complaint. Possible values are:ATM / debit cardCredit Card or Prepaid CardInsuranceInvestmentsMerchant ServicesMobile / electronic bankingMoney transfers, virtual currency, and money servicesMortgage / Home FinanceOtherPersonal Loan / other loansVehicle loan or lease | Optional | 58.0 |
| receivedDate | String | Date of reporting for the complaint. | Required | 58.0 |
| status | String | Resolution status of the complaint. Possible values are:In ReviewPendingResolvedSubmittedThe default value is Submitted. | Optional | 58.0 |
| subject | String | Subject of the complaint. | Optional | 58.0 |

## Related Topics

- Generic Object Wrapper (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_generic_object_wrappe.htm)
