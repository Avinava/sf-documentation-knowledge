---
title: "getBuyerGroupIds(request)"
domain: apex-reference
topic: getbuyergroupidsrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.411Z
keywords: [getBuyerGroupIds, request, Retrieves, list, evaluated, buyer, group, IDs, assigned, user, based, custom, predefined, business, logic., Signature, Parameters, Return, Value]
---

# getBuyerGroupIds(request)

> Retrieves a list of evaluated buyer group IDs assigned to a user based on custom or
    predefined business logic.

### getBuyerGroupIds(request)

Retrieves a list of evaluated buyer group IDs assigned to a user based on custom or predefined business logic.

#### Signature

public CommerceBuyGrp.BuyerGroupResponse getBuyerGroupIds(CommerceBuyGrp.BuyerGroupRequest request)

#### Parameters

request

Type: [CommerceBuyGrp.BuyerGroupRequest](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupRequest.htm#apex_class_CommerceBuyGrp_BuyerGroupRequest "Contains methods to retrieve account and store details used to identify the buyer groups associated with a user.")

#### Return Value

Type: CommerceBuyGrp.BuyerGroupResponse[CommerceBuyGrp.BuyerGroupResponse](atlas.en-us.apexref.meta/apexref/apex_class_CommerceBuyGrp_BuyerGroupResponse.htm#apex_class_CommerceBuyGrp_BuyerGroupResponse "Contains constructors and methods to retrieve the buyer groups associated with a user.")