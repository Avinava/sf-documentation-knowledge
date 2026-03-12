---
title: "$Label.Site"
domain: pages
topic: labelsite
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.383Z
estimatedTokens: 160
keywords: [$Label.Site, merge, standard, Sites, label, Visualforce, labels, label’s, message, displays, according, user’s, language, locale, can’t]
---

# $Label.Site

> A global merge field type used to reference a standard Sites label in a Visualforce
   page. As with all standard labels, the label’s message displays according to the user’s
   language and locale. You can’t modify the message of a standard Sites label. To use a custom
   message, create a custom label, and then reference the label with the $Label
   global variable.

# $Label.Site

A global merge field type used to reference a standard Sites label in a Visualforce page. As with all standard labels, the label’s message displays according to the user’s language and locale. You can’t modify the message of a standard Sites label. To use a custom message, create a custom label, and then reference the label with the $Label global variable.

## Usage

Use this expression in a Visualforce page to access a standard Sites label. When the application server constructs the page to be presented to the end-user’s browser, the value returned depends on the language and locale of the user.

## Example

```

```

## Code Examples

```
<apex:page>
    <apex:pageMessage severity="info" 
        strength="1" 
        summary="{!$Label.Site.temp_password_sent}" 
    />
</apex:page>
```
