---
title: "$Component"
domain: pages
topic: component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.369Z
estimatedTokens: 335
keywords: [$Component, merge, referencing, Visualforce, component, Usage]
---

# $Component

> A global merge field type to use when referencing a Visualforce
        component.

# $Component

A global merge field type to use when referencing a Visualforce component.

## Usage

Each component in a Visualforce page has its own Id attribute. When the page is rendered, this attribute is used to generate the Document Object Model (DOM) ID. Use $Component.Path.to.Id in JavaScript to reference a specific component on a page, where Path.to.Id is a component hierarchy specifier for the component being referenced.

## Example

The following JavaScript method references a component named msgpost in a Visualforce page:

```

```

The page markup that follows shows the <apex:outputText\> component to which msgpost refers:

```

```

If your component is nested, you might need to use a more complete component path specifier. For example, if your page looks like this:

```

```

Then you can refer to the component in a function like this:

```

```

#### See Also

-   [Using $Component to Reference Components from JavaScript to Reference Components from JavaScript](atlas.en-us.pages.meta/pages/pages_access.htm "Use the $Component global variable to simplify referencing the DOM ID that is generated for a Visualforce component, and reduce some of the dependency on the overall page structure.")

-   [Best Practices for Accessing Component IDs](atlas.en-us.pages.meta/pages/pages_best_practices_accessing_id.htm)

## Code Examples

```
function beforeTextSave() {
    document.getElementById('{!$Component.msgpost}').value = 
        myEditor.getEditorHTML();
}
```

```
<apex:page>
    <apex:outputText id="msgpost" value="Emacs"/> is great.
</apex:page>
```

```
<apex:page>
    <apex:pageBlock id="theBlock">
        <apex:pageBlockSection id="theSection" columns="1">
            <apex:pageBlockSectionItem id="theSectionItem">
                <apex:outputText id="theText">
                    Heya!
                </apex:outputText>
            </apex:pageBlockSectionItem>
        </apex:pageBlockSection>
    </apex:pageBlock>
</apex:page>
```

```
document.getElementById(
    "{!$Component.theBlock.theSection.theSectionItem.theText}")
```

## Related Topics

- Using $Component to Reference Components from JavaScript to Reference Components from JavaScript (atlas.en-us.pages.meta/pages/pages_access.htm)
- Best Practices for Accessing Component IDs (atlas.en-us.pages.meta/pages/pages_best_practices_accessing_id.htm)
