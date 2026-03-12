---
title: "Create Reports with Custom Apex Filter"
domain: cgcloud-rtr-dev-guide
topic: create-reports-with-custom-apex-filter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.453Z
estimatedTokens: 511
keywords: [Reports, Custom, Apex, Filter, Along, standard, filters, define, attributes, Promotion, Report, Configuration, Sample, Code]
---

# Create Reports with Custom Apex Filter

> Along with standard filters, you can also define custom Apex filters that reference the
    attributes of the Promotion object.

# Create Reports with Custom Apex Filter

Along with standard filters, you can also define custom Apex filters that reference the attributes of the Promotion object.

Core examples are filtering by the promotion type and phase of the promotion. A custom example is linking one promotion to one specific event.

With that, the main benefit of a custom Apex filter is to offer the opportunity to filter promotions by promotion attributes that aren’t covered by standard filters. In addition to that, if all the values of the standard filter aren’t visible, you can limit the available filter values of a promotion attribute for a specific real-time report.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cgcloud_rtr_dev_guide)

#### Note

Custom Apex filters work only with single-select picklists, not with multi-select picklists.

## Report Configuration

In the report configuration, ensure that you define the custom Apex filters in the same section as standard filters.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cgcloud_rtr_dev_guide)

#### Note

You can't use a standard and custom filter with the same name (for example, promo\_templatesfid) in the same report configuration.

## Sample Code

```

```

Here, method is the name of a parameter. This parameter is the Developer\_Name\_\_c field of a metadata type record.

However, you can also write a filter without parameters and discard the method line and modify the Apex code accordingly.

## Apex Class

To implement the new filter logic, create an Apex class. You can construct the code for all Apex filters as specified here:

1.  Implement System.Callable.
2.  Retrieve the user's sales organization for later use.
3.  Define the custom logic that returns a map with values.
4.  Define a public object call that the report always initially calls. When the public object is called, it calls the method with the custom logic and passes a string parameter (based on the value of method in the report configuration).

## Code Examples

```
{
"type": "singleselect",
"label": "Promotion Type",
"name": "promo_templatesfid",
"source": {
"class": "TPM_RTRPromoTypeFilter_AMS",
"method": "Event"
},
"defaultValue": "<<FIRST_VALUE>>"
```
