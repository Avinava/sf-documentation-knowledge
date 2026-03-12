---
title: "GroupRampActionEnum Enum"
domain: revenue-cloud
topic: grouprampactionenum-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.224Z
estimatedTokens: 348
keywords: [GroupRampActionEnum, action, ‌that, want, perform, group, ramp, segments, Additionally, convert, non-ramped, ramped]
---

# GroupRampActionEnum Enum

> Specifies the action ‌that you want to perform on group ramp segments. Additionally,
    you can also convert a non-ramped group into a ramped group.

# GroupRampActionEnum Enum

Specifies the action ‌that you want to perform on group ramp segments. Additionally, you can also convert a non-ramped group into a ramped group.

## Enum Values

The RevSalesTrxn.GroupRampActionEnum enum includes these values.

| Value | Description |
| --- | --- |
| AddProducts | Specifies to add rampable products to group ramp segments. |
| DeleteProducts | Specifies to delete ramped products. |
| EditGroup | Specifies to convert a non-ramped group into a group ramp segment, or edit group ramp segment attributes such as name and description, except the start and end dates. |
| EditRampSchedule | Specifies to edit details of the group ramp segments, including start and end dates. |
| DeleteSegment | Specifies to delete the first or last segment in a group ramp schedule. |
| ConvertToNonRampedGroup | Specifies to convert the first or last group ramp segment into a non-ramped group. |

To add or delete ramped line items from multiple group ramp segments, pass all the applicable values in the graph request. To refer to Connect API examples that specify actions to create ramp deals for groups, see [Group Ramp Action Input](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_group_ramp_action_input.htm "Understand the sample request to specify group ramp actions during initial sale.").

## Related Topics

- Group Ramp Action Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_group_ramp_action_input.htm)
