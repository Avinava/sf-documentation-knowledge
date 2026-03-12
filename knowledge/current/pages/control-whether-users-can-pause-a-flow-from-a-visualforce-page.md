---
title: "Control Whether Users Can Pause a Flow from a Visualforce
  Page"
domain: pages
topic: control-whether-users-can-pause-a-flow-from-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.630Z
estimatedTokens: 329
keywords: [Control, Whether, Users, Pause, Flow, Visualforce, embed, <flow, interview>, component, consider, want, let, flows, allowShowPause]
---

# Control Whether Users Can Pause a Flow from a Visualforce
  Page

> After you embed a flow in a Visualforce page with the <flow:interview> component, consider whether you want to let users pause flows from
  that page. Set the allowShowPause attribute to false to
  prevent users from pausing.

# Control Whether Users Can Pause a Flow from a Visualforce Page

After you embed a flow in a Visualforce page with the <flow:interview\> component, consider whether you want to let users pause flows from that page. Set the allowShowPause attribute to false to prevent users from pausing.

Whether the **Pause** button appears depends on three settings.

-   Your org’s Process Automation settings must have Let users pause flows enabled.
-   For this <flow:interview\>, allowShowPause must not be false. The default value is true.
-   Each screen must be configured to show the **Pause** button.

## Example

In a Visualforce page, you’ve embedded a flow that includes three screens. Screen 1 is configured to show the **Pause** button. Screens 2 and 3 are configured to not show the **Pause** button.

| Let Users Pause Flows(Process Automation setting) | allowShowPause(Visualforce component) | Result Pause button |
| --- | --- | --- |
| Enabled | true or not set | Pause button appears only on the first screen |
| Enabled | false | Pause button doesn’t appear for any screens in this Visualforce page |
| Not enabled | true or not set | Pause button doesn’t appear for any screens |

This example embeds the MyUniqueFlow flow in a Visualforce page and doesn’t allow the **Pause** button to appear.

```

```

## Code Examples

```
<apex:page>   
   <flow:interview name="MyUniqueFlow" allowShowPause="false" />
</apex:page>
```
