---
title: "Choose a Salesforce
        Org for Apex
        Development"
domain: apex-guide
topic: choose-a-salesforce-org-for-apex-development
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:47.229Z
keywords: [Choose, Salesforce, Org, Apex, Development, Sandboxes, Recommended, Scratch, Orgs, Developer, Edition, Trial, Production, Supported]
---

# Choose a Salesforce
        Org for Apex
        Development

# Choose a Salesforce Org for Apex Development

You can develop Apex in a sandbox, scratch org, or Developer Edition org, but not directly in a production org. With so many choices, here’s some help to determine which org type is right for you and how to create it.

## Sandboxes (Recommended)

A sandbox is a copy of your production org’s metadata in a separate environment, with varying amounts of data depending on the sandbox type. A sandbox provides a safe space for developers and admins to experiment with new features and validate changes before deploying code to production. Developer and Developer Pro sandboxes with source tracking enabled can take advantage of many of the features of our Salesforce DX source-driven development tools, including Salesforce CLI, Code Builder, and DevOps Center. See [Create a Sandbox](https://help.salesforce.com/s/articleView?id=platform.data_sandbox_create.htm&type=5&language=en_US) in Salesforce Help.

## Scratch Orgs (Recommended)

A scratch org is a source-driven and temporary deployment of Salesforce code and metadata. A scratch org is fully configurable, allowing you to emulate different Salesforce editions with different features and settings. Scratch orgs have a maximum 30-day lifespan, with the default set at 7 days. For information on using and creating scratch orgs, see [Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm) in the Salesforce DX Developer Guide.

## Developer Edition (DE) Orgs

A DE org is a free org that provides access to many of the features available in an Enterprise Edition org. Developer Edition orgs can become [out-of-date over time](https://help.salesforce.com/s/articleView?id=000382500&type=1&language=en_US) and have limited storage. Developer Edition orgs don’t have source tracking enabled and can’t be used as development environments in DevOps Center. Developer Edition orgs expire if they aren't logged into regularly. You can sign up for as many Developer Edition orgs as you like on the [Developer Edition Signup](https://developer.salesforce.com/signup) page.

## Trial Edition Orgs

Trial editions usually expire after 30 days, so they’re great for evaluating Salesforce functionality but aren’t intended for use as a permanent development environment. Although Apex triggers are available in trial editions, they’re disabled when you convert to any other edition. Deploy your code to another org before conversion to retain your Apex triggers. Salesforce offers several product- and industry-specific [free trial orgs](https://developer.salesforce.com/free-trials).

## Production Orgs (Not Supported)

A production org is the final destination for your code and applications, and has live users accessing your data. You can't develop Apex in your Salesforce production org, and we recommend that you avoid directly modifying any code or metadata directly in production. Live users accessing the system while you're developing can destabilize your data or corrupt your application.