---
title: "GetUserLanguages"
domain: mc-programmatic-content
topic: getuserlanguages
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.654Z
estimatedTokens: 125
keywords: [GetUserLanguages, **Overview**, **Syntax**]
---

# GetUserLanguages

## **Overview**

Returns a string array of locale codes associated with a user browser. You can use this information to send language- and country-appropriate content or formatting to a microsite or landing page. This function performs correctly only within a web context.

### **Syntax**

GetUserLanguages()

## Example

```
<script runat="server">
     var langs = Platform.Request.GetUserLanguages();
     var defaultLangs = langs[0];
</script>
```

Last Updated: Jun 8, 2021
