---
title: "BrowserPolicyViolation"
domain: object-reference
topic: browserpolicyviolation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.700Z
estimatedTokens: 1460
keywords: [BrowserPolicyViolation, violation, occurred, seven, days, Trusted, URLs, External, Redirects, allowlists, violations, include, blocked, resource, requests]
---

# BrowserPolicyViolation

> Represents a violation that occurred within the last seven days
         related to the Trusted URLs and Trusted URLs for External Redirects allowlists. These
         violations include blocked resource requests based on your content security policy (CSP)
         and blocked redirections. This object is available in API version 61.0 and
      later.

# BrowserPolicyViolation

Represents a violation that occurred within the last seven days related to the Trusted URLs and Trusted URLs for External Redirects allowlists. These violations include blocked resource requests based on your content security policy (CSP) and blocked redirections. This object is available in API version 61.0 and later.

We recommend that you manage this object through the Trusted URL and Browser Policy Violations list in Setup. See [Manage Trusted URL and Browser Policy Violations](https://help.salesforce.com/s/articleView?id=xcloud.security_trusted_urls_csp_violations.htm&type=5&language=en_US) in Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To help preserve performance, Salesforce uses throttling, a technique that limits the number of generated violations when the volume is exceptionally high. Therefore, if your org generates a high volume of violations over a short period of time, some of those violations can fail to generate a BrowserPolicyViolation.

To see detailed information about the captured CSP violations for your org, use the [CSP Violation Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_cspviolation.htm "CSP violation events capture details about blocked resource requests from Lightning Experience pages based on your content security policy (CSP). The CSP Violation event type is available in the EventLogFile object in API version 63.0 and later.").

To understand when Salesforce captures blocked redirections, see [External Redirection Restrictions in Salesforce](https://help.salesforce.com/s/articleView?id=xcloud.security_trusted_urls_external_redirections_understand.htm&language=en_US) in Salesforce Help. For detailed information about each blocked redirection, use the [Blocked Redirect Event Type](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_blockedredirect.htm "Blocked redirect events capture information about blocked redirections from Salesforce to untrusted and malformed URLs. The Blocked Redirect event type is available in the EventLogFile object in API version 63.0 and later.").

When you delete a BrowserPolicyViolation, only the logged event is removed. If your allowlists still block those requests, a new BrowserPolicyViolation is generated the next time a matching request occurs.

To help you manage the list, a daily process deletes violations that haven’t occurred within the last seven days. To track browser policy violations over time, schedule daily queries of the Blocked Redirect and CSP Violations event types.

## Supported Calls

delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

Only users with the Customize Application and Modify All Data permissions can access this object.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe developer name of the violation.Only users with View DeveloperName or View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe language for the blocked request. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, SortDescriptionMaster label for this violation. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix for this violation. |
| UntrustedUrl | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe URL associated with the blocked request, without the path. For example, if a blocked requested resource is an image with the URL https://www.example.com/images/image1.png, the UntrustedUrl is https://www.example.com. |
| ViolationContext | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionIf the ViolationType is img-src (image), font-src (fonts), or frame-src (iframe content), the content security policy (CSP) context for the request. The CSP context controls which pages can load content from a CspTrustedSite.Possible values are:Lightning—The blocked request is related to a Lightning Experience page.Not Applicable—ViolationContext isn’t applicable to this violation. For example, violations with a ViolationType of Redirection. |
| ViolationImpact | TypeStringPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe impact of this violation. Possible values are:Blocked–The policy was enforced and prevented the resource from loading. The impact of blocked redirections and malformed URLs is always Blocked.Reported–This violation is blocked only after stricter CSP settings are configured.For example, some resource requests associated with the frame-src, font-src, and img-src ViolationType are blocked only when the Adopt updated CSP directives setting is enabled in Session Settings. |
| ViolationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe violation type. Possible values are:img-src–At least one request to load an image file from the URL was blocked because the UntrustedUrl isn’t a CspTrustedSite object with this CSP directive.font-src–At least one request to load a font from the URL was blocked because the UntrustedUrl isn’t a CspTrustedSite object with this CSP directive.frame-src–At least one request to load content in an iframe that originated from the URL was blocked because the UntrustedUrl isn’t a CspTrustedSite object with this CSP directive.MalformedUrl–At least one redirection to this URL failed because the UntrustedUrl is malformed.Redirect–At least one redirection to this URL was blocked because the UntrustedUrl isn’t a RedirectWhitelistUrl object. |

## Related Topics

- CSP Violation Event Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_cspviolation.htm)
- Blocked Redirect Event
            Type (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_blockedredirect.htm)
