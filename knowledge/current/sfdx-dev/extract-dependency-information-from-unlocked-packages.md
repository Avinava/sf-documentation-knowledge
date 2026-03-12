---
title: "Extract Dependency Information from Unlocked Packages"
domain: sfdx-dev
topic: extract-dependency-information-from-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.779Z
estimatedTokens: 285
keywords: [Extract, Dependency, Unlocked, Packages, installed, package, now, run, simple, SOQL, query, script, automate, installation, dependencies]
---

# Extract Dependency Information from Unlocked Packages

> For an installed unlocked package, you can now run a simple SOQL query to extract its
        dependency information. You can also create a script to automate the installation of
        unlocked packages with dependencies.

# Extract Dependency Information from Unlocked Packages

For an installed unlocked package, you can now run a simple SOQL query to extract its dependency information. You can also create a script to automate the installation of unlocked packages with dependencies.

The SubscriberPackageVersion Tooling API object now provides dependency information. Using a SOQL query on SubscriberPackageVersion, you can identify the packages on which your unlocked package has a dependency. You can get the (04t) IDs and the correct install order for those packages.

## Example

Package B has a dependency on package A. Package D depends on packages B and C. Here’s a sample sfdx-project.json that you would have specified while creating a package version. Package D dependencies are noted as packages A, B, and C.

```

```

Before installing pkgD (with ID=04txx000000082hAAA), use this SOQL query to determine its dependencies. The username is typically the target subscriber org where the unlocked package is to be installed.

```

```

You see this output when you run the query, with the (04t) IDs for pkgA, pkgB, and pkgC in that order.

```

```

## Code Examples

```
{
    "packageDirectories": [
        {
            "path": "pkg-a-workspace",
            "package": "pkgA",
            "versionName": "ver 4.9",
            "versionNumber": "4.9.0.NEXT",
            "default": true
        },
        {
            "path": "pkg-b-workspace",
            "package": "pkgB",
            "versionName": "ver 3.17",
            "versionNumber": "3.17.0.NEXT",
            "default": false,
            "dependencies": [
                {
                    "package": "pkgA",
                    "versionNumber": "3.3.0.LATEST"
                }
            ]
        },
        {
            "path": "pkg-c-workspace",
            "package": "pkgC",
            "versionName": "ver 2.1",
            "versionNumber": "2.1.0.NEXT",
            "default": false
        },
        {
            "path": "pkg-d-workspace",
            "package": "pkgD",
            "versionName": "ver 1.1",
            "versionNumber": "1.1.0.NEXT",
            "default": false,
            "dependencies": [
                {
                    "package": "pkgA",
                    "versionNumber": "3.3.0.LATEST"
                },
                {
                    "package": "pkgB",
                    "versionNumber": "3.12.0.LATEST"
                },
                {
                    "package": "pkgC",
                    "versionNumber": "2.1.0.LATEST"
                }
            ]
        }
    ],
    "namespace": "",
    "sfdcLoginUrl": "https://login.salesforce.com",
    "sourceApiVersion": "44.0",
    "packageAliases": {
        "pkgA": "0HoB00000008Oq6KAE",
        "pkgB": "0HoB00000008OqBKAU",
        "pkgC": "0HoB00000008OqGKAU",
        "pkgD": "0HoB00000008OqGKAQ"
    }
}
```

```
sf data query -u {USERNAME} -t 
   -q "SELECT Dependencies FROM SubscriberPackageVersion 
       WHERE Id='04txx000000082hAAA'" --json
```

```
"Dependencies":{"Ids":[
   {"subscriberPackageVersionId":"04txx000000080vAAA"},
   {"subscriberPackageVersionId":"04txx000000082XAAQ"},
   {"subscriberPackageVersionId":"04txx0000000AiGAAU"}]}
```
