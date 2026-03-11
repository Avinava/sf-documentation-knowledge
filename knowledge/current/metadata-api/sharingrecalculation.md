---
title: "SharingRecalculation"
domain: metadata-api
topic: sharingrecalculation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.571Z
keywords: [SharingRecalculation, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, File]
---

# SharingRecalculation

# SharingRecalculation

Represents Apex classes that recalculate the Apex managed sharing for a specific custom object.

## Version

Sharing recalculations are available in API version 14.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| className | string | Required. The Apex class that recalculates the Apex sharing for a custom object. This class must implement the Database.Batchable interface. |

## Declarative Metadata Sample Definition

The definition of a sharing recalculation in a custom object:

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_apexsharingreason.htm "SharingReason")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_validationformulas.htm "ValidationRule")