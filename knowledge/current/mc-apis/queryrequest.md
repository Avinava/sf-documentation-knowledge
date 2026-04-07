---
title: "QueryRequest"
domain: mc-apis
topic: queryrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:23.211Z
estimatedTokens: 298
keywords: [QueryRequest]
---

# QueryRequest

# QueryRequest

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ClientIDs | ClientID[] | Specifies accounts and sub-accounts, including Enterprise 2.0, On-Your-Behalf, and Lock & Publish accounts, from which to retrieve data. |
| ContinueRequest | xsd:string | Represents the RequestID that identifies a previous Retrieve requestto continue processing (returns the next available batch of data for that request). |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Query | Query | Specifies an SQL query to be stored in a Query definition. You can find nore information on writing SQL queries for a query activity in the Query Activity document. |
| QueryAllAccounts | xsd:boolean | Queries all accounts, including parent and all children, regarding an event (ignores specified ClientIDs). |
| RespondTo | AsyncResponse[] | Reserved for future use. |
| RetrieveAllSinceLastBatch | xsd:boolean | Retrieve all data since last retrieve context. Works with added and modified data. You must include the same properties and filters as the previous request. |
