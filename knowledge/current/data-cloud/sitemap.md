---
title: "Sitemap"
domain: data-cloud
topic: sitemap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:42.485Z
keywords: [Sitemap, GlobalPageConfig, DefaultPageConfig, PageConfig, Methods]
---

# Sitemap

# Sitemap

Salesforce Interactions SDK Sitemap provides the ability to extract data during page navigation. Also, the sitemap can share data capture logic across multiple pages, and it can separate data capture logic from web page presentation logic.

A sitemap can be configured immediately after initializing the Web SDK. A general pattern is:

```

```

In each section of the sitemap you can define:

-   Multiple listeners to capture specific customer events that occur on a page
-   An onActionEvent hook that can be used to intercept and modify data captured
-   A name to identify the page configuration
-   The locale to capture for the page
-   An interaction to capture after the page loads

## GlobalPageConfig

The global configuration is merged into the PageConfig or DefaultPageConfig that is applied to a target web page. If there are no matching configurations for the target web page, the global configuration isn’t applied.

| Field Name | Description |
| --- | --- |
| listeners | Field TypelistenerDescriptionAn array of event listeners created using the SalesforceInteractions.listener function. These events listen for customer interactions that trigger events to send through the Web SDK. |
| locale | Field TypestringDescriptionThe locale of the current page as an ISO 639 alpha-2 language code and ISO 3166 alpha-2 country code. For example, en_US, or de_DE. |
| onActionEvent | FieldType(event: ActionEvent) => ActionEventDescriptionA callback that executes when an ActionEvent object is passed into the Web SDK. This call provides a hook to insert or modify properties of an event before it’s sent out. |

```

```

## DefaultPageConfig

The default page configuration is activated when no registered PageConfig matches are found on a target web page.

| Field Name | Description |
| --- | --- |
| listeners | Field TypelistenerDescriptionAn array of event listeners created using the SalesforceInteractions.listener function. These events listen for customer interactions that trigger events to send through the Web SDK. |
| locale | Field TypestringDescriptionThe locale of the current page as an ISO 639 alpha-2 language code and ISO 3166 alpha-2 country code. For example, en_US, or de_DE |
| name | Field TypestringDescriptionA name that identifies the default page configuration. |
| onActionEvent | (event:ActionEvent) => ActionEvent A callback that executes when an ActionEvent object is passed into the Web SDK. This call provides a hook to insert or modify properties of an event before it’s sent out. |

```

```

## PageConfig

| Field Name | Description |
| --- | --- |
| interaction | Field TypeCart Interaction \| Catalog Interaction \| Order InteractionDescriptionThe interaction to capture from the page. These fields are automatically extracted and sent when a page configuration matches. Sometimes the data to extract isn’t fully rendered when the sitemap is configured, so provide static values or values wrapped by a function to ensure that they’re evaluated lazily. |
| isMatch | Field Type() => BooleanDescriptionRequired.A function that tests whether to apply the given page configuration. |
| listeners | Field TypelistenerDescriptionAn array of event listeners created using the SalesforceInteractions.listener function. These events listen for customer interactions that trigger events to send through the Web SDK. |
| locale | Field TypestringDescriptionThe locale of the current page as an ISO 639 alpha-2 language code and ISO 3166 alpha-2 country code. For example, en_US, or de_DE. |
| name | Field TypestringDescriptionRequired.A unique name identifying the page configuration. |
| onActionEvent | Field Type(event:ActionEvent) => ActionEventDescriptionA callback that executes when an ActionEvent object is passed into the Web SDK. This call provides a hook to insert or modify properties of an event before it’s sent out. |

```

```

## Sitemap Methods

```

```

| Field Name | Description |
| --- | --- |
| global | Field TypeGlobalPageConfigDescriptionRequiredThe global configuration is merged into the PageConfig or DefaultPageConfig that is applied to a target web page. If there are no matching configurations for the target web page, the global configuration isn’t applied. |
| pageTypes | Field TypePageConfig[]DescriptionRequiredAn array of page configurations that specify whether data collection rules execute on any page that matches a specified criteria for a target web page. Multiple page configurations can match a single page. These configurations are merged together along with the GlobalPageConfig, if provided. |
| pageTypeDefault | Field TypeDefaultPageConfigDescriptionThe default page configuration is activated when no registered PageConfig matches are found on a target web page. |

**Extract the Canonical Link From an HTML Document**

```

```

Creates a resolver that extracts the canonical link from an HTML document. Transform is an optional function that transforms the resolved value into a new value.

For example, giving the HTML:

```

```

You could extract the value of the canonical href with:

```

```

**Extract the Href Value from the HTML Document Location Object**

```

```

Creates a resolver that extracts the href value from the HTML document’s Location object. Transform is an optional function that transforms the resolved value into a new value.

For example, giving an HTML document at the URL:

```

```

You could extract the href with:

```

```

**Extract the Content Attribute from the First Element**

```

```

Creates a resolver that extracts the content attribute from the first element matching the target itemprop attribute value in an HTML document.

Arguments:

-   itemProp — The value of the itemprop attribute to match against
-   transform — An optional function that transforms the resolved value into a new value

For example, giving the HTML:

```

```

You could extract values from the <meta> element with:

```

```

**Extracts JSON Linked Data**

```

```

Creates a resolver that extracts JSON Linked Data (JSON-LD) from the first <script> element with a type attribute of application/ld+json in an HTML document.

Arguments:

-   path — A path of the property to get
-   transform — An optional function that transforms the resolved value into a new value

For example, giving the HTML:

```

```

You could extract values from the <meta> element with:

```

```

**Extract the Content Attribute from the First Meta Element**

```

```

Creates a resolver that extracts the content attribute from the first <meta> element that matches the given name attribute in an HTML document.

Arguments:

-   name — The value of the name attribute to match against
-   transform — An optional function that transforms the resolved value into a new value

For example, giving the HTML:

```

```

You could extract values from the <meta> element with:

```

```

**Extract the Text from the First Element**

```

```

Creates a resolver that extracts the text from the first element that matches the given CSS Selector in an HTML document.

Arguments:

-   selector — A target CSS Selector to match against
-   transform — An optional function that transforms the resolved value into a new value

For example, giving the HTML:

```

```

You could extract the text of every <h1> element with:

```

```

**Extract the Text from the First Element**

```

```

Creates a resolver that extracts the text from each element that matches the given CSS Selector in an HTML document.

Arguments:

-   selector — A target CSS Selector to match against
-   transform — An optional function that transforms the resolved value into a new value

For example, giving the HTML:

```

```

You could extract the text of every <h1> element with:

```

```

**Extract the Value From of the Target Attribute From the First Element**

```

```

Creates a resolver that extracts the value of the target attribute from the first element that matches the given CSS Selector in an HTML document.

Arguments:

-   selector — A target CSS Selector to match against
-   attribute — The target attribute to extract the value from
-   transform — An optional function that transforms the resolved value into a new value

For example, giving the HTML:

```

```

You could extract the value of the data-id attribute with:

```

```

**Extract the Value of the Target Attribute**

```

```

Creates a resolver that extracts the value of the target attribute from each element that matches the given CSS Selector in an HTML document.

Arguments:

-   selector — A target CSS Selector to match against
-   attribute — The target attribute to extract the value from
-   transform — An optional function that transforms the resolved value into a new value

For example, giving the HTML:

```

```

You could extract the values of every data-id attribute with:

```

```

**Extract the Value of an Object**

```

```

Creates a resolver that extracts the value of an object, usually a global variable, attached to the window object.

Arguments:

-   path — A string representing the path to the object in the window object. Uses dot notation.
-   transform — An optional function that transforms the resolved value into a new value

For example, giving the window object:

```

```

You can extract data from the shop global object:

```

```

-   **[Sample Ecommerce Sitemap](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_sample_ecommerce_sitemap.htm)**  
    Review this sample sitemap.