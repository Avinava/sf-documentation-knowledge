---
title: "BotBlock"
domain: metadata-api
topic: botblock
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.079Z
estimatedTokens: 935
keywords: [BotBlock, configuration, specific, Einstein, Bot, block, including, dialogs, variables, Parent, File, Suffix, Directory, Location, Version]
---

# BotBlock

> Represents the configuration details for a specific Einstein Bot block,
			including dialogs and variables.

# BotBlock

Represents the configuration details for a specific Einstein Bot block, including dialogs and variables.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

BotBlock components have the suffix .botBlock and are stored in the botBlocks folder.

## Version

BotBlock components are available in API version 58.0 and later.

## Special Access Rules

BotBlock is available only if Chat and Einstein Bots are enabled in your org.

Bot metadata deployment and retrieval are not supported for Lead Nurturing and Sales Coach Agents.

## Fields

| Field Name | Description |
| --- | --- |
| botBlockVersions | Field TypeBotBlockVersion[]DescriptionThe configuration details for specific Einstein Bot block versions, including dialogs and variables. |
| description | Field TypestringDescriptionA description of the bot block. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly label for BotBlock, which is defined when the block is created. |
| richContentEnabled | Field TypebooleanDescriptionIndicates whether the block is available for enhanced bots (true) or for only standard bots (false). The default is false. |

## BotBlockVersion

Represents the configuration details for an Einstein Bot block version, including dialogs and variables.

| Field Name | Description |
| --- | --- |
| botDialogs | Field TypeBotDialog[]DescriptionThe list of dialogs in this bot block. |
| conversationGoals | Field TypeConversationDefinitionGoal[]DescriptionThe list of goals in this bot block. Available in API version 57.0 and later. |
| conversationLanguages | Field TypestringDescriptionRequired.Specifies the language of the bot block. |
| conversationVariables | Field TypeConversationVariable[]DescriptionA container that stores a specific piece of data collected from the customer. You can use variables within dialog actions as both inputs and outputs. Available in API version 44.0 and later. |
| description | Field TypestringDescriptionA description of the bot block. |
| mlDomain | Field TypeLocalMlDomainDescriptionRequired.The Einstein Intent Set that groups intents, entities, and variables associated with a block. |
| permissionSet | Field TypestringDescriptionThe permission set associated with the bot block. Available in API version 59.0 and later. |
| status | Field TypeConvDefBlockVersionStatus (enumeration of type string)DescriptionRequired.Indicates whether a block is published or is a draft.Values are:Published |

## Declarative Metadata Sample Definition

The following is an example of a BotBlock component.

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
<BotBlock xmlns="http://soap.sforce.com/2006/04/metadata">
    <access xsi:nil="true"/>
    <botBlockVersions>
        <fullName>Published</fullName>
        <botDialogs>
            <developerName>Test_Dialog_1646070168572</developerName>
            <label>Test_Dialog_1646070168572</label>
            <showInFooterMenu>false</showInFooterMenu>
        </botDialogs>
        <botDialogs>
            <developerName>Test_Dialog_1646070168926</developerName>
            <label>Test_Dialog_1646070168926</label>
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
                        <targetVariable xsi:nil="true"/>
                        <targetVariableType xsi:nil="true"/>
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
        <conversationLanguages>en_US</conversationLanguages>
        <conversationVariables>
            <dataType>Text</dataType>
            <developerName>TestVariableABC</developerName>
            <label>TestVariableABC</label>
        </conversationVariables>
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
        <description>Created for testing.</description>
        <mlDomain>
            <label>vPub</label>
            <mlIntents>
                <developerName>End_Chat</developerName>
                <label>End Chat</label>
                <mlIntentUtterances>
                    <language>es</language>
                    <utterance>Utterance1</utterance>
                </mlIntentUtterances>
                <mlIntentUtterances>
                    <language>es</language>
                    <utterance>Utterance2</utterance>
                </mlIntentUtterances>
                <mlIntentUtterances>
                    <language>es</language>
                    <utterance>Utterance3</utterance>
                </mlIntentUtterances>
            </mlIntents>
            <mlIntents>
                <description>Main Menu Intent</description>
                <developerName>Main_Menu</developerName>
                <label>Main Menu</label>
            </mlIntents>
            <mlIntents>
                <description>Welcome Intent</description>
                <developerName>Welcome</developerName>
                <label>Welcome</label>
            </mlIntents>
            <name>blockDevName0001_vPub</name>
        </mlDomain>
        <status>Published</status>
    </botBlockVersions>
    <description>Collects the user&apos;s first name, last name, email address, phone number, and company name.</description>
    <masterLabel>User Info Collection Block</masterLabel>
    <richContentEnabled>true</richContentEnabled>
</BotBlock>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>AgentTransfer</members>
        <name>BotBlock</name>
    </types>
    <version>58.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- BotDialog[] (atlas.en-us.api_meta.meta/api_meta/meta_botversion.htm)
- ConversationDefinitionGoal[] (atlas.en-us.api_meta.meta/api_meta/meta_botversion.htm)
- ConversationVariable[] (atlas.en-us.api_meta.meta/api_meta/meta_botversion.htm)
- LocalMlDomain (atlas.en-us.api_meta.meta/api_meta/meta_bot.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
