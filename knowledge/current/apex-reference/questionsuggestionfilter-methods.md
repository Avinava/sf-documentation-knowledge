---
title: "QuestionSuggestionFilter Methods"
domain: apex-reference
topic: questionsuggestionfilter-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.274Z
keywords: [QuestionSuggestionFilter, Methods, Adds, filter, display, questions, associated, single, specified, group, whose, passed, argument., optional., addGroupId, groupId, Signature, Parameters, Return, Value]
---

# QuestionSuggestionFilter Methods

> Adds a filter to display questions associated with the single
      specified group whose ID is passed in as an argument. This filter is
    optional.

## QuestionSuggestionFilter Methods

The following are methods for QuestionSuggestionFilter.

-   **[addGroupId(groupId)](atlas.en-us.apexref.meta/apexref/apex_class_Search_QuestionSuggestionFilter.htm#apex_Search_QuestionSuggestionFilter_addGroupId)**  
    Adds a filter to display questions associated with the single specified group whose ID is passed in as an argument. This filter is optional.
-   **[addNetworkId(networkId)](atlas.en-us.apexref.meta/apexref/apex_class_Search_QuestionSuggestionFilter.htm#apex_Search_QuestionSuggestionFilter_addNetworkId)**  
    Adds a filter to display questions associated with the single specified network whose ID is passed in as an argument. This filter is optional.
-   **[addUserId(userId)](atlas.en-us.apexref.meta/apexref/apex_class_Search_QuestionSuggestionFilter.htm#apex_Search_QuestionSuggestionFilter_addUserId)**  
    Adds a filter to display questions belonging to the single specified user whose ID is passed in as an argument. This filter is optional.
-   **[setGroupIds(groupIds)](atlas.en-us.apexref.meta/apexref/apex_class_Search_QuestionSuggestionFilter.htm#apex_Search_QuestionSuggestionFilter_setGroupIds)**  
    Sets a new list of groups to replace the current list of groups where the group IDs are passed in as an argument. This filter is optional.
-   **[setNetworkIds(networkIds)](atlas.en-us.apexref.meta/apexref/apex_class_Search_QuestionSuggestionFilter.htm#apex_Search_QuestionSuggestionFilter_setNetworkIds)**  
    Sets a new list of networks to replace the current list of networks where the network IDs are passed in as an argument. This filter is optional.
-   **[setTopicId(topicId)](atlas.en-us.apexref.meta/apexref/apex_class_Search_QuestionSuggestionFilter.htm#apex_Search_QuestionSuggestionFilter_setTopicId)**  
    Sets a filter to display questions associated with the single specified topic whose ID is passed in as an argument. This filter is optional.
-   **[setUserIds(userIds)](atlas.en-us.apexref.meta/apexref/apex_class_Search_QuestionSuggestionFilter.htm#apex_Search_QuestionSuggestionFilter_setUserIds)**  
    Sets a new list of users to replace the current list of users where the users IDs are passed in as an argument. This filter is optional.

### addGroupId(groupId)

Adds a filter to display questions associated with the single specified group whose ID is passed in as an argument. This filter is optional.

#### Signature

public void addGroupId(String groupId)

#### Parameters

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID for a group.

#### Return Value

Type: void

#### Usage

To add more than one group, call the method multiple times.

### addNetworkId(networkId)

Adds a filter to display questions associated with the single specified network whose ID is passed in as an argument. This filter is optional.

#### Signature

public void addNetworkId(String networkId)

#### Parameters

networkId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the Experience Cloud site about which you’re retrieving this information.

#### Return Value

Type: void

#### Usage

To add more than one network, call the method multiple times.

### addUserId(userId)

Adds a filter to display questions belonging to the single specified user whose ID is passed in as an argument. This filter is optional.

#### Signature

public void addUserId(String userId)

#### Parameters

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID for the user.

#### Return Value

Type: void

#### Usage

To add more than one user, call the method multiple times.

### setGroupIds(groupIds)

Sets a new list of groups to replace the current list of groups where the group IDs are passed in as an argument. This filter is optional.

#### Signature

public void setGroupIds(List<String\> groupIds)

#### Parameters

groupIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of group IDs.

#### Return Value

Type: void

### setNetworkIds(networkIds)

Sets a new list of networks to replace the current list of networks where the network IDs are passed in as an argument. This filter is optional.

#### Signature

public void setNetworkIds(List<String\> networkIds)

#### Parameters

networkIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of network IDs.

#### Return Value

Type: void

### setTopicId(topicId)

Sets a filter to display questions associated with the single specified topic whose ID is passed in as an argument. This filter is optional.

#### Signature

public void setTopicId(String topicId)

#### Parameters

topicId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID for a topic.

#### Return Value

Type: void

### setUserIds(userIds)

Sets a new list of users to replace the current list of users where the users IDs are passed in as an argument. This filter is optional.

#### Signature

public void setUserIds(List<String\> userIds)

#### Parameters

userIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of user IDs.

#### Return Value

Type: void