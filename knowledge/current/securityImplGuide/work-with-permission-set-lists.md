---
title: "Work with Permission Set Lists"
domain: securityImplGuide
topic: work-with-permission-set-lists
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.860Z
estimatedTokens: 1238
keywords: [Work, Permission, views, help, view, manage, edit, permissions, multiple, time]
---

# Work with Permission Set Lists

> Create list views to help view and manage your permission sets. You can also edit
    permissions in multiple permission sets at the same time using list views.

# Work with Permission Set Lists

Create list views to help view and manage your permission sets. You can also edit permissions in multiple permission sets at the same time using list views.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Essentials, Contact Manager, Professional, Group, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


| User Permissions Needed |
| --- |
| To create, edit, and delete permission set list views: | Manage Profiles and Permission Sets |
| To edit multiple permission sets from the list view: | Manage Profiles and Permission SetsANDCustomize Application |

## Create and Edit Permission Set List Views

You can create permission set list views to view a set of permission sets with the fields that you choose.

1.  From Setup, in the Quick Find box, enter Permission Sets, and then select **Permission Sets**.
2.  In the Permission Sets detail page, click **Create New View**, or select a view and click **Edit**.
3.  Enter the view name.
4.  Under Specify Filter Criteria, specify the conditions that the permission sets must match, such as Modify All Data equals True.
    1.  To search for and select the setting you want, type a setting name, or click the lookup icon. You can add filters on permission set details and permissions.
    2.  Choose a filter operator.
    3.  Enter the value that you want to match.
    4.  To specify another filter condition, click **Add New**. You can specify up to 25 filter condition rows. Permission sets that match all of the filter conditions are displayed.
5.  Under Select Columns to Display, specify the permission set details or permissions that you want to appear as columns in the list view. You can add up to 15 columns in a single list view.
    1.  From the Search dropdown list, select the type of setting you want to search for.
    2.  Enter part or all of a word in the setting you want to add and click **Find**.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

        #### Note

        If the search finds more than 500 values, no results appear. Use the preceding steps to refine your search criteria and show fewer results.

    3.  To add or remove columns, select one or more column names and click the **Add** or **Remove** arrow.
    4.  Use the **Top**, **Up**, **Down**, and **Bottom** arrows to arrange the columns in the sequence you want.
6.  Click **Save**, or if you're cloning an existing view, rename it and click **Save As**.

## Edit Multiple Permission Sets with Permission Set List Views

You can change permissions in up to 200 permission sets directly from the list view, without accessing individual permission set pages.

Editable cells display a pencil icon (![Editable Field](/docs/resources/img/en-us/260.0?doc_id=help%2Fresources-global%2F_corporate%2Fimages%2Fpencil.png&folder=securityImplGuide)) when you hover over the cell, while non-editable cells display a lock icon (![Uneditable Field](/docs/resources/img/en-us/260.0?doc_id=help%2Fresources-global%2F_corporate%2Fimages%2Flock.png&folder=securityImplGuide)).

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=securityImplGuide)

#### Warning

Use care when editing permission sets with this method. Because permission sets affect a user's access, making mass changes can have a widespread effect on users in your organization.

1.  Select or create a list view that includes the permission sets and permissions you want to edit.
2.  To edit multiple permission sets, select the checkbox next to each permission set you want to edit.

    If you select permission sets on multiple pages, Salesforce remembers which permission sets are selected.

3.  Double-click the permission you want to edit.

    For multiple permission sets, double-click the permission in any of the selected permission sets.

4.  In the dialog box that appears, enable or disable the permission.

    In some cases, changing a permission may also change other permissions. For example, if “Customize Application” and “View Setup and Configuration” are disabled and you enable “Customize Application,” then “View Setup and Configuration” is also enabled. In this case, the dialog box lists the affected permissions.

5.  To change multiple permission sets, select **All n selected records** (where n is the number of permission sets you selected).
6.  Click **Save**.

If any errors occur, an error message appears, listing each permission set in error and a description of the error. Click the permission set name to open the permission set detail page. The permission sets you've clicked appear in the error window in gray, strike-through text. To view the error console, you must have pop-up blockers disabled for the Salesforce domain.

Any changes you make are recorded in the setup audit trail.
