---
title: "View Package Ancestry"
domain: pkg2-dev
topic: view-package-ancestry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.160Z
estimatedTokens: 417
keywords: [View, Package, Ancestry, Salesforce, CLI, commands, quickly, confirm, package’s, ancestor, visualization, tree, Visualize]
---

# View Package Ancestry

> Use Salesforce CLI commands to quickly confirm your package’s ancestor, or to create a
    visualization of the package ancestry tree.

# View Package Ancestry

Use Salesforce CLI commands to quickly confirm your package’s ancestor, or to create a visualization of the package ancestry tree.

## View Package Ancestor Details in Salesforce CLI

Use the sf package version report or sf package version list command to view the name and version number of the package ancestor.

Output from sf package version report command.

![Output from package:version:list command](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fsfdx_packaging_cli_report.png&folder=pkg2_dev)

Output from sf package version list command.

![Output from package:version:report command](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fsfdx_packaging_cli_list.png&folder=pkg2_dev)

## Visualize Package Ancestry

Use the displayancestry CLI command to create visualizations of your package or package version’s ancestry tree. You can view the visualization in Salesforce CLI or use the dot-code parameter to generate output that can be used in graph visualization software.

Use sf package version displayancestry to quickly visualize your package ancestry and understand the possible package upgrade paths.

![Graphic tree visualization for package:version:create](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fsfdx_packaging_ancestry.png&folder=pkg2_dev)

![Graphic tree visualization for package:create](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fsfdx_packaging_package_version_ancestry.png&folder=pkg2_dev)

To generate dotcode output, specify sf package version displayancestry --dot-code.
