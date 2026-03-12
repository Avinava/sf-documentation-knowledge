---
title: "SubscriberPackage"
domain: tooling-api
topic: subscriberpackage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.940Z
estimatedTokens: 263
keywords: [SubscriberPackage, installable, package, first-, second-generation, across, Salesforce, instances, API, version, 41.0, later, SOAP, Calls, REST]
---

# SubscriberPackage

> Represents an installable package (first- or
            second-generation) across all Salesforce instances. Available in API version 41.0
        and later.

# SubscriberPackage

Represents an installable package (first- or second-generation) across all Salesforce instances. Available in API version 41.0 and later.

## Supported SOAP Calls

describeSObjects(), query(), retrieve()

## Supported REST HTTP Methods

GET, Query

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesNillable, SortDescriptionDescription of the package. |
| IsPackageValid | TypebooleanPropertiesDefaulted on create, Group, SortDescriptionIndicates whether the package metadata is available consistently across all Salesforce instances. If this value is false, the package is unavailable for installation. |
| Name | TypestringPropertiesGroup, idLookup, SortDescriptionName of the package. |
| NamespacePrefix | TypestringPropertiesGroup, idLookup, Nillable, SortDescriptionNamespace prefix that identifies the components of your package in the subscriber’s org. |

## Usage

Represents a package that can be installed. To query this object, include an ID (begins with 033) in your SOQL WHERE clause.
