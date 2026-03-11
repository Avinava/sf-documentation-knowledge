---
title: "Adding Apex Code to a AppExchange App"
domain: apex-guide
topic: adding-apex-code-to-a-appexchange-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.220Z
keywords: [Adding, Apex, Code, AppExchange, App]
---

# Adding Apex Code to a AppExchange App

# Adding Apex Code to a AppExchange App

You can include an Apex class or trigger in an app that you’re creating for AppExchange.

Any Apex that is included as part of a package must have at least 75% cumulative test coverage. Each trigger must also have some test coverage. When you upload your package to AppExchange, all tests are run to ensure that they run without errors. In addition, tests with the@isTest(OnInstall=true) annotation run when the package is installed in the installer's organization. You can specify which tests should run during package install by annotating them with @isTest(OnInstall=true). This subset of tests must pass for the package install to succeed.

For more information, see the [Second-Generation Managed Packaging Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp.htm).