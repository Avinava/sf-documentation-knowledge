---
title: "Using Labels"
domain: lightning
topic: using-labels
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.213Z
estimatedTokens: 517
keywords: [Labels, text, presents, user, input, buttons, specify, providing, component, markup, access, stored, outside, code, $Label]
---

# Using Labels

> Labels are text that presents information about the user interface, such as in the header
    (1), input fields (2), or buttons (3). While you can specify labels by providing text values in
    component markup, you can also access labels stored outside your code using the $Label global value provider in expression syntax.

# Using Labels

Labels are text that presents information about the user interface, such as in the header (1), input fields (2), or buttons (3). While you can specify labels by providing text values in component markup, you can also access labels stored outside your code using the $Label global value provider in expression syntax.

![Labels display information about the user interface.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Flabels.png&folder=lightning)

This section discusses how to use the $Label global value provider in these contexts:

-   The label attribute in input components
-   The format() expression function for dynamically populating placeholder values in labels

-   **[Using Custom Labels](atlas.en-us.lightning.meta/lightning/labels_value_provider_platform.htm)**
    Custom labels are custom text values that can be translated into any language that Salesforce supports. To access custom labels in Aura components, use the $Label global value provider.
-   **[Input Component Labels](atlas.en-us.lightning.meta/lightning/labels_overview.htm)**
    A label describes the purpose of an input component. To set a label on an input component, use the label attribute.
-   **[Dynamically Populating Label Parameters](atlas.en-us.lightning.meta/lightning/labels_parameters.htm)**
    Output and update labels using the format() expression function.
-   **[Getting Labels in JavaScript](atlas.en-us.lightning.meta/lightning/labels_dynamic.htm)**
    You can retrieve labels in JavaScript code. Your code performs optimally if the labels are statically defined and sent to the client when the component is loaded.
-   **[Getting Labels in Apex](atlas.en-us.lightning.meta/lightning/labels_apex.htm)**
    You can retrieve label values in Apex code and set them on your component using JavaScript.
-   **[Setting Label Values via a Parent Attribute](atlas.en-us.lightning.meta/lightning/labels_parentcmp.htm)**
    Setting label values via a parent attribute is useful if you want control over labels in child components.

## Related Topics

- Using Custom Labels (atlas.en-us.lightning.meta/lightning/labels_value_provider_platform.htm)
- Input Component Labels (atlas.en-us.lightning.meta/lightning/labels_overview.htm)
- Dynamically Populating Label Parameters (atlas.en-us.lightning.meta/lightning/labels_parameters.htm)
- Getting Labels in JavaScript (atlas.en-us.lightning.meta/lightning/labels_dynamic.htm)
- Getting Labels in Apex (atlas.en-us.lightning.meta/lightning/labels_apex.htm)
- Setting Label Values via a Parent Attribute (atlas.en-us.lightning.meta/lightning/labels_parentcmp.htm)
