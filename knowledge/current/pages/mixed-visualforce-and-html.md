---
title: "Mixed Visualforce and HTML"
domain: pages
topic: mixed-visualforce-and-html
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.495Z
estimatedTokens: 835
keywords: [Mixed, Visualforce, HTML, Combine, tags, form, elements, output, text, structure, mobile-friendly, pages, closely, match, visual]
---

# Mixed Visualforce and HTML

> Combine Visualforce tags for form elements and output text with static HTML for page
        structure to create mobile-friendly pages that more closely match the visual design of the
        Salesforce mobile app. For mobile-only pages, you can quickly convert an existing
        Visualforce page, but this doesn’t work as well for pages that are used in both the
        Salesforce mobile app and the full Salesforce site.

# Mixed Visualforce and HTML

Combine Visualforce tags for form elements and output text with static HTML for page structure to create mobile-friendly pages that more closely match the visual design of the Salesforce mobile app. For mobile-only pages, you can quickly convert an existing Visualforce page, but this doesn’t work as well for pages that are used in both the Salesforce mobile app and the full Salesforce site.

Visualforce pages designed this way are still “standard” Visualforce, in that they use the standard request-response cycle, standard controller functionality, <apex:inputField\> for form fields, POSTBACK and view state, and so on. The main difference from authoring pages for the full Salesforce site is the reduced or eliminated use of Visualforce tags to add structure to the page, in favor of static HTML. That is, replacing <apex:pageBlock\>, <apex:pageBlockSection\>, and so on, with <div\>, <p\>, <span\>, and so on.

This approach also requires creating CSS stylesheets to manage the look-and-feel of the page elements, instead of using the built-in, automatically applied styles provided when you use the Visualforce components. While this can take some time, it allows you to much more closely match the visual design of the Salesforce mobile app. This also means that pages designed this way *won’t* match the full Salesforce site visually.

## Applying this Approach to Your Visualforce Pages

To use this approach for creating pages to use in the Salesforce mobile app, follow a few general rules.

-   Don’t use the following Visualforce tags:
    -   <apex:pageBlock\>
    -   <apex:pageBlockButtons\>
    -   <apex:pageBlockSection\>
    -   <apex:pageBlockSectionItem\>
    -   <apex:pageBlockTable\>
-   Use <apex:form\>, <apex:inputField\> or <apex:input\>, and <apex:outputLabel\> for forms.
-   Use <apex:outputText\> or Visualforce for non-editable text.
-   Use your preferred HTML to construct the structure for the page: <div\>, <span\>, <h1\>, <p\>, and so on.
-   Use CSS styling to apply your preferred visual design.

## Advantages and Limitations

The advantages of this approach include:

-   Reasonably fast development time, and you use the normal Visualforce development tools and processes.
-   It’s reasonably easy to repurpose existing pages.
-   You can more closely match the Salesforce mobile app’s look and feel.

Some limitations to keep in mind:

-   This approach makes the usual Visualforce request round trips, with larger data payloads, compared to a fully mobile-optimized approach using JavaScript remoting.
-   It’s extra work to add CSS styles that replace the styles automatically added by <apex:pageBlock\> and related components.

## Example of a Mixed Visualforce and HTML Page

The following code sample shows a mixed HTML and Visualforce page that allows a user to edit a warehouse record. The edit feature is provided by the standard controller for the object.

```

```

This page can be used in both the Salesforce mobile app and the full Salesforce site. It displays as a standard page on the full Salesforce site, but without the full Salesforce styling for the form. In the Salesforce mobile app, it displays roughly matching the Salesforce mobile app’s visual style. With additional styles, the page can approximate the visual style for both versions.

## Code Examples

```
<apex:page standardController="Warehouse__c">

<style>
    html, body, p { font-family: sans-serif; }
</style>

<apex:form >

    <h1>{!Warehouse__c.Name}</h1>

    <h2>Warehouse Details</h2>

    <div id="theForm">
        <div>
            <apex:outputLabel for="address" value="Street Address"/>
            <apex:inputField id="address" 
                value="{! warehouse__c.Street_Address__c}"/>
        </div>
        <div>
            <apex:outputLabel for="city" value="City"/>
            <apex:inputField id="city" 
                value="{! warehouse__c.City__c}"/>
        </div>
        <div>
            <apex:outputLabel for="phone" value="Phone"/>
            <apex:inputField id="phone" 
                value="{! warehouse__c.Phone__c}"/>
        </div>
    </div>

    <div id="formControls">
        <apex:commandButton action="{!quickSave}" value="Save"/>
    </div>

</apex:form>

</apex:page>
```
