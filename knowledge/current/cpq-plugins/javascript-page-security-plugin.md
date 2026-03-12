---
title: "Javascript Page Security Plugin"
domain: cpq-plugins
topic: javascript-page-security-plugin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.966Z
estimatedTokens: 1408
keywords: [Javascript, Security, Plugin, functions, control, visibility, editability, CPQ, quotes]
---

# Javascript Page Security Plugin

> Use Javascript functions to control field visibility and editability on your CPQ
  quotes.

# Javascript Page Security Plugin

Use Javascript functions to control field visibility and editability on your CPQ quotes.

| Available in: Salesforce CPQ Summer '15 and later |
| --- |


The Javascript Page Security plugin supports four functions. The functions isFieldVisible and isFieldEditable are available starting in Salesforce CPQ Summer '15 and control quote line field visibility and editability. The functions isFieldVisibleForObject and isFieldEditableForObject are available starting in Salesforce CPQ Summer '19 and can control field visibility and editability for both quote fields and quote line fields. When a method using one of these functions returns False, Salesforce CPQ locks or hides the chosen fields. The fields are unchanged if the method returns Null or True.

Because isFieldVisibleForObject and isFieldEditableForObject can accept a quote or quote line, we recommend naming your object parameter quoteOrLine.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_plugins)

#### Note

-   Salesforce CPQ prioritizes field-level security over page security plugins. If a field is read-only and an editability function for that field returns True, the field remains read-only.
-   Use the page security plugin only for hiding, showing, and adjusting the editability of fields. If you want change field values, use the [Javascript Quote Calculator Plugin](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_parent.htm "Add extra functionality to the quote line editor in Salesforce CPQ with custom JavaScript code. Seven available methods allow you to change how calculations are performed and manage page-level security such as field visibility.").
-   The quote line editor shows blank empty spaces for quote line drawer fields hidden by the page security plugin. To remove these spaces, go to Salesforce CPQ line editor package settings and select **Enable Compact Mode**.

To create a page security plugin, define your code in a custom script record and then reference that record's name in the Quote Calculator Plugin field within Salesforce CPQ Plugin package settings. If you’re already using a quote calculator plugin in that field, you can add your page security plugin code to the calculator plugin’s custom script record.

| Parameter | Type | Definition |
| --- | --- | --- |
| fieldname | string | If isFieldVisible returns False, this quote line field is hidden. |
| line | SObject | The quote line object |
| conn | Object | Methods access jsforce through the optional parameter conn. |

| Parameter | Type | Definition |
| --- | --- | --- |
| fieldname | string | If isFieldEditable returns False, this quote line field is locked from edits. |
| line | SObject | The quote line object |
| conn | Object | Methods access jsforce through the optional parameter conn. |

| Parameter | Type | Definition |
| --- | --- | --- |
| fieldName | String | A field on the quote or quote line. If isFieldVisibleForObject returns False, this field is hidden. |
| quoteOrLine | SObject | The object containing the field that you're evaluating to determine whether fieldName is visible. Can be a quote or a quote line. |
| conn | Object | Methods access jsforce through the optional parameter conn. |
| objectName | String | The object that contains fieldName. If quoteOrLine is evaluating a quote, use Quote__c. If quoteOrLine is evaluating a quote line, use QuoteLine__c. Leave this parameter undefined to target the same field on the quote and the quote line. |

| Parameter | Type | Definition |
| --- | --- | --- |
| fieldName | String | A field on the quote or quote line. If isFieldEditableForObject returns False, this field is locked from edits. |
| quoteOrLine | SObject | The object containing the field that you're evaluating to determine whether fieldName is editable. Can be a quote or a quote line. |
| conn | Object | Methods access jsforce through the optional parameter conn. |
| objectName | String | The object that contains fieldName. If quoteOrLine is evaluating a quote, use Quote__c. If quoteOrLine is evaluating a quote line, use QuoteLine__c. Leave this parameter undefined to target the same field on the quote and the quote line. |

We strongly recommend that users on Salesforce CPQ Summer '19 and later use the new functions given their improved flexibility. If your plugin uses pre-Summer '19 functions with isFieldEditableForObject or isFieldVisibleForObject functions that use the line parameter, Salesforce CPQ ignores the new functions and uses the old functions instead.

To specify whether your changes apply to a field on the quote or on the quote line, use an if statement for your objectName in the isFieldVisibleForObject or isFieldEditableForObject code block. For example, in the following code segment, we're targeting the Markup Rate field on the quote.

```

```

However, the following code segment targets Markup Rate on both the quote and the quote line.

```

```

## Example

In this example, if a quote's Customer Discount is greater than 10%, we lock the quote's Markup Rate field from edits.

```

```

## Example

In this example, if a quote line's Distributor Discount is greater than 10%, we hide the quote line's Markup Rate field.

```

```

## Example

One function can also evaluate and act on quote and quote line fields at the same time, including twin fields. In this example, if a quote's Customer Discount is greater than 10%, we lock the quote's Markup Rate field from edits. If the quote line's Distributor Discount is greater than 10%, we hide the quote line's Markup Rate field.

## Example

```

```

## Code Examples

```
export function isFieldEditableForObject(fieldName, quoteOrLine, conn, objectName){
  if (objectName === 'Quote__c' && fieldName === 'SBQQ__MarkupRate__c')
```

```
export function isFieldEditableForObject(fieldName, quoteOrLine, conn, objectName){
  if fieldName === 'SBQQ__MarkupRate__c'
```

```
export function isFieldEditableForObject(fieldName, quoteOrLine, conn, objectName){
  if (objectName === 'Quote__c' && fieldName === 'SBQQ__MarkupRate__c') {
     if (quoteOrLine.SBQQ__CustomerDiscount__c > 10) {
       return false;
  }
 }
}
```

```
export function isFieldVisibleForObject(fieldName, quoteOrline, conn, objectName){
  if (objectName === 'QuoteLine__c' && fieldName === 'SBQQ__MarkupRate__c') {
     if (quoteOrLine.SBQQ__CustomerDiscount__c > 10) {
       return false;
   }
 }
}
```

```
export function isFieldEditableForObject(fieldName, quoteOrLine, conn, objectName){
  if (objectName === 'Quote__c' && fieldName === 'SBQQ__MarkupRate__c') {
    if (quoteOrLine.SBQQ__CustomerDiscount__c > 10) {
       return false;
  }
}

if (objectName === 'QuoteLine__c' && fieldName === 'SBQQ__MarkupRate__c') {
  if (quoteOrLine.SBQQ__DistributorDiscount__c > 10) {

       return false;
  }
 }
}
```

## Related Topics

- Javascript Quote Calculator Plugin (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_parent.htm)
