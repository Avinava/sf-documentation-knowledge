---
title: "Datacloud Purchase Usage"
domain: chatterapi
topic: datacloud-purchase-usage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:18.312Z
estimatedTokens: 196
keywords: [Datacloud, Purchase, Data.com, organization, credits, Monthly, Listpool, users]
---

> Information about the Data.com purchase usage for an organization.
      Shows the credits that are used and available for Monthly and Listpool users.

# Datacloud Purchase Usage

Information about the Data.com purchase usage for an organization. Shows the credits that are used and available for Monthly and Listpool users.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| listpool​CreditsAvailable | Integer | Listpool credits that are available for all users in the Listpool group. | Small, 32.0 | 32.0 |
| listpool​CreditsUsed | Integer | Listpool credits that were used by all the users in the Listpool group. | Small, 32.0 | 32.0 |
| monthlyCredits​Available | Integer | Monthly credits that are assigned to a specific user. | Small, 32.0 | 32.0 |
| monthlyCredits​Used | Integer | Monthly credits that were used by a specific user. | Small, 32.0 | 32.0 |
