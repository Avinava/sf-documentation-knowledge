---
title: "Required Tax Integration Fields"
domain: blng-dev
topic: required-tax-integration-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.985Z
estimatedTokens: 269
keywords: [Tax, Integration, records, require, several, Salesforce, Billing, communicate, engines, regardless, engine, Certain, mentioned]
---

# Required Tax Integration Fields

> All tax integration records require several Salesforce Billing fields to communicate
  with tax engines, regardless of tax engine type. Certain tax engines
  also
  require fields not mentioned
  here.

# Required Tax Integration Fields

All tax integration records require several Salesforce Billing fields to communicate with tax engines, regardless of tax engine type. Certain tax engines also require fields not mentioned here.

| Available in: All Salesforce Billing Editions |
| --- |


## Tax Integration Fields

If you need more fields to hold other information regarding your tax engine, add them on the tax integration object.

| Label | API Name | Notes |
| --- | --- | --- |
| Active | blng__Active__c | If this field is inactive, tax treatments won’t list this integration as a possible value for their Tax Integration field. |
| Default | blng__Default__c | Salesforce Billing uses the default tax integration for all tax calculations in your Salesforce Billing org. You can have only one default tax integration at once. |
| Tax Engine | blng__TaxEngine__c | Declares the type of tax engine that Salesforce Billing uses for tax calculation. Standard and Avalara AvaTax are available by default. If you’re using a different tax engine, add it as a picklist value. |
