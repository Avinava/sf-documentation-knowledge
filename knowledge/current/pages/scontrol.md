---
title: "$SControl"
domain: pages
topic: scontrol
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.431Z
estimatedTokens: 205
keywords: [$SControl, merge, referencing, custom, s-control, results, URL, executes, Usage]
---

# $SControl

> A global merge field type to use when referencing an existing custom s-control by name.
        This merge field type results in a URL to a page where the s-control executes.

# $SControl

A global merge field type to use when referencing an existing custom s-control by name. This merge field type results in a URL to a page where the s-control executes.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Visualforce pages supersede s-controls. Organizations that haven't previously used s-controls can’t create them. Existing s-controls are unaffected and can still be edited.

## Usage

Use dot notation to access an existing s-control by its name.

## Example

The following example shows how to link to an s-control named HelloWorld in a Visualforce page:

```

```

Note that if you simply want to embed an s-control in a page, you can use the <apex:scontrol\> tag without the $SControl merge field. For example:

```

```

## Code Examples

```
<apex:page>
<apex:outputLink 
    value="{!$SControl.HelloWorld}">Open the HelloWorld s-control</apex:outputLink>
</apex:page>
```

```
<apex:page>
    <apex:scontrol controlName="HelloWorld" />
</apex:page>
```
