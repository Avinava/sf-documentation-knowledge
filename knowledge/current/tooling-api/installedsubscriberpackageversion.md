---
title: "InstalledSubscriberPackageVersion"
domain: tooling-api
topic: installedsubscriberpackageversion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.146Z
keywords: [InstalledSubscriberPackageVersion, Warning, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# InstalledSubscriberPackageVersion

# InstalledSubscriberPackageVersion

Deprecated and slated for removal. Represents a package version (first- or second-generation) that is installed in a subscriber’s org. Available in API version 41.0 and later.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=api_tooling)

#### Warning

This object is not currently in use. It will be removed in a future release.

## Supported SOAP Calls

describeSObjects(), query(), retrieve()

## Supported REST HTTP Methods

GET, Query

## Fields

| Field | Details |
| --- | --- |
| MinPackageVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionPackage version ID (foreign key) of the first version of the package that was installed in the org. |
| SubscriberPackageId | TypereferencePropertiesFilter, Group, SortDescriptionID of the subscriber package. |
| SubscriberPackageVersionId | TypereferencePropertiesFilter, Group, Sort, UniqueDescriptionID of the subscriber package version. |