---
title: "List Available REST API Versions"
domain: rest-api
topic: list-available-rest-api-versions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:35.108Z
estimatedTokens: 200
keywords: [List, REST, API, Versions, resource, list, summary, information, version, currently, including, label, link, version's, root., don’t, need, authentication, retrieve, versions.]
---

# List Available REST API Versions

> Use the Versions resource to list summary information
            about each REST API version currently available, including the version, label, and a
            link to each version's root. You don’t need authentication to retrieve the list of
            versions.

# List Available REST API Versions

Use the Versions resource to list summary information about each REST API version currently available, including the version, label, and a link to each version's root. You don’t need authentication to retrieve the list of versions.

Example usage

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

When using a self-signed SSL certificate, the -k flag can be used to skip certificate validation.

Example request body

none required

Example JSON response body

```

```

#### See Also

-   [Versions](atlas.en-us.api_rest.meta/api_rest/resources_versions.htm "Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root.")

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/ -H "Authorization: Bearer token"
```

```
[
  {
    "label": "Summer '14",
    "url": "/services/data/v31.0",
    "version": "31.0"
  },
  {
    "label": "Winter '15",
    "url": "/services/data/v32.0",
    "version": "32.0"
  },
  {
    "label": "Spring '15",
    "url": "/services/data/v33.0",
    "version": "33.0"
  },
  {
    "label": "Summer '15",
    "url": "/services/data/v34.0",
    "version": "34.0"
  },
  {
    "label": "Winter '16",
    "url": "/services/data/v35.0",
    "version": "35.0"
  },
  {
    "label": "Spring '16",
    "url": "/services/data/v36.0",
    "version": "36.0"
  },
  {
    "label": "Summer '16",
    "url": "/services/data/v37.0",
    "version": "37.0"
  },
  {
    "label": "Winter '17",
    "url": "/services/data/v38.0",
    "version": "38.0"
  },
  {
    "label": "Spring '17",
    "url": "/services/data/v39.0",
    "version": "39.0"
  },
  {
    "label": "Summer '17",
    "url": "/services/data/v40.0",
    "version": "40.0"
  },
  {
    "label": "Winter '18",
    "url": "/services/data/v41.0",
    "version": "41.0"
  },
  {
    "label": "Spring ’18",
    "url": "/services/data/v42.0",
    "version": "42.0"
  },
  {
    "label": "Summer '18",
    "url": "/services/data/v43.0",
    "version": "43.0"
  },
  {
    "label": "Winter '19",
    "url": "/services/data/v44.0",
    "version": "44.0"
  },
  {
    "label": "Spring '19",
    "url": "/services/data/v45.0",
    "version": "45.0"
  },
  {
    "label": "Summer '19",
    "url": "/services/data/v46.0",
    "version": "46.0"
  },
  {
    "label": "Winter '20",
    "url": "/services/data/v47.0",
    "version": "47.0"
  },
  {
    "label": "Spring '20",
    "url": "/services/data/v48.0",
    "version": "48.0"
  },
  {
    "label": "Summer '20",
    "url": "/services/data/v49.0",
    "version": "49.0"
  },
  {
    "label": "Winter '21",
    "url": "/services/data/v50.0",
    "version": "50.0"
  },
  {
    "label": "Spring '21",
    "url": "/services/data/v51.0",
    "version": "51.0"
  },
  {
    "label": "Summer '21",
    "url": "/services/data/v52.0",
    "version": "52.0"
  },
  {
    "label": "Winter '22",
    "url": "/services/data/v53.0",
    "version": "53.0"
  },
  {
    "label": "Spring '22",
    "url": "/services/data/v54.0",
    "version": "54.0"
  },
  {
    "label": "Summer '22",
    "url": "/services/data/v55.0",
    "version": "55.0"
  },
  {
    "label": "Winter '23",
    "url": "/services/data/v56.0",
    "version": "56.0"
  },
  {
    "label": "Spring '23",
    "url": "/services/data/v57.0",
    "version": "57.0"
  },
  {
    "label": "Summer '23",
    "url": "/services/data/v58.0",
    "version": "58.0"
  },
  {
    "label": "Winter '24",
    "url": "/services/data/v59.0",
    "version": "59.0"
  },
  {
    "label": "Spring '24",
    "url": "/services/data/v60.0",
    "version": "60.0"
  },
  {
    "label": "Summer '24",
    "url": "/services/data/v61.0",
    "version": "61.0"
  }
]
```

## Related Topics

- Versions (atlas.en-us.api_rest.meta/api_rest/resources_versions.htm)
