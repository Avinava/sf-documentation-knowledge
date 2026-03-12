---
title: "Convert Your Managed 1GP Package to 2GP"
domain: pkg1-dev
topic: convert-your-managed-1gp-package-to-2gp
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.463Z
estimatedTokens: 1810
keywords: [Convert, Managed, 1GP, Package, 2GP, version, ensure, development, environment]
---

# Convert Your Managed 1GP Package to 2GP

> Before you convert your managed 1GP package version, ensure your development environment
  is set up.

# Convert Your Managed 1GP Package to 2GP

Before you convert your managed 1GP package version, ensure your development environment is set up.

You need the latest version of Salesforce CLI installed, and the [Dev Hub and second-generation managed packaging](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_enable_devhub.htm) enabled in your PBO (Partner Business Org).

Package Conversion Steps

1.  Run sf update to ensure you have the latest Salesforce CLI.
2.  From your command line, navigate to the directory in which you plan to create your Salesforce DX project directory.
3.  Create a Salesforce DX project. For example: sf project generate --name myconvertedpkg.
4.  Authorize to your Dev Hub org.

    sf org login web --set-default-dev-hub

5.  Link the namespace of your managed 1GP to the Dev Hub in your Partner Business Org (PBO).

    1.  Log in to your Dev Hub org.
    2.  Follow the steps listed in [Link a Namespace to a Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm).

    After you convert a package, it's associated with your Dev Hub org. The association between the Dev Hub org and your package can’t be changed. And you can't associate the package with a second, separate Dev Hub org. This means any subsequent package conversions you initiate for this package must be associated with the Dev Hub org you specify the first time you convert a particular package.

6.  If your package depends on standard value sets, create a seed metadata file. Then in step 7, when you run sf package convert, include the —-seed-metadata flag.

    For details on setting up a seed metadata file, see [Picklist Value Errors](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_troubleshoot_errors.htm).

7.  If your package has tests that depend on unpackaged metadata, add an unpackaged metadata directory to your sfdx-project.json file. To learn more about sfdx-project.json file, see [Project Configuration File for a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_config_file.htm).

    Example:

    ```

    ```

8.  From the command line, navigate to the directory on your computer that contains your Salesforce DX project, then convert your package.

    Example:

    ```

    ```

    To locate your 033 package ID, log in to your 1GP packaging org. From Setup, enter Package Manager in the Quick Find box, and then select **Package Manager**. Select the name of your managed package. After you navigate to the Package Detail page, inspect the URL in your browser’s address bar. The 15-character string in the URL that begins with 033 is your package ID.

    If the package version you're converting is a patch version, you must include the \--patch-version flag when you run the package convert command. Package versions follow a major.minor.patch.build number format. Any package version number that contains a non-zero patch number is a patch version. For example, 1.1.2 is a patch version, but 1.1.0 isn’t.

    Before converting a patch version you must first convert the major.minor version of that package. Using the above example, you must convert package version 1.1.0 before converting patch version 1.1.2.


What’s an Installation Key?

In the CLI command shown in step 7, an installation key with the value of mpdTest is specified. An installation key is a security key. By including this flag with the package conversion command, you’re setting a password and requiring that password whenever anyone installs the converted 2GP package. If you prefer not to require an installation key, specify \--installation-key-bypass when you convert your package.

Congrats, Your Package is Converted

After you’ve completed steps 1-7, your 1GP package is converted to 2GP. You can test your package in a scratch org.

The converted package is a beta version. Before you migrate the package you must promote it to a managed-released version. See [Get Ready to Promote and Release a Second-Generation Managed Package Version](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_get_ready_promote.htm) for details.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

In a scratch org, you don’t need to promote the package version to migrate it.

To promote a package version to released, you must use the \--code-coverage flag when converting the package version. The package must also meet the code coverage requirements.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

When you use the \--code-coverage flag, you must have the required permission sets defined in the sfdx-project.json file, so that the Apex tests can run successfully. For more information, see the Permission Sets for Code Coverage section in [Troubleshoot Package Conversion Failures](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_troubleshoot_errors.htm#migration_troubleshoot_errors "Here are some possible error scenarios that can occur when you convert a package.").

If the source 1GP package version has passed the AppExchange security review, then you don’t need to request a new security review for the 2GP-converted version. The 2GP-converted version inherits the listing readiness of the source 1GP package version. See [Listing Readiness for Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/security_review_listing_readiness.htm) in the ISVforce Guide for more information.

Keep in mind that after you migrate subscribers to 2GP, all future upgrades to that package version for that subscriber must use a 2GP package version.

To fully transition your package development from your 1GP packaging org to a 2GP, CLI-based development model, see [Complete the Move to 2GP Package Development](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_move_to_2gp_workflow.htm "To fully transition to 2GP package development, you retrieve the source files for your package’s latest converted version. Then, you confirm in Setup for your packaging org that you’re ready to develop and distribute your package solely using 2GP packaging.").

-   **[View Details about Your Converted 2GP Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_view_conversion_details.htm)**
    So you’ve converted your 1GP package to a 2GP package. You can use one of two Salesforce CLI commands to retrieve details about your 2GP packages.
-   **[Specify Dependencies on Unpackageable Metadata](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_unpackageable_md.htm)**
    It’s possible that the managed 1GP package you’re converting includes tests or references to unpackageable metadata.
-   **[Test Your Converted Managed 2GP Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_testing.htm)**
    Before you migrate your first subscribers, we strongly recommend you install your newly converted managed 2GP package into a new scratch org and test its functionality. If you prefer, you can also install the converted package in a sandbox, or developer edition org.

## Code Examples

```
"packageDirectories": [
    {
        "path": "force-app",
        "package": "TV_unl", 
        "versionName": "ver 2.1",
        "default": true, 
        "unpackagedMetadata": {
            "path": "my-unpackaged-directory"
         }
    }, 
]
```

```
sf package convert --installation-key mdpTest --package 033xxx --wait 20
```

## Related Topics

- Troubleshoot Package Conversion Failures (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_troubleshoot_errors.htm)
- Complete the Move to 2GP Package Development (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_move_to_2gp_workflow.htm)
- View Details about Your Converted 2GP Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_view_conversion_details.htm)
- Specify Dependencies on Unpackageable Metadata (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_unpackageable_md.htm)
- Test Your Converted Managed 2GP Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_testing.htm)
