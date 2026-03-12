---
title: "Why Doesn’t the Number of License Records in the License Management App Match the Number of
    Installs in AppExchange Marketplace Analytics?"
domain: packagingGuide
topic: why-doesnt-the-number-of-license-records-in-the-license-management-app-match-the
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.015Z
estimatedTokens: 313
keywords: [Why, Doesn’t, Number, License, Records, Management, App, Match, Installs, AppExchange, Marketplace, Analytics, cases, LMA, closely]
---

# Why Doesn’t the Number of License Records in the License Management App Match the Number of
    Installs in AppExchange Marketplace Analytics?

> In most cases, the number of license records in the License Management App (LMA)
    closely aligns with the number of installs shown in AppExchange Marketplace Analytics. However,
    these numbers can sometimes fall out of alignment. This scenario typically occurs when customers
    don’t finish the installation process, or if the installation doesn’t succeed for another
    reason.

# Why Doesn’t the Number of License Records in the License Management App Match the Number of Installs in AppExchange Marketplace Analytics?

In most cases, the number of license records in the License Management App (LMA) closely aligns with the number of installs shown in AppExchange Marketplace Analytics. However, these numbers can sometimes fall out of alignment. This scenario typically occurs when customers don’t finish the installation process, or if the installation doesn’t succeed for another reason.

## Example

A customer visits your AppExchange listing and decides to install your solution. Before the installation starts, AppExchange asks the customer to confirm installation details and agree to Salesforce’s terms and conditions. After the customer clicks **Confirm and Install**, Marketplace Analytics records an install. To finish the installation, the customer logs in to their Salesforce org and clicks **Install** a final time. The LMA creates a license record after the install completes.

In the previous scenario, imagine that the customer clicked **Confirm and Install** but then exited the installation process. In this scenario, Marketplace Analytics records an install, but the no license record is created in the LMA.
