---
title: "Deploying Apex"
domain: apex-guide
topic: deploying-apex
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:33.220Z
estimatedTokens: 717
keywords: [Deploying, Apex, can't, develop, Salesforce, production, org, development, work, sandbox, scratch, Developer, Edition, Compile, Deploy]
---

# Deploying Apex

> You can't develop Apex in your Salesforce production org. Your development work is
        done in a sandbox, in a scratch org,  or in a Developer Edition org.

# Deploying Apex

You can't develop Apex in your Salesforce production org. Your development work is done in a sandbox, in a scratch org, or in a Developer Edition org.

## Compile On Deploy

Each org’s Apex code is automatically recompiled before completing a metadata deploy, package install, or package upgrade. Compile on deploy is enabled automatically for production orgs and full sandboxes to ensure that users don’t experience reduced performance immediately following a deployment. You can’t disable the compile on deploy option in production orgs.

For developer sandbox, developer pro sandbox, partial copy sandbox, developer, trial, and scratch orgs, this feature is disabled by default. To enable, select the **Perform Synchronous Compile on Deploy** option under Apex Settings in Setup. Deselect this option if you want to disable the feature in full sandboxes.

With the Compile on Deploy feature, deployments to the org invoke the Apex compiler and save the resulting bytecode as part of the deployment. For example, if you deploy a custom field, all the classes that use that custom field are recompiled. A minimal increase in deployment times can occur, but Apex doesn’t need to be recompiled to process subsequent requests. The slight increase in deployment time can, in fact, mitigate performance issues for currently active users or processes. Consider enabling this feature in sandboxes or scratch orgs shared by multiple users for functional testing or used by continuous integration processes.

1.  [Deploy Apex Using Change Sets](atlas.en-us.apexcode.meta/apexcode/apex_deploying_changesets.htm)
    Use change sets to deploy Apex classes and triggers between connected organizations, for example, from a sandbox org to your production org.
2.  [Deploy Apex Using Salesforce Extensions for Visual Studio Code and Code Builder](atlas.en-us.apexcode.meta/apexcode/apex_deploying_ide.htm)
    Salesforce Extensions for VS Code and Code Builder are powered by Salesforce CLI and the Salesforce APIs.
3.  [Deploy Apex Using Metadata API](atlas.en-us.apexcode.meta/apexcode/apex_deploying_metadataAPI.htm)
    Use Metadata API to deploy customization information, such as custom object definitions for your org.
4.  [Deploy Apex Using Tooling API](atlas.en-us.apexcode.meta/apexcode/apex_deploying_toolingAPI.htm)
    Use Tooling API to deploy Apex classes or Apex triggers. Because Tooling API allows you to change just one element within a complex type, it is easy to deploy using Tooling API.
5.  [Deploy Apex Using DevOps Center](atlas.en-us.apexcode.meta/apexcode/apex_deploying_DevOps.htm)
    Salesforce DevOps Center provides an improved experience around change and release management. Build a pipeline when you configure DevOps Center and use the pipeline to promote work items through the release lifecycle from development to production.

## Related Topics

- Deploy Apex Using Change Sets (atlas.en-us.apexcode.meta/apexcode/apex_deploying_changesets.htm)
- Deploy Apex Using Salesforce Extensions for Visual Studio Code and Code Builder (atlas.en-us.apexcode.meta/apexcode/apex_deploying_ide.htm)
- Deploy Apex Using Metadata API (atlas.en-us.apexcode.meta/apexcode/apex_deploying_metadataAPI.htm)
- Deploy Apex Using Tooling API (atlas.en-us.apexcode.meta/apexcode/apex_deploying_toolingAPI.htm)
- Deploy Apex Using DevOps Center (atlas.en-us.apexcode.meta/apexcode/apex_deploying_DevOps.htm)
