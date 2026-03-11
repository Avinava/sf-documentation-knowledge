---
title: "InstalledSubscriberPackage"
domain: tooling-api
topic: installedsubscriberpackage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.143Z
keywords: [InstalledSubscriberPackage, Supported, SOAP, Calls, REST, HTTP, Methods, Fields, Usage]
---

# InstalledSubscriberPackage

# InstalledSubscriberPackage

Represents a package (first- or second-generation) that is installed in a subscriber’s org. Available in API version 41.0 and later.

## Supported SOAP Calls

describeSObjects(), query(), retrieve()

## Supported REST HTTP Methods

GET, Query

## Fields

| Field | Details |
| --- | --- |
| MinPackageVersionId | TypeIDPropertiesFilter, Group, Nillable, SortDescriptionPackage version ID (foreign key) of the first version of the package that was installed in the org. Starts with 04t. |
| SubscriberPackageId | TypeIDPropertiesFilter, Group, Nillable, SortDescriptionID of the subscriber package. Starts with 033. |
| SubscriberPackageVersionId | TypeIDPropertiesFilter, Group, Nillable, SortDescriptionID that shows the currently installed package version. Starts with 04t. |

## Usage

Query InstalledSubscriberPackage for details about the packages that are installed in your org. Sample SOQL query:

```

```