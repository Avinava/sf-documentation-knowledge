---
domain: live-agent-rest
name: Chat REST API Developer Guide
documentCount: 46
lastGenerated: 2026-03-12T09:36:27.098Z
---

# Chat REST API Developer Guide — Knowledge Index

> Take Chat beyond your website: Extend chats to native mobile apps with the Chat REST API.

## Available Topics

| File | Title | Type | Description |
|---|---|---|---|
| [agentdisconnect.md](./agentdisconnect.md) | AgentDisconnect | developer-guide | Indicates that the agent has been disconnected from the
chat. |
| [agentnottyping.md](./agentnottyping.md) | AgentNotTyping | developer-guide | Indicates that the agent is not typing a message to the
chat visitor. |
| [agenttyping.md](./agenttyping.md) | AgentTyping | developer-guide | Indicates that the agent is typing a message to the chat
visitor. |
| [availability.md](./availability.md) | Availability | api-reference | Indicates whether a chat button is available
to receive new chat requests. |
| [breadcrumb.md](./breadcrumb.md) | Breadcrumb | api-reference | Sets a breadcrumb value to the URL of the
Web page that the chat visitor is view |
| [chasitoridletimeoutwarningevent.md](./chasitoridletimeoutwarningevent.md) | ChasitorIdleTimeoutWarningEvent | developer-guide | Informs the server when a warning is shown or cleared so that a transcript event |
| [chasitorinit.md](./chasitorinit.md) | ChasitorInit | api-reference | Initiates a new chat visitor session. The ChasitorInit request is always require |
| [chasitornottyping.md](./chasitornottyping.md) | ChasitorNotTyping | api-reference | Indicates that the chat visitor is not typing in the chat window. |
| [chasitorresyncstate.md](./chasitorresyncstate.md) | ChasitorResyncState | api-reference | Reestablishes the chat visitor’s state, including the details of the chat, after |
| [chasitorsessiondata.md](./chasitorsessiondata.md) | ChasitorSessionData | developer-guide | Returns the current chat session data for the chat visitor. This request is used |
| [chasitorsneakpeek.md](./chasitorsneakpeek.md) | ChasitorSneakPeek | api-reference | Provides a chat visitor’s message that was viewable
through Sneak Peek. |
| [chasitortyping.md](./chasitortyping.md) | ChasitorTyping | api-reference | Indicates that a chat visitor is typing a message in the
chat window. |
| [chat-rest-api-data-types.md](./chat-rest-api-data-types.md) | Chat REST API Data Types | help-article | A request to a Chat REST API resource returns a response code. The successful
ex |
| [chat-rest-api-messages-response-objects-response-objects.md](./chat-rest-api-messages-response-objects-response-objects.md) | Chat REST API Messages Response Objects Response Objects | developer-guide | The Messages request returns an array of objects
        that represent all the  |
| [chat-rest-api-resources.md](./chat-rest-api-resources.md) | Chat REST API Resources | api-reference | To perform a POST or GET request, create and send an HTTP
request with the appro |
| [chatend.md](./chatend.md) | ChatEnd | api-reference | Indicates that a chat visitor has ended the chat. |
| [chatended.md](./chatended.md) | ChatEnded | developer-guide | Indicates that the chat has ended. |
| [chatestablished.md](./chatestablished.md) | ChatEstablished | developer-guide | Indicates that an agent has accepted a chat request and
is engaged in a chat wit |
| [chatmessage.md](./chatmessage.md) | ChatMessage | api-reference | Returns the body of the chat message sent by the chat visitor. |
| [chatrequestfail.md](./chatrequestfail.md) | ChatRequestFail | developer-guide | Indicates that the chat request was not successful. |
| [chatrequestsuccess.md](./chatrequestsuccess.md) | ChatRequestSuccess | developer-guide | Indicates that the chat request was successful and routed
to available agents. |
| [chattransferred.md](./chattransferred.md) | ChatTransferred | developer-guide | Indicates the chat was transferred from one agent to another. |
| [create-a-chat-session.md](./create-a-chat-session.md) | Create a Chat Session | developer-guide | To create a new Chat session, you must call the SessionId request. |
| [create-a-chat-visitor-session.md](./create-a-chat-visitor-session.md) | Create a Chat Visitor Session | developer-guide | To create or reestablish a chat visitor session using the Chat REST API, you mus |
| [customevent.md](./customevent.md) | CustomEvent | api-reference | Indicates a custom event was sent from the chat visitor
during the chat. |
| [customize-the-chat-visitors-experience.md](./customize-the-chat-visitors-experience.md) | Customize the Chat Visitors’ Experience | developer-guide | With the Chat visitor REST API resources, you can establish your chat
  visitors |
| [getting-started-with-the-chat-rest-api.md](./getting-started-with-the-chat-rest-api.md) | Getting Started with the Chat REST API | help-article | Learn how to start, confirm, and end a Chat session with the Chat REST API. |
| [messages.md](./messages.md) | Messages | api-reference | Returns all messages that were sent between agents and
chat visitors during a ch |
| [monitor-chat-activity.md](./monitor-chat-activity.md) | Monitor Chat Activity | developer-guide | Chat requests indicate when certain activities occurred during a chat
  session. |
| [multinoun.md](./multinoun.md) | MultiNoun | api-reference | Batches multiple POST requests together if you’re
sending multiple messages at t |
| [newvisitorbreadcrumb.md](./newvisitorbreadcrumb.md) | NewVisitorBreadcrumb | developer-guide | Indicates the URL of the Web page the chat visitor is currently
viewing. |
| [overview.md](./overview.md) | Overview | concept | Take Chat to a native mobile app or a custom client using the Chat REST API. |
| [queueupdate.md](./queueupdate.md) | QueueUpdate | developer-guide | Indicates the new position of the chat visitor in the chat
queue when the visito |
| [reconnectsession.md](./reconnectsession.md) | ReconnectSession | api-reference | Reconnect a customer’s chat session on a new server if the session is interrupte |
| [request-bodies-for-chat-rest-api.md](./request-bodies-for-chat-rest-api.md) | Request Bodies for Chat REST API | api-reference | To perform a POST or GET request, pass query parameters or create a request body |
| [request-headers.md](./request-headers.md) | Request Headers | help-article | Each Chat REST API resource requires one or more headers to make a request. |
| [response-bodies-for-chat-rest-api.md](./response-bodies-for-chat-rest-api.md) | Response Bodies for Chat REST API | help-article | A request to a Chat REST API resource returns a response code. The successful
ex |
| [sensitivedatarules.md](./sensitivedatarules.md) | SensitiveDataRules | developer-guide | Lists the sensitive data rules. |
| [sensitivedataruletriggered-for-agents.md](./sensitivedataruletriggered-for-agents.md) | SensitiveDataRuleTriggered for Agents | api-reference | Sets the sensitive data rules for the chat agent, such as blocking the
   agent’ |
| [sensitivedataruletriggered-for-chasitors.md](./sensitivedataruletriggered-for-chasitors.md) | SensitiveDataRuleTriggered for Chasitors | api-reference | Sets the sensitive data rules for the chat visitor, such as blocking the
   visi |
| [sessionid.md](./sessionid.md) | SessionId | api-reference | Establishes a new Chat session. The SessionId
    request is required as the fir |
| [settings.md](./settings.md) | Settings | api-reference | Retrieves all settings information about the Chat deployment
that’s associated w |
| [status-codes-and-error-responses.md](./status-codes-and-error-responses.md) | Status Codes and Error Responses | api-reference | Each request returns a status code or error response to indicate whether the req |
| [using-estimated-wait-time-instead-of-queue-position-for-a-chat-session-beta.md](./using-estimated-wait-time-instead-of-queue-position-for-a-chat-session-beta.md) | Using Estimated Wait Time Instead of Queue Position for a Chat Session (Beta) | help-article | By default, the Chat API returns queue position information that you can relay t |
| [visitorid.md](./visitorid.md) | VisitorId | api-reference | Generates a unique ID to track a chat visitor
when they initiate a chat request  |
| [your-message-long-polling-loop.md](./your-message-long-polling-loop.md) | Your Message Long Polling Loop | help-article | Message long polling notifies you of events that occur on the Chat server for yo |

## How to Use

1. Read this index to find the relevant topic for your question
2. Load the specific topic file(s) for detailed information
3. Each file is self-contained — no need to load other files for context

*Tags: service*