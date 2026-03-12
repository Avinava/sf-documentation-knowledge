---
title: "Action Links Labels"
domain: chatterapi
topic: action-links-labels
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.876Z
estimatedTokens: 2702
keywords: [Action, Links, Labels, link, buttons]
---

# Action Links Labels

> Use these labels for action link buttons.

# Action Links Labels

Use these labels for action link buttons.

An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.

Specify the key in the labelKey property of the [Action Link Definition Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_definition_input.htm "The definition of an action link. An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.") request body. When the action link is rendered, the UI uses labels for the “New,” “Pending,” “Success,” and “Failed” states as needed.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=chatterapi)

#### Tip

If none of the predefined labels work for your action link, use a custom label. To use a custom label, create an action link template and define the label in the template. See [Action Link Templates](https://help.salesforce.com/articleView?id=action_link_group_template.htm&type=5&language=en_US).

| Key | New | Pending | Success | Failed |
| --- | --- | --- | --- | --- |
| Accept | Accept | Acceptance Pending | Accepted | Acceptance Failed |
| Activate | Activate | Activation Pending | Activated | Activation Failed |
| Add | Add | Add Pending | Added | Add Failed |
| Add to Calendar | Add to Calendar | Add to Calendar Pending | Added to Calendar | Add to Calendar Failed |
| Add to Cart | Add to Cart | Add Pending | Added | Add Failed |
| Agree | Agree | Agree Pending | Agree | Agree Failed |
| Alert | Alert | Alert Pending | Alerted | Alert Failed |
| Answer | Answer | Answer Pending | Answered | Answer Failed |
| Approve | Approve | Approval Pending | Approved | Approval Failed |
| Assign | Assign | Assign Pending | Assigned | Assign Failed |
| Assist | Assist | Assistance Pending | Assisted | Assistance Failed |
| Attach | Attach | Attach Pending | Attached | Attach Failed |
| Authorize | Authorize | Authorization Pending | Authorized | Authorization Failed |
| Begin | Begin | Begin Pending | Started | Begin Failed |
| Book | Book | Book Pending | Booked | Book Failed |
| Buy | Buy | Buy Pending | Bought | Buy Failed |
| Call | Call | Call Pending | Called | Call Failed |
| Call Me | Call Me | Call Pending | Call Succeeded | Call Failed |
| Certify | Certify | Certifcation Pending | Certified | Certification Failed |
| Change | Change | Change Pending | Changed | Change Failed |
| Chat | Chat | Chat Pending | Chat Completed | Chat Failed |
| Check | Check | Check Pending | Checked | Check Failed |
| Clear | Clear | Clear Pending | Clear | Clear Failed |
| Clone | Clone | Clone Pending | Cloned | Clone Failed |
| Close | Close | Close Pending | Closed | Close Failed |
| Confirm | Confirm | Confirmation Pending | Confirmed | Confirmation Failed |
| Convert | Convert | Convert Pending | Converted | Convert Failed |
| Convert a Lead | Convert a Lead | Lead Conversion Pending | Lead Converted | Lead Conversion Failed |
| Create | Create | Create Pending | Created | Create Failed |
| Deactivate | Deactivate | Deactivation Pending | Deactivated | Deactivation Failed |
| Decline | Decline | Decline Pending | Declined | Decline Failed |
| Delete | Delete | Delete Pending | Deleted | Delete Failed |
| Deny | Deny | Denial Pending | Denied | Denial Failed |
| Detach | Detach | Detach Pending | Detached | Detach Failed |
| Disagree | Disagree | Disagree Pending | Disagree | Disagree Failed |
| Dislike | Dislike | Dislike Pending | Disliked | Dislike Failed |
| Dismiss | Dismiss | Dismissal Pending | Dismissed | Dismissal Failed |
| Do | Do | Do Response Pending | Do | Do Response Failed |
| Donate | Donate | Donation Pending | Donated | Donation Failed |
| Down | Down | Down Response Pending | Down | Down Response Failed |
| Download | Download | Download Pending | Downloaded | Download Failed |
| Edit | Edit | Edit Pending | Edited | Edit Failed |
| End | End | End Pending | Ended | End Failed |
| Endorse | Endorse | Endorsement Pending | Endorsed | Endorsement Failed |
| Enter | Enter | Enter Pending | Entered | Enter Failed |
| Escalate | Escalate | Escalation Pending | Escalated | Escalation Failed |
| Estimate | Estimate | Estimate Pending | Estimate | Estimate Failed |
| Exclude | Exclude | Exclude Pending | Excluded | Exclude Failed |
| Exit | Exit | Exit Pending | Exited | Exit Failed |
| Export | Export | Export Pending | Exported | Export Failed |
| File | File | File Pending | Filed | File Failed |
| Fill | Fill | Fill Pending | Filled | Fill Failed |
| Finish | Finish | Finish Pending | Finished | Finish Failed |
| Flag | Flag | Flag Pending | Flagged | Flag Failed |
| Flip | Flip | Flip Pending | Flipped | Flip Failed |
| Follow | Follow | Follow Pending | Followed | Follow Failed |
| Generate | Generate | Generate Pending | Generated | Generate Failed |
| Give | Give | Give Pending | Given | Give Failed |
| Help | Help | Help Pending | Helped | Help Failed |
| Hide | Hide | Hide Pending | Hidden | Hide Failed |
| High | High | High Response Pending | High | High Response Failed |
| Hold | Hold | Hold Pending | Hold Succeeded | Hold Failed |
| Import | Import | Import Pending | Imported | Import Failed |
| Include | Include | Include Pending | Included | Include Failed |
| Join | Join | Join Pending | Joined | Join Failed |
| Launch | Launch | Launch Pending | Launched | Launch Failed |
| Leave | Leave | Leave Pending | Left | Leave Failed |
| Like | Like | Like Pending | Liked | Like Failed |
| List | List | List Pending | Listed | List Failed |
| Log | Log | Log Pending | Logged | Log Failed |
| Log a Call | Log a Call | Log a Call Pending | Logged a Call | Log a Call Failed |
| Low | Low | Low Response Pending | Low | Low Response Failed |
| Mark | Mark | Mark Pending | Marked | Mark Failed |
| Maybe | Maybe | Maybe Response Pending | Maybe | Maybe Response Failed |
| Medium | Medium | Medium Response Pending | Medium | Medium Response Failed |
| Meet | Meet | Meet Pending | Meet | Meet Failed |
| Message | Message | Message Pending | Message | Message Failed |
| Move | Move | Move Pending | Moved | Move Failed |
| Negative | Negative | Negative Response Pending | Negative | Negative Response Failed |
| New | New | New Pending | New | New Failed |
| No | No | No Response Pending | No | No Response Failed |
| OK | OK | OK Response Pending | OK | OK Response Failed |
| Open | Open | Open Pending | Opened | Open Failed |
| Order | Order | Order Pending | Ordered | Order Failed |
| Positive | Positive | Positive Response Pending | Positive | Positive Response Failed |
| Post | Post | Post Pending | Posted | Post Failed |
| Post Review | Post Review | Post Pending | Posted | Post Failed |
| Process | Process | Process Pending | Processed | Process Failed |
| Provide | Provide | Provide Pending | Provided | Provide Failed |
| Purchase | Purchase | Purchase Pending | Purchased | Purchase Failed |
| Quote | Quote | Quote Pending | Quoted | Quote Failed |
| Receive | Receive | Receive Pending | Received | Receive Failed |
| Recommend | Recommend | Recommend Pending | Recommended | Recommend Failed |
| Redo | Redo | Redo Response Pending | Redo | Redo Response Failed |
| Refresh | Refresh | Refresh Pending | Refreshed | Refresh Failed |
| Reject | Reject | Rejection Pending | Rejected | Rejection Failed |
| Release | Release | Release Pending | Released | Release Failed |
| Remind | Remind | Reminder Pending | Reminded | Reminder Failed |
| Remove | Remove | Removal Pending | Removed | Removal Failed |
| Repeat | Repeat | Repeat Pending | Repeated | Repeat Failed |
| Report | Report | Report Pending | Reported | Report Failed |
| Request | Request | Request Pending | Requested | Request Failed |
| Reserve | Reserve | Reservation Pending | Reserved | Reservation Failed |
| Resolve | Resolve | Resolve Pending | Resolved | Resolve Failed |
| Respond | Respond | Response Pending | Responded | Response Failed |
| Restore | Restore | Restore Pending | Restored | Restore Failed |
| Review | Review | Review Pending | Reviewed | Review Failed |
| Revise | Revise | Revision Pending | Revised | Revision Failed |
| Save | Save | Save Pending | Saved | Save Failed |
| Schedule | Schedule | Schedule Pending | Scheduled | Schedule Failed |
| Sell | Sell | Sell Pending | Sold | Sell Failed |
| Send | Send | Send Pending | Sent | Send Failed |
| Send Email | Send Email | Send Email Pending | Email Sent | Send Email Failed |
| Share | Share | Share Pending | Shared | Share Failed |
| Ship | Ship | Shipment Pending | Shipped | Shipment Failed |
| Show | Show | Show Pending | Shown | Show Failed |
| Start | Start | Start Pending | Started | Start Failed |
| Stop | Stop | Stop Pending | Stopped | Stop Failed |
| Submit | Submit | Submit Pending | Submitted | Submit Failed |
| Subscribe | Subscribe | Subscribe Pending | Subscribed | Subscribe Failed |
| Test | Test | Test Pending | Tested | Test Failed |
| Thank | Thank | Thanks Pending | Thanked | Thanks Failed |
| Unauthorize | Unauthorize | Unauthorization Pending | Unauthorized | Unauthorization Failed |
| Uncheck | Uncheck | Uncheck Pending | Unchecked | Uncheck Failed |
| Undo | Undo | Undo Response Pending | Undo | Undo Response Failed |
| Unflag | Unflag | Unflag Pending | Unflagged | Unflag Failed |
| Unfollow | Unfollow | Unfollow Pending | Unfollowed | Unfollow Failed |
| Unlike | Unlike | Unlike Pending | Unliked | Unlike Failed |
| Unmark | Unmark | Unmark Pending | Unmarked | Unmark Failed |
| Unsubscribe | Unsubscribe | Unsubscribe Pending | Unsubscribed | Unsubscribe Failed |
| Up | Up | Up Response Pending | Up | Up Response Failed |
| Update | Update | Update Pending | Updated | Update Failed |
| Validate | Validate | Validate Pending | Validated | Validate Failed |
| Verify | Verify | Verify Pending | Verified | Verify Failed |
| View | View | View Pending | Viewed | View Failed |
| Visit | Visit | Visit Pending | Visit Successful | Visit Failed |
| Yes | Yes | Yes Response Pending | Yes | Yes Response Failed |

## Related Topics

- Action Link Definition Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_definition_input.htm)
