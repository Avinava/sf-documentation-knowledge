---
title: "Architectural Considerations for Group and Professional Editions"
domain: packagingGuide
topic: architectural-considerations-for-group-and-professional-editions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:20.790Z
estimatedTokens: 1272
keywords: [Architectural, Considerations, Group, Professional, Editions, Discover, concepts, influence, AppExchange, solution, design]
---

# Architectural Considerations for Group and Professional Editions

> Discover the architectural concepts that influence AppExchange solution design.

# Architectural Considerations for Group and Professional Editions

Discover the architectural concepts that influence AppExchange solution design.

Salesforce Platform is offered in five tiers, or editions.

-   Group Edition (GE)\*
-   Professional Edition (PE)
-   Enterprise Edition (EE)
-   Unlimited Edition (UE)
-   Performance Edition (PXE)\*

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Group and Performance Editions are no longer sold. For a comparison chart of editions and their features, see the [Salesforce Pricing and Editions page](http://www.salesforce.com/crm/editions-pricing.jsp).

If you plan to sell your solution to existing Salesforce customers, it’s important to understand the differences between these editions because they will affect the design of your solution. It’s convenient to think about them in clusters, GE/PE and EE/UE/PXE, as the editions in each cluster have similar functionality. For example, you might only want to support EE/UE/PXE if your solution requires certain objects and features that aren't available in GE/PE. Also, instead of a single solution that supports all editions, you can have a tiered offering. This would consist of a basic solution for GE/PE and an advanced one for EE/UE/PXE customers that takes advantage of the additional features.

EE/UE/PXE have the most robust functionality. They support Salesforce Platform platform licenses in addition to Salesforce CRM licenses. If your solution doesn’t require Salesforce CRM features, such as Leads, Opportunities, and Cases, Salesforce Platform platform licenses give you the most flexibility in deploying your solution to users who aren’t normally Salesforce users. Your solution is still subject to the edition limits and packaging rules.

GE/PE don't contain all of the functionality that you can build in a Developer Edition (DE). Therefore, a solution developed in your DE organization might not install in a GE/PE organization. If you’re designing a solution to work specifically in GE/PE, you must be aware of how these editions differ.

There are a number of other considerations to keep in mind when deciding whether to support these editions. Salesforce Platform platform licenses cannot be provisioned in GE/PE organizations. This means that only existing Salesforce CRM users can use your solution. There are some features that aren't available in GE/PE. There are several special permissions available to eligible partner solution that overcome these limitations.

See the following sections for available features, limits, and other design considerations.

-   [Features in Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_package_features_pe_ge.htm)
-   [Limits for Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_package_limits_for_pe_ge.htm)
-   [Access Control in Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_ge_pe_access_control.htm#dev_packages_ge_pe_access_control)
-   [Using Apex in Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_apex_ge_pe.htm)
-   [API Access in Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_api_access.htm#dev_packages_api_access "API access isn't normally supported in Group and Professional Edition orgs. However, after your app passes the security review, you’re eligible to use some APIs for building composite applications.")
-   [Designing Your App to Support Multiple Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_supporting_multiple_editions.htm#dev_packages_supporting_multiple_editions)
-   [Sample Design Scenarios](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_ge_pe_scenarios.htm#packaging_sample_design_scenarios_ge_pe)

-   **[Features in Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_package_features_pe_ge.htm)**

-   **[Limits for Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_package_limits_for_pe_ge.htm)**

-   **[Access Control in Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_ge_pe_access_control.htm)**

-   **[Using Apex in Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_apex_ge_pe.htm)**

-   **[API Access in Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_api_access.htm)**
    API access isn't normally supported in Group and Professional Edition orgs. However, after your app passes the security review, you’re eligible to use some APIs for building composite applications.
-   **[Designing Your App to Support Multiple Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_supporting_multiple_editions.htm)**

-   **[Sample Design Scenarios for Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_ge_pe_scenarios.htm)**

## Related Topics

- Features in Group and Professional
                Editions (atlas.en-us.packagingGuide.meta/packagingGuide/dev_package_features_pe_ge.htm)
- Limits for Group and Professional
                Editions (atlas.en-us.packagingGuide.meta/packagingGuide/dev_package_limits_for_pe_ge.htm)
- Access Control in Group and
                    Professional Editions (atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_ge_pe_access_control.htm)
- Using Apex in Group and Professional
                Editions (atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_apex_ge_pe.htm)
- API Access in Group and Professional Editions (atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_api_access.htm)
- Designing Your App to Support
                    Multiple Editions (atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_supporting_multiple_editions.htm)
- Sample Design
                Scenarios (atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_ge_pe_scenarios.htm)
- Features in Group and Professional Editions (atlas.en-us.packagingGuide.meta/packagingGuide/dev_package_features_pe_ge.htm)
- Limits for Group and Professional Editions (atlas.en-us.packagingGuide.meta/packagingGuide/dev_package_limits_for_pe_ge.htm)
- Access Control in Group and Professional Editions (atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_ge_pe_access_control.htm)
