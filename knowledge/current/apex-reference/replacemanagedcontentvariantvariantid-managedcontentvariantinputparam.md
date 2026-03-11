---
title: "replaceManagedContentVariant(variantId, ManagedContentVariantInputParam)"
domain: apex-reference
topic: replacemanagedcontentvariantvariantid-managedcontentvariantinputparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.295Z
keywords: [replaceManagedContentVariant, variantId, ManagedContentVariantInputParam, Replace, managed, content, variant., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# replaceManagedContentVariant(variantId, ManagedContentVariantInputParam)

> Replace a managed content variant.

### replaceManagedContentVariant(variantId, ManagedContentVariantInputParam)

Replace a managed content variant.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentVariant replaceManagedContentVariant(String variantId, ConnectApi.ManagedContentVariantUpdateInput ManagedContentVariantInputParam)

#### Parameters

variantId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content variant to replace.

ManagedContentVariantInputParam

Type: [ConnectApi.ManagedContentVariantUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_variant_update.htm "Input representation for replacing a managed content variant.")

A ConnectApi.ManagedContentVariantUpdateInput input class with information about the managed content variant that is replacing the existing variant.

#### Return Value

Type: [ConnectApi.ManagedContentVariant](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_variant.htm "Managed content variant.")