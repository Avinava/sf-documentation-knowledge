---
title: "Supported HTML Tags"
domain: lightning
topic: supported-html-tags
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.835Z
estimatedTokens: 379
keywords: [HTML, Tags, framework, supports, including, majority, HTML5]
---

# Supported HTML Tags

> The framework supports most HTML tags, including the majority of HTML5
    tags.

# Supported HTML Tags

The framework supports most HTML tags, including the majority of HTML5 tags.

We recommend that you use components in preference to HTML tags. For example, use lightning:button instead of  <button\>.

Components are designed with accessibility in mind so users with disabilities or those who use assistive technologies can also use your app. When you start building more complex components, the reusable out-of-the-box components can simplify your job by handling some of the plumbing that you would otherwise have to create yourself. Also, these components are secure and optimized for performance.

Note that you must use strict [XHTML](http://www.w3.org/TR/xhtml1/ "HTML (New Window)"). For example, use <br/> instead of <br\>.

Some HTML tags are unsafe or unnecessary. The framework doesn’t support these tags.

The HtmlTag enum in [this Aura file](https://github.com/forcedotcom/aura/blob/master/aura/src/main/java/org/auraframework/def/HtmlTag.java "HTML (New Window)") lists the supported HTML tags. Any tag followed by (false) is not supported. For example, applet(false) means the applet tag isn't supported.

-   **[Anchor Tag: <a>](atlas.en-us.lightning.meta/lightning/ref_supported_html_tags_a.htm)**
    Don’t hard code or dynamically generate Salesforce URLs in the href attribute of an <a> tag. Use events, such as force:navigateToSObject or force:navigateToURL, instead.

#### See Also

-   [Supporting Accessibility](atlas.en-us.lightning.meta/lightning/accessibility.htm)

## Related Topics

- Anchor Tag: <a> (atlas.en-us.lightning.meta/lightning/ref_supported_html_tags_a.htm)
- Supporting Accessibility (atlas.en-us.lightning.meta/lightning/accessibility.htm)
