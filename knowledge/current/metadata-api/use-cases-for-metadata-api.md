---
title: "Use Cases for Metadata API"
domain: metadata-api
topic: use-cases-for-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:42.739Z
estimatedTokens: 1461
keywords: [Cases, Metadata, API, move, orgs, development, cycle, deploying, large, configuration, changes, Process]
---

# Use Cases for Metadata API

> Use Metadata API to move metadata between orgs during the development
   cycle. Metadata API is also used for deploying large metadata configuration changes from
   development.

# Use Cases for Metadata API

Use Metadata API to move metadata between orgs during the development cycle. Metadata API is also used for deploying large metadata configuration changes from development.

To understand how to use Metadata API, let’s imagine you’re a Salesforce developer at Zephyrus Relocation Services. Zephyrus is a talent-mobility firm that helps companies develop processes for domestic and international employee relocation. Zephyrus is expanding into Asia and South America and wants to add orientation services for both regions. Orientation services include in-country assistance in housing and school searches, area tours, and transportation information.

Your development team must add these new orientation services to their existing org. Products such as in-country orientations are objects that can be customized in Salesforce. When you add objects and customize your org, you change its metadata. The development process of creating a custom product is where Metadata API can help.

## Use Metadata API in the Development Process

Currently, Zephyrus has production metadata and orientation services tailored to other countries. To begin building the new product customizations, you need the existing configurations from Zephyrus’ production Salesforce org in a separate repository. The configuration of the production org is all metadata. To save production metadata in a repository, move the metadata from the Zephyrus production org to your local file system.

[Move Metadata from Production to Your Local File System](atlas.en-us.api_meta.meta/api_meta/meta_use_cases_prod_to_local.htm "To make development changes without affecting your existing configurations, use Metadata API to move metadata to your local file system. Next, push metadata from your local file system to a shareable repository for development.")

To make development changes without affecting your existing configurations, use Metadata API to move metadata to your local file system. Next, push metadata from your local file system to a shareable repository for development.

With all the Zephyrus metadata retrieved, you can develop locally or in a scratch org. Scratch orgs are disposable Salesforce environments with no data. Many developers use both tools together. Loading files and making changes are much faster locally than doing so in a scratch org. Developers often build customizations on their local file system and run tests in a scratch org. Move changes between your local file system and scratch org as you test and develop.

[Move Metadata Changes to and from a Scratch Org](atlas.en-us.api_meta.meta/api_meta/meta_use_cases_to_from_scratch_org.htm "Use a scratch org to develop and test changes to metadata. You can perform your development within or outside the scratch org using Salesforce CLI or Salesforce Extensions for VS Code, which leverage the power of Metadata API.")

You can use a scratch org along with your local file system to develop and test changes to metadata. To move the changes you make locally to and from the scratch org, use Metadata API.

The rest of the Zephyrus development team has their own customizations. After developing and testing on your own, it’s time for the team to integrate changes and run tests in sandboxes. Sandboxes are development environments used for developing and testing integrations.

[Move Metadata to a Sandbox at Integration Points](atlas.en-us.api_meta.meta/api_meta/meta_use_cases_move_to_sandbox.htm "During development, use Metadata API to move metadata to sandboxes for integrating changes, testing, and collaborating with your team.")

During development, use Metadata API to move metadata to sandboxes for integrating changes, testing, and collaborating with your team.

After your team builds the orientation service customization and completes testing, deploy these components to production with Metadata API.

[Deploy Metadata to Production](atlas.en-us.api_meta.meta/api_meta/meta_use_cases_deploy_prod.htm "In the final step of the development cycle, move customizations from a source control system such as Git into production with Metadata API.")

In the final step of the development cycle, move customizations from a source control system such as Git into production with Metadata API.

## Other Use Cases

You can use Metadata API for larger changes in Salesforce, such as splitting and merging production orgs.

For example, Zephyrus wants to split the company into two divisions, one that specializes in domestic relocation and another for international relocation. In this case, you split Zephyrus’ Salesforce org and decide which metadata belongs in which org. Metadata API can move metadata to the new org.

Then, let’s say Zephyrus acquires Apollo Global Relocation and both companies use Salesforce. To consolidate information, you use Metadata API to merge the Apollo org into the Zephyrus org.

[Move Metadata for Production-Level Changes](atlas.en-us.api_meta.meta/api_meta/meta_use_cases_prod_level_changes.htm "Use Metadata API to move metadata during large changes, such as merging or splitting Salesforce orgs.")

Use Metadata API to move metadata during large changes, such as merging or splitting Salesforce orgs.

You can use Metadata API to make configuration changes during the development process that are too large for alternative API calls. For example, Zephyrus supports many languages for their global clients. To translate different languages for your objects, you include an object translation file for each language.

[Make Large Metadata Configuration Changes](atlas.en-us.api_meta.meta/api_meta/meta_use_cases_large_config_changes.htm "Metadata API is better suited than other APIs for deploying large changes to your Salesforce org.")

Metadata is better suited than other APIs for deploying large changes to your org.

## Related Topics

- Move Metadata from Production to Your Local File System (atlas.en-us.api_meta.meta/api_meta/meta_use_cases_prod_to_local.htm)
- Move Metadata Changes to and from a Scratch Org (atlas.en-us.api_meta.meta/api_meta/meta_use_cases_to_from_scratch_org.htm)
- Move Metadata to a Sandbox at Integration Points (atlas.en-us.api_meta.meta/api_meta/meta_use_cases_move_to_sandbox.htm)
- Deploy Metadata to Production (atlas.en-us.api_meta.meta/api_meta/meta_use_cases_deploy_prod.htm)
- Move Metadata for Production-Level Changes (atlas.en-us.api_meta.meta/api_meta/meta_use_cases_prod_level_changes.htm)
- Make Large Metadata Configuration Changes (atlas.en-us.api_meta.meta/api_meta/meta_use_cases_large_config_changes.htm)
