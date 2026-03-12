---
title: "Package-Based Development Model"
domain: sfdx-dev
topic: package-based-development-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.825Z
estimatedTokens: 362
keywords: [Package-Based, Development, Model, demonstrate, power, unlocked, packages, here’s, how, packaging, works, traditional, production, orgs, metadata]
---

# Package-Based Development Model

> To demonstrate the power of unlocked packages, here’s how packaging works in the
  traditional development model. For most production orgs, metadata traditionally is contained in
  two buckets: a set of managed packages installed from AppExchange, and unpackaged
  metadata.

# Package-Based Development Model

To demonstrate the power of unlocked packages, here’s how packaging works in the traditional development model. For most production orgs, metadata traditionally is contained in two buckets: a set of managed packages installed from AppExchange, and unpackaged metadata.

Customers often invest in Salesforce customizations to support business processes and extend the power of the Salesforce platform. In the development model, your Salesforce org’s monolith of unpackaged metadata contains all the metadata that belongs to a custom app or extension. Because that metadata isn’t isolated or organized, it can be difficult to understand, upgrade, and maintain.

In the package development model, you can organize your unpackaged metadata in your production org into well-defined packages. And you can use Salesforce DX projects to organize your source into package directories with everything managed in a version control system of your choice. Your end goal is to create packages using those directories that are versionable, easy to maintain, update, install, and upgrade.

Unlocked packages allow you to declare multi-level dependencies on one or many managed and unlocked packages, which keeps your packages small and modular. You can use the command line to execute unlocked packaging operations, or you can include packaging-specific Salesforce CLI commands in a script and automate your package development.
