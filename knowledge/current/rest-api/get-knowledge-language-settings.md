---
title: "Get Knowledge Language Settings"
domain: rest-api
topic: get-knowledge-language-settings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.568Z
estimatedTokens: 178
keywords: [Get, Knowledge, Language, Settings, existing, language, settings, including, default, knowledge, list, supported, information., resource, used, API, version, 31.0, later., Syntax]
---

# Get Knowledge Language Settings

> Gets the existing Knowledge language settings, including the default knowledge language
  and a list of supported Knowledge language information. This resource can be used in API version
  31.0 and later.

# Get Knowledge Language Settings

Gets the existing Knowledge language settings, including the default knowledge language and a list of supported Knowledge language information. This resource can be used in API version 31.0 and later.

Salesforce Knowledge must be enabled in your organization. It gets the Knowledge language settings, including the default knowledge language and a list of supported Knowledge language information.

## Syntax

URI

/services/data/vXX.X/knowledgeManagement/settings

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request body

None required

Request parameters

None

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/knowledgeManagement/settings -H "Authorization: Bearer token"
```

```
{
    "defaultLanguage" : "en_US",
    "knowledgeEnabled" : true,
    "languages" : [ {
    "active" : true,
    "name" : "en_US"
    }, {
    "active" : true,
    "name" : "it"
    }, {
    "active" : true,
    "name" : "zh_CN"
    }, {
    "active" : true,
    "name" : "fr"
    } ]
}
```
