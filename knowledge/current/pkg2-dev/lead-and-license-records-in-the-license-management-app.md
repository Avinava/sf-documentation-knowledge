---
title: "Lead and License Records in the License Management App"
domain: pkg2-dev
topic: lead-and-license-records-in-the-license-management-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.225Z
estimatedTokens: 483
keywords: [Lead, License, Records, Management, App, time, customer, installs, managed, package, LMA, creates]
---

# Lead and License Records in the License Management App

> Each time a customer installs your managed package, the License Management App (LMA)
  creates lead and license records.

# Lead and License Records in the License Management App

Each time a customer installs your managed package, the License Management App (LMA) creates lead and license records.

The key objects in the LMA are Package, Lead, and License.

-   Package—The LMA includes a Package custom object and a Package Version custom object. These objects display details about each 1GP or 2GP package and package version you’ve listed on AppExchange.
-   Lead —The Lead standard object gives you details about who installed your package, such as the installer’s name, company, and email address. Lead records created by the LMA are just like the ones you use elsewhere in Salesforce, except the lead source is Package Installation. You can manually convert leads into accounts and contacts. When you convert a lead, the license record links to the converted account or contact.
-   License—The License custom object gives you control over how many users in the customer’s org can access your package and for how long. Each license record links to a lead record and a package record.

To understand which actions you must take and which actions the LMA handles for you, review this table.

| Action | Who Takes This Step |
| --- | --- |
| Your package is installed by a new subscriber. | Customer or prospect |
| A lead record is created with the customer’s name, company, and email address. | LMA |
| A license record is created according to the values you specified when you registered the package. | LMA |
| The lead record is converted to account and contact records. (Optional) | You (ISV partner) |
| Account and contact records are associated with the license record. | LMA |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Lead [assignment rules](https://help.salesforce.com/s/articleView?id=service.customize_leadrules.htm&language=en_US) aren't triggered for leads created by the LMA.
