---
title: "Scratch Orgs and Package Development"
domain: pkg2-dev
topic: scratch-orgs-and-package-development
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.120Z
estimatedTokens: 1076
keywords: [Scratch, Orgs, Package, Development, temporary, Salesforce, intended, automation, They, enable, source-driven, deployments, code, metadata, org]
---

# Scratch Orgs and Package Development

> Scratch orgs are temporary Salesforce orgs intended for development and automation. They
        enable source-driven deployments of Salesforce code and metadata. A scratch org is fully
        configurable, allowing developers to emulate different Salesforce editions with various
        features and preferences.

# Scratch Orgs and Package Development

Scratch orgs are temporary Salesforce orgs intended for development and automation. They enable source-driven deployments of Salesforce code and metadata. A scratch org is fully configurable, allowing developers to emulate different Salesforce editions with various features and preferences.

| Available in: Lightning Experience |
| --- |
| Available in: Developer, Enterprise, Performance, and Unlimited Editions |


You can use a scratch org to develop the app you want to package, and you can also create scratch orgs to test out your package. Scratch orgs also help with continuous integration (CI) processes to automate package development steps. For example, you could write a script that creates a package version, creates a scratch org, installs the package version into the scratch org, runs Apex tests, and emails the test results to the release manager.

## Enable Data Cloud for Scratch Orgs

To use Data Cloud components in scratch orgs or to add these components to a package, Data Cloud for Scratch Orgs must be enabled. Log a case with [Salesforce Partner Support](https://partners.salesforce.com/) and request that Data Cloud for Scratch Orgs be enabled on your Partner Business Org. Data Cloud for Scratch Orgs is only available to scratch orgs associated with the Dev Hub in your Partner Business Org.

-   **[How Scratch Orgs Fit in the Package Development Workflow](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_how_fit_pkg_dev.htm)**
    Scratch orgs are an essential tool in both developing and testing the app you want to package. Scratch orgs also help with continuous integration (CI) processes to automate package development steps. For example, you could write a script that creates a package version, creates a scratch org, installs the package version into the scratch org, runs Apex tests, and emails the test results to the release manager.
-   **[Scratch Org Definition Files vs Org Shape in Package Development](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_orgshape_vs_def_file.htm)**
    The scratch org definition file is used when you create scratch orgs, and also when you create new package versions. The scratch org definition file is a blueprint for your scratch org and defines the shape of the org you want for your package development work.
-   **[When to Use Scratch Org Snapshots in Package Development](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_when_use_snapshot.htm)**
    If the managed 2GP or unlocked package that you’re building depends on one or more large packages, it can take a long time for the package version creation CLI command to complete. Let’s talk about why that occurs, and how scratch org snapshots can dramatically reduce how long it takes to create a new package version.
-   **[Create a Package Version Based on a Scratch Org Snapshot](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_pkg_snapshot.htm)**
    If the dependent package your base package requires is stable, you can reduce the end-to-end package version creation time by creating a scratch org snapshot.
-   **[Get Access to Scratch Orgs That Have Agentforce](atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_scratch_orgs_agentforce.htm)**
    Agentforce is a set of tools to create and customize AI agents that are deeply and securely integrated with customers' data and apps. Agentforce brings together humans with agents to transform the way work gets done. Start your journey with Agentforce by testing it in a scratch org.
-   **[Scratch Org Allocations for Salesforce Partners](atlas.en-us.pkg2_dev.meta/pkg2_dev/isv_partner_scratch_org_allocations.htm)**
    To ensure optimal performance, Salesforce partners are allocated a set number of scratch orgs in their Partner Business Org (PBO). These allocations determine how many scratch orgs you can create daily, and how many can be active at a given point.
-   **[Manage Scratch Orgs from the Dev Hub Org](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_scratch_orgs_view_lex.htm)**
    You can view and delete your scratch orgs and their associated requests from the Dev Hub org.
-   **[Supported Scratch Org Editions for Partners](atlas.en-us.pkg2_dev.meta/pkg2_dev/isv_partner_scratch_org_editions.htm)**
    Create partner edition scratch orgs from a Dev Hub partner business org.

## Related Topics

- How Scratch Orgs Fit in the Package Development Workflow (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_how_fit_pkg_dev.htm)
- Scratch Org Definition Files vs Org Shape in Package Development (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_orgshape_vs_def_file.htm)
- When to Use Scratch Org Snapshots in Package Development (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_when_use_snapshot.htm)
- Create a Package Version Based on a Scratch Org Snapshot (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_so_pkg_snapshot.htm)
- Get Access to Scratch Orgs That Have Agentforce (atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_scratch_orgs_agentforce.htm)
- Scratch Org Allocations for Salesforce Partners (atlas.en-us.pkg2_dev.meta/pkg2_dev/isv_partner_scratch_org_allocations.htm)
- Manage Scratch Orgs from the Dev Hub Org (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_scratch_orgs_view_lex.htm)
- Supported Scratch Org Editions for Partners (atlas.en-us.pkg2_dev.meta/pkg2_dev/isv_partner_scratch_org_editions.htm)
