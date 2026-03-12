---
title: "Promotion Import Status"
domain: retail-api
topic: promotion-import-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.933Z
estimatedTokens: 150
keywords: [Promotion, Import, Status, started, BEGIN_PROMOTION_IMPORT, monitored, endpoint, number, promotions, process, moved, either, Calculated, Error]
---

# Promotion Import Status

> An import started with BEGIN_PROMOTION_IMPORT can be monitored with this endpoint. It takes the import ID
      and returns the status of the number of promotions. The import process will be complete, after
      all the promotions have been moved to either Calculated
      or Error status.

# Promotion Import Status

An import started with BEGIN\_PROMOTION\_IMPORT can be monitored with this endpoint. It takes the import ID and returns the status of the number of promotions. The import process will be complete, after all the promotions have been moved to either Calculated or Error status.

Resource

```

```

Available version

55

Requires Chatter

No

HTTP methods

GET

Response body for POST

[Import Status Output Representation](atlas.en-us.retail_api.meta/retail_api/connect_responses_ingest_promotion_output.htm "Represents the details of the ingest promotions import status.")

## Code Examples

```
promotions/status?importId=<string>
```

## Related Topics

- Import Status
              Output Representation (atlas.en-us.retail_api.meta/retail_api/connect_responses_ingest_promotion_output.htm)
