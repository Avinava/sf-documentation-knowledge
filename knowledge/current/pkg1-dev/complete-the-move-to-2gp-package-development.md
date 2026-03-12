---
title: "Complete the Move to 2GP Package Development"
domain: pkg1-dev
topic: complete-the-move-to-2gp-package-development
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.471Z
estimatedTokens: 592
keywords: [Move, 2GP, Package, Development, fully, transition, retrieve, source, files, package’s, latest, converted, version, confirm, Setup]
---

# Complete the Move to 2GP Package Development

> To fully transition to 2GP package development, you retrieve the source files for your package’s latest converted version. Then, you confirm in Setup for your packaging org that you’re ready to develop and distribute your package solely using 2GP packaging.

# Complete the Move to 2GP Package Development

To fully transition to 2GP package development, you retrieve the source files for your package’s latest converted version. Then, you confirm in Setup for your packaging org that you’re ready to develop and distribute your package solely using 2GP packaging.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg1_dev)

#### Important

Before you complete your move to 2GP package development, it’s critical that you thoroughly test package conversions and subscriber migrations first. See [Test Converted Packages and Subscriber Migrations](atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_test_conversions_migrations.htm "When you complete your move to 2GP development, you can no longer create any new major or minor 1GP versions of that package. Before you make this transition, it’s critical that you thoroughly test packages converted to 2GP and the migration of subscribers to 2GP.").

1.  To retrieve the source files for your package’s latest converted version, run the sf package version retrieve CLI command. This example retrieves the package metadata for a converted subscriber package version ID into my-folder/ within a Salesforce DX project directory:

    ```

    ```

2.  Open the new sfdx-project.json file and update the versionName, versionNumber, and ancestorVersion.
3.  From Setup in the packaging org, enter Package Manager in the Quick Find box, and then select **Package Manager**.
4.  Click the package that you want to move to 2GP development.
5.  On the package’s detail page, click **Move to 2GP**.

    ![The Move to 2GP button on a package's detail page](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fmigration_move_to_2gp.png&folder=pkg1_dev)

6.  Carefully review and acknowledge the statements in the Move to Second-Generation Managed Packaging window, then click **Proceed**.

    ![The statements to acknowledge before you proceed with moving to 2GP.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fmigration_move_to_2gp_modal.png&folder=pkg1_dev)


After you click **Proceed**, you can no longer create new major or minor versions in the packaging org. To innovate on the package using 2GP, you create new package versions using the sf package version create CLI command.

## Code Examples

```
sf package version retrieve  --package 04tXXX --output-dir my-folder –-target-dev-hub devhub@example.com
```

## Related Topics

- Test Converted Packages and Subscriber Migrations (atlas.en-us.pkg1_dev.meta/pkg1_dev/migration_test_conversions_migrations.htm)
