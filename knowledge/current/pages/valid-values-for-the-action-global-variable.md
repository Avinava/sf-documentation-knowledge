---
title: "Valid Values for the $Action Global Variable"
domain: pages
topic: valid-values-for-the-action-global-variable
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.341Z
estimatedTokens: 1452
keywords: [$Action, Variable, actions, objects, performed]
---

# Valid Values for the $Action Global Variable

> The $Action global variable contains a list of actions and objects on which the actions
  can be performed.

# Valid Values for the $Action Global Variable

The $Action global variable contains a list of actions and objects on which the actions can be performed.

The following table lists the actions you can reference with the $Action global variable and the objects on which you can perform those actions.

| Value | Description | Objects |
| --- | --- | --- |
| Accept | Accept a record. | Ad groupCaseEventGoogle campaignKeywordLeadSearch phraseSFGA versionText ad |
| Activate | Activate a contract. | Contract |
| Add | Add a product to a price book. | Product2 |
| AddCampaign | Add a member to a campaign. | Campaign |
| AddInfluence | Add a campaign to an opportunity's list of influential campaigns. | Opportunity |
| AddProduct | Add a product to price book. | OpportunityLineItem |
| AddToCampaign | Add a contact or lead to a campaign. | ContactLead |
| AddToOutlook | Add an event to Microsoft Outlook. | Event |
| AdvancedSetup | Launch campaign advanced setup. | Campaign |
| AltavistaNews | Launch www.altavista.com/news/. | AccountLead |
| Cancel | Cancel an event. | Event |
| CaseSelect | Specify a case for a solution. | Solution |
| ChangeOwner | Change the owner of a record. | AccountAd groupCampaignContactContractGoogle campaignKeywordOpportunitiesSearch phraseSFGA versionText ad |
| ChangeStatus | Change the status of a case. | CaseLead |
| ChoosePricebook | Choose the price book to use. | OpportunityLineItem |
| Clone | Clone a record. | Ad groupAssetCampaignCampaign memberCaseContactContractEventGoogle campaignKeywordLeadOpportunityProductSearch phraseSFGA versionText adCustom objects |
| CloneAsChild | Create a related case with the details of a parent case. | Case |
| CloseCase | Close a case. | Case |
| Convert | Create a new account, contact, and opportunity using the information from a lead. | Lead |
| ConvertLead | Convert a lead to a campaign member. | Campaign Member |
| Create_Opportunity | Create an opportunity based on a campaign member. | Campaign Member |
| Decline | Decline an event. | Event |
| Delete | Delete a record. | Ad groupAssetCampaignCampaign memberCaseContactContractEventGoogle campaignKeywordLeadOpportunityOpportunity productProductSearch phraseSFGA versionSolutionTaskText adCustom objects |
| DeleteSeries | Delete a series of events or tasks. | EventTask |
| DisableCustomerPortal | Disable a Customer Portal user. | Contact |
| DisableCustomerPortalAccount | Disable a Customer Portal account. | Account |
| DisablePartnerPortal | Disable a Partner Portal user. | Contact |
| DisablePartnerPortalAccount | Disable a Partner Portal account. | Account |
| Download | Download an attachment. | AttachmentDocument |
| Edit | Edit a record. | Ad groupAssetCampaignCampaign memberCaseContactContractEventGoogle campaignKeywordLeadOpportunityOpportunity productProductSearch phraseSFGA versionSolutionTaskText adCustom objects |
| EditAllProduct | Edit all products in a price book. | OpportunityLineItem |
| EnableAsPartner | Designate an account as a partner account. | Account |
| EnablePartnerPortalUser | Enable a contact as a Partner Portal user. | Contact |
| EnableSelfService | Enable a contact as a Self-Service user. | Contact |
| FindDup | Display duplicate leads. | Lead |
| FollowupEvent | Create a follow-up event. | Event |
| FollowupTask | Create a follow-up task. | Event |
| HooversProfile | Display a Hoovers profile. | AccountLead |
| IncludeOffline | Include an account record in Connect Offline. | Account |
| GoogleMaps | Plot an address on Google Maps. | AccountContactLead |
| GoogleNews | Display www.google.com/news. | AccountContactLead |
| GoogleSearch | Display www.google.com. | AccountContactLead |
| List | List records of an object. | Ad groupCampaignCaseContactContractGoogle campaignKeywordLeadOpportunityProductSearch phraseSFGA versionSolutionText adCustom objects |
| LogCall | Log a call. | Activity |
| MailMerge | Generate a mail merge. | Activity |
| ManageMembers | Launch the Manage Members page. | Campaign |
| MassClose | Close multiple cases. | Case |
| Merge | Merge contacts. | Contact |
| New | Create a new record. | ActivityAd groupAssetCampaignCaseContactContractEventGoogle campaignKeywordLeadOpportunitySearch phraseSFGA versionSolutionTaskText adCustom objects |
| NewTask | Create a task. | Task |
| RequestUpdate | Request an update. | ContactActivity |
| SelfServSelect | Register a user as a Self Service user. | Solution |
| SendEmail | Send an email. | Activity |
| SendGmail | Open a blank email in Gmail. | ContactLead |
| Sort | Sort products in a price book. | OpportunityLineItem |
| Share | Share a record. | AccountAd groupCampaignCaseContactContractGoogle campaignKeywordLeadOpportunitySearch phraseSFGA versionText ad |
| Submit for Approval | Submit a record for approval. | AccountActivityAd groupAssetCampaignCampaign memberCaseContactContractEventGoogle campaignKeywordLeadOpportunityOpportunity productProductSearch phraseSFGA versionSolutionTaskText ad |
| Tab | Access the tab for an object. | Ad groupCampaignCaseContactContractGoogle campaignKeywordLeadOpportunityProductSearch phraseSFGA versionSolutionText ad |
| View | View a record. | ActivityAd groupAssetCampaignCampaign memberCaseContactContractEventGoogle campaignKeywordLeadOpportunityOpportunity productProductSearch phraseSFGA versionSolutionText adCustom objects |
| ViewAllCampaignMembers | List all campaign members. | Campaign |
| ViewCampaignInfluenceReport | Display the Campaigns with Influenced Opportunities report. | Campaign |
| ViewPartnerPortalUser | List all Partner Portal users. | Contact |
| ViewSelfService | List all Self-Service users. | Contact |
| YahooMaps | Plot an address on Yahoo! Maps. | AccountContactLead |
| YahooWeather | Display http://weather.yahoo.com/. | Contact |
