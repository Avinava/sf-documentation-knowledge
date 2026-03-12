---
title: "Overriding Tabs Using a Standard List
Controller"
domain: pages
topic: overriding-tabs-using-a-standard-list-controller
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.387Z
estimatedTokens: 245
keywords: [Overriding, Tabs, Standard, Controller, sure, made, users, setting, level, security, appropriately]
---

# Overriding Tabs Using a Standard List
Controller

> Make sure you have made this page available to all your users by setting the page level
        security appropriately.

# Overriding Tabs Using a Standard List Controller

Pages that use standard list controllers can be used to override tabs. For example, if you create a page named overrideAccountTab that is associated with the Account standard list controller:

```

```

Then, you can override the Account tab to display that page instead of the standard Account home page.

1.  From the object management settings for accounts, go to Buttons, Links, and Actions.
2.  Click **Edit** for the Accounts Tab.
3.  From the Visualforce Page drop-down list, select the **overrideAccountTab** page.
4.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Make sure you have made this page available to all your users by setting the page level security appropriately.

#### See Also

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)

## Code Examples

```
<apex:page standardController="Account" recordSetVar="accounts" tabStyle="account">
  <apex:pageBlock >
    <apex:pageBlockTable value="{!accounts}" var="a">
      <apex:column value="{!a.name}"/>
    </apex:pageBlockTable>
  </apex:pageBlock>
</apex:page>
```
