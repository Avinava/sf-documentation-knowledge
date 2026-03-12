---
title: "Create Application Form Applicant"
domain: omnistudio
topic: create-application-form-applicant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.907Z
estimatedTokens: 378
keywords: [Create, Application, Form, Applicant, Output, representation, request, create, application, form, applicant.]
---

# Create Application Form Applicant

> Output representation of the request to create the application form
    applicant.

# Create Application Form Applicant

Output representation of the request to create the application form applicant.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| applicantId | String | Applicant ID associated to the application form. | Small, 61.0 | 61.0 |
| partyCredit​Profile | String[] | Credit scores for the party. | Small, 61.0 | 61.0 |
| partyExpense | String[] | Expense details for the party. | Small, 61.0 | 61.0 |
| partyFinancial​Asset | Create Application Form Party Financial Asset[] | Party financial asset associated to the application form applicant. | Small, 61.0 | 61.0 |
| partyFinancial​Liability | Create Application Form Party Financial Liability[] | Party financial liability associated to the application form applicant. | Small, 61.0 | 61.0 |
| partyIdentity​Verification | Create Application Form Party Identity Verification[] | Party identity verification associated to the application form applicant. | Small, 61.0 | 61.0 |
| partyIncome | String[] | Income details for the party. | Small, 61.0 | 61.0 |
| partyProfile​Address | String[] | Details about the address of the party. | Small, 61.0 | 61.0 |
| partyProfileId | String | Party profile ID associated to the application form. | Small, 61.0 | 61.0 |
| partyProfile​Risk | String[] | Details about the risk assessment done for a party. | Small, 61.0 | 61.0 |
| person​Employment | String[] | Details about a person’s employment. | Small, 61.0 | 61.0 |

## Related Topics

- Create Application Form Party Financial Asset (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_create_app_form_party_financial_asset_output.htm)
- Create Application Form Party Financial
                Liability (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_create_app_form_party_financial_liability_output.htm)
- Create Application Form Party Identity
                Verification (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_create_app_form_party_identity_verification_output.htm)
