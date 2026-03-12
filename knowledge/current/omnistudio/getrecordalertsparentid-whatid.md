---
title: "getRecordAlerts(parentId,
        whatId)"
domain: omnistudio
topic: getrecordalertsparentid-whatid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.481Z
estimatedTokens: 206
keywords: [getRecordAlerts, parentId, whatId, Retrieve, active, record, alerts, API, Version, Requires, Chatter]
---

# getRecordAlerts(parentId,
        whatId)

> Retrieve a list of active record alerts.

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

## Code Examples

```
ConnectApi.RecordAlertCollectionRepresentation recordAlerts = ConnectApi.RecordAlert.getRecordAlerts(‘<parentId>’, null);
```

```
ConnectApi.RecordAlertCollectionRepresentation recordAlerts = ConnectApi.RecordAlert.getRecordAlerts(null, ‘<whatId>’);
```

```
ConnectApi.RecordAlertCollectionRepresentation recordAlerts = ConnectApi.RecordAlert.getRecordAlerts(‘<parentId>’, ‘<whatId>’);
```

## Related Topics

- ConnectApi.RecordAlertCollection (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_record_alert_collection.htm)
