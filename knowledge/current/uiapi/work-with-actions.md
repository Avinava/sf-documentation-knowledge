---
title: "Work with Actions"
domain: uiapi
topic: work-with-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.029Z
estimatedTokens: 401
keywords: [Work, Actions, resources, data, metadata, Salesforce, Examples, include, standard, custom, buttons, quick, productivity]
---

# Work with Actions

> Use the Actions resources to get data and metadata about actions
      displayed in the Salesforce UI. Examples include standard and custom buttons, quick actions,
      and productivity actions.

# Work with Actions

Use the Actions resources to get data and metadata about actions displayed in the Salesforce UI. Examples include standard and custom buttons, quick actions, and productivity actions.

You can use the actions endpoints to fetch lists of actions, but not to execute actions. It’s handy to get a list of actions if you want to use quick actions, if you have Visualforce overrides, or if you want to determine CRUD based on visible actions. For example, if a New action exists, then a user can create a record.

Get Actions for a Record Detail Page

As an example, let’s say we have an Account record detail page with a record ID of 001R0000003IDlwIAG. The page has some standard buttons and quick actions. To get information about all the actions on this page, make this request:

```

```

The request returns a list of actions on the page and the URLs of the request and subrequests.

Filter the Action Results

To filter the results returned by the Actions resources, use the following request parameters:

-   actionTypes—The action type.
-   formFactor—The layout display size.
-   sections—The section of the user interface that the action resides in.

For example, to filter a record actions request so that it includes only standard button actions, set the actionTypes parameter to StandardButton.

```

```

#### See Also

-   [Actions](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_actions.htm "Use these resources to get data and metadata about actions displayed in the Salesforce UI. Examples include standard and custom buttons, quick actions, and productivity actions.")

## Code Examples

```
GET /services/data/v66.0/ui-api/actions/record/001R0000003IDlwIAG
```

```
GET /services/data/v41.0/ui-api/actions/record/001R0000003IDlwIAG?actionTypes=StandardButton
```

## Related Topics

- Actions (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_actions.htm)
