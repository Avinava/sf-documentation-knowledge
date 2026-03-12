---
title: "Describe Event Monitoring Using REST"
domain: rest-api
topic: describe-event-monitoring-using-rest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.862Z
estimatedTokens: 151
keywords: [Describe, Event, Monitoring, REST, sObject, resource, retrieve, metadata, including, URLs, child, relationships]
---

# Describe Event Monitoring Using REST

> Use the sObject Describe resource to retrieve
            all metadata for an object, including information about fields, URLs, and child
            relationships.

# Describe Event Monitoring Using REST

Use the [sObject Describe](atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm#resources_sobject_describe "Completely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object.") resource to retrieve all metadata for an object, including information about fields, URLs, and child relationships.

Example

You can use REST API to describe event log files. Use a GET request like this:

```

```

Example raw response

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/EventLogFile/describe -H "Authorization: Bearer token"
```

```
{ 
   "actionOverrides" : [ ],
   "activateable" : false,
   "childRelationships" : [ ],
   "compactLayoutable" : false,
   "createable" : false,
   "custom" : false,
   "customSetting" : false,
   "deletable" : false,
   "deprecatedAndHidden" : false,
   "feedEnabled" : false,
   "fields" : [ {
     "autoNumber" : false,
     "byteLength" : 18,
     "calculated" : false,
     "calculatedFormula" : null,
     "cascadeDelete" : false,
     "caseSensitive" : false,
     "controllerName" : null,
     "createable" : false,
     ...
}
```

## Related Topics

- sObject Describe (atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm)
