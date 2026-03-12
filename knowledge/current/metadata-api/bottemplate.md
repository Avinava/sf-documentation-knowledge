---
title: "BotTemplate"
domain: metadata-api
topic: bottemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:37.327Z
estimatedTokens: 1079
keywords: [BotTemplate, Represents, configuration, details, specific, Einstein, Bot, template, including, dialogs, variables., Important, Parent, File, Suffix, Directory, Location, Version, Special, Access]
---

# BotTemplate

> Represents the configuration details for a specific Einstein Bot
			template, including dialogs and variables.

# BotTemplate

Represents the configuration details for a specific Einstein Bot template, including dialogs and variables.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

BotTemplate components have the suffix .botTemplate and are stored in the botTemplates folder.

## Version

BotTemplate components are available in API version 55.0 and later.

## Special Access Rules

BotTemplate is available only if Chat and Einstein Bots are enabled in your org.

Bot metadata deployment and retrieval are not supported for Lead Nurturing and Sales Coach Agents.

## Fields

| Field Name | Description |
| --- | --- |
| botDialogGroups | Field TypeBotDialogGroup[]DescriptionThe list of dialog groups in this bot template. |
| botDialogs | Field TypeBotDialog[]DescriptionThe list of dialogs in this bot template. |
| conversationLanguages | Field TypestringDescriptionRequired.Specifies the language of the bot template. |
| contextVariables | Field TypeConversationContextVariable[]DescriptionRepresents the context variables that enable your bot to gather customer information regardless of channel. |
| conversationGoals | Field TypeConversationDefinitionGoal[]DescriptionThe list of goals in this bot template. Available in API version 57.0 and later. |
| conversationSystemDialogs | Field TypeConversationSystemDialog[]DescriptionA system function assigned to a dialog. |
| conversationVariables | Field TypeConversationVariable[]DescriptionA container that stores a specific piece of data collected from the customer. You can use variables within dialog actions as both inputs and outputs. |
| description | Field TypestringDescriptionA description of the bot template. |
| entryDialog | Field TypestringDescriptionA reference to the first dialog that the bot presents to your customer. For example, Welcome. |
| icon | Field TypestringDescriptionThe icon used to identify the template. |
| mainMenuDialog | Field TypestringDescriptionA reference to the dialog identified as the main menu dialog. For example, Main Menu. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly label for BotTemplate, which is defined when the BotTemplate is created. |
| mlDomain | Field TypeLocalMlDomainDescriptionRequired.Represents the Einstein Intent Set that groups intents, entities, and variables associated with a template. |
| permissionSet | Field TypestringDescriptionThe permission set associated with the bot template. Available in API version 59.0 and later. |
| richContentEnabled | Field TypebooleanDescriptionIndicates whether the template is available for enhanced bots (true) or for standard bots (false). The default is false. |
| type | Field TypeBotType (enumeration of type string)DescriptionThis field represents the configuration type of the bot. The default value is Bot.Valid values are:Bot—Default Einstein Bot configuration.ExternalCopilot— An external-facing agent. For example, an Agentforce Service agent.InternalCopilot— An internal-facing agent. For example, an Agentforce Employee agent. |

## Declarative Metadata Sample Definition

The following is an example of a BotTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<BotTemplate xmlns="http://soap.sforce.com/2006/04/metadata">
    <botDialogGroups>
        <developerName>dialog_group1</developerName>
        <label>dialog group1</label>
    </botDialogGroups>
    <botDialogs>
        <developerName>Test_Dialog_1</developerName>
        <label>Test_Dialog_1</label>
        <showInFooterMenu>false</showInFooterMenu>
    </botDialogs>
    <botDialogs>
        <developerName>Test_Dialog_2</developerName>
        <label>Test_Dialog_2</label>
        <showInFooterMenu>false</showInFooterMenu>
    </botDialogs>
    <botDialogs>
        <botSteps>
            <botMessages>
                <message>Hi! I&apos;m your helpful bot.</message>
                <messageIdentifier>m1</messageIdentifier>
            </botMessages>
            <stepIdentifier>s1</stepIdentifier>
            <type>Message</type>
        </botSteps>
        <botSteps>
           <conversationRecordLookup>
               <SObjectType>Account</SObjectType>
               <conditions>
                   <leftOperand>Account.Phone</leftOperand>
                   <operatorType>Equal</operatorType>
                   <rightOperandValue>Value</rightOperandValue>
                   <sortOrder>0</sortOrder>
               </conditions>
               <lookupFields>
                   <fieldName>Account.Phone</fieldName>
               </lookupFields>
               <lookupFields>
                   <fieldName>Account.OwnerId</fieldName>
               </lookupFields>
               <maxLookupResults>1</maxLookupResults>
               <sourceVariableName>_LastCustomerInput</sourceVariableName>
               <sourceVariableType>ConversationVariable</sourceVariableType>
               <targetVariableName>MyCustomVariable</targetVariableName>
           </conversationRecordLookup>
           <stepIdentifier>s2</stepIdentifier>
           <type>RecordLookup</type>
        </botSteps>
        <botSteps>
            <botNavigation>
                <botNavigationLinks>
                    <targetBotDialog>Main_Menu</targetBotDialog>
                </botNavigationLinks>
                <type>Redirect</type>
            </botNavigation>
            <stepIdentifier>s3</stepIdentifier>
            <type>Navigation</type>
        </botSteps>
        <developerName>Welcome</developerName>
        <label>Welcome</label>
        <mlIntent>Welcome</mlIntent>
        <showInFooterMenu>false</showInFooterMenu>
    </botDialogs>
    <botDialogs>
        <botSteps>
            <stepIdentifier>s4</stepIdentifier>
            <type>Wait</type>
        </botSteps>
        <developerName>Main_Menu</developerName>
        <label>Main Menu</label>
        <mlIntent>Main_Menu</mlIntent>
        <showInFooterMenu>false</showInFooterMenu>
    </botDialogs>
    <botDialogs>
        <botSteps>
            <botMessages>
                <message>Goodbye! Click the &quot;End Chat&quot; button to end this chat</message>
                <messageIdentifier>m2</messageIdentifier>
            </botMessages>
            <stepIdentifier>s6</stepIdentifier>
            <type>Message</type>
        </botSteps>
        <botSteps>
            <stepIdentifier>s7</stepIdentifier>
            <type>Wait</type>
        </botSteps>
        <developerName>End_Chat</developerName>
        <label>End Chat</label>
        <mlIntent>End_Chat</mlIntent>
        <showInFooterMenu>false</showInFooterMenu>
    </botDialogs>
    <botDialogs>
        <botSteps>
            <botMessages>
                <message>Unfortunately, there are no agents available at the moment</message>
                <messageIdentifier>m3</messageIdentifier>
            </botMessages>
            <stepIdentifier>s8</stepIdentifier>
            <type>Message</type>
        </botSteps>
        <botSteps>
            <stepIdentifier>s9</stepIdentifier>
            <type>Wait</type>
        </botSteps>
        <developerName>No_Agent_Available</developerName>
        <label>No Agent</label>
        <showInFooterMenu>false</showInFooterMenu>
    </botDialogs>
    <contextVariables>
        <contextVariableMappings>
            <SObjectType>LiveChatTranscript</SObjectType>
            <fieldName>LiveChatTranscript.ChatKey</fieldName>
            <messageType>WebChat</messageType>
        </contextVariableMappings>
        <dataType>Text</dataType>
        <developerName>ChatKey</developerName>
        <label>Chat Key</label>
    </contextVariables>
    <conversationLanguages>en_US</conversationLanguages>
    <conversationSystemDialogs>
        <dialog>No_Agent_Available</dialog>
        <type>TransferFailed</type>
    </conversationSystemDialogs>
    <conversationSystemDialogs>
        <dialog>Test_Dialog_1</dialog>
        <type>ErrorHandling</type>
    </conversationSystemDialogs>
    <conversationVariables>
        <dataType>Text</dataType>
        <developerName>TestVariableXYZ</developerName>
        <label>TestVariableXYZ</label>
    </conversationVariables>
    <conversationVariables>
        <collectionType>List</collectionType>
        <dataType>Object</dataType>
        <developerName>MyCustomVariable</developerName>
        <label>MyCustomVariable</label>
    </conversationVariables>
    <description>Description of BotTemplate</description>
    <entryDialog>Test_Dialog_1</entryDialog>
    <icon>AA8qwqXXXXX</icon>
    <mainMenuDialog>Test_Dialog_2</mainMenuDialog>
    <masterLabel>Astro Bot</masterLabel>
    <mlDomain>
        <label>Astro Bot</label>
        <mlIntents>
            <developerName>End_Chat</developerName>
            <label>End Chat</label>
            <mlIntentUtterances>
                <utterance>Utterance1</utterance>
                <language>es</language>
            </mlIntentUtterances>
            <mlIntentUtterances>
                <utterance>Utterance2</utterance>
                <language>es</language>
            </mlIntentUtterances>
            <mlIntentUtterances>
                <utterance>Utterance3</utterance>
                <language>es</language>
            </mlIntentUtterances>
        </mlIntents>
        <mlIntents>
            <developerName>Main_Menu</developerName>
            <label>Main Menu</label>
            <description>Main Menu Intent</description>
        </mlIntents>
        <mlIntents>
            <developerName>Welcome</developerName>
            <label>Welcome</label>
            <description>Welcome Intent</description>
        </mlIntents>
        <name>Astro_Bot_ld1</name>
    </mlDomain>
    <richContentEnabled>true</richContentEnabled>
</BotTemplate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>BotTemplate</name>
    </types>
    <version>55.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- BotDialogGroup[] (atlas.en-us.api_meta.meta/api_meta/meta_botversion.htm)
- BotDialog[] (atlas.en-us.api_meta.meta/api_meta/meta_botversion.htm)
- ConversationContextVariable[] (atlas.en-us.api_meta.meta/api_meta/meta_bot.htm)
- ConversationDefinitionGoal[] (atlas.en-us.api_meta.meta/api_meta/meta_botversion.htm)
- ConversationSystemDialog[] (atlas.en-us.api_meta.meta/api_meta/meta_botversion.htm)
- ConversationVariable[] (atlas.en-us.api_meta.meta/api_meta/meta_botversion.htm)
- LocalMlDomain (atlas.en-us.api_meta.meta/api_meta/meta_bot.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
