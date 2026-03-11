---
title: "Quick Start: Metadata API"
domain: metadata-api
topic: quick-start-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:54.192Z
keywords: [Quick, Start, Metadata, API, Resources, Beginner, Developers, Developing, See]
---

# Quick Start: Metadata API

# Quick Start: Metadata API

Get started with Metadata API by retrieving a small set of metadata components from your org on the Salesforce CLI.

## Resources for Beginner Developers

If you’re a beginner developer and haven’t used Salesforce CLI before, learn how to set up your environment and practice with a sample application. These Trailheads guide you through setup with SFDX and introduce you to Metadata API.

[App Development with Salesforce DX](https://trailhead.salesforce.com/content/learn/modules/sfdx_app_dev)

Walk through setting up your environment and developing with Salesforce CLI using the Dreamhouse sample app. After you add a feature to your Dreamhouse app, you deploy metadata to your Dev Hub org with Salesforce CLI.

[Package.xml Metadata Management](https://trailhead.salesforce.com/content/learn/modules/package-xml)

Learn more about metadata and package.xml files. Build a package.xml file to deploy changes from a scratch org to your Trailhead Playground.

## Quick Start for Developing with Metadata API

If you have some experience in Salesforce development but want to get started with Metadata API, use this quick start. The quick start walks you through a retrieval of metadata components, which is the first step of the development process.

1.  [Prerequisites](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_retrieve_prereqs.htm)  
    Complete these prerequisites before you start developing with Metadata API.
2.  [Step 1: (Optional) Add Metadata Components to an Org Using the UI](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_retrieve_add_components.htm)  
    If you’re starting with a new practice org that doesn’t have customizations, you only have standard metadata that can’t be retrieved. To use the Metadata API retrieve call, add a component on the Salesforce UI to your practice org. If you’re working on an existing project, you already have components to retrieve and can skip this step.
3.  [Step 2: Build a Package.xml Manifest](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_retrieve_build_manifest.htm)  
    The package.xml manifest file lists the components to retrieve from your org.
4.  [Step 3: Retrieve Components with Metadata API](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_retrieve_use_retrieve.htm)  
    With Salesforce CLI, retrieve a file representation of the specified components in your package.xml manifest.

#### See Also

-   [Move Metadata from Production to Your Local File System](atlas.en-us.api_meta.meta/api_meta/meta_use_cases_prod_to_local.htm "To make development changes without affecting your existing configurations, use Metadata API to move metadata to your local file system. Next, push metadata from your local file system to a shareable repository for development.")