---
title: "Features in Group and Professional Editions"
domain: packagingGuide
topic: features-in-group-and-professional-editions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.761Z
estimatedTokens: 583
keywords: [Features, Group, Professional, Editions, easiest, way, determine, objects, particular, edition, reviewing, Comparison, look, support, specific]
---

# Features in Group and Professional Editions

> The easiest way to determine which features and objects are available in a particular edition
   is by reviewing the Edition Comparison Table. You can also look up
   which editions support a specific feature or object by searching the online help. It’s important
   that you check these resources be

# Features in Group and Professional Editions

The easiest way to determine which features and objects are available in a particular edition is by reviewing the [Edition Comparison Table](http://www.sfdcstatic.com/assets/pdf/datasheets/DS_SalesCloud_EdCompare.pdf "Adobe Acrobat PDF (New Window)"). You can also look up which editions support a specific feature or object by searching the online help. It’s important that you check these resources before you start designing your app to make an informed decision on which editions to target. When you’re finished building your app, we recommend that you test it by installing your package in GE and PE test orgs to ensure that everything functions properly.

The following table shows the key differences between GE and PE.

| Feature | Group Edition | Professional Edition |
| --- | --- | --- |
| Assets | No | Yes |
| Campaigns | No | Yes |
| Contracts | No | Yes (with the Sales Cloud) |
| Forecasts | No | Yes (no Opportunity Splits or Custom Field forecasts) |
| Ideas | No | Yes |
| Products | No | Yes |
| Solutions | No | Yes |
| Record types | No | Yes |
| Permission sets | Yes | Yes |
| Custom profiles | No | Yes |
| Custom report types | No | Yes |
| Workflow and approvals | No | No (See note.) |
| Apex code | See note. | See note. |
| Sharing rules | No | Yes (for some features) |
| API | See note. | See note. |
| Sites | No | No |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

-   All listed features are available in DE.
-   As a partner, workflows within your application run in a Professional Edition org. However, customers can’t create their own workflows. They must purchase the feature directly from Salesforce.
-   A client ID allows your app to use the API for integration to composite apps. For more information, see [Using Apex in Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_apex_ge_pe.htm) and [API Access in Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_api_access.htm#dev_packages_api_access "API access isn't normally supported in Group and Professional Edition orgs. However, after your app passes the security review, you’re eligible to use some APIs for building composite applications.").

## Related Topics

- Using Apex in Group and Professional Editions (atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_apex_ge_pe.htm)
- API Access in Group and Professional Editions (atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_api_access.htm)
