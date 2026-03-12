---
title: "SecurityHealthCheck"
domain: tooling-api
topic: securityhealthcheck
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.872Z
estimatedTokens: 394
keywords: [SecurityHealthCheck, org’s, Health, Check, score, how, well, security, settings, comply, Salesforce-recommended, baseline, standard, users, “View]
---

# SecurityHealthCheck

> Represents your org’s Health Check score. The score
            indicates how well your org’s security settings comply with Salesforce-recommended values
            in the baseline standard. Only users with the “View Setup and Configuration” user
            permission can retrieve data from this object. Available in Tooling API version 37.0 and
        later.

# SecurityHealthCheck

Represents your org’s Health Check score. The score indicates how well your org’s security settings comply with Salesforce-recommended values in the baseline standard. Only users with the “View Setup and Configuration” user permission can retrieve data from this object. Available in Tooling API version 37.0 and later.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| CustomBaselineId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Identifies which baseline is used to import settings and calculate score. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| Score | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Health Check score for the org. The score can range from 0 to 100. |

## Usage

Use this object to query your org’s Health Check score.

```

```

More Health Check information is available by querying the object [SecurityHealthCheckRisks](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_securityhealthcheckrisks.htm "Represents your org’s security setting values, risks, and Salesforce-recommended setting values. Only users with the \"View Setup and Configuration\" user permission can retrieve data from this object. Available in Tooling API version 37.0 and later.").

## Code Examples

```
SELECT Score FROM SecurityHealthCheck
```

## Related Topics

- SecurityHealthCheckRisks (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_securityhealthcheckrisks.htm)
