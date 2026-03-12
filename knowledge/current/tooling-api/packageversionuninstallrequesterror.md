---
title: "PackageVersionUninstallRequestError"
domain: tooling-api
topic: packageversionuninstallrequesterror
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.298Z
estimatedTokens: 184
keywords: [PackageVersionUninstallRequestError, Represents, error, encountered, while, requesting, uninstall, Package2Version, second-generation, package, version, API, 41.0, later., Supported, SOAP, Calls, REST, HTTP, Fields]
---

# PackageVersionUninstallRequestError

> Represents an
            error encountered while requesting an uninstall of a Package2Version (second-generation
            package version). Available in API version 41.0 and later.

# PackageVersionUninstallRequestError

Represents an error encountered while requesting an uninstall of a Package2Version (second-generation package version). Available in API version 41.0 and later.

## Supported SOAP Calls

describeSObjects(), query(), retrieve()

## Supported REST HTTP Methods

GET, Query

## Fields

| Field | Details |
| --- | --- |
| Message | TypestringPropertiesFilter, Nillable, SortDescriptionThe error that was encountered during the request of an uninstall of the second-generation package version. |
| ParentRequestId | TypeIDPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the SubscriberPackageVersionUninstallRequest object associated with this error. The ID starts with the string 06y. |
