---
title: "WITH RecordVisibilityContext"
domain: soql-sosl
topic: with-recordvisibilitycontext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.834Z
estimatedTokens: 304
keywords: [RecordVisibilityContext, filter, clauses, query, attributes, determine, visibility, records, feature, API, version, 48.0, later]
---

# WITH RecordVisibilityContext

> You can use RecordVisibilityContext to filter
            WITH clauses to query the attributes that determine
        the visibility of one or more records. This feature is available in API version 48.0 and
        later.

# WITH RecordVisibilityContext

You can use RecordVisibilityContext to filter WITH clauses to query the attributes that determine the visibility of one or more records. This feature is available in API version 48.0 and later.

The following fields can be used as parameters:

| Field | Description | Default |
| --- | --- | --- |
| maxDescriptorPerRecord | The maximum number of descriptors to return per record. If the actual number of descriptors for a specific record exceeds that value, then a "tooManyDescriptors" visibility attribute is returned for that record. | orgs with CRM Analytics: 150other orgs: 400 |
| supportsDomains | Whether the Visibility Service is allowed to generate "domain" visibility attributes. | true |
| supportsDelegates | Whether the Visibility Service is allowed to generate "delegate" visibility attributes. | true |

For example:

```

```

```

```

At least one field is necessary. This query is *invalid*:

```

```

This query is valid:

```

```

For more information, see [RecordVisibility](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_recordvisibility.htm#! "HTML (New Window)") in the Object Reference.

## Code Examples

```
SELECT Id, RecordVisibility.VisibilityAttribute FROM Account WHERE Id = 'xxx'
   WITH RecordVisibilityContext (maxDescriptorPerRecord=100, supportsDomains=true, supportsDelegates=true)
```

```
SELECT recordId, VisibilityAttribute FROM RecordVisibility WHERE recordId = 'xxx' 
   WITH RecordVisibilityContext (maxDescriptorPerRecord=100, supportsDomains=true, supportsDelegates=true)
```

```
SELECT Id, RecordVisibility.VisibilityAttribute FROM Account WHERE Id = 'xxx'
   WITH RecordVisibilityContext
```

```
SELECT Id, RecordVisibility.VisibilityAttribute FROM Account WHERE Id = 'xxx'
   WITH RecordVisibilityContext (maxDescriptorPerRecord=100)
```
