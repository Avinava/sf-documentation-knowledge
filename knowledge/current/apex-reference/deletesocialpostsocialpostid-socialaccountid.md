---
title: "deleteSocialPost(socialPostId,
    socialAccountId)"
domain: apex-reference
topic: deletesocialpostsocialpostid-socialaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.803Z
keywords: [deleteSocialPost, socialPostId, socialAccountId, Delete, social, post, its, network., Note, API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deleteSocialPost(socialPostId,
    socialAccountId)

> Delete a social post from its social network.

### deleteSocialPost(socialPostId, socialAccountId)

Delete a social post from its social network.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Deleting a social post from its social network doesn’t delete the record from Salesforce.

#### API Version

46.0–61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DeleteSocialPostIntent deleteSocialPost(String socialPostId, String socialAccountId)

#### Parameters

socialPostId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social post to delete.

socialAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the social account that deletes the post.

#### Return Value

Type: [ConnectApi.DeleteSocialPostIntent](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_delete_social_post_intent_output.htm "Delete intent for the social post.")