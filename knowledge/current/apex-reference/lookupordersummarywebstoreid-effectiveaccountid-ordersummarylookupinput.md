---
title: "lookupOrderSummary(webstoreId, effectiveAccountId,
      orderSummaryLookupInput)"
domain: apex-reference
topic: lookupordersummarywebstoreid-effectiveaccountid-ordersummarylookupinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [lookupOrderSummary, webstoreId, effectiveAccountId, orderSummaryLookupInput, Look, details, order, summary, guest, shopper, registered, buyer, effective, account, ID., Developer, Preview, API, Version, Note]
---

# lookupOrderSummary(webstoreId, effectiveAccountId,
      orderSummaryLookupInput)

> Look up details about an order summary for a guest shopper or a
      registered buyer using the effective account ID.

### lookupOrderSummary(webstoreId, effectiveAccountId, orderSummaryLookupInput) (Developer Preview)

Look up details about an order summary for a guest shopper or a registered buyer using the effective account ID.

#### API Version

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This API is available as a developer preview. It isn’t generally available unless or until Salesforce announces its general availability in documentation or in press releases or public statements. All commands, parameters, and other features are subject to change or deprecation at any time, with or without notice. Don't implement functionality developed with these commands or tools.

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryLookupOutput lookupOrderSummary(String webstoreId, String effectiveAccountId, ConnectApi.OrderSummaryLookupInput orderSummaryLookupInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user or, for guest users, the guest buyer profile ID of the current store.

orderSummaryLookupInput

Type: [ConnectApi.OrderSummaryLookupInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_summary_lookup.htm "Order summary lookup input.")

Order summary lookup input representation.

#### Return Value

Type: [ConnectApi.OrderSummaryLookupOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_lookup_output.htm "Order summary lookup output.")