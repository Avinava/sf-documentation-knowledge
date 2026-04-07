---
title: "ExtractRequest"
domain: mc-apis
topic: extractrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.809Z
estimatedTokens: 148
keywords: [ExtractRequest]
---

# ExtractRequest

# ExtractRequest

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| ID | xsd:string | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| Item | ExtractTemplate | Identifies an item in a mapped relationship. |
| Options | ExtractOptions | Options associated with a request. For a Configure call, options include CREATE or DELETE. |
| Parameters | ExtractParameter[] | Container for key value pairs of parameters for objects. |
