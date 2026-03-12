---
title: "Retrieve Unit Tests"
domain: tooling-api
topic: retrieve-unit-tests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.487Z
estimatedTokens: 1480
namespace: FlowTesting
keywords: [Retrieve, Unit, Tests, Test, Discovery, API, Apex, automated, flow, resource, Tooling, version, 65.0, later]
---

# Retrieve Unit Tests

> The Test Discovery API returns details about Apex and automated flow tests. This
  resource is available in Tooling API version 65.0 and later.

**Namespace:** `FlowTesting`

# Retrieve Unit Tests

The Test Discovery API returns details about Apex and automated flow tests. This resource is available in Tooling API version 65.0 and later.

## Syntax

URI

/services/data/vXX.X/tooling/tests/

HTTPS Method

GET

Authentication

Authorization: Bearer token

Response Encoding

X-Chatter-Entity-Encoding: false

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

The X-Chatter-Entity-Encoding HTTP request header must be set to false so that the client requests raw (unencoded) output in the response. See [Response Body Encoding](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_encoding.htm "HTML (New Window)").

Format

JSON

Request Query Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| category | Enum of type String | Specifies the test category from which tests are retrieved. If this parameter isn’t specified, tests in all categories are retrieved. You can’t specify multiple categories in the same call. This parameter is available in API version 66.0 and later.Existing categories are:apex—Retrieves only Apex test classes.flow—Retrieves only automated flow test classes. |
| showAllMethods | Boolean | Specifies whether to retrieve all methods (true) or only visible methods (false) in a test class.If this parameter value isn’t specified, the default value is false.Results adhere to standard Apex visibility rules, which are influenced by factors such as namespace, managed package origin, access modifiers, and user permissions. For example, if a test class is private, then it isn’t retrieved unless showAllMethods is set to true. |
| namespacePrefix | String | Specifies the namespace from which tests are retrieved. If this parameter isn’t specified, tests in all namespaces are retrieved.All automated flow tests are in the FlowTesting namespace. In namespaced packages and orgs, the full namespace of an automated flow test is FlowTesting.namespacePrefix.In API version 66.0 and later, to query for only flow tests in all namespaces, set the category query parameter to flow and don’t specify a namespacePrefix. To query for only flow tests in a specific namespaced package or org, set the category query parameter to flow and set namespacePrefix to the namespace.In API version 65.0, to query for only flow tests, set the namespacePrefix to FlowTesting. To query for flow tests in a specific namespaced package or org, set namespacePrefix to FlowTesting.namespacePrefix. |
| nextRecord | String | A cursor that specifies the first test class to retrieve in the next page of results. This value is included in the nextRecordUrl property of the current page. |
| pageSize | Integer | Specifies the number of test classes to retrieve per page. If this parameter value isn’t specified, the default value is 1000 classes. The maximum value is 10000 classes. |

Request Body

None.

Response Body Properties

| Name | Type | Description |
| --- | --- | --- |
| apexTestClasses | Object[] | An array of Apex test class objects. If there aren’t any tests in the result set, the value is []. |
| size | Integer | The total number of test classes in the result set across all pages. If the result set is empty, the value is 0. |
| nextRecordsUrl | String | The URL of the next page in the result set. If the current page is the last page in a result set, the nextRecordsUrl value is null. |
| testSetSignature | String | An MD5 hash that represents the test classes and methods in the result set. If there aren’t any tests in the result set, the value is "".When a result set spans multiple pages, the testSetSignature can change from one page to the next. A different testSetSignature indicates that the tests in the result set have changed since the retrieval of the previous page. |
| message | String | An informational message about the request, such as an input validation warning, or null if there is no applicable message. |

Each Apex test class object in the apexTestClasses list includes these properties.

| Name | Type | Description |
| --- | --- | --- |
| id | String | The Salesforce ID of the test class.All Apex test classes have an ID.Not all flow test classes have an ID. If the flow test class doesn’t have an ID, then the id value is "". |
| name | String | The name of the test class.For a flow test, the name is the API name of the flow. |
| namespacePrefix | String | The namespace of the test class.Apex tests are in the default namespace. If an Apex test is in a namespaced package or org, the namespacePrefix value is "NamepacePrefix". Otherwise, the namespacePrefix value is "".All flow tests are in the FlowTesting namespace. If a flow test is in a namespaced package or org, the namespacePrefix value is "FlowTesting.NamepacePrefix". Otherwise, the namespacePrefix value is "FlowTesting". |
| testMethods | Object[] | An array of test methods in the test class.Each test method object includes the name property, which is set to the name of the test method. For example, {"name": "testSimpleAddition"}.A flow test method name includes the API name of the flow followed by an underscore (_) and the API name of the flow test. For example, {"name":"FlowName_UpdateRecordFlowTest"} |

## Example

Example Request

```

```

Example Response Body

{ "apexTestClasses":\[ { "id":"01pxx0000004UVl", "name":"BAAdditionTest", "namespacePrefix":"my\_namespace", "testMethods":\[ {"name":"testNegativeAddition"}, {"name":"testSimpleAddition"} \] }, { "id":"01pxx0000004UXN", "name":"BABitwiseTest", "namespacePrefix":"my\_namespace", "testMethods":\[ {"name":"testBitwiseAND"}, {"name":"testBitwiseOR"} \] } \], "message":null, "nextRecordsUrl":"/services/data/v66.0/tooling/tests?namespacePrefix=my\_namespace&pageSize=2&nextRecord=my\_namespace.BAComparisonTest", "size":10, "testSetSignature":"91a678b54197669171f11eb824d6765a" }

## Code Examples

```
curl "https://MyDomain.my.salesforce.com/services/data/v66.0/tooling/tests?namespacePrefix=my_namespace&pageSize=2" \ 
-H "Authorization: Bearer token" \ 
-H "X-Chatter-Entity-Encoding: false"
```
