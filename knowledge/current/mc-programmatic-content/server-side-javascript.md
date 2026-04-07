---
title: "Server-Side JavaScript"
domain: mc-programmatic-content
topic: server-side-javascript
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:28.503Z
estimatedTokens: 709
keywords: [Server-Side, JavaScript, Marketing, Cloud, application, uses, code, processed, servers, Instead, browser, render, client-side, computer, executes]
---

# Server-Side JavaScript

> Marketing Cloud application uses JavaScript code processed by Marketing Cloud servers. Instead of using the browser to render the JavaScript on the client-side computer, Marketing Cloud executes the JavaScript on the server when rendering. Use Core server-side JavaScript functions to personalize lan

# Server-Side JavaScript

Marketing Cloud application uses JavaScript code processed by Marketing Cloud servers. Instead of using the browser to render the JavaScript on the client-side computer, Marketing Cloud executes the JavaScript on the server when rendering. Use Core server-side JavaScript functions to personalize landing pages and create applications to run on Marketing Cloud. Use Platform server-side JavaScript functions to work with messages, landing pages, and applications.

Server-side JavaScript does not work with the DOM and will not function with exterior libraries. Instead, use libraries provided by Marketing Cloud to create server-side JavaScript. All functions native to JavaScript, such as arrays, math functions, the EVAL function, and try catch blocks work with server-side JavaScript.

You can duplicate the functionality of AMPscript using server-side JavaScript. However, server-side JavaScript can also handle more advanced procedures:

-   You can use arrays in your server-side JavaScript.
-   You can use more advanced exception handling with server-side JavaScript.

## AMPscript and Server-Side JavaScript

You should exclusively use AMPscript or Platform object server-side JavaScript functions in email messages and reserve your use of Core library server-side JavaScript to landing pages and applications.

From there, several factors can influence your choice to use one language over another:

-   AMPscript can simply and efficiently handle inline personalization or simple IF ELSE statements.
-   AMPscript can better handle use cases where each subscriber needs to see unique content than can server-side JavaScript.
-   AMPscript can present a shorter learning curve than server-side JavaScript for users new to scripting languages in general.
-   Those who know JavaScript can immediately apply that knowledge to the Marketing Cloud application.

In general, the vast majority of users can handle the tasks they need to perform using AMPscript. Ultimately, many factors help determine which language helps you complete your task in the most elegant and efficient manner possible. However, the above factors can help you make a more informed decision. Consult your Marketing Cloud account representative if you have any further questions about which language to use.

## How to Use Server-Side JavaScript

Server-side JavaScript interacts with Marketing Cloud via the Platform class and the Core library. Write your code to work with these libraries in order to work with the information in your Marketing Cloud account. These libraries allow server-side JavaScript to be updated while maintaining previous versions in order to avoid breaking pre-existing code. You can use all commands and syntax outlined in the JavaScript specifications as part of your server-side JavaScript offerings.
