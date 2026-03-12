---
title: "List Asynchronous Runs of a Report"
domain: api-analytics
topic: list-asynchronous-runs-of-a-report
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.925Z
estimatedTokens: 206
keywords: [Asynchronous, Runs, Report, instances, requested, sending, resource, instance, sorted, date, run, results, stored, rolling, 24-hour]
---

# List Asynchronous Runs of a Report

> You can get as many as 2000 instances of a report for
which you requested asynchronous runs by sending a GET request to
the Instances List resource. The instance list is sorted by the date
when the run was requested. Report results are stored for a rolling
24-hour period. During this time, based on 

# List Asynchronous Runs of a Report

You can get as many as 2000 instances of a report for which you requested asynchronous runs by sending a GET request to the Instances List resource. The instance list is sorted by the date when the run was requested. Report results are stored for a rolling 24-hour period. During this time, based on your user access level, you can access results for each instance of the report that was run.

## Example

A GET request, /services/data/v29.0/analytics/reports/00OD0000001ZbP7MAK/instances, to the Instances List resource returns two instances of the report that was run asynchronously. Each URL handle stores report results for that instance.

```

```

#### See Also

-   [Instances List](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_resource.htm)

## Code Examples

```
[
    {
        "id": "0LGD000000000IyOAI",
        "requestDate": "2013-08-12T19:06:47Z",
        "status": "Success",
        "url": "/services/data/v29.0/analytics/reports/00OD0000001ZbP7MAK/instances/0LGD000000000IyOAI",
        "ownerId": "005D0000001KvxRIAS",
        "queryable" : false,   
        "hasDetailRows": false,
        "completionDate": "2013-08-12T19:06:48Z"
    },
    {
        "id": "0LGD000000000IjOAI",
        "requestDate": "2013-08-12T18:39:06Z",
        "status": "Success",
        "url": "/services/data/v29.0/analytics/reports/00OD0000001ZbP7MAK/instances/0LGD000000000IjOAI",
        "ownerId": "005D0000001KvxRIAS",
        "queryable" : false,   
        "hasDetailRows": false,
        "completionDate": "2013-08-12T18:39:07Z"
    }
]
```

## Related Topics

- Instances List (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_resource.htm)
