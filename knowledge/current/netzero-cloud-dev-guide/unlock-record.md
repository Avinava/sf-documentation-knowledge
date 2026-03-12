---
title: "Unlock Record"
domain: netzero-cloud-dev-guide
topic: unlock-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.328Z
estimatedTokens: 114
keywords: [Unlock, Record, Salesforce, data]
---

# Unlock Record

> Unlock a record in
      Salesforce
      object to update data.

# Unlock Record

Unlock a record in Salesforce object to update data.

Resource

```

```

Resource example

```

```

Available version

54.0

Requires Chatter

No

HTTP methods

PUT

Response body for PUT

[Record Lock Unlock Output](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_record_lock_unlock_output.htm "Output representation of the lock or unlock of a Salesforce object record.")

Response example

```

```

## Code Examples

```
/connect/sustainability/record-locking/unlock/${recordId}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X​/connect/sustainability/record-locking/unlock/0nyxx00000000hZAAQ
```

```
{
   code : 0,
   message : "successfully unlock the record"
}
```

## Related Topics

- Record Lock Unlock Output (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_record_lock_unlock_output.htm)
