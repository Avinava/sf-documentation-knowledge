---
title: "Code Coverage for Unlocked Packages"
domain: sfdx-dev
topic: code-coverage-for-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.736Z
estimatedTokens: 323
keywords: [Code, Coverage, Unlocked, Packages, promote, release, package, Apex, meet, minimum, 75%, requirement, install, versions, don't]
---

# Code Coverage for Unlocked Packages

> Before you can promote and release an unlocked package, the Apex code must meet a
    minimum 75% code coverage requirement. You can install package versions that don't meet code
    coverage requirements only in scratch orgs and sandboxes.

# Code Coverage for Unlocked Packages

Before you can promote and release an unlocked package, the Apex code must meet a minimum 75% code coverage requirement. You can install package versions that don't meet code coverage requirements only in scratch orgs and sandboxes.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

Unlocked package versions that were promoted to the released state before Winter ‘21 aren’t subject to code coverage requirements.

To compute code coverage using Salesforce CLI, use the \--code-coverage parameter when you run the sf package version create command.

Package version creation can take longer to complete when code coverage is being computed, so consider when in the development cycle to include the code coverage parameter. You can choose to skip code coverage, and you can skip all validation by specifying the \--skip-validation parameter. You can promote package versions only if they’re validated and meet code coverage requirements.

View code coverage information for a package version using sf package version list with the \--verbose parameter, or the sf package version report command in Salesforce CLI.

We don’t calculate code coverage for org-dependent unlocked packages.
