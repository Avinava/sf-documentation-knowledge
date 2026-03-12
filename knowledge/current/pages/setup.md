---
title: "$Setup"
domain: pages
topic: setup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.434Z
estimatedTokens: 302
keywords: [$Setup, merge, referencing, custom, setting, “hierarchy.”, Usage]
---

# $Setup

> A global merge field type to use when referencing a custom setting of type
  “hierarchy.”

# $Setup

A global merge field type to use when referencing a custom setting of type “hierarchy.”

## Usage

Use $Setup to access hierarchical custom settings and their field values using dot notation. For example, $Setup.App\_Prefs\_\_c.Show\_Help\_Content\_\_c.

Hierarchical custom settings allow values at any of three different levels:

1.  Organization, the default value for everyone
2.  Profile, which overrides the Organization value
3.  User, which overrides both Organization and Profile values

Salesforce automatically determines the correct value for this custom setting field based on the running user’s current context.

Custom settings of type “list” aren’t available on Visualforce pages using this global variable. You can access list custom settings in Apex.

## Example

The following example illustrates how to conditionally display an extended help message for an input field, depending on the user’s preference:

```

```

If the organization level for the custom setting is set to true, users see the extended help message by default. If an individual prefers to not see the help messages, they can set their custom setting to false, to override the organization (or profile) value.

## Code Examples

```
<apex:page>
    <apex:inputField value="{!usr.Workstation_Height__c}"/>
    <apex:outputPanel id="helpWorkstationHeight" 
        rendered="{!$Setup.App_Prefs__c.Show_Help_Content__c}">
        Enter the height for your workstation in inches, measured from the 
        floor to top of the work surface.
    </apex:outputPanel>
    ...
</apex:page>
```
