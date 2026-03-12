---
title: "Specify Unpackaged Metadata or Apex Access for Package Version Creation Tests for
        Second-Generation Managed Packages"
domain: pkg2-dev
topic: specify-unpackaged-metadata-or-apex-access-for-package-version-creation-tests-fo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.153Z
estimatedTokens: 399
keywords: [Specify, Unpackaged, Metadata, Apex, Access, Package, Version, Creation, Tests, Second-Generation, Managed, Packages, scenarios, require, isn’t]
---

# Specify Unpackaged Metadata or Apex Access for Package Version Creation Tests for
        Second-Generation Managed Packages

> For scenarios where you require metadata that isn’t part of your
            second-generation managed package, but is necessary for Apex test runs, you can specify
            the path containing unpackaged metadata in the sfdx-project.json
            file. The unpackaged metadata isn’t included in the package and isn’t installed in
            subscriber orgs.

# Specify Unpackaged Metadata or Apex Access for Package Version Creation Tests for Second-Generation Managed Packages

For scenarios where you require metadata that isn’t part of your second-generation managed package, but is necessary for Apex test runs, you can specify the path containing unpackaged metadata in the sfdx-project.json file. The unpackaged metadata isn’t included in the package and isn’t installed in subscriber orgs.

## Specify Unpackaged Metadata for Package Version Creation Tests

Specify the path to the unpackaged metadata in your sfdx-project.json file.

In this example, metadata in the my-unpackaged-directory is available for test runs during the package version creation of the TV\_unl package.

```

```

The unpackagedMetadata attribute is intended for metadata that isn’t part of your package. You can’t include the same metadata in both an unpackaged directory and a packaged directory.

## Manage Apex Access for Package Version Creation Tests

Sometimes the Apex tests that you write require a user to have certain permission sets or permission set licenses. Use the apexTestAccess setting to assign permission sets and permission set licenses to the user in whose context your Apex tests get run at package version creation.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

To assign user licenses, use the [runAs Method](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing_tools_runas.htm). User licenses can't be assigned in the sfdx-project.json file.

## Code Examples

```
"packageDirectories": [
    {
        "path": "force-app",
        "package": "TV_unl", 
        "versionName": "ver 0.1",
        "versionNumber": "0.1.0.NEXT",
        "default": true, 
        "unpackagedMetadata": {
            "path": "my-unpackaged-directory"
        }
    }, 
]
```

```
"packageDirectories": [
    {
        "path": "force-app",
        "package": "TV_unl", 
        "versionName": "ver 0.1",
        "versionNumber": "0.1.0.NEXT",
        "default": true, 
        "unpackagedMetadata": {
            "path": "my-unpackaged-directory"
        },
        "apexTestAccess": {
               "permissionSets": [
                   "Permission_Set_1",
                   "Permission_Set_2"
               ],
               "permissionSetLicenses": [
                   "SalesConsoleUser"
               ]
           }

    }, 
]
```
