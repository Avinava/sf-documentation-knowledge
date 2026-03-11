---
title: "ContentDownloadHandler Class"
domain: apex-reference
topic: contentdownloadhandler-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.297Z
keywords: [ContentDownloadHandler, Class, URL, user, redirected, download, action, isn't, available, applying, Information, Rights, Management, IRM, control, virus, scanning, behavior., redirectUrl, Signature]
---

# ContentDownloadHandler Class

> The URL the user is redirected to when the download action isn't
      available, for applying Information Rights Management (IRM) control, virus scanning, or other
      behavior.

### redirectUrl

The URL the user is redirected to when the download action isn't available, for applying Information Rights Management (IRM) control, virus scanning, or other behavior.

#### Signature

public String redirectUrl {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The URL must be a valid relative URL. For example, the redirect can be a custom Visualforce page such as “/apex/IRMControl”. URLs with no path, such as “www.domain.com”, results in an InvalidParameterValueException.