---
title: "Defining Custom Components"
domain: pages
topic: defining-custom-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:22.023Z
estimatedTokens: 824
keywords: [Defining, Custom, Components, define, component, Visualforce]
---

# Defining Custom Components

> To define a custom component for use in a Visualforce page:

# Defining Custom Components

To define a custom component for use in a Visualforce page:

1.  In Salesforce from Setup, enter Components in the Quick Find box, then select **Visualforce Components**.
2.  Click **New**.
3.  In the Label text box, enter the text that should be used to identify the custom component in Setup tools.
4.  In the Name text box, enter the text that should identify this custom component in Visualforce markup. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.
5.  In the Description text box, enter a text description of the custom component. This description appears in the component reference with other standard component descriptions as soon as you click **Save**.
6.  In the Body text box, enter Visualforce markup for the custom component definition. A single component can hold up to 1 MB of text, or approximately 1,000,000 characters.
7.  Click **Version Settings** to specify the version of Visualforce and the API used with this component. You can also specify versions for any managed packages installed in your organization.
8.  Click **Save** to save your changes and view the custom component’s detail screen, or click **Quick Save** to save your changes and continue editing your component. Your Visualforce markup must be valid before you can save your component.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

You can also create a custom component in [Visualforce development mode](atlas.en-us.pages.meta/pages/pages_tools_intro.htm#pages_tools_intro "Before you begin to develop Visualforce pages and components, familiarize yourself with the different places to create them.") by adding a reference to a custom component that does not yet exist to Visualforce page markup. After saving the markup, a quick fix link appears that allows you to create a new component definition (including any specified attributes) based on the name that you provided for the component.

For example, if you haven’t yet defined a custom component named myNewComponent and insert <c:myNewComponent myNewAttribute="foo"/> into existing page markup, after clicking **Save** a quick fix allows you to define a new custom component named myNewComponent with the following default definition:

```

```

You can modify this definition from Setup by entering Components in the Quick Find box, then selecting **Visualforce Components**, and then clicking **Edit** next to the myNewComponent custom component.

Once your component has been created, you can view it at http://yourSalesforceOrgURL/apexcomponent/nameOfNewComponent, where yourSalesforceOrgURL is the URL used to access your Salesforce org (for example, MyDomain\_login\_URL) and the value of nameOfNewComponent is the value of the Name field on the custom component definition.

The component is displayed as if it’s a Visualforce page. Consequently, if your component relies on attributes or on the content of the component tag’s body, this URL may generate results that you don’t expect. To more accurately test a custom component, add it to a Visualforce page and then view the page.

## Code Examples

```
<apex:component>
  <apex:attribute name="myattribute" type="String" description="TODO: Describe me"/>
  <!-- Begin Default Content REMOVE THIS -->
  <h1>Congratulations</h1>
  This is your new Component: mynewcomponent
  <!-- End Default Content REMOVE THIS -->
</apex:component>
```

## Related Topics

- Visualforce development mode (atlas.en-us.pages.meta/pages/pages_tools_intro.htm)
