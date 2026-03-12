---
title: "Code Coverage for Second-Generation Managed Packages"
domain: pkg2-dev
topic: code-coverage-for-second-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.988Z
estimatedTokens: 312
keywords: [Code, Coverage, Second-Generation, Managed, Packages, release, distribute, package, version, AppExchange, Apex, meet, minimum, 75%, requirement]
---

# Code Coverage for Second-Generation Managed Packages

> Before you can release and distribute a second-generation managed package version on
    AppExchange, the Apex code must meet a minimum 75% code coverage requirement. And every Apex
    Trigger in a package needs test coverage.

# Code Coverage for Second-Generation Managed Packages

Before you can release and distribute a second-generation managed package version on AppExchange, the Apex code must meet a minimum 75% code coverage requirement. And every Apex Trigger in a package needs test coverage.

To compute code coverage using Salesforce CLI, use the \--code-coverage parameter when you run the sf package version create command.

Package version creation often takes longer to complete when code coverage is being computed, so consider when to include the code coverage parameter. You can create beta package versions without computing code coverage, but these beta versions can’t be promoted.

If you try to promote a beta package version to managed-released and the version was created without specifying code coverage, or the code coverage in the package version is less than 75%, the package promotion fails. Code coverage is calculated during package version validation. If you skip validation using the \--skip-validation parameter, code coverage isn’t calculated for that package version.

View code coverage information for a package version using sf package version list with the \--verbose parameter, or sf package version report command in Salesforce CLI.
