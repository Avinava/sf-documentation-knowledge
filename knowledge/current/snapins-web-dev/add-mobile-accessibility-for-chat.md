---
title: "Add Mobile Accessibility for Chat"
domain: snapins-web-dev
topic: add-mobile-accessibility-for-chat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.296Z
estimatedTokens: 809
keywords: [Add, Mobile, Accessibility, Chat, Provide, accessible, Embedded, experience, website, customers, Base, Code, Snippet, onBodyLoaded]
---

# Add Mobile Accessibility for Chat

> Provide an accessible Embedded Chat experience on your website for mobile
        customers.

# Add Mobile Accessibility for Chat

Provide an accessible Embedded Chat experience on your website for mobile customers.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

Most browsers don’t support hiding background content for screen readers on mobile phones when the Chat modal opens. By adding hooks to the code, you streamline the experience for these users to focus on Chat. Once the window is closed, the full web page content returns.

The phone on the left shows what the screen reader accesses when the modal opens. The one on the right demonstrates the experience with the inert function added.

![Screenshot of mobile phones showing what the screen reader will transmit without the feature applied to the Chat window and with the feature.](/docs/resources/img/en-us/260.0?doc_id=images%2Fembedded_service_mobile_access.png&folder=snapins_web_dev)

This solution provides code that temporarily hides document body children and keep only the Embedded Service Web widget accessible and visible to assistive technology.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

This solution is not available for Experience sites.

Start with a base page and our code snippet with an empty onBodyLoaded JavaScript method. The body page content is wrapped with a div with the id #body-content and the body has an onload handler specified. You’ll use the CSS selector div.#body-content and implement the JavaScript method onBodyLoaded() after adding your snippet.

## Base Page Code with Embedded Chat Code Snippet

```

```

Next implement the JavaScript method onBodyLoaded to disable the div with id body-content whenever Embedded Chat is opened and re-enable body-content whenever Embedded Chat is minimized/closed. Define the JavaScript method onBodyLoaded in this step. For more help on adding event handlers for maximize, destroy, and minimize, see “[Get Chat Event Notifications](https://developer.salesforce.com/docs/atlas.en-us.260.0.snapins_web_dev.meta/snapins_web_dev/snapins_web_chat_events.htm "HTML (New Window)").”

## onBodyLoaded Code

```

```

Here’s the combined code for the steps you completed.

## Mobile Accessible Embedded Chat Example Code

```

```

#### See Also

-   [Get Chat Event Notifications](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_chat_events.htm "Set up notifications when certain chat events are triggered. Subscribe to these particular events by calling to embedded_svc.addEventHandler in your Embedded Chat code snippet.")

## Code Examples

```
<html>
 
<head>
   <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0">
   <script type='text/javascript'>
        function onBodyLoaded() {
            // You’ll fill in this function during the next step.
        }
   </script>
</head>
 
<body onload="onBodyLoaded()">
   <div id="body-content">
       <h1>Welcome to the best website!</h1>
 
       <style type='text/css'>
           .embeddedServiceHelpButton .helpButton .uiButton {
               background-color: #A70BA5;
               font-family: "Comic Sans MS", sans-serif;
           }
           .embeddedServiceHelpButton .helpButton .uiButton:focus {
               outline: 1px solid #A70BA5;
           }
           .previews img {
               max-width: 100%;
               border-radius: 10px;
           }
           .chat-content a {
               color: #fff;
           }
       </style>
   </div>
 
   <script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
   <script type='text/javascript'>
       var initESW = function (gslbBaseURL) {
           embedded_svc.settings.displayHelpButton = true; //Or false
           embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'
           embedded_svc.settings.enabledFeatures = ['LiveAgent'];
           embedded_svc.settings.entryFeature = 'LiveAgent';
 
           embedded_svc.init(
               // params for your org
           );
       };
 
       if (!window.embedded_svc) {
           var s = document.createElement('script');
           s.setAttribute('src', 'https://<yourCoreURL>/embeddedservice/5.0/esw.min.js');
           s.onload = function () {
               initESW(null);
           };
           document.body.appendChild(s);
       } else {
           initESW('https://service.force.com');
       }
   </script>
</body>
 
</html>
```

```
function onBodyLoaded() {
   /**
     * Toggles the inert attribute on background content for the page.
     * The inert attribute needs to be set on parent level DOM
     * nodes. Inert will set the DOM node aria-hidden attribute and
     * and set tab-index="-1" on all children so that screen readers
     * can’t access the content.
     */
   function toggleInert(disabled) {
       let bodyElem = document.getElementById("body-content");
       if(bodyElem) {
           bodyElem.inert = disabled;
       }
   }
 
   // Add hooks to toggle inert on our page when Embedded Chat
   // changes state.
   function addA11yHooks() {
       embedded_svc.addEventHandler('afterMaximize', function() {
           toggleInert(true);
       });
       embedded_svc.addEventHandler('afterDestroy', function() {
           toggleInert(false);
       });
       embedded_svc.addEventHandler('afterMinimize', function() {
           toggleInert(false);
       });
   }
 
   // Early out for desktop.
   if(embedded_svc.isDesktop()) {
       return;
   }
 
   // Add hooks for mobile.
   addA11yHooks();
}
```

```
<html>
 
<head>
   <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0">
   <script type='text/javascript'>
       function onBodyLoaded() {
           /**
             * Toggles the inert attribute on background content for the page.
             * The inert attribute just needs to be set on parent level DOM
             * nodes. Inert will set the DOM node aria-hidden attribute and
             * and set tab-index="-1" on all children so that screen readers
             * can't access the content.
             */
           function toggleInert(disabled) {
               let bodyElem = document.getElementById("body-content");
               if(bodyElem) {
                   bodyElem.inert = disabled;
               }
           }
 
           // Add hooks to toggle inert on our page when Embedded Chat
           // changes state.
           function addA11yHooks() {
               embedded_svc.addEventHandler('afterMaximize', function(data) {
                   toggleInert(true);
               });
               embedded_svc.addEventHandler('afterDestroy', function(data) {
                   toggleInert(false);
               });
               embedded_svc.addEventHandler('afterMinimize', function(data) {
                   toggleInert(false);
               });
           }
 
           // Early out for desktop.
           if(embedded_svc.isDesktop()) {
               return;
           }
 
           // Add hooks for mobile.
           addA11yHooks();
       }
   </script>
</head>
 
<body onload="onBodyLoaded()">
   <div id="body-content">
       <h1>Welcome to the best website!</h1>
 
       <style type='text/css'>
           .embeddedServiceHelpButton .helpButton .uiButton {
               background-color: #A70BA5;
               font-family: "Comic Sans MS", sans-serif;
           }
           .embeddedServiceHelpButton .helpButton .uiButton:focus {
               outline: 1px solid #A70BA5;
           }
           .previews img {
               max-width: 100%;
               border-radius: 10px;
           }
           .chat-content a {
               color: #fff;
           }
       </style>
   </div>
 
   <script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
   <script type='text/javascript'>
       var initESW = function (gslbBaseURL) {
           embedded_svc.settings.displayHelpButton = true; //Or false
           embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'
           embedded_svc.settings.enabledFeatures = ['LiveAgent'];
           embedded_svc.settings.entryFeature = 'LiveAgent';
 
           embedded_svc.init(
               // params for your org
           );
       };
 
       if (!window.embedded_svc) {
           var s = document.createElement('script');
           s.setAttribute('src', 'https://<yourCoreURL>/embeddedservice/5.0/esw.min.js');
           s.onload = function () {
               initESW(null);
           };
           document.body.appendChild(s);
       } else {
           initESW('https://service.force.com');
       }
   </script>
</body>
 
</html>
```

## Related Topics

- Get Chat Event Notifications (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_chat_events.htm)
