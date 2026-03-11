---
title: "getRecordAlerts(parentId,
        whatId)"
domain: omnistudio
topic: getrecordalertsparentid-whatid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.583Z
keywords: [getRecordAlerts, parentId, whatId, API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# getRecordAlerts(parentId,
        whatId)

# getRecordAlerts(parentId, whatId)

Retrieve a list of active record alerts.

## API Version

54.0

## Requires Chatter

No

## Signature

public static ConnectApi.RecordAlertCollectionRepresentation getRecordAlerts(String parentId, String whatId)

## Parameters

parentId

Type: String

The related parent record ID on which a record alert is created.

whatId

Type: String

The Salesforce object record ID on which a record alert is created.

## Return Value

Type: [ConnectApi.RecordAlertCollection](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_record_alert_collection.htm "Representation of a collection of record alerts.")

## Example

To fetch alerts that have parentId

```

```

To fetch alerts that have whatId

```

```

To fetch alerts that have parentId and whatId

```

```