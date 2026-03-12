---
title: "Write Efficient Getter Methods"
domain: pages
topic: write-efficient-getter-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.879Z
estimatedTokens: 308
keywords: [Write, Efficient, Getter, Visualforce, requests, evaluate, expressions, action, attributes, calls, form, submission, call, multiple, times]
---

# Write Efficient Getter Methods

> Visualforce requests evaluate expressions, action attributes, and other method calls. A
    request such as a form submission can call the getter methods in a class multiple times. With
    more efficient getter methods, you can prevent unnecessary lookups of the same
    record.

# Write Efficient Getter Methods

Visualforce requests evaluate expressions, action attributes, and other method calls. A request such as a form submission can call the getter methods in a class multiple times. With more efficient getter methods, you can prevent unnecessary lookups of the same record.

To reduce the processing load of each request, cache the value of a property calculation so that additional calls can access the property without recalculating the value.

You can also configure the getter methods in your Apex classes to only query for data if the object is null. For example, the following code snippet returns the Account record associated with the page. On the first method call, the method queries for the record because the MyAccount object is null. On subsequent calls, it returns the object’s stored value, which prevents additional identical SELECT queries:

Account MyAccount; public Account getMyAccount() { if (MyAccount == null) { MyAccount = \[SELECT name, annualRevenue FROM Account WHERE id = :ApexPages.currentPage().getParameters(). get('id')\]; } return MyAccount; }

#### See Also

-   [Defining Getter Methods](atlas.en-us.pages.meta/pages/pages_quick_start_controller_getter_methods.htm)

## Related Topics

- Defining Getter Methods (atlas.en-us.pages.meta/pages/pages_quick_start_controller_getter_methods.htm)
