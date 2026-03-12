---
title: "$Action"
domain: pages
topic: action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.323Z
estimatedTokens: 259
keywords: [$Action, merge, referencing, standard, Salesforce, actions, displaying, Accounts, tab, home, creating, editing, deleting, Usage]
---

# $Action

> A global merge field type to use when referencing standard Salesforce actions, such as
        displaying the Accounts tab home page, creating accounts, editing accounts, and deleting
        accounts.

# $Action

A global merge field type to use when referencing standard Salesforce actions, such as displaying the Accounts tab home page, creating accounts, editing accounts, and deleting accounts.

## Usage

Use dot notation to specify an object and an action, for example, $Action.Account.New

## Example

The following markup adds a link to create a new account:

```

```

The following markup adds a link to download an attachment:

```

```

-   **[Valid Values for the $Action Global Variable](atlas.en-us.pages.meta/pages/pages_variables_global_action_valid_values.htm)**
    The $Action global variable contains a list of actions and objects on which the actions can be performed.

#### See Also

-   [Dynamic References to Action Methods Using $Action](atlas.en-us.pages.meta/pages/pages_dynamic_vf_globals_action.htm "The $Action global variable allows you to dynamically reference valid actions on an object type, or on a specific record. The most likely way to make use of this is to create a URL to perform that action.")

## Code Examples

```
<apex:outputLink value="{!URLFOR($Action.Account.New)}">
    Create New Account
</apex:outputLink>
```

```
<apex:page standardController="Attachment">
    <apex:outputLink 
      value="{!URLFOR($Action.Attachment.Download,
                      attachment.id)}">
      Download Now!
    </apex:outputLink>
</apex:page>
```

## Related Topics

- Valid Values for the $Action Global Variable (atlas.en-us.pages.meta/pages/pages_variables_global_action_valid_values.htm)
- Dynamic References to Action Methods Using $Action (atlas.en-us.pages.meta/pages/pages_dynamic_vf_globals_action.htm)
