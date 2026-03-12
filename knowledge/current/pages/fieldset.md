---
title: "$FieldSet"
domain: pages
topic: fieldset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.378Z
estimatedTokens: 76
keywords: [$FieldSet, access, defined, organization, Usage]
---

# $FieldSet

> Provides access to a field set defined in your organization.

# $FieldSet

Provides access to a field set defined in your organization.

## Usage

Use this in your Visualforce pages to dynamically iterate over fields in a field set. You must prefix this global variable with a reference to the standard or custom object that has the field set.

## Example

```

```

## Code Examples

```
<apex:page standardController="Account">
    <apex:repeat value="{!$ObjectType.Account.FieldSets.myFieldSetName}" var="field">
        <apex:outputText value="{!field}" />
    </apex:repeat>
</apex:page>
```
