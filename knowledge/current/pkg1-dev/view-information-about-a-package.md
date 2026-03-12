---
title: "View Information About a Package"
domain: pkg1-dev
topic: view-information-about-a-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.696Z
estimatedTokens: 247
keywords: [View, Package, specific, version, including, metadata, release, state, build, number]
---

# View Information About a Package

> View the details about a specific package version, including its metadata package ID,
        package name, release state, and build number.

# View Information About a Package

View the details about a specific package version, including its metadata package ID, package name, release state, and build number.

1.  From the project directory, run this command, supplying a package version ID.

    sf package1 version display -i 04txx000000069yAAA

    The output is similar to this example.

    ```

    ```


-   **[View All Package Versions in the Org](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_man_pack_viewinfo_all_pack.htm)**
    View the details about all package versions in the org.
-   **[Package IDs](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_package_ids.htm)**
    When you work with packages using the CLI, the package IDs refer either to a unique package or a unique package version.

#### See Also

-   [*Salesforce CLI Command Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference "Salesforce CLI Command Reference - HTML (New Window)")

## Code Examples

```
METADATAPACKAGEVERSIONID  METADATAPACKAGEID   NAME  VERSION  RELEASESTATE  BUILDNUMBER
────────────────────────  ──────────────────  ────  ───────  ────────────  ───────────
04txx000000069yAAA        033xx00000007coAAA  r03   1.3.0    Released      1
04txx000000069yAAA        033xx00000011coAAA  r03   1.4.0    Released      1
```

## Related Topics

- View All Package Versions in the Org (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_man_pack_viewinfo_all_pack.htm)
- Package IDs (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_package_ids.htm)
