---
title: "Install the Package in a Target Org"
domain: pkg1-dev
topic: install-the-package-in-a-target-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.694Z
estimatedTokens: 275
keywords: [Install, Package, Target, Org, CLI, any, authenticate, including, scratch]
---

# Install the Package in a Target Org

> After you create a package with the CLI, install the package in a target org. You can
  install the package in any org you can authenticate, including a scratch org.

# Install the Package in a Target Org

After you create a package with the CLI, install the package in a target org. You can install the package in any org you can authenticate, including a scratch org.

If you want to create a scratch org and set it as the defaultusername org, run this command from the project directory.

```

```

To locate the ID of the package version to install, run sf package1 version list.

```

```

You can then copy the package version ID you want to install. For example, the ID 04txx000000069zAAA is for version 1.4.0.

1.  Install the package. You supply the package alias or version ID, which starts with 04t, in the required \--package parameter.

    ```

    ```

    If you’ve set a default target org, the package is installed there. You can specify a different target org with the \--target-org parameter. If the package is protected by an installation key, supply the key with the \--installation-key parameter.


To uninstall a package, open the target org and choose **Setup**. On the Installed Packages page, locate the package and choose **Uninstall**.

## Code Examples

```
sf org create scratch -definition-file config/project-scratch-def.json
```

```
METADATAPACKAGEVERSIONID  METADATAPACKAGEID   NAME  VERSION  RELEASESTATE  BUILDNUMBER
────────────────────────  ──────────────────  ────  ───────  ────────────  ───────────
04txx000000069oAAA        033xx00000007coAAA  r00   1.0.0    Released      1
04txx000000069tAAA        033xx00000007coAAA  r01   1.1.0    Released      1
04txx000000069uAAA        033xx00000007coAAA  r02   1.2.0    Released      1
04txx000000069yAAA        033xx00000007coAAA  r03   1.3.0    Released      1
04txx000000069zAAA        033xx00000007coAAA  r04   1.4.0    Released      1
```

```
sf package install --package 04txx000000069zAAA
```
