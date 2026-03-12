---
title: "Payment Sequencing"
domain: order-management-developer-guide-html
topic: payment-sequencing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.152Z
estimatedTokens: 3311
keywords: [Payment, Sequencing, ensuring, funds, refunds, orders, include, multiple, control, sequence, apply, amounts, order, partially, paid]
---

# Payment Sequencing

> When ensuring funds or refunds for orders that include multiple payment methods, you
    can control the sequence in which to apply the amounts to payment methods. For example, if an
    order is partially paid with a gift card, you can refund the gift card first, regardless of how
    the payment amounts were originally distributed. Or, if the order is modified between when
    different fulfillment groups are fulfilled, you can capture the partial payment amount from the
    gift card first if a future order fulfillment is canceled and preserve the full gift card
    amount. The default logic is based on matching amounts to OrderPaymentSummary
    amounts.

# Payment Sequencing

When ensuring funds or refunds for orders that include multiple payment methods, you can control the sequence in which to apply the amounts to payment methods. For example, if an order is partially paid with a gift card, you can refund the gift card first, regardless of how the payment amounts were originally distributed. Or, if the order is modified between when different fulfillment groups are fulfilled, you can capture the partial payment amount from the gift card first if a future order fulfillment is canceled and preserve the full gift card amount. The default logic is based on matching amounts to OrderPaymentSummary amounts.

## Default Payment Sequence to Ensure Funds

When you call Ensure Funds without specifying a sequence of OrderPaymentSummaries, it distributes the funds between the Order PaymentSummaries belonging to the OrderSummary according to this logic. However, if multiple order payment summaries have equal BalanceAmount values, their order of selection is random.

-   Examine the invoice and ensure it doesn’t exceed the total BalanceAmount of all the order payment summaries associated with the order summary. If the BalanceAmount is equal to the invoice balance, apply the funds from the order payment summary to the invoice.
    -   If no exact match is found, apply funds from the order payment summary with the largest BalanceAmount to the invoice.
-   If the invoice still has a balance, repeat step 1 until no captured funds remain.
    -   If the invoice still has a balance and there’s an order payment summary with an authorized amount equal to the remaining invoice balance, then capture and apply the funds from that order payment summary to the rest of the invoice balance.
    -   If no exact match is found, capture and apply funds from the order payment summary with the largest authorized amount.
-   If the invoice still has a balance, repeat step 2 until the full invoice balance is ensured.

## Default Payment Sequence to Ensure Refunds

When you call Ensure Refunds without specifying a sequence of OrderPaymentSummaries, it distributes the refund between the OrderPaymentSummaries belonging to the OrderSummary according to this logic. However, if multiple OrderPaymentSummaries have equal amounts, their selection order is random.

-   If a credit memo is specified, identify OrderPaymentSummaries with captured amounts that were applied to the corresponding invoice.
    -   Examine the OrderPaymentSummaries. If one has a captured amount matching the credit memo amount, apply the refund to that payment.
    -   If no exact match is found, look for OrderPaymentSummaries with captured amounts greater than the credit memo amount. If any exist, apply the refund to the smallest.
    -   If no greater amounts are found, traverse the OrderPaymentSummaries in order of captured amount, from largest to smallest. Apply the refund to them until it’s fully applied.
-   If an excess funds amount is specified, identify OrderPaymentSummaries with captured amounts that weren’t applied to any invoice.
    -   Examine the OrderPaymentSummaries. If one has a captured amount matching the excess funds amount, apply the refund to that payment.
    -   If no exact match is found, look for OrderPaymentSummaries with captured amounts greater than the excess funds amount. If any exist, apply the refund to the smallest.
    -   If no greater amounts are found, traverse the OrderPaymentSummaries in order of captured amount, from largest to smallest. Apply the refund to them until it’s fully applied.

## Specify the Sequence of OrderPaymentSummaries

When you call Ensure Funds or Ensure Refunds, you can sequence the distribution of the amounts by including the isAllowPartial and sequences values.

isAllowPartial

Controls what happens when the distributed amounts that you specify don’t cover the full amount. If the value is true, the remaining amount is skipped. If it belongs to a credit memo, it remains on the credit memo. If the value is false, the default logic is applied to the remaining amount.

sequences

An ordered list of paired amounts and OrderPaymentSummaries. Each amount is funded or refunded to the OrderPaymentSummary paired with it. The process traverses this list in order and stops when it has funded or refunded the full amount.

## Custom Default Sequence Apex Example to Ensure Funds

You can implement your own default payment sequence by wrapping Ensure Funds in code that generates the isAllowPartial and sequences values. Here’s an example by using Apex that tries to fund from DigitalWallet payment methods before any other payment type.

-   Collect all OrderPaymentSummaries associated with the OrderSummary. Identify the payment type by using the record ID’s key prefix.
-   Fund $10 from each OrderPaymentSummary that’s a DigitalWallet until the full amount is fulfilled.
-   If an amount remains, fund it according to the default logic.

    You can customize which payment type to fund from first by changing the amount associated with each type’s key prefix. Because the list is ordered, you can, for example, fund $10 from each DigitalWallet, then $10 from each CardPaymentMethod, and then apply the default logic to any remaining amount.


public class CreateSequenceOPSEnsureFundsInvocable { @InvocableMethod(label='Ensure Funds with Sequence OrderPaymentSummaries') public static void createSequenceOrderPaymentSummaryList(List<String> invoiceIds) { // DigitalWallet Key Prefix: 1DW // CardPaymentMethod Key Prefix: 03O // AlternativePaymentMethod Key Prefix: 8Z7 Map<String, Double> sequencePrefixAndAmounts= new Map<String, Double>(); sequencePrefixAndAmounts.put('1DW', 10.0); sequencePrefixAndAmounts.put('03O', 0.0); sequencePrefixAndAmounts.put('8Z7', 0.0); // Set is allowed partial to true/false Boolean isAllowPartial = true; Map<String, Double> sequenceOPSAndAmounts = new Map<String, Double>(); ConnectApi.EnsureFundsAsyncInputRepresentation ensureFundsInput = new ConnectApi.EnsureFundsAsyncInputRepresentation(); ensureFundsInput.invoiceId = invoiceIds.get(0); ensureFundsInput.sequences = new List<ConnectApi.SequenceOrderPaymentSummaryInputRepresentation>(); ensureFundsInput.isAllowPartial = isAllowPartial; // Get the Id and ReferenceEntityID (OrderSummaryID) From the Invoice Invoice inv = \[SELECT Id, ReferenceEntity.Id FROM Invoice WHERE Id = :invoiceIds Limit 1\]; string orderSummaryId = inv.ReferenceEntityId; // Get list of OrderPaymentSummaries from the orderSummaryID List<OrderPaymentSummary> orderPaymentSummaries = \[SELECT Id, PaymentMethod.Id, Type FROM OrderPaymentSummary WHERE OrderSummary.Id = :orderSummaryId\]; Map<Id, OrderPaymentSummary> orderPaymentSummariesMap = new Map<Id, OrderPaymentSummary>(orderPaymentSummaries); //Loop through the sequence of payment methods prefixes for(String keyPrefix: sequencePrefixAndAmounts.keySet()){ // Loop through orderPaymentSummaries creating a map of sequence for(OrderPaymentSummary ops: orderPaymentSummaries){ string paymentMethodId = ops.PaymentMethod.Id; if(paymentMethodId.startsWith(keyPrefix)){ sequenceOPSAndAmounts.put(ops.Id, sequencePrefixAndAmounts.get(keyPrefix)); orderPaymentSummariesMap.remove(ops.Id); } } } // Create the list of sequences to add to EnsureFundsAsync input for(String orderPaymentSummarySequence: sequenceOPSAndAmounts.keySet()){ ConnectApi.SequenceOrderPaymentSummaryInputRepresentation request = new ConnectApi.SequenceOrderPaymentSummaryInputRepresentation(); request.amount = sequenceOPSAndAmounts.get(orderPaymentSummarySequence); request.orderPaymentSummaryId = orderPaymentSummarySequence; ensureFundsInput.sequences.add(request); } ConnectApi.EnsureFundsAsyncOutputRepresentation result = ConnectApi.OrderSummary.ensureFundsAsync(orderSummaryId, ensureFundsInput); } }

## Custom Default Sequence Apex Example to Ensure Refunds

You can implement your own default payment sequence by wrapping Ensure Refunds in code that generates the isAllowPartial and sequences values. Here’s an example using Apex that tries to refund to DigitalWallet payment methods before any other payment type.

-   Collect all OrderPaymentSummaries associated with the OrderSummary. Identify the payment type using the record ID’s key prefix.
-   Refund $10 to each OrderPaymentSummary that’s a DigitalWallet until the full amount has been refunded.
-   If an amount remains, refund it according to the default logic.

You can customize which payment type to refund first by changing the amount associated with each type’s key prefix. Because the list is ordered, you could, for example, refund $10 to each DigitalWallet, then $10 to each CardPaymentMethod, and then apply the default logic to any remaining amount.

public class CreateSequenceOPSRefundsInvocable { @InvocableMethod(label='EnsureRefunds with Sequenced OrderPaymentSummaries') public static void createSequenceOrderPaymentSummaryList(List<String> creditMemoIds) { // When applying refunds, prefer DigitalWallets // DigitalWallet Key Prefix: 1DW // CardPaymentMethod Key Prefix: 03O // AlternativePaymentMethod Key Prefix: 8Z7 Map<String, Double> sequencePrefixAndAmounts= new Map<String, Double>(); sequencePrefixAndAmounts.put('1DW', 10.0); sequencePrefixAndAmounts.put('03O', 0.0); sequencePrefixAndAmounts.put('8Z7', 0.0); // Always disallow partial refunds -- if the sequence doesn't cover the full refund, then apply the default logic to the remaining amount Boolean isAllowPartial = false; Map<String, Double> sequenceOPSAndAmounts = new Map<String, Double>(); ConnectApi.EnsureRefundsAsyncInputRepresentation ensureRefundsInput = new ConnectApi.EnsureRefundsAsyncInputRepresentation(); ensureRefundsInput.creditMemoId = creditMemoIds.get(0); ensureRefundsInput.sequences = new List<ConnectApi.SequenceOrderPaymentSummaryInputRepresentation>(); ensureRefundsInput.isAllowPartial = isAllowPartial; // Get the Id and ReferenceEntityID (OrderSummaryID) From the Credit Memo CreditMemo cm = \[SELECT Id, ReferenceEntity.Id FROM CreditMemo WHERE Id = :creditMemoIds Limit 1\]; string orderSummaryId = cm.ReferenceEntityId; // Get list of OrderPaymentSummaries from the orderSummaryID List<OrderPaymentSummary> orderPaymentSummaries = \[SELECT Id, PaymentMethod.Id, Type FROM OrderPaymentSummary WHERE OrderSummary.Id = :orderSummaryId\]; Map<Id, OrderPaymentSummary> orderPaymentSummariesMap = new Map<Id, OrderPaymentSummary>(orderPaymentSummaries); //Loop through the sequence of payment methods prefixes for(String keyPrefix: sequencePrefixAndAmounts.keySet()){ // Loop through orderPaymentSummaries creating a map of sequence for(OrderPaymentSummary ops: orderPaymentSummaries){ string paymentMethodId = ops.PaymentMethod.Id; if(paymentMethodId.startsWith(keyPrefix)){ sequenceOPSAndAmounts.put(ops.Id, sequencePrefixAndAmounts.get(keyPrefix)); orderPaymentSummariesMap.remove(ops.Id); } } } // Create the sequence list and add it to the EnsureRefundsAsync input for(String orderPaymentSummarySequence: sequenceOPSAndAmounts.keySet()){ ConnectApi.SequenceOrderPaymentSummaryInputRepresentation request = new ConnectApi.SequenceOrderPaymentSummaryInputRepresentation(); request.amount = sequenceOPSAndAmounts.get(orderPaymentSummarySequence); request.orderPaymentSummaryId = orderPaymentSummarySequence; ensureRefundsInput.sequences.add(request); } ConnectApi.EnsureRefundsAsyncOutputRepresentation result = ConnectApi.OrderSummary.ensureRefundsAsync(orderSummaryId, ensureRefundsInput); } }

## Ensure Funds Payment Sequencing Edge Cases

The rollout of Payment Sequencing for Ensure Funds in Spring ‘26 introduced a few unexpected customer behaviors, but these behaviors are expected by design. Review these scenarios in case you encounter them when using Ensure Funds.

-   **Zero amount and unspecified amounts provided for order payment summary result in same behavior**. Providing zero is treated the same as not specifying an amount. If you provide zero as an amount for any Order Payment Summary in a sequence, Ensure Funds interprets this as if no amount is specified. Thus, the system attempts to take as many available funds as possible instead of strictly applying zero funds.
-   **Reserved balance amount doesn’t respect sequencing or amount limits.** This is expected behavior as the reserved balance amount is exclusively tied to the order payment summary’s order summary and is applied in full before other sources. Other order summaries can’t use this reserved portion of funds and this reserved portion is consumed first, regardless of your provided sequence or amount limits.
-   **Sequence not strictly reflected when isAllowPartial = false.** This is expected behavior. If a sequence is provided and isAllowPartial is set to false, the system first tries to apply funds according to the sequence. If the funds are insufficient, it falls back to the default strategy. The system ensures the correct final funded amount. The sequence on the invoice page may not exactly match the input sequence.
-   **Amount parameter limits pre-captured and available to capture funds.** This is expected behavior. The amount parameter is treated as a total cap across both pre-captured and available to capture funds for the order payment summary.
