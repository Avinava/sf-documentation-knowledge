---
title: "Put Visualforce Pages on External Domains"
domain: pages
topic: put-visualforce-pages-on-external-domains
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.982Z
estimatedTokens: 1147
keywords: [Put, Visualforce, Pages, External, Domains, frame, content, trusted, domain, enable, clickjack, protection, specify, allow, framing]
---

# Put Visualforce Pages on External Domains

> To frame your Visualforce content on a trusted external domain, enable clickjack
    protection, and then specify the domains where you allow framing. If your Visualforce page
    requires authentication, use a custom domain to serve your Visualforce content on the same
    domain that frames the page.

# Put Visualforce Pages on External Domains

To frame your Visualforce content on a trusted external domain, enable clickjack protection, and then specify the domains where you allow framing. If your Visualforce page requires authentication, use a custom domain to serve your Visualforce content on the same domain that frames the page.

## Options to Frame Authenticated Visualforce Pages

When a website loads an authenticated Visualforce page in an iframe, the authentication process relies on a Salesforce session cookie. Because browsers block third-party cookies, framing an authenticated Visualforce page requires additional steps.

To frame an authenticated Visualforce page or other authenticated site content, we recommend that you use a [custom domain](https://help.salesforce.com/s/articleView?id=products.domain_mgmt.htm&type=5&language=en_US) to serve the framed content. With a custom domain, you serve your site content on a domain that you own, such as https://www.example.com. Most importantly, you can serve your authenticated content in Salesforce on the same registrable domain as the page that frames it, allowing the required session cookie when browsers block third-party cookies.

There are two methods for configuring a custom domain to serve the authenticated content.

-   Serve the authenticated content on a subdomain of the registrable domain for the site that frames the content. For example, if your website is example.com, use a custom domain to serve your authenticated site content on a subdomain such as site.example.com. This approach also works if the domain of the site that frames the content is another subdomain, such as www.example.com.
-   Set up a custom domain to serve the authenticated page on the same domain that frames it. Use a third-party service or CDN to serve the custom domain, including completing the required [prerequisites](https://help.salesforce.com/s/articleView?id=products.domain_mgmt_enable_https.htm&type=5&language=en_US). Be careful to avoid conflicts between your chosen custom URL path prefixes and other content served on the domain.

    When you use this option, include the Salesforce-served URL path prefix when you frame the content. For example, if your custom domain is example.com, to serve an Experience Cloud site page with a site path of /store, frame this URL: https://example.com/store.


If you can’t use a custom domain to serve the authenticated content, you can use Lightning Out (beta) with token-based authentication to serve the content. For more information, see [Use Components Outside Salesforce with Lightning Out](https://developer.salesforce.com/docs/platform/lwc/guide/lightning-out.html) in the Lightning Web Components Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Lightning Out is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at [Agreements and Terms](https://www.salesforce.com/company/legal/agreements/).

If those options aren’t viable, you can’t load the authenticated Visualforce page in an iframe on an external website. Open the page in a new browser window or tab instead.

## Enable Clickjack Protection and Specify Trusted Domains for Inline Frames

To help protect against clickjack attacks, allow only trusted external sites to load your Visualforce pages in an inline frame (iframe).

From Setup, in the Quick Find box, search for Session Settings, and then click **Session Settings**. Under Clickjack Protection, select **Enable clickjack protection for customer Visualforce pages with headers disabled** and **Enable clickjack protection for customer Visualforce pages with standard headers**.

Then under Trusted Domains for Inline Frames, add the trusted external domains where you allow framing and set the iframe type to **Visualforce Pages**. Ensure that your domain names meet format requirements. You can add up to 512 external domains.

After you add external domains to the list, Visualforce pages render with the X-Frame-Options and Content-Security-Policy HTTP headers set to allow framing by those domains.

## Example HTML

This code shows how to frame a Visualforce page on an external domain.

```

```

#### See Also

-   [apex:iframe](atlas.en-us.pages.meta/pages/pages_compref_iframe.htm "A component that creates an inline frame within a Visualforce page. With a frame, you can keep some information visible while other information is scrolled or replaced.")

## Code Examples

```
<html>
    <head></head>
    <body>
        <iframe src="https://MyDomainName--PackageName.vf.force.com/apex/iframe"></iframe>
    </body>
</html>
```

## Related Topics

- apex:iframe (atlas.en-us.pages.meta/pages/pages_compref_iframe.htm)
