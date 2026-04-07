---
title: "Validation Rules and Standard Controllers"
domain: pages
topic: validation-rules-and-standard-controllers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:51.118Z
estimatedTokens: 130
keywords: [Validation, Standard, Controllers, user, enters, Visualforce, uses, controller, causes, rule, error, location, <apex, inp]
---

> If a user enters data on a Visualforce page that uses a             standard controller, and that data
causes a validation rule error, the error can be             displayed
on the Visualforce             page. If the validation rule error location is
a field associated with an             <apex:inp

# Validation Rules and Standard Controllers

If a user enters data on a Visualforce page that uses a standard controller, and that data causes a validation rule error, the error can be displayed on the Visualforce page. If the validation rule error location is a field associated with an <apex:inputField\> component, the error displays there. If the validation rule error location is set to the top of the page, use the <apex:pageMessages\> or <apex:messages\> component within the <apex:page\> to display the error.
