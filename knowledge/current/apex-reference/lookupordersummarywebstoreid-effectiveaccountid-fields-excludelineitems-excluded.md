---
title: "lookupOrderSummary(webstoreId, effectiveAccountId, fields,
      excludeLineItems, excludeDeliveryGroups, excludeAdjustmentAggregates, excludeAdjustments,
      deliveryGroupId, orderSummaryLookupInput)"
domain: apex-reference
topic: lookupordersummarywebstoreid-effectiveaccountid-fields-excludelineitems-excluded
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [lookupOrderSummary, webstoreId, effectiveAccountId, fields, excludeLineItems, excludeDeliveryGroups, excludeAdjustmentAggregates, excludeAdjustments, deliveryGroupId, orderSummaryLookupInput, Look, details, order, summary, guest, shopper, registered, buyer, effective, account]
---

# lookupOrderSummary(webstoreId, effectiveAccountId, fields,
      excludeLineItems, excludeDeliveryGroups, excludeAdjustmentAggregates, excludeAdjustments,
      deliveryGroupId, orderSummaryLookupInput)

> Look up details about an order summary for a guest shopper or a
      registered buyer using the effective account ID, requested fields, line items, delivery
      groups, adjustments aggregates, and adjustments.

### lookupOrderSummary(webstoreId, effectiveAccountId, fields, excludeLineItems, excludeDeliveryGroups, excludeAdjustmentAggregates, excludeAdjustments, deliveryGroupId, orderSummaryLookupInput) (Developer Preview)

Look up details about an order summary for a guest shopper or a registered buyer using the effective account ID, requested fields, line items, delivery groups, adjustments aggregates, and adjustments.

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

public static ConnectApi.OrderSummaryLookupOutput lookupOrderSummary(String webstoreId, String effectiveAccountId, List<String\> fields, Boolean excludeLineItems, Boolean excludeDeliveryGroups, Boolean excludeAdjustmentAggregates, Boolean excludeAdjustments, String deliveryGroupId, ConnectApi.OrderSummaryLookupInput orderSummaryLookupInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user or, for guest users, the guest buyer profile ID of the current store.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of specific fields, including custom fields, to return in the response along with default fields. For example, OrderSummary.TotalAmount, OrderItemSummary.Quantity, Product2.Description, OrderDeliveryGroupSummary.GrandTotalAmount, OrderDeliveryMethod.Carrier.

excludeLineItems

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to exclude line items from the response. If unspecified, the default value is false.

excludeDeliveryGroups

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to exclude delivery groups from the response. If unspecified, the default value is false.

excludeAdjustmentAggregates

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to exclude adjustment aggregates associated with an order summary. Adjustment aggregates include fields detailing promotional amounts by price, tax, and total. Aggregates are calculated asynchronously and results returned to the order summary. If unspecified, the default value is false.

excludeAdjustments

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to exclude adjustments associated with an order summary. Adjustments include promotional discounts. If unspecified, the default value is false.

deliveryGroupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the delivery group associated with the order summary.

orderSummaryLookupInput

Type: [ConnectApi.OrderSummaryLookupInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_summary_lookup.htm "Order summary lookup input.")

Order summary lookup input representation.

#### Return Value

Type: [ConnectApi.OrderSummaryLookupOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_lookup_output.htm "Order summary lookup output.")