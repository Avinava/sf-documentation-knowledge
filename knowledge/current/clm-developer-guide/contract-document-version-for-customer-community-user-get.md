---
title: "Contract Document Version for Customer Community User (GET)"
domain: clm-developer-guide
topic: contract-document-version-for-customer-community-user-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.193Z
estimatedTokens: 219
keywords: [Contract, Document, Version, Customer, Community, User, latest]
---

# Contract Document Version for Customer Community User (GET)

> Get latest details of a contract document version based on a
      contract ID.

# Contract Document Version for Customer Community User (GET)

Get latest details of a contract document version based on a contract ID.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| showDetails | Boolean | Indicates whether to include detailed information about attachments in the response. (true) or not (false). The default value is false. | Required | 60.0 |

Response body for GET

[Contract Document Version CC Response](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_contract_document_version_c_c.htm "Output representation of the latest details of a contract document version, including its ID, status, and associated documents and attachments.")

## Code Examples

```
/connect/clm/cc/contract/${contractId}/contract-document-version
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/clm/cc/contract/${contractId}/contract-document-version?showDetails=true
```

## Related Topics

- Contract Document
              Version CC Response (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_contract_document_version_c_c.htm)
