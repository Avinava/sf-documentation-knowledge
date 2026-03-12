---
title: "getFilterId()"
domain: pages
topic: getfilterid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.568Z
estimatedTokens: 277
keywords: [getFilterId, filter, currently, context]
---

# getFilterId()

> Returns the ID of the filter that is currently in context.

# getFilterId()

Returns the ID of the filter that is currently in context.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The getFilterID() method doesn’t support list views without filter IDs, such as the Recently Viewed list view. In these cases, the method returns the first filter ID of the object’s available list views. If called within an <apex:enhancedList> component, the method returns the filter ID of the last used list view.

## Signature

public String getFilterId()

## Return Value

Type: String

#### See Also

-   [Standard List Controller Actions](atlas.en-us.pages.meta/pages/pages_controller_sosc_actions.htm "Standard list controllers support action methods. Action methods perform logic or navigation when a page event occurs, such as when a user clicks a button or hovers over an area of the page.")

-   [List Views with Standard List Controllers](atlas.en-us.pages.meta/pages/pages_controller_sosc_list_views.htm "To display a filtered list of records on a Visualforce page, associate the page with a standard list controller.")

## Related Topics

- Standard List Controller Actions (atlas.en-us.pages.meta/pages/pages_controller_sosc_actions.htm)
- List Views with Standard List Controllers (atlas.en-us.pages.meta/pages/pages_controller_sosc_list_views.htm)
