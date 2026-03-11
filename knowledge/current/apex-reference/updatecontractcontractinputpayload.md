---
title: "updateContract(contractInputPayload)"
domain: apex-reference
topic: updatecontractcontractinputpayload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.488Z
keywords: [updateContract, contractInputPayload, Update, contracts, object, ID., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateContract(contractInputPayload)

> Update contracts using the object ID.

### updateContract(contractInputPayload)

Update contracts using the object ID.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ContractOutputRepresentation updateContract(ConnectApi.ContractInputRepresentation contractInputPayload)

#### Parameters

contractInputPayload

Type: [ConnectApi.ContractInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_contract.htm "Input to create and update contract.")

Input payload to update contract.

#### Return Value

Type: [ConnectApi.ContractOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_contract_output_response.htm "Contract list.")