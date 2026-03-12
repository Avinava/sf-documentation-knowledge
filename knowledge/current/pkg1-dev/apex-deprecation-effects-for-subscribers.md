---
title: "Apex Deprecation Effects for Subscribers"
domain: pkg1-dev
topic: apex-deprecation-effects-for-subscribers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.546Z
estimatedTokens: 373
keywords: [Apex, Deprecation, Effects, Subscribers, Explore, how, impacts, install, managed, package]
---

# Apex Deprecation Effects for Subscribers

> Explore how deprecation of an Apex method impacts subscribers that install your managed
  package.

# Apex Deprecation Effects for Subscribers

Explore how deprecation of an Apex method impacts subscribers that install your managed package.

The table shows a typical sequence of actions by a package developer in the first column and actions by a subscriber in the second column. Each row in the table denotes either a package developer or subscriber action.

| Package Developer Action | Subscriber Action | Notes |
| --- | --- | --- |
| Create a global Apex class, PackageDevClass, containing a global method m1. |  |  |
| Upload as Managed - Released version 1.0 of a package that contains PackageDevClass. |  |  |
|  | Install version 1.0 of the package. | The Version Number for the package is 1.0. The First Installed Version Number is 1.0. |
|  | Create an Apex class, SubscriberClass, that references m1 in PackageDevClass. |  |
| Deprecate m1 and create a new method, m2. |  |  |
| Upload as Managed - Released version 2.0 of the package. |  |  |
|  | Install version 2.0 of the package. | The Version Number for the package is 2.0. The First Installed Version Number is still 1.0. SubscriberClass still references version 1.0 of the package and continues to function, as before. |
|  | Edit the version settings for SubscriberClass to reference version 2.0 of the package. Save the class. Note an error message indicating that m1 can’t be referenced in version 2.0 of the package. |  |
|  | Change SubscriberClass to reference m2 instead of m1. Successfully save the class. |  |
