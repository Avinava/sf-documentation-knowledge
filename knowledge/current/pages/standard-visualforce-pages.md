---
title: "Standard Visualforce Pages"
domain: pages
topic: standard-visualforce-pages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.509Z
estimatedTokens: 284
keywords: [Standard, Visualforce, Pages, Normal, render, well, mobile, browsers, as-is, modest, reduction, user, experience, compared, mobile-optimized]
---

# Standard Visualforce Pages

> Normal Visualforce pages render well on mobile browsers, and can be used as-is, with a
    modest reduction of the user experience compared to mobile-optimized Web pages. Pages display as
    they would on the full Salesforce site, and won’t visually match other Salesforce app
    features.

# Standard Visualforce Pages

Normal Visualforce pages render well on mobile browsers, and can be used as-is, with a modest reduction of the user experience compared to mobile-optimized Web pages. Pages display as they would on the full Salesforce site, and won’t visually match other Salesforce app features.

## Limitations

Limitations to the user experience include:

-   Tap targets—buttons, links, form fields, and so on—are optimized for mouse cursors, and can be difficult to hit accurately with a fingertip.
-   The visual design is unchanged, and may not fit with the mobile-optimized, modern visual design of the Salesforce mobile app.

If your development timeline is aggressive, you might find these limitations acceptable.

## Example of a Standard Visualforce Page

The following code provides a sample for a standard Visualforce page that allows a user to edit a warehouse record. The edit feature is provided by the standard controller for the object.

```

```

This page can be used in both the Salesforce mobile app and the full Salesforce site. It displays as a standard desktop Visualforce page in both contexts.

## Code Examples

```
<apex:page standardController="Warehouse__c">

<apex:form>

  <apex:pageBlock title="{! warehouse__c.Name }">

    <apex:pageBlockSection title="Warehouse Details" columns="1">
      <apex:inputField value="{! warehouse__c.Street_Address__c }"/>
      <apex:inputField value="{! warehouse__c.City__c }"/>
      <apex:inputField value="{! warehouse__c.Phone__c }"/>
    </apex:pageBlockSection>
        
    <apex:pageBlockButtons location="bottom">
      <apex:commandButton action="{! quickSave }" value="Save"/>
    </apex:pageBlockButtons>
    
  </apex:pageBlock>

</apex:form>

</apex:page>
```
