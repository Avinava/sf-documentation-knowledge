---
title: "Introduction to Programmatic Marketing Content"
domain: mc-programmatic-content
topic: introduction-to-programmatic-marketing-content
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:22.518Z
estimatedTokens: 1067
keywords: [Introduction, Programmatic, Marketing, Content, Cloud, scripting, languages, allow, personalize, landing, pages, applications, construct, cross-channel, templates, layouts, work, messaging, functions, platform, AMPscript, Server-Side, JavaScript, SSJS, Template, Language, GTL, Items]
---

> Marketing Cloud scripting languages allow you to personalize landing pages, create applications, construct cross-channel templates/layouts, and work with messaging functions on the Marketing Cloud platform.

# Introduction to Programmatic Marketing Content

Marketing Cloud scripting languages allow you to personalize landing pages, create applications, construct cross-channel templates/layouts, and work with messaging functions on the Marketing Cloud platform.

You'll need to understand scripting languages to use this functionality.

## Introduction to AMPscript

AMPscript is a scripting language that you can embed within HTML emails, text emails, landing pages, SMS messages, and push notifications from MobilePush. The system processes the script at the point where you include it in the message to render content on a subscriber-by-subscriber basis. The Marketing Cloud application handles all AMPscript calls at the end of the email send.

AMPscript can also interact with your data extensions. Use AMPscript to include information from your data extensions in your messages and to update data extensions with information from your landing pages.

Use AMPscript to process information and include information from your data extensions in the body of your messages and landing pages to provide advanced personalization for the subscribers.

## Introduction to Server-Side JavaScript (SSJS)

The Marketing Cloud uses JavaScript code processed by Marketing Cloud servers. Instead of using the browser to render the JavaScript on the client-side computer, Marketing Cloud executes the JavaScript on the server when rendering. While you can duplicate the functionality of AMPscript using SSJS, SSJS does not work with the DOM and will not function with exterior libraries. Instead, use libraries provided by Marketing Cloud to create SSJS that works within landing pages. All functions native to JavaScript, such as arrays, math functions, the EVAL function, and try catch blocks, work with SSJS.

SSJS interacts with Marketing Cloud via several libraries. Write your code to work with these libraries in order to work with the information in your Marketing Cloud account. These libraries allow SSJS to be updated while maintaining previous versions in order to avoid breaking preexisting code. You can use all commands and syntax outlined in the JavaScript specifications as part of your SSJS offerings.

Several factors may influence your choice to use SSJS over AMPscript:

-   AMPscript simply and efficiently handles inline personalization or simple IF ELSE statements.
-   AMPscript better handles use cases, where each subscriber needs to see unique content, than SSJS.
-   AMPscript has a shorter learning curve than SSJS for users new to scripting languages in general.
-   A great deal of people already know JavaScript and can immediately apply that knowledge to Marketing Cloud
-   In general, the vast majority of users can handle the tasks they need to perform using AMPscript. Use Core library SSJS functions only to accomplish tasks on landing pages where AMPscript does not provide appropriate functions. Platform SSJS functions can handle messaging tasks as well as landing pages and applications.

## Introduction to Guide Template Language (GTL)

GTL provides a declarative syntax used for creating personalized, dynamic, data-driven messages, as well as constructing cross-channel templates and layouts. GTL leverages the widely adopted Handlebars and Mustache template languages and provides additional functionality, while additionally simplifying how users interact with content and data to help them quickly build personalized Journey messages.

## Related Items

-   [Get Started with AMPscript](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/getStarted-AMPscript.htm)
-   [AMPscript Calls](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ampscriptProcessing.htm)
-   [AMPscript Syntax Guide](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/syntaxGuide.htm)
-   [Server-Side Javascript Guide](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ssjs_serverSideJavaScript.htm)
-   [Guide Template Language Syntax Guide](atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/gtlSyntaxGuide.htm)
-   [Handlebars Template Language](http://handlebarsjs.com/)
-   [Mustache Template Language](http://mustache.github.io/)

## Related Topics

- Get Started with AMPscript (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/getStarted-AMPscript.htm)
- AMPscript Calls (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ampscriptProcessing.htm)
- AMPscript Syntax Guide (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/syntaxGuide.htm)
- Server-Side Javascript Guide (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/ssjs_serverSideJavaScript.htm)
- Guide Template Language Syntax Guide (atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/gtlSyntaxGuide.htm)
