---
title: "Build the Resource URL"
domain: api-analytics
topic: build-the-resource-url
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.750Z
estimatedTokens: 171
keywords: [Build, Resource, URL, Access, Reports, Dashboards, REST, API, resources, URI, Salesforce, org, combined, version, Experience]
---

# Build the Resource URL

> Access all Reports and Dashboards REST API resources by using the URI for your
      Salesforce org, combined with version and Experience Cloud site information, and the URI for
      the resource.

# Build the Resource URL

Access all Reports and Dashboards REST API resources by using the URI for your Salesforce org, combined with version and Experience Cloud site information, and the URI for the resource.

When building a URL, start with your My Domain login URL. To get your My Domain name, use the getMyDomainName() Apex method. You can also find your full My Domain login URL on the My Domain page in Setup.

```

```

Then add the version information:

```

```

Then add the resource:

```

```

Put together, the full URL is:

```

```

Some resources, such as notifications, often require one or more URL parameters without which API requests return an error:

```

```

## Code Examples

```
https://MyDomainName.my.salesforce.com
```

```
/services/data/v66.0
```

```
/analytics/reports
```

```
https://MyDomainName.my.salesforce.com/services/data/v66.0/analytics/reports
```

```
https://MyDomainName.my.salesforce.com/services/data/v66.0/analytics/notifications?source=lightningReportSubscribe
```
