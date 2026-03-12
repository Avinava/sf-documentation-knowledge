---
title: "Create a Managed Package Version of Your App"
domain: pkg1-dev
topic: create-a-managed-package-version-of-your-app
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:35:25.689Z
estimatedTokens: 462
keywords: [Managed, Package, Version, App, testing, almost, ready, published, enterprise, AppExchange, Generate, new, Dev, Hub, org]
---

# Create a Managed Package Version of Your App

> After your testing is done, your app is almost ready to be published in your enterprise
  or on AppExchange. Generate a new managed package version in your Dev Hub org.

# Create a Managed Package Version of Your App

After your testing is done, your app is almost ready to be published in your enterprise or on AppExchange. Generate a new managed package version in your Dev Hub org.

Ensure that you’ve authorized the packaging org and can view the existing package versions.

```

```

View the existing package versions for a specific package to get the ID for the version you want to install.

```

```

To view details for all packages in the packaging org, run the command with no parameters.

More than one beta package can use the same version number. However, you can use each version number for only one *managed* package version. You can specify major or minor version numbers.

You can also include URLs for a post-installation script and release notes. Before you create a managed package, make sure that you’ve configured your developer settings, including the namespace prefix.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

After you create a managed package version, you can’t change some attributes of Salesforce components used in the package. See: [Components Available in Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_packageable_components.htm) for information on editable components.

1.  Create the managed package. Include the \--managed-released parameter.

    ```

    ```

    You can use other options, like \--wait to specify the number of minutes to wait.

    To protect the package with an installation key, include a value for \--installation-key. Then, you or a subscriber must supply the key before you can install the package in a target org.

    After the managed package version is created, you can retrieve the new package version ID using sf package1 version list.

## Code Examples

```
sf org login web --instance-url https://test.salesforce.com --set-default org_alias
```

```
sf package1 version list --package-id 033...
```

```
sf package1 version create --package-id 033xx00000007oi --name ”Spring 22” --description ”Spring 22 Release” --version 3.2 --managed-released
```
