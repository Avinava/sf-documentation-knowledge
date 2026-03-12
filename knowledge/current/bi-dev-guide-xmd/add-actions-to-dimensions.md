---
title: "Add Actions to Dimensions"
domain: bi-dev-guide-xmd
topic: add-actions-to-dimensions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.744Z
estimatedTokens: 1792
keywords: [Add, Actions, Dimensions, record-level, dimension, dashboard, viewers, perform, directly, CRM, Analytics, chart, action, Salesforce, record]
---

# Add Actions to Dimensions

> Set up record-level actions on a dimension so that dashboard viewers can perform actions
    directly from a CRM Analytics chart or table. Each action applies to a single Salesforce record,
    such as creating a task for an opportunity record. You can also create an action to open the
    Salesforce record or a URL.

# Add Actions to Dimensions

Set up record-level actions on a dimension so that dashboard viewers can perform actions directly from a CRM Analytics chart or table. Each action applies to a single Salesforce record, such as creating a task for an opportunity record. You can also create an action to open the Salesforce record or a URL.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=bi_dev_guide_xmd)

#### Important

Salesforce recommends that you set up actions using the UI because it’s easier. For information about setting up actions with clicks, not code, see [Perform Actions on a Salesforce Record from CRM Analytics](https://help.salesforce.com/articleView?id=bi_dashboards_actions_configure.htm&language=en_US).

## Open a Salesforce Record

You can add a link in the action menu to open a Salesforce record directly from CRM Analytics charts and tables. The link name appears as Open Record. To let the dashboard viewer know the purpose of the link, add a tooltip that appears when the user hovers over the link.

![The Open Record link appears in the action menu for each account.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_actions_open_sfdc_record.png&folder=bi_dev_guide_xmd)

CRM Analytics determines which record to open based on the Salesforce ID provided in the dataset field. When a user tries to open the record and multiple Salesforce records apply to the selected dimension, a popup asks which record to open. For example, the chart shows the value for all opportunities for each account. When the user tries to open the opportunity record for an account and the account has multiple opportunities, the user is prompted to select one. To help the user choose the correct record, the dataset fields show the opportunity name, account name, and owner for each opportunity.

![The dialog shows you information about each opportunity and asks you to pick a record.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_actions_multimatch_show_dataset_fields.png&folder=bi_dev_guide_xmd)

The bold text in the XMD example shows how to set up this type of action.

```

```

## Open a Salesforce Record in a Multi-Org Environment

You can configure the action menu in a chart or table to open Salesforce records from multiple orgs. Before we get into how to configure the XMD, let’s look at an example.

You previously loaded opportunity records from multiple orgs into a dataset.

![One opportunity from each of four orgs is loaded into the dataset.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_dataset_load_from_sfdc_orgs.png&folder=bi_dev_guide_xmd)

Now you want to allow dashboard viewers to open the Salesforce record directly from a dimension in a chart or table. To locate a Salesforce record in a multi-org environment, CRM Analytics needs the dataset fields that identify each Salesforce record and its org. To provide CRM Analytics with this information.

-   In the recordIdField and recordOrganizationIdField fields under dimensions specify the dataset fields that contain the record ID and org ID, respectively. ![The "dimensions" field shows the field, recordId, and recordOrganizationIdField XMD fields.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_open_sfdc_record_multi-org_xmd_dimensions.png&folder=bi_dev_guide_xmd)
-   In the id and instanceURL fields under organizations, map the org IDs to the org URLs. You can also specify a label for each org. ![The "organizations" section of the XMD maps the org IDs to the org URLs.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_open_sfdc_record_multi-org_xmd_organizations.png&folder=bi_dev_guide_xmd)

When a user clicks the link to open a Salesforce record, CRM Analytics determines which Salesforce record to open by using the org URL and the record ID. CRM Analytics looks up the org ID in the dataset field specified in the recordOrganizationIdField of the XMD. It then uses the org ID to look up the org URL in the organizations section. CRM Analytics retrieves the record ID from the dataset field specified in the recordIdField field of the XMD. For example, if the org URL is https://mydomain.salesforce.com and the record ID is 006f4000002fjpCAAQ, the link to the record in its org is https://mydomain.salesforce.com/006f4000002fjpCAAQ.

The bold text in the XMD example shows how to set up this type of action.

```

```

This XMD snippet shows the organizations XMD parameter.

```

```

## Open a Website

You can add a link to open a website from charts and tables. You can pass dataset field values in the URL using the following syntax.

```

```

The bold text in the XMD example shows how to set up this type of action.

```

```

When a dashboard viewer clicks the Open Record link, CRM Analytics performs a search in Google based on the company name specified in the CompanyName dataset field.

![The Open Record link appears in the action menu for each company.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_actions_open_website.png&folder=bi_dev_guide_xmd)

## Perform a Salesforce Action on a Salesforce Record from CRM Analytics

You can add Salesforce actions to the action menu. You can only add actions defined in the page layouts for the corresponding Salesforce object. Actions are only available for the local org, and are not supported for multi-org records.

The bold text in the XMD example shows how to set up this type of action. In this example, all actions defined for any page layout for the object show up in the actions menu.

```

```

The list of all actions defined in all page layouts for this object appear in the actions menu.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_xmd)

#### Note

Each dashboard viewer sees only the actions that are assigned to the viewer’s page layout for this object.

![The actions menu shows all Salesforce actions defined for the object.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_xmd%2Fimages%2Fbi_xmd_actions_allSfdcActions.png&folder=bi_dev_guide_xmd)

In this example, only the specified set of actions defined in the page layouts show up in the actions menu.

```

```

#### See Also

-   [Dimensions and Derived Dimensions in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_dimensions.htm "You can add an action menu to a dimension value in Analytics lens and dashboard charts and tables. Users can then open a record and perform record-level actions. The available XMD parameters are the same for dimensions and derived dimensions.")

-   [Organizations in XMD](atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_organizations.htm "If your datasets combine records from multiple Salesforce orgs, map Salesforce orgs to their URLs. Analytics uses these mappings to locate a record in a multi-org environment. The organizations section is used for opening links, not performing Salesforce actions.")

## Code Examples

```
"dimensions": [{
  "field": "Account.Name",
  "linkTemplateEnabled": true,
  "linkTooltip": "Open the opportunity record associated with this account.",
  "members": [],
  "recordDisplayFields": ["Name", "Account.Name", "Owner.Name"],
  "recordIdField": "Id",
  "salesforceActions": [],
  "salesforceActionsEnabled": false
}],
```

```
"dimensions": [{
  "field": "Account.Name",
  "label": "Account Name",
  "linkTemplateEnabled": true,
  "members": [],
  "recordDisplayFields": [
    "Account.Name",
    "Account.Owner.Name",
    "Account.Owner.Role.ParentRoleId"
  ],
  "recordIdField": "AccountId", 
  "recordOrganizationIdField": "SFOrgId",
  "salesforceActions": [],
  "salesforceActionsEnabled": false
}],
```

```
"organizations": [
  {
    "id": "00DB00000003brXMAQ",
    "instanceUrl": "https://westregion.salesforce.com",
    "label": "West Region Org"
  },
  {
    "id": "00DB0000000pqd1MAA",
    "instanceUrl": "https://eastregion.salesforce.com",
    "label": "East Region Org"
  },
  {
    "id": "00DB0000000paacMAA",
    "instanceUrl": "https://southregion.salesforce.com",
    "label": "South Region Org"
  },
  {
    "id": "00DB00000001234MAA",
    "instanceUrl": "https://northregion.salesforce.com",
    "label": "North Region Org"
  }
 ]
```

```
“<website url>{{row.<dataset_field_name>}}"
```

```
"dimensions": [{
  "field": "CompanyName",
  "linkTemplate": "http://www.google.com/search?q={{row.CompanyName}}",
  "linkTemplateEnabled": true,
  "linkTooltip": "Search Google for this company name.",
  "members": [],
  "recordDisplayFields": [],
  "salesforceActions": [],
  "salesforceActionsEnabled": false
}],
```

## Related Topics

- Dimensions and Derived Dimensions in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_dimensions.htm)
- Organizations in XMD (atlas.en-us.bi_dev_guide_xmd.meta/bi_dev_guide_xmd/bi_xmd_reference_organizations.htm)
