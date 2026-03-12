---
title: "Page Condition Syntax for ui.json"
domain: bi-dev-guide-wave-templates
topic: page-condition-syntax-for-uijson
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.595Z
estimatedTokens: 263
keywords: [Condition, ui.json, page's, appearance, conditional, variable, user, answers, “No”, asked, there, Products, dimension, ensure, Products-related]
---

# Page Condition Syntax for ui.json

> You can make a page's appearance conditional on the value of a variable. For example, if
  the user answers “No” when asked if there is a Products dimension, you can use a conditional to
  ensure that no Products-related page displays in the wizard. Adding page conditions enables wizard
  page flow. If the condition is met, then the page with the condition will display; if the
  condition is not met, the page will not display. Use the following syntax to instruct which
  conditionals control the display of pages.

# Page Condition Syntax for ui.json

You can make a page's appearance conditional on the value of a variable. For example, if the user answers “No” when asked if there is a Products dimension, you can use a conditional to ensure that no Products-related page displays in the wizard. Adding page conditions enables wizard page flow. If the condition is met, then the page with the condition will display; if the condition is not met, the page will not display. Use the following syntax to instruct which conditionals control the display of pages.

| Variable Type | Supported Operations | Example |
| --- | --- | --- |
| StringType | ==, != | {{Variables.x == 'Yes'}} |
| BooleanType | ==, != | {{Variables.x == true}} |
| NumberType | ==, !=, <, <=, >, >= | {{Variables.x == 5}} |
| SobjectType | ==, != | {{Variables.x.sobjectName == 'x'}} |
| SobjectFieldType | ==, != | {{Variables.x.fieldName == 'x'}} |
| ArrayType --> StringType | contains | {{Variables.x contains 'x'`123}} |
| ArrayType --> NumberType | contains | {{Variables.x contains 5}} |
