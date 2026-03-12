---
title: "SubscriberPackageVersionUninstallRequest"
domain: tooling-api
topic: subscriberpackageversionuninstallrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.968Z
estimatedTokens: 172
keywords: [uninstall, Package2Version, second-generation, package, version, API, 41.0, later, SOAP, Calls, REST, HTTP]
---

# SubscriberPackageVersionUninstallRequest

> Represents a request to uninstall a Package2Version (second-generation package
            version). Available in API version 41.0 and later.

# SubscriberPackageVersionUninstallRequest

Represents a request to uninstall a Package2Version (second-generation package version). Available in API version 41.0 and later.

## Supported SOAP Calls

create(), describeSObjects(), query(), retrieve()

## Supported REST HTTP Methods

GET, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Status | TypepicklistPropertiesGroup, Nillable, Restricted picklist, SortDescriptionThe status of the uninstall. Valid values are:ErrorInProgressQueuedSuccess |
| SubscriberPackageVersionId | TypeIDPropertiesCreate, Filter, Group, SortDescriptionThe ID of the subscriber Package2 version to uninstall. The ID starts with the string 04t. |
