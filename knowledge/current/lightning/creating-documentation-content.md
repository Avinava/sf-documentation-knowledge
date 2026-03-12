---
title: "Creating Documentation Content"
domain: lightning
topic: creating-documentation-content
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.780Z
estimatedTokens: 787
keywords: [Creating, Documentation, Content, usage, guidelines, code, samples, component, event, Writing, Basic, Formatting, Blocks, Links, Tables]
---

# Creating Documentation Content

> Documentation provides usage guidelines and code samples about a component, event, or
    interface.

# Creating Documentation Content

Documentation provides usage guidelines and code samples about a component, event, or interface.

In the Component Library, the **Documentation** tab renders content from your .auradoc file. For an example, see the lightning:avatar Documentation tab at [https://developer.salesforce.com/docs/component-library/bundle/lightning:avatar/documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:avatar/documentation). Each component, event, or interface element can have one .auradoc file.

## Writing the Documentation

Provide your content in HTML markup. Add usage guidelines and code samples to help developers use your component, event, or interface easily.

To provide documentation, click **DOCUMENTATION** in the component sidebar of the Developer Console, which creates a .auradoc file for your component.

A .auradoc file contains these tags.

| Tag | Description |
| --- | --- |
| <aura:documentation> | Required. Creates documentation for a component, event, or interface. |
| <aura:description> | Required. Describes the component using HTML markup. |
| <aura:example> | References an example that demonstrates how the component is used. Supports HTML markup, which displays as text preceding the visual output and example component source. Use the example to create an interactive experience that demonstrates features of your component.name: The API name of the exampleref: The reference to the example component in the format <namespace:exampleComponent>label: The title that describes the exampleEach .auradoc file can contain multiple <aura:example> tags. |

## Basic Formatting

We recommend that you use only the tags listed here and in the following sections. The Component Library strips out or escapes unexpected tags and attributes for security reasons.

Make sure to include closing tags.

Heading

Only <h4> headings are supported for headings.

```

```

Paragraph

```

```

Code Formatting

```

```

## Code Blocks

Create a code block using the <pre\> tag and an embedded <code\> tag for code highlighting. Code markup must be escaped. For example, replace < characters with &lt;.

```

```

To enable code highlighting in the Component Library, add the class attribute to the <code\> tag. Code samples with Aura markup use the class language-markup. JavaScript controllers use language-js, and CSS use language-css.

## Links

The Component Library supports links to other component reference pages, external links, and cross-tab linking from the component reference to the Lightning Web Components Developer Guide.

Anchor links are currently not supported.

Create a link to another component reference page

```

```

Create an external link

```

```

Create a link to a topic in the Lightning Web Components Developer Guide

```

```

## Lists

Lists present related items and can be bulleted or numbered.

Create a bulleted list

```

```

Create a numbered list

```

```

## Tables

Tables are useful for presenting a list of items with several accompanying descriptions. Nesting a bulleted list in a table is currently not supported.

```

```

## Code Examples

```
<h4>Usage Considerations</h4>
```

```
<p>Some cool paragraph about a component</p>
```

```
<p>Here’s a paragraph on the <code>c:myComponentName</code> component.</p>
```

```
<pre><code class="language-markup">&lt;aura:component>
   &lt;lightning:accordion activeSectionName="B">
     &lt;lightning:accordionSection name="A" label="Accordion Title A">This is the content area for section A&lt;/lightning:accordionSection>
     &lt;lightning:accordionSection name="B" label="Accordion Title B">This is the content area for section B&lt;/lightning:accordionSection> 
   &lt;/lightning:accordion>
&lt;/aura:component></code></pre>
```

```
<a href="/docs/component-library/bundle/lightning:input/documentation">
   lightning:input</a>
```
