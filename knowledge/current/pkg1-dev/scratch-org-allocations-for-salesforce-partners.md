---
title: "Scratch Org Allocations for Salesforce Partners"
domain: pkg1-dev
topic: scratch-org-allocations-for-salesforce-partners
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.369Z
estimatedTokens: 318
keywords: [Scratch, Org, Allocations, Salesforce, Partners, ensure, optimal, performance, allocated, number, orgs, their, Partner, Business, PBO]
---

# Scratch Org Allocations for Salesforce Partners

> To ensure optimal performance, Salesforce partners are allocated a set number of scratch
  orgs in their Partner Business Org (PBO). These allocations determine how many scratch orgs you
  can create daily, and how many can be active at a given point.

# Scratch Org Allocations for Salesforce Partners

To ensure optimal performance, Salesforce partners are allocated a set number of scratch orgs in their Partner Business Org (PBO). These allocations determine how many scratch orgs you can create daily, and how many can be active at a given point.

By default, Salesforce deletes scratch orgs and their associated ActiveScratchOrg records from your Dev Hub when a scratch org expires. All partners get 100 Salesforce Limited Access - Free user licenses.

## Active PBOs

-   150 active
-   300 daily

## Trial PBOs

-   20 active
-   40 daily

## Scratch Org Snapshot Allocations

The number of snapshots you can create (active and daily) is the same as the active scratch org allocation.

## Package Version Creation Limits

The maximum number of package versions you can create per day is equal to the daily allocated scratch orgs. For example, if you’re allocated 300 daily scratch orgs, you’re also allowed to create 300 package versions per day.

If you specify \--skipvalidation when creating a package version, the maximum number of package versions you can create using [skip validation](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_skip_validation.htm) is 500 per day.
