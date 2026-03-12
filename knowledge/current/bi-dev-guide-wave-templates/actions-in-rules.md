---
title: "Actions in Rules"
domain: bi-dev-guide-wave-templates
topic: actions-in-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.358Z
estimatedTokens: 286
keywords: [Actions, Rules, define, rule, constants, easier, perform, any, action]
---

# Actions in Rules

> Actions define what a rule does. Use constants to make it easier to perform any
  action.

# Actions in Rules

Actions define what a rule does. Use constants to make it easier to perform any action.

## Actions

Actions define the way rules change an app’s JSON files. Valid actions are:

-   delete: Delete a node in the document.
-   put: Add a node to an object.
-   set: Set the value of an existing node in the document.
-   add: Add an element to an array
-   eval: Evaluate a specified expression and assign results to a variable.
-   replace: Search and replace a text string globally.

Each action has a path attribute, which is a [JsonPath](http://goessner.net/articles/JsonPath/) that points to a node in the document. JsonPath is to JSON as XPath is to XML. Practice it in the [Jayway JsonPath Evaluator](http://jsonpath.herokuapp.com).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

If a template is updated to change the assetVersion, it can impact the JsonPath. Always test the rules for app creation after a template update.

Actions can be conditionally applied to a document. Set the condition on a set of actions or on a collection of actions.
