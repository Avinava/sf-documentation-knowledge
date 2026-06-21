---
title: "Salesforce Pricing Metadata"
domain: revenue-cloud
topic: salesforce-pricing-metadata
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-06-21T00:39:53.746Z
estimatedTokens: 953
keywords: [Salesforce, Pricing, Metadata, deployment, Revenue, Cloud, including, setup, paths, configuration]
---

> This table provides the metadata deployment reference for Salesforce Pricing in Revenue
    Cloud, including setup paths and configuration details.

# Salesforce Pricing Metadata

This table provides the metadata deployment reference for Salesforce Pricing in Revenue Cloud, including setup paths and configuration details.

| Type | Label | Setup Path | Details |
| --- | --- | --- | --- |
| Setup | Context Service | Context Service > Context Service Settings | Enable. This is a prerequisite to Salesforce Pricing settings. |
| Setup | Salesforce Pricing Settings | Setup > Salesforce Pricing > Salesforce Pricing Settings | Enable |
| Setup | Pricing Recipes | Setup > Salesforce Pricing > Pricing Recipes |  |
| Setup | Salesforce Pricing Setup | Setup > Salesforce Pricing > Salesforce Pricing Setup |  |
| Field | Select a Pricing Recipe | Setup > Salesforce Pricing > Salesforce Pricing Setup |  |
| Field | Select a Pricing Procedure | Setup > Salesforce Pricing > Salesforce Pricing Setup |  |
| Flag | Sync Pricing Data | Setup > Salesforce Pricing > Salesforce Pricing Setup | Decision tables are refreshed. |
| Flag | Activate Price Waterfall for API Responses | Setup > Salesforce Pricing > Salesforce Pricing Setup |  |
| Flag | Turn On Price Waterfall Persistence | Setup > Salesforce Pricing > Salesforce Pricing Setup |  |
| Field | Price Tracking History | Setup > Salesforce Pricing > Salesforce Pricing Setup | Includes two fields of type flag. 1. Enable Maximum Price 2. Enable Minimum Price |
| Field | Proration Settings | Setup > Salesforce Pricing > Salesforce Pricing Setup | Includes two fields of type field. 1. Evergreen 2. One Time |
| Flag | Turn On Price Logs Capture | Setup > Salesforce Pricing > Salesforce Pricing Setup |  |
| Flag | Turn on Parallel Execution | Setup > Salesforce Pricing > Salesforce Pricing Setup |  |
| Setup | Procedure Plan Definition | Procedure Plan Setup > Procedure Plan Definitions | For Procedure Plan definitions, if Apex is selected, the Apex class must be migrated. Packaging isn't supported in Winter' 26. See Customize Your Procedure Plans With Apex Hooks. |
| Permission Sets | Salesforce Pricing Admin | Setup > Users > Permission Sets |  |
| Permission Sets | Salesforce Pricing Design Time User | Setup > Users > Permission Sets |  |
| Permission Sets | Salesforce Pricing Manager | Setup > Users > Permission Sets |  |
| Permission Sets | Salesforce Pricing Run Time User | Setup > Users > Permission Sets |  |
| Decision Table Definition | Asset Action Source Entries | Setup > Decision Table |  |
| Decision Table Definition | Asset Action Source Entries V2 | Setup > Decision Table |  |
| Decision Table Definition | Attribute Discount Entries | Setup > Decision Table |  |
| Decision Table Definition | Bundle Based Adjustment Entries | Setup > Decision Table |  |
| Decision Table Definition | Contract Pricing Adjustment Tiers | Setup > Decision Table |  |
| Decision Table Definition | Contract Pricing Entries | Setup > Decision Table |  |
| Decision Table Definition | Contract Pricing Volume Tiers | Setup > Decision Table |  |
| Decision Table Definition | Contract Pricing Volume Tiers V2 | Setup > Decision Table |  |
| Decision Table Definition | Derived Pricing Entries | Setup > Decision Table |  |
| Decision Table Definition | Index Rate | Setup > Decision Table |  |
| Decision Table Definition | Price Book Entries | Setup > Decision Table |  |
| Decision Table Definition | Price Book Entries V2 | Setup > Decision Table |  |
| Decision Table Definition | Pricebook Rate Card Entries | Setup > Decision Table |  |
| Decision Table Definition | Product Price Range Entries | Setup > Decision Table |  |
| Decision Table Definition | Product Price Range Entries V2 | Setup > Decision Table |  |
| Decision Table Definition | Tiered Adjustment Entries | Setup > Decision Table |  |
| Decision Table Definition | Volume Discount Entries | Setup > Decision Table |  |
