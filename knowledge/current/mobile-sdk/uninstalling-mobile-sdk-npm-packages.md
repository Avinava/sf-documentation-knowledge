---
title: "Uninstalling Mobile SDK npm Packages"
domain: mobile-sdk
topic: uninstalling-mobile-sdk-npm-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.883Z
estimatedTokens: 202
keywords: [Uninstalling, Mobile, SDK, npm, Packages, uninstall, package, script, Installations, Local]
---

# Uninstalling Mobile SDK npm Packages

> If you need to uninstall an npm package, use the npm script.

# Uninstalling Mobile SDK npm Packages

If you need to uninstall an npm package, use the npm script.

## Uninstall Global Installations

For global installations, run the following command from any folder:

-   **On Mac OS X:**

    ```

    ```

    Use sudo if you lack read-write permissions on the /usr/local/bin/ directory.
-   **On Windows:**

    ```

    ```


where <package-name> is replaced by one of the following values:

-   forcedroid
-   forceios
-   forcehybrid
-   forcereact

## Uninstall Local Installations

For local installations, run the following command from the folder where you installed the package:

-   **On Mac OS X or Windows:**

    ```

    ```


where <package-name> is replaced by one of the following values:

-   forcedroid
-   forceios
-   forcehybrid
-   forcereact

## Code Examples

```
sudo npm uninstall <package-name> -g
```

```
npm uninstall <package-name> -g
```

```
npm uninstall <package-name>
```
