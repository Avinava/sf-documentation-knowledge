---
title: "Before You Begin"
domain: pkg2-dev
topic: before-you-begin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.793Z
estimatedTokens: 1310
keywords: [Begin, prerequisites, App, Analytics, recipes]
---

# Before You Begin

> Complete these prerequisites before you create App Analytics recipes.

# Before You Begin

Complete these prerequisites before you create App Analytics recipes.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To access License Management App data, packages, and package versions: | Read on Licenses, Packages, Package Versions |
| To request and retrieve AppExchange App Analytics data: | Create, Read, Edit, Delete, View All, and Modify All on the AppAnalyticsQueryRequest object |
| To use CRM Analytics: | CRM Analytics Plus Admin user |

To brush up on your AppExchange App Analytics or CRM Analytics skills, we recommend completing these Trailhead modules.

-   [AppExchange Partner Intelligence Basics](https://trailhead.salesforce.com/en/content/learn/modules/appexchange-partner-intelligence-basics "HTML (New Window)")
-   [CRM Analytics Data Integration Basics](https://trailhead.salesforce.com/en/content/learn/modules/wave_enable_data_integration_basics "HTML (New Window)")

1.  Set up your [License Management Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/package_associate_lmo.htm "HTML (New Window)") (LMO).

    Use your LMO to track all Salesforce users who install your managed package. The LMO receives a notification in the form of a lead record when a user installs or uninstalls your package. It also tracks each package upload on AppExchange. Typically, as an AppExchange partner, you use your [Partner Business Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/isv1_3_quickstart.htm "HTML (New Window)") (PBO) as your LMO.

2.  Register your security-reviewed managed package with your LMO. Follow the directions in [Link a Package with Your License Management Organization](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/package_associate_lmo.htm "HTML (New Window)").
3.  If you’re not using your PBO as your LMO, install the License Management App (LMA) in your LMO. The LMA lets you manage leads and licenses for your AppExchange offerings. To install the LMA, read [Get Started with the License Management App](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/lma_setup.htm?search_text=license%20management%20app "HTML (New Window)").

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

    #### Note

    If you’re using your PBO as your LMO, you’re all set. The LMA is automatically installed for you.

4.  Create an App Analytics Admin permission set that includes create and read access on the AppAnalyticsQueryRequest object. Assign this permission to any non-Admin users so that they can create App Analytics requests. Read [Create Permission Sets](https://help.salesforce.com/articleView?id=platform.perm_sets_create.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help if you need instructions.
5.  Set up the CLI using the [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm "HTML (New Window)"). If you need a CLI refresher, take the [App Development with Salesforce DX](https://trailhead.salesforce.com/en/content/learn/modules/sfdx_app_dev "HTML (New Window)") Trailhead module.
6.  [Enable CRM Analytics](https://help.salesforce.com/articleView?id=000335760&type=1&mode=1&language=en_US "HTML (New Window)") in your Salesforce org.
7.  Create a CRM Analytics app named PartnerIntelligence.
8.  To request and retrieve a sample package usage log, create an AppExchange App Analytics query request using the CLI. Save the CSV data file as RawPackageLogFile.csv.
9.  To request and retrieve package usage logs automatically, create an automation. Which automation method you choose depends on your business specifications and which data volume you’re automating.
    -   For smaller datasets, such as package usage summaries, Apex scales well for automation. This [GitHub repo](https://github.com/developerforce/partner-intelligence-basics "HTML (New Window)") has the details.
    -   For larger datasets, such as package usage logs, automate using an [Amazon Web Services (AWS) stack](https://medium.com/@kamipatel/automate-appanalytics-aws-stack-74cbebc49d2a "HTML (New Window)").
    -   You can also use the free Salesforce Labs app, [App Analytics](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000G0nUXUAZ "HTML (New Window)"). It offers great functionality to retrieve and automate data collection and to get started with recipes and dashboards. Salesforce Labs apps are developed by Salesforce employees and are unsupported.

-   **[Get Help with Prerequisites](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_prework_help.htm)**
    If you need help with setting up your solution, you can request a consultation with a Platform Expert.

-   [← Previous](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_what_are_recipes.htm "What Are Recipes?")
-   [Next →](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_intro.htm "CRM Analytics Recipes")

## Related Topics

- Get Help with Prerequisites (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_prework_help.htm)
- ← Previous (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_what_are_recipes.htm)
- Next → (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_intro.htm)
