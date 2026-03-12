---
title: "Listing Readiness for Managed Packages"
domain: packagingGuide
topic: listing-readiness-for-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.269Z
estimatedTokens: 1895
keywords: [Listing, Readiness, Managed, Packages, whether, managed-released, package, version, ready, AppExchange, pass, security, review, difference, status]
---

# Listing Readiness for Managed Packages

> Listing readiness indicates whether a managed-released package version is ready to list
  on AppExchange or if it first must pass security review. Learn the difference between security
  review status and listing readiness. Discover when and how ‌first- and second-generation package
  (1GP and 2GP) versions inherit listing readiness from previous versions. Make informed decisions
  about whether to submit a package version for security review.

# Listing Readiness for Managed Packages

Listing readiness indicates whether a managed-released package version is ready to list on AppExchange or if it first must pass security review. Learn the difference between security review status and listing readiness. Discover when and how ‌first- and second-generation package (1GP and 2GP) versions inherit listing readiness from previous versions. Make informed decisions about whether to submit a package version for security review.

To understand listing readiness, it helps to look at and how it benefits ISV partners. For example, you submit a managed-package version for security review. The review completes. The version passes. It’s ready to list on AppExchange. Next, you create a version by using the version that passed as a direct ancestor. Then you upload the newer package version to your packaging or DevHub org. With listing-readiness inheritance, the new version is also ready to list. Because you aren't required to submit the new version for review, you save time, resources, and security-review fees.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

For 1GP, a direct ancestor is the latest released package version in the same branch. The same branch means the same patch version. For 2GP, you specify the ancestor when you create the package. The 2GP ancestor must be the highest managed-released package version number for that package.

On your AppExchange listing, the version info always shows the version that’s linked to the listing (1). However, if that version inherited readiness, the last reviewed version and date on the listing are for the version that passed review (2). This scenario is common, but some partners prefer to avoid this mismatch. They can optionally submit the listed version for review and pay applicable review fees. After the listed version passes, the listing info is updated automatically.

![A screenshot of an AppExchange listing for a 2GP package with callouts on the version, and the last reviewed version and date](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fsecurity_review%2Fimages%2Fappexchange_listing_versions_2GP.png&folder=packagingGuide)

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=packagingGuide)

#### Tip

After you submit a package version for security review, wait until it passes before you create more versions. Build new package versions by using the version that passed as a direct ancestor. Then the new versions are ready to list.

If a package version that isn't ready to list completes a security review, its readiness is based solely on whether it passed or failed the review. If the version passed, it’s ready to list. If it failed, it isn’t ready to list.

As a result, listing-readiness inheritance applies only to unreviewed managed-release package versions. An unreviewed version can inherit listing readiness from a previous version. Inheritance occurs when a version is created. An unreviewed 1GP managed-released package inherits readiness from the latest released package version in the same branch. The same branch means the same patch version. An unreviewed 2GP managed-released package inherits readiness from its ancestor. When you create a 2GP package version, you specify a package ancestor. The ancestor must be the highest managed-released package version number for that package.

There are four inheritance scenarios for unreviewed packages.

-   For 1GP, a managed-released package version in the same branch passes. For 2GP, the ancestor passes. Then you create another version. Your new version is ready to list.
-   A 1GP managed-released package version passes, then you convert the package version into 2GP. Your new 2GP-converted version is ready to list.
-   You create a version before any previous 1GP version in the same branch or 2GP ancestor passes. Your new version isn’t ready to list.
-   You create a version during the re-review or re-review remediation period for the previous 1GP managed-released package version in the same branch or the 2GP ancestor. A remediation period applies to solutions that fail re-review. During this period, you can fix a failed solution and resubmit it. Because the outcome of the re-review is unknown, it can’t be used to determine listing readiness. Instead, before the re-review completes, we look at the previous version’s listing readiness. If the previous version:
    -   Is ready to list, the new version is ready to list too. You can list the newer version before the re-review completes.
    -   Isn’t ready to list, the new version isn’t ready to list.
    -   Ultimately fails the re-review or the remediation period expires before it passes, Security Review Operations manually delists the package and expires its security review. If the new version was initially ready to list, it’s no longer ready to list.

Let’s look at a 1GP example.

![A diagram of listing readiness inheritance for first-generation packaging with solution versions in three branches](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fsecurity_review%2Fimages%2Fappexchange_listing_readiness_1GP.png&folder=packagingGuide)

-   Version 1.0.0 is the root package. It passed security review. It’s ready to list.
-   Versions 1.1.0, 2.0.0, and 3.0.0 are unreviewed. They were created from v1.0.0, the previous released version, after it passed. They’re ready to list.
-   Version 1.2.0 is beta. It isn’t ready to list.
-   Version 1.2.1 isn’t reviewed. It inherits readiness from the previous released version in the same branch, in this case v1.1.0. It doesn’t inherit from v1.2.0 because it’s beta. Version 1.2.1 is ready to list.
-   Version 2.1.0 is delisted because its re-review remediation period expired. It’s not ready to list.
-   Version 2.1.1 is created after v2.1.0 is delisted. It’s not ready to list.
-   Versions 3.1.0 and 3.1.1 inherit readiness from the previous released version in the same branch, in this case v1.0.0. They’re ready to list.

Now let’s look at a 2GP example.

![A diagram of listing readiness inheritance for second-generation packaging with solution versions in two branches](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fsecurity_review%2Fimages%2Fappexchange_listing_readiness_2GP.png&folder=packagingGuide)

-   Version 1.0.0 is the root package. It isn’t reviewed. It isn’t ready to list.
-   Version 1.0.1 passed its review. It’s ready to list.
-   Version 1.1.0 isn’t reviewed. It was created after v1.0.1, the previous released version, passed. Version 1.1.0 is ready to list.
-   Version 2.0 isn’t reviewed. The only previous version, v1.0.0, is also unreviewed. Version 2.0.0 isn’t ready to list.

#### See Also

-   [Check If Your Package Version Is Ready to List on AppExchange](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_check_listing_readiness.htm "Listing readiness indicates whether a managed-released package version is approved to list on AppExchange or if it first must pass security review. If the org that contains the package version is connected to the AppExchange Partner Console, go to the Console's Solution tab to quickly see if the version is ready to list.")

-   [First-Generation Managed Packaging Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/dev_package_versions_overview.htm)

-   [First-Generation Managed Packaging Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_package_ancestor_intro.htm)

## Related Topics

- Check If Your Package Version Is Ready to List on AppExchange (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_check_listing_readiness.htm)
