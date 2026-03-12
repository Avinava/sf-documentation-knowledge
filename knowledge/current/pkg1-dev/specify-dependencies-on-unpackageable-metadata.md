---
title: "Specify Dependencies on Unpackageable Metadata"
domain: pkg1-dev
topic: specify-dependencies-on-unpackageable-metadata
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.500Z
estimatedTokens: 361
keywords: [Specify, Dependencies, Unpackageable, Metadata, It’s, possible, managed, 1GP, package, you’re, converting, includes, tests, references]
---

# Specify Dependencies on Unpackageable Metadata

> It’s possible that the managed 1GP package you’re converting includes tests or
    references to unpackageable metadata.

# Specify Dependencies on Unpackageable Metadata

It’s possible that the managed 1GP package you’re converting includes tests or references to unpackageable metadata.

To ensure your package conversion is successful, references to unpackageable metadata must be specified in your [project configuration file](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev2gp_config_file.htm). If you followed the steps in [Convert Your Managed 1GP Package to 2GP](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_conversion_workflow.htm), you created a Salesforce DX project in step three. When you create a Salesforce DX project, the project configuration file (sfdx-project.json) is automatically created.

If you think you may have these kinds of references, review [Specify Unpackaged Metadata for Package Version Creation Tests](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_unpackaged_md.htm) and [Reference Standard Value Sets by Specifying a Seed Metadata Directory.](https://help.salesforce.com/s/articleView?id=release-notes.rn_packaging_standard_value_sets.htm&release=244&type=5&language=en_US) In [Migrating Your Subscribers from 1GP to 2GP](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_pkg_migration_workflow.htm), we share when in the conversion workflow to specify unpackageable metadata.
