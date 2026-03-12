---
title: "Organization"
domain: platform-connect
topic: organization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.526Z
estimatedTokens: 247
keywords: [Organization, JSON-formatted, containing, context, canvas, app, running]
---

# Organization

> The Organization object is a JSON-formatted object
                containing context information about the organization in which the canvas app is
                running.

# Organization

The Organization object is a JSON-formatted object containing context information about the organization in which the canvas app is running.

| Field | Description |
| --- | --- |
| currencyIsoCode | If multi-currency is enabled for the context organization, then the context user’s currency is returned. Defaults to the corporate currency if not set. If multi-currency is disabled for the context organization, the currency for the corporate currency locale is returned. |
| multicurrencyEnabled | Indicates whether the context organization uses multiple currencies (true) or does not (false). |
| namespacePrefix | The Salesforce namespace prefix associated with the canvas app. |
| name | The name of the context organization. |
| organizationId | The ID of the context organization. |

The following code snippet shows an example of the Organization object.

```

```

#### See Also

-   [Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)

## Code Examples

```
"organization":
{
    "currencyIsoCode":"USD", 
    "multicurrencyEnabled":true, 
    "name":"Edge Communications", 
    "namespacePrefix":"org_namespace", 
    "organizationId":"00Dx00000001hxyEAA"

}
```

## Related Topics

- Context (atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)
