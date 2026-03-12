---
title: "Supported Scratch Org Editions and Allocations"
domain: sfdx-dev
topic: supported-scratch-org-editions-and-allocations
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.551Z
estimatedTokens: 992
keywords: [Scratch, Org, Editions, Allocations, Dev, Hub, often, production, enable, Developer, Enterprise, Unlimited, Performance, edition, determines]
---

# Supported Scratch Org Editions and Allocations

> Your Dev Hub org is often your production org, and you can enable Dev Hub in these
    editions: Developer, Enterprise, Unlimited, or Performance. Your Dev Hub edition determines how
    many scratch orgs you can create. You choose one of the supported scratch org editions each time
    you create a scratch org.

# Supported Scratch Org Editions and Allocations

Your Dev Hub org is often your production org, and you can enable Dev Hub in these editions: Developer, Enterprise, Unlimited, or Performance. Your Dev Hub edition determines how many scratch orgs you can create. You choose one of the supported scratch org editions each time you create a scratch org.

## Supported Scratch Org Editions

Possible values for the Salesforce edition of the scratch org are:

-   Developer
-   Enterprise
-   Group
-   Professional

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Partners can create partner edition scratch orgs: Partner Developer, Partner Enterprise, Partner Group, and Partner Professional. This feature is available only if creating scratch orgs from a Dev Hub in a partner business org. See [Supported Scratch Org Editions for Partners](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/isv_partner_scratch_org_editions.htm) in the First-Generation Managed Packaging Developer Guide for details.

Scratch orgs have these storage limits:

-   200 MB for data
-   50 MB for files

Entities defined as [metadata types](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_types_list.htm) aren’t counted as part of storage allocations in scratch orgs. For more information about entities that are counted against storage allocations, see Salesforce Help: [Data and File Storage Allocations](https://help.salesforce.com/s/articleView?id=xcloud.overview_storage.htm&type=5&language=en_US).

## Supported Dev Hub Editions and Associated Scratch Org Allocations

To ensure optimal performance, your Dev Hub org edition determines your scratch org allocations. These allocations determine how many scratch orgs you can create daily, and how many can be active at a given point.

To try out scratch orgs, sign up for a [Developer Edition org](https://developer.salesforce.com/signup?d=70130000000td6N "HTML (New Window)") on Salesforce Developers, then [enable Dev Hub](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm "The Dev Hub lets you create scratch orgs, unlocked packages, and second-generation managed packages. Your Dev Hub is also the designated place to manage all your scratch orgs, packages, and namespaces.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

If you’re a partner or ISV, your scratch org allocations are likely different. See the First-Generation Managed Packaging Developer Guide for details.

The *active scratch org allocation* is the maximum number of scratch orgs you can have at any given time based on the edition type. The allocation becomes available if you delete a scratch org or if a scratch org expires. The *daily scratch org allocation* is the maximum number of successful scratch org creations you can initiate in a rolling (sliding) 24-hour window. Allocations are determined based on the number of scratch orgs created in the preceding 24 hours.

| Edition | Active Scratch Org Allocation | Daily Scratch Org Allocation |
| --- | --- | --- |
| Developer Edition or trial | 3 | 6 |
| Enterprise Edition | 40 | 80 |
| Unlimited Edition | 100 | 200 |
| Performance Edition | 100 | 200 |

## List Active and Daily Scratch Orgs

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

If your Salesforce admin provided access to the Dev Hub org using the Free Limited Access license and you can’t run this command, contact your admin for assistance.

To view your scratch org allocations and how many are remaining, run this command in a terminal or command window against your Dev Hub org. Only relevant limits (ActiveScratchOrgs and DailyScratchOrgs) are shown.

```

```

Look for these two limits in the output:

```

```

## View Limits for a Scratch Org

To view limits information for a scratch org:

```

```

## Code Examples

```
sf limits api display --target-org <Dev Hub username or alias>
```

```
Name                                        Remaining   Max
─────────────────────────────────────────── ─────────   ───────── 
ActiveScratchOrgs                           198         200
DailyScratchOrgs                            400         400
```

```
sf limits api display --target-org <scratch org username or alias>
```

## Related Topics

- enable Dev Hub (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm)
