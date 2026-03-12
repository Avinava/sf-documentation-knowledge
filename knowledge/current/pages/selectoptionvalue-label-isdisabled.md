---
title: "SelectOption(value, label, isDisabled)"
domain: pages
topic: selectoptionvalue-label-isdisabled
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.704Z
estimatedTokens: 139
keywords: [SelectOption, label, isDisabled, Creates, new, instance, disabled, setting]
---

# SelectOption(value, label, isDisabled)

> Creates a new instance of the SelectOption class using the specified value, label, and
disabled setting.

# SelectOption(value, label, isDisabled)

Creates a new instance of the SelectOption class using the specified value, label, and disabled setting.

## Signature

public SelectOption(String value, String label, Boolean isDisabled)

## Parameters

value

Type: String

The string that is returned to the Visualforce controller if the option is selected by a user.

label

Type: String

The string that is displayed to the user as the option choice.

isDisabled

Type: Boolean

If set to true, the option can’t be selected by the user but can still be viewed.
