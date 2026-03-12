---
title: "Move Metadata Changes to and from a Scratch Org"
domain: metadata-api
topic: move-metadata-changes-to-and-from-a-scratch-org
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.753Z
estimatedTokens: 335
keywords: [Move, Metadata, Changes, Scratch, Org, develop, test, perform, development, outside, Salesforce, CLI, Extensions, Code, leverage]
---

# Move Metadata Changes to and from a Scratch Org

> Use a scratch org  to develop and test changes to metadata. You can
      perform your development within or outside the scratch org using Salesforce CLI or Salesforce
      Extensions for VS Code, which leverage the power of Metadata API.

# Move Metadata Changes to and from a Scratch Org

Use a scratch org to develop and test changes to metadata. You can perform your development within or outside the scratch org using Salesforce CLI or Salesforce Extensions for VS Code, which leverage the power of Metadata API.

Scratch orgs are created empty so that developers can specify the exact metadata and data to include from the source control system. The lifespan of a scratch org is indicated during creation, 1–30 days. They’re ephemeral to ensure the source of truth is always the source control system, and not the org itself.

You can move metadata from the source control system or to the scratch org using Salesforce CLI. Because scratch orgs use source tracking to identify changes, the CLI is the most efficient way to move metadata between your local repository and the scratch org. Continue to iterate through this process of moving metadata between your local file system and your scratch org until development is complete.

#### See Also

-   [Push Source to the Scratch Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm)

-   [Pull Source from the Scratch Org to Your Project](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm)
