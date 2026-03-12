---
title: "Request: URL Template Parameters"
domain: federated-search
topic: request-url-template-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.724Z
estimatedTokens: 989
namespace: Parameter
keywords: [URL, Template, URL-encoded, sent, via, HTTPS, includes, Salesforce, federated, search, connector, OpenSearch]
---

# Request: URL Template Parameters

> All URL template parameters are URL-encoded and sent via an HTTPS GET method. This list
  includes all template parameters used by the Salesforce federated search connector.

**Namespace:** `Parameter`

# Request: URL Template Parameters

All URL template parameters are URL-encoded and sent via an HTTPS GET method. This list includes all template parameters used by the Salesforce federated search connector.

## OpenSearch Namespace

| Parameter | Description |
| --- | --- |
| {searchTerms} | Replaced by the search query terms that the user entered in the Salesforce search field. A SOSL clause isn’t supported. |
| {count} | The number of search results per page desired by the search client. |
| {startIndex} | By default, the index of the first result is 1, unless defined otherwise by the indexOffset attribute of the <Url> element. |
| {inputEncoding} | If present in the template, this parameter is always set to UTF-8. |
| {outputEncoding} | If present in the template, this parameter is always set to UTF-8. |

## Salesforce Federated Search Namespace

| Parameter | Description |
| --- | --- |
| {sfdc:userId} | The unique ID of the user who triggered the search. Because OAuth authentication is done with the same bearer token for all users, it authorizes, but doesn’t identify, the user. This parameter gives the identity of the user. The external search provider doesn’t send userId if the connection to the external data source is anonymous and not authenticated with OAuth. |
| {sfdc:userLogin} | The login name of the user who triggered the search. The external search provider doesn’t send userLogin if the connection to the external data source is anonymous and not authenticated with OAuth. |
| {sfdc:userEmail} | The email address of the user who triggered the search. The external search provider doesn’t send userEmail if the connection to the external data source is anonymous and not authenticated with OAuth. |
| {sfdc:orgId} | The org ID of the user who triggered the search. |
| {sfdc:searchSyntax} | Declares the syntax of the {searchTerms} parameter. Its value is always SOSL (uppercase). The search provider can use the parameter to determine precisely which syntax parser to use. |
| {sfdc:searchById} | When the value of this boolean parameter is true, it restricts the search to a single record by its ID. The {searchTerms} must be set to the record ID. This parameter is used by the federated search connector to retrieve specific record data.If the OpenSearch description supports this parameter, the federated search connector sets this parameter to true and the search is restricted to the single record corresponding to the ID specified in {searchTerms}.If the OpenSearch description doesn’t support this parameter, the federated search connector searches the first few terms of the record titles. From the results, the connector selects only the record with the expected ID. This type of search is referred to as a fallback search, and can be less accurate than searching directly on the record ID. |
| {sfdc:recordType} | Restricts the scope of the search request to a specific record type. Its value is the name of a declared <sfdc:RecordType>. The supported record types are declared with the <sfdc:RecordTypes> element. |
| {sfdc:sortField} | Defines the name of the field by which search results are sorted. If it’s sortable, the field can be one of the common fields of the Atom format (title, id, link, summary, content, updated, published). Otherwise, set a declared sortable custom field by using <sfdc:RecordType><sfdc:Field sortable=”true”>. By default, this parameter isn’t present, and the search results are sorted by relevance. The API intentionally doesn’t follow the OpenSearch Community extension SRU because the Salesforce implementation is limited to sorting on a single field, without a sort schema. |
| {sfdc:sortDirection} | Defines the sort direction with a value of either ascending or descending. The parameter can be added only if the sfdc:sortField parameter is also present. By default, the search results are sorted in ascending order. This parameter isn’t used for relevance sorting. |
