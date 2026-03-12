---
title: "Publishing Your App on AppExchange"
domain: pkg2-dev
topic: publishing-your-app-on-appexchange
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.130Z
estimatedTokens: 581
keywords: [Publishing, App, AppExchange, you’ve, published, first-generation, managed, package, you’ll, notice, process, second-generation, 2GP, different, link]
---

# Publishing Your App on AppExchange

> If you’ve published a first-generation managed package, you’ll notice the process for
    publishing a second-generation managed package (managed 2GP) is different. After you link your
    Dev Hub org to the AppExchange partner console, all your released managed 2GP package versions
    are visible in the partner console.

# Publishing Your App on AppExchange

If you’ve published a first-generation managed package, you’ll notice the process for publishing a second-generation managed package (managed 2GP) is different. After you link your Dev Hub org to the AppExchange partner console, all your released managed 2GP package versions are visible in the partner console.

To list an app on AppExchange, it must pass the AppExchange security review. For more information, see [Pass the AppExchange Security Review](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/security_review_guidelines.htm "HTML (New Window)") in the ISVforce Guide.

## Link Dev Hub to the AppExchange Partner Console

-   Log in to the [Salesforce Partner Community](https://partners.salesforce.com/ "HTML (New Window)").
-   Select the **Publishing** tab
-   Click **Technologies**
-   Click **Org**
-   Click **Connect Technology**, and **Org**
-   Click **Connect Org** and **Allow**, and enter the login credentials for your Dev Hub org.

## Register Your Managed 2GP Package

-   From the Solutions tab, locate the package version you want to register, and click **Register Package**. Registering a package links the package to your [license management app](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_manage_licenses.htm "HTML (New Window)").
-   Enter the login credentials for the Dev Hub org associated with the package in the modal window.
-   Set the default license behavior for the package, including trial length, and number of seats included with the license, and click **Save**.

Packages that share a namespace can be associated with the same License Management Org (LMO), or you can associate the packages with different LMOs.

#### See Also

-   [*ISVforce Guide*: Create or Edit Your AppExchange Listing](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/appexchange_publish_listings.htm "ISVforce Guide: Create or Edit Your AppExchange
    Listing - HTML (New Window)")

-   [*ISVforce Guide*: Pass the AppExchange Security Review](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/security_review_guidelines.htm "ISVforce Guide: Pass the AppExchange Security Review - HTML (New Window)")
