---
title: "MobileSecurityUserMetric"
domain: object-reference
topic: mobilesecurityusermetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.001Z
estimatedTokens: 199
keywords: [MobileSecurityUserMetric, metrics, users, Enhanced, Mobile, Security, policies, enforced, API, version, 51.0, later, Calls, Special, Access]
---

# MobileSecurityUserMetric

> Represents the metrics for users who have Enhanced Mobile Security
         policies enforced. This object is available in API version 51.0 and later.

# MobileSecurityUserMetric

Represents the metrics for users who have Enhanced Mobile Security policies enforced. This object is available in API version 51.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Accessing this object requires the Enhanced Mobile App Security add-on subscriptions and the Enforce Enhanced Mobile App Security user permission.

## Fields

| Field | Details |
| --- | --- |
| MetricsDate | TypedatePropertiesFilter, Group, SortDescriptionThe date the metrics were collected. |
| UserCount | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of users who have mobile security policies enforced. |

## Usage

A user with the Manage Enhanced Mobile App Security permission can run this SOQL query.

```

```

## Code Examples

```
SELECT MetricsDate, UserCount
FROM MobileSecurityUserMetric
ORDER BY MetricsDate DESC
```
