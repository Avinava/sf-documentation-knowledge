---
title: "PackageVersionUninstallRequestError"
domain: tooling-api
topic: packageversionuninstallrequesterror
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.433Z
keywords: [PackageVersionUninstallRequestError, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# PackageVersionUninstallRequestError

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