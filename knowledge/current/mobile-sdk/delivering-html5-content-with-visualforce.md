---
title: "Delivering HTML5 Content With Visualforce"
domain: mobile-sdk
topic: delivering-html5-content-with-visualforce
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.687Z
estimatedTokens: 195
keywords: [Delivering, HTML5, Content, Visualforce, Traditionally, custom, websites, desktop, environment, combined, however, becomes, viable, delivery, mechanism]
---

# Delivering HTML5 Content With Visualforce

> Traditionally, you use Visualforce to create custom websites for the desktop environment.
      When combined with HTML5, however, Visualforce becomes a viable delivery mechanism for mobile
      Web apps. These apps can leverage third-party UI widget libraries such as Sencha, or
      templating fr

# Delivering HTML5 Content With Visualforce

Traditionally, you use Visualforce to create custom websites for the desktop environment. When combined with HTML5, however, Visualforce becomes a viable delivery mechanism for mobile Web apps. These apps can leverage third-party UI widget libraries such as Sencha, or templating frameworks such as AngularJS and Backbone.js, that bind to data inside Salesforce.

To set up an HTML5 Apex page, change the docType attribute to “html-5.0”, and use other settings similar to these:

```

```

This code sets up an Apex page that can contain HTML5 content, but, of course, it produces an empty page. With the use of static resources and third-party libraries, you can add HTML and JavaScript code to build a fully interactive mobile app.

## Code Examples

```
<apex:page docType="html-5.0" sidebar="false" showHeader="false" standardStylesheets="false" cache="true" >
 
</apex:page>
```
