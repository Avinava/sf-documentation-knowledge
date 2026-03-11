---
title: "Using cURL"
domain: rest-api
topic: using-curl
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:44:25.130Z
keywords: [cURL, Important]
---

# Using cURL

# Using cURL

Get to know the formatting that you can use with cURL to make requests to Salesforce. This Quick Start uses cURL examples, but you can use any tool or development environment that can make REST requests.

Familiarize yourself with cURL enough to be able to understand the examples in this guide and translate them into the tool that you’re using. To attach files containing the body of the request, you must properly format the access token. Use these tips to help you use cURL while working through the Quick Start. For more information about cURL, see [curl.se](https://curl.se/).

**Attach Request Bodies**

Many examples include request bodies—JSON or XML files that contain data for the request. When using cURL, save these files to your local system and attach them to the request using the —data-binary or \-d option.

This example attaches the new-account.json file.

```

```

**Handle Exclamation Marks in Access Tokens**

When you run cURL examples, you can get an error on macOS and Linux systems due to the presence of the exclamation mark (!) in OAuth access tokens. To avoid getting this error, either escape the exclamation mark or use single quotes. To escape the exclamation mark in the access token, insert a backslash before it when the access token is enclosed in double quotes.

```

```

For example, the access token string in this cURL command has the exclamation mark (!) escaped.

```

```

Or, you can enclose the access token within single quotes to not escape the exclamation mark.

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_rest)

#### Important

All quotes, whether single or double, must be straight quotes, not curly quotes.

-   [Next →](atlas.en-us.api_rest.meta/api_rest/quickstart_dev_org.htm "Step One: Sign up for Salesforce Developer Edition")