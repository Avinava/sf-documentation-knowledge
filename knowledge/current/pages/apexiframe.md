---
title: "apex:iframe"
domain: pages
topic: apexiframe
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.500Z
estimatedTokens: 992
keywords: [apex, iframe, component, creates, inline, frame, Visualforce, keep, visible, scrolled, replaced, Attributes]
---

# apex:iframe

> A component that creates an inline frame within a Visualforce
		page. With a frame, you can keep some information visible while other
		information is scrolled or replaced.

# apex:iframe

A component that creates an inline frame within a Visualforce page. With a frame, you can keep some information visible while other information is scrolled or replaced.

This component supports [HTML pass-through attributes](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_html_features_pass_through_attributes.htm "html (New Window)") using the html prefix. Pass-through attributes are attached to the generated <iframe\> tag.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

External websites included in Salesforce use iframes, which restrict features that can track users. When the external website is in an iframe, browser settings can prevent the external website from using local storage and receiving or writing third-party cookies in callouts to APIs.

To prevent clickjacking attacks, many websites, including https://salesforce.com, restrict browsers from rendering their pages in an inline frame. For example, if a page has its X-Frame-Options HTTP response header set to sameorigin, a browser can only load that page in an inline frame if the frame has the same origin as the page.

Also, to frame content from an external website that requires authentication, the authentication process can require a cookie. Because the external website is on a different domain than the Visualforce page, that cookie is a third-party cookie. When browsers block third-party cookies, you can’t load the authenticated content unless the website owner provides another authentication method.

## Example

```

```

The previous example renders the following HTML:

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| frameborder | Boolean | A Boolean value that specifies whether a border surrounds the inline frame. If not specified, this value defaults to false. |  | 10.0 | global |
| height | String | The height of the inline frame expressed either as a percentage of the total available vertical space (for example, height="50%") or as the number of pixels (for example, height="300px"). If not specified, this value defaults to 600 px. |  | 10.0 | global |
| id | String | An identifier that allows other components in the page to reference the inline frame component. |  | 10.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 10.0 | global |
| scrolling | Boolean | A Boolean value that specifies whether the inline frame can be scrolled. If not specified, this value defaults to true. |  | 10.0 | global |
| src | String | The URL that specifies the initial contents of the inline frame. This URL can either be an external website or another page in the application. For example, to render the static resource MyAsset on a separate domain from Visualforce:<apex:iframe src="{$IFrameResource.MyAsset}" scrolling="true" id="theIframe"/> |  | 10.0 | global |
| title | String | The text to display as a tooltip when the user’s pointer hovers over this component. |  | 10.0 | global |
| width | String | The width of the inline frame expressed either as a percentage of the total available horizontal space (for example, width="80%") or as the number of pixels (for example, width="600px"). |  | 10.0 | global |

#### See Also

-   [Put Visualforce Pages on External Domains](atlas.en-us.pages.meta/pages/pages_quick_start_external_iframe.htm "To frame your Visualforce content on a trusted external domain, enable clickjack protection, and then specify the domains where you allow framing. If your Visualforce page requires authentication, use a custom domain to serve your Visualforce content on the same domain that frames the page.")

-   [Referencing Untrusted Third-Party Content with iframes](atlas.en-us.pages.meta/pages/pages_resources_iframe.htm)

## Code Examples

```
<apex:iframe src="https://amazon.com" scrolling="true" id="theIframe"/>
```

```
<iframe height="600px" id="theIframe" name="theIframe" src="https://amazon.com" width="100%"></iframe>
```

## Related Topics

- Put Visualforce Pages on External Domains (atlas.en-us.pages.meta/pages/pages_quick_start_external_iframe.htm)
- Referencing Untrusted Third-Party Content with iframes (atlas.en-us.pages.meta/pages/pages_resources_iframe.htm)
