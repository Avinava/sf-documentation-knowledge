---
title: "Deploying Apex to a Sandbox Organization"
domain: apex-guide
topic: deploying-apex-to-a-sandbox-organization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.225Z
keywords: [Deploying, Apex, Sandbox, Organization]
---

# Deploying Apex to a Sandbox Organization

# Deploying Apex to a Sandbox Organization

Sandboxes create copies of your Salesforce org in separate environments. Use them for development, testing, and training without compromising the data and applications in your production org. Sandboxes are isolated from your production org, so operations that you perform in your sandboxes don’t affect your production org.

To deploy Apex from a local project in the Salesforce extension for Visual Studio Code to a Salesforce organization, see [Salesforce Extensions for Visual Studio Code](https://developer.salesforce.com/tools/vscode/).

You can also use the deploy() Metadata API call to deploy your Apex from a developer organization to a sandbox organization.

A useful API call is runTests(). In a development or sandbox organization, you can run the unit tests for a specific class, a list of classes, or a namespace.

You can also use Salesforce CLI. See [Develop Against Any Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_any_org.htm) for details.

For more information, see [Deploying Apex](atlas.en-us.apexcode.meta/apexcode/apex_deploying.htm "You can't develop Apex in your Salesforce production org. Your development work is done in a sandbox, in a scratch org, or in a Developer Edition org.").