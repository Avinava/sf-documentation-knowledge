---
title: "patchManagedContentSpace(contentSpaceId,
      ManagedContentSpaceUpdateInput)"
domain: apex-reference
topic: patchmanagedcontentspacecontentspaceid-managedcontentspaceupdateinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.231Z
keywords: [patchManagedContentSpace, contentSpaceId, ManagedContentSpaceUpdateInput, Update, name, description, managed, content, space., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# patchManagedContentSpace(contentSpaceId,
      ManagedContentSpaceUpdateInput)

> Update the name or description of a managed content space.

### patchManagedContentSpace(contentSpaceId, ManagedContentSpaceUpdateInput)

Update the name or description of a managed content space.

#### API Version

64.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentSpace patchManagedContentSpace(String contentSpaceId, ConnectApi.ManagedContentSpaceUpdateInput ManagedContentSpaceUpdateInput)

#### Parameters

contentSpaceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content space.

ManagedContentSpaceUpdateInput

Type: [ConnectApi.ManagedContentSpaceUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_space_update.htm "Update the name or description of a managed content space.")

ConnectApi.ManagedContentSpaceUpdateInput class with the updated name or description.

#### Return Value

Type: [ConnectApi.ManagedContentSpace](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space.htm "Managed content space.")