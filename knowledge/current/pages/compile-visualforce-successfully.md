---
title: "Compile Visualforce Successfully"
domain: pages
topic: compile-visualforce-successfully
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.932Z
estimatedTokens: 427
keywords: [Compile, Visualforce, Successfully, requirements, compiling, pages, components]
---

# Compile Visualforce Successfully

> Learn the requirements of compiling Visualforce pages and
    components.

# Compile Visualforce Successfully

Learn the requirements of compiling Visualforce pages and components.

You can't save your Visualforce pages and components unless they correctly compile. Here's a list of things to watch out for when creating Visualforce pages:

-   Verify that your component tags start with the correct namespace identifier such as apex:—that is, apex followed by a colon.
-   Only Visualforce components and HTML elements are supported in API version 20.0 and later. Markup tags with other prefixes such as soapenv aren't supported.
-   Make sure that every opening quote and bracket has a closing one.
-   Verify that the controller or controller extension is named correctly.
-   Visualforce pages and components created using Salesforce API version 19.0 or higher must be written as well-formed XML. In general, this means that elements must be correctly nested, non-empty elements must have an end tag, empty elements must be terminated with a closing slash (“/”), and so on. The World Wide Web Consortium (W3C) provides [an article on the specifications of well-formed XML](http://www.w3.org/TR/xhtml1/#diffs "HTML (New Window)").

    The following exceptions are allowed:

    -   Code that violates well-formed XML is permitted inside JavaScript. For example, you don't need to use <!\[CDATA\[\]\]> tags in Visualforce.
    -   Code that violates well-formed XML is permitted inside expressions. For example, you don't need to escape quotation marks inside formulas.
    -   XML directives that are normally required at the beginning of a page—such as <?xml version="1.0" encoding="UTF-8"?>—can occur inside top-level container tags, like <apex:page\> and <apex:component\>.
