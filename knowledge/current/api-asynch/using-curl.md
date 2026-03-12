---
title: "Using cURL"
domain: api-asynch
topic: using-curl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.621Z
estimatedTokens: 429
keywords: [cURL, know, formatting, place, calls, Salesforce, orgs, Quick, Start, uses, examples, issue, Bulk, API, 2.0]
---

# Using cURL

> Get to know the formatting used with cURL to place calls to Salesforce orgs. This Quick
        Start uses cURL examples to issue Bulk API 2.0 calls, but you can use any tool or
        development environment that can make REST requests.

# Using cURL

Get to know the formatting used with cURL to place calls to Salesforce orgs. This Quick Start uses cURL examples to issue Bulk API 2.0 calls, but you can use any tool or development environment that can make REST requests.

Familiarize yourself with cURL enough to be able to understand the examples in this guide and translate them into the tool that you’re using. You’ll be attaching files containing the body of the request and must properly format the access token. For more information about cURL, see the documentation at [curl.se](https://curl.se/).

**Attach Request Bodies**

Many examples include request bodies—JSON or XML files that contain data for the request. When using cURL, save these files to your local system and attach them to the request using the —data-binary or \-d option.

This example attaches the new-account.json file.

```

```

**Handle Exclamation Marks in Access Tokens**

When you run cURL examples, you can get an error on macOS and Linux systems due to the presence of the exclamation mark (!) in OAuth access tokens. To avoid getting this error, either escape the exclamation mark or use single quotes. To escape the exclamation mark in the access token, insert a backslash before it when the access token is enclosed within double quotes.

```

```

For example, the access token string in this cURL command has the exclamation mark (!) escaped.

```

```

Or, you can enclose the access token within single quotes to not escape the exclamation mark.

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_asynch)

#### Important

All quotes, whether single or double, must be straight quotes, not curly quotes.

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/ -H 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>' -H "Content-Type: application/json" —d @new-account.json -X POST
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/ -H "Authorization: Bearer 00DE0X0A0M0PeLE\!AQcAQH0dMHEXAMPLEzmpkb58urFRkgeBGsxL_QJWwYMfAbUeeG7c1EXAMPLEDUkWe6H34r1AAwOR8B8fLEz6nEXAMPLE"
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/ -H 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>'
```
