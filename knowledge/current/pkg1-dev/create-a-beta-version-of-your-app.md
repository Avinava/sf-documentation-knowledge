---
title: "Create a Beta Version of Your App"
domain: pkg1-dev
topic: create-a-beta-version-of-your-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.685Z
estimatedTokens: 638
keywords: [Beta, Version, App, Test, scratch, org, share, evaluation, creating]
---

# Create a Beta Version of Your App

> Test your app in a scratch org, or share the app for evaluation by creating a beta
  version.

# Create a Beta Version of Your App

Test your app in a scratch org, or share the app for evaluation by creating a beta version.

If you specified the package name when you converted source to metadata format, both the changed and new components are automatically added to the package. Including the package name in that stage of the process lets you take full advantage of end-to-end automation.

If, for some reason, you don’t want to include new components, you have two choices. You can omit the package name when you convert source or remove components from the package in the Salesforce UI before you create the package version.

Create the beta version of a managed package by running the commands against your packaging org, not the Dev Hub org.

1.  Ensure that you’ve authorized the packaging org.

    ```

    ```

2.  Create the beta version of the package.

    ```

    ```

    You can get the package ID on the package detail page in the packaging org. If you want to protect the package with an installation key, add it now or when you create the released version of your package. The \--installation-key supplied from the CLI is equivalent to the Password field that you see when working with packages through the Salesforce user interface. When you include a value for \--installation-key, you or a subscriber must supply the key before you can install the package in a target org.


You’re now ready to create a scratch org and install the package there for testing. By default, the create command generates a beta version of your managed package.

Later, when you’re ready to create the Managed - Released version of your package, include the \-m (\--managed-released true) parameter.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

After you create a managed-released version of your package, many properties of the components added to the package are no longer editable. Refer to the First-Generation Managed Packaging Developer Guide to understand the differences between beta and managed-released versions of your package.

#### See Also

-   [*Salesforce CLI Command Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference "Salesforce CLI Command Reference - HTML (New Window)")

-   [Link a Namespace to a Dev Hub Org](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_reg_namespace.htm "To use a namespace with a scratch org, you must link the Developer Edition org where the namespace is registered to a Dev Hub org.")

## Code Examples

```
sf org login web --set-default me@example.com
```

```
sf package1 version create --package-id package_id --name package_version_name
```

## Related Topics

- Link a Namespace to a Dev Hub Org (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_reg_namespace.htm)
