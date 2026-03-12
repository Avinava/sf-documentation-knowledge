---
title: "View All Package Versions in the Org"
domain: pkg1-dev
topic: view-all-package-versions-in-the-org
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.701Z
estimatedTokens: 139
keywords: [View, Package, Versions, Org]
---

# View All Package Versions in the Org

> View the details about all package versions in the org.

# View All Package Versions in the Org

View the details about all package versions in the org.

1.  From the project directory, run the list command.

    sf package1 version list

    The output is similar to this example. When you view the package versions, the list shows a single package for multiple package versions.

    ```

    ```


#### See Also

-   [*Salesforce CLI Command Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference "Salesforce CLI Command Reference - HTML (New Window)")

## Code Examples

```
METADATAPACKAGEVERSIONID  METADATAPACKAGEID   NAME  VERSION  RELEASESTATE  BUILDNUMBER
────────────────────────  ──────────────────  ────  ───────  ────────────  ───────────
04txx000000069oAAA        033xx00000007coAAA  r00   1.0.0    Released      1
04txx000000069tAAA        033xx00000007coAAA  r01   1.1.0    Released      1
04txx000000069uAAA        033xx00000007coAAA  r02   1.2.0    Released      1
04txx000000069yAAA        033xx00000007coAAA  r03   1.3.0    Released      1
04txx000000069zAAA        033xx00000007coAAA  r04   1.4.0    Released      1
```
