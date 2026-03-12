---
title: "Using Custom Labels"
domain: lightning
topic: using-custom-labels
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.226Z
estimatedTokens: 505
keywords: [Custom, Labels, text, translated, any, language, Salesforce, supports, access, Aura, components, $Label, provider]
---

# Using Custom Labels

> Custom labels are custom text values that can be translated into any language that
        Salesforce  supports. To access custom labels in Aura components, use the $Label global value provider.

# Using Custom Labels

Custom labels are custom text values that can be translated into any language that Salesforce supports. To access custom labels in Aura components, use the $Label global value provider.

Custom labels enable developers to create multilingual applications by automatically presenting information (for example, help text or error messages) in a user's native language.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Label translations require the Translation Workbench is enabled.

To create custom labels, from Setup, enter Custom Labels in the Quick Find box, then select **Custom Labels**.

Use the following syntax to access custom labels in Aura components.

-   $Label.c.labelName for the default namespace
-   $Label.namespace.labelName if your org has a namespace, or to access a label in a managed package

You can reference custom labels in component markup and in JavaScript code. Here are some examples.

Label in a markup expression using the default namespace

{!$Label.c.labelName}

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Label expressions in markup are supported in .cmp and .app resources only.

Label in JavaScript code if your org has a namespace

$A.get("$Label.namespace.labelName")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Updates to a label locale or translation are not immediately in the application. To verify the change immediately, log out and in.

#### See Also

-   [Value Providers](atlas.en-us.lightning.meta/lightning/expr_source.htm "Value providers are a way to access data. Value providers encapsulate related values together, similar to how an object encapsulates properties and methods.")

-   [*Salesforce Help*: Translate Custom Labels](https://help.salesforce.com/articleView?id=cl_translate_edit.htm&language=en_US "Salesforce Help: Translate Custom
    Labels - HTML (New Window)")

## Related Topics

- Value Providers (atlas.en-us.lightning.meta/lightning/expr_source.htm)
