---
title: "replaceManagedContentVariantWithMedia(variantId, ManagedContentVariantInputParam, contentData)"
domain: apex-reference
topic: replacemanagedcontentvariantwithmediavariantid-managedcontentvariantinputparam-c
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.296Z
keywords: [replaceManagedContentVariantWithMedia, variantId, ManagedContentVariantInputParam, contentData, Replace, managed, content, variant, including, data., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# replaceManagedContentVariantWithMedia(variantId, ManagedContentVariantInputParam, contentData)

> Replace a managed content variant, including content data.

### replaceManagedContentVariantWithMedia(variantId, ManagedContentVariantInputParam, contentData)

Replace a managed content variant, including content data.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVariant replaceManagedContentVariantWithMedia(String variantId, ConnectApi.ManagedContentVariantUpdateInput ManagedContentVariantInputParam, ConnectApi.BinaryInput contentData)

#### Parameters

variantId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content variant to replace.

ManagedContentVariantInputParam

Type: [ConnectApi.ManagedContentVariantUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_variant_update.htm "Input representation for replacing a managed content variant.")

A ConnectApi.ManagedContentVariantUpdateInput input class with information about the managed content variant that is replacing the existing variant.

contentData

Type: [ConnectApi.BinaryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

A new binary file to replace the content data of the managed content variant.

#### Return Value

Type: [ConnectApi.ManagedContentVariant](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_variant.htm "Managed content variant.")