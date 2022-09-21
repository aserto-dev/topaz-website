---
sidebar_position: 1
---

# Introduction

## Why did we build topaz?

* Authorization for applications is hard to get right.
* There are many libraries that help with RBAC and ABAC, but there are no self-hosted, purpose-built authorization services that combine RBAC, ABAC, and ReBAC and support both a policy-as-code workflow as well as help you model your domain and manage the authorization data locally.
* OPA is a great place to start, but it’s still hard to manage the data used by the authorizer as well as pass data to the authorizer at query time.

## Why Topaz?
Topaz is an opinionated fine-grained access control solution that makes it easier to add authorization to your application.

Topaz provides an out-of-the-box fine-grained access control solution that combines the best a library has to offer with the benefits of a service. It calls for a clear separation of the authorization logic from the application logic, and by deploying it close to the application, you can still ensure it maintains very low latency and high availability.

We wanted to simplify the data flow from and to the authorizer by making it easy to:
Load user and resource data into the authorizer
Pass the identity and resource context to the authorizer at query time

By making this process easier, Topaz ensures authorization decisions can happen in milliseconds. Deployed as a sidecar or a microservice in your cloud, Topaz will always be available to your applications.

Additionally, we wanted to make it easy for developers to create fine-grained authorization models that follow the RBAC, ABAC, and ReBAC patterns.

Today, there are two approaches to building a fine-grained authorization model:
* _Policy-as-code_ - the policy is set as rules expressed in code, which defines the authorization logic. Two popular authorization models that are based on this approach are RBAC (role-based access control) and ABAC (attribute-based access control).  The Open Policy Agent is based on this approach.
* _Policy-as-data_ - As the name suggests, the authorization policy resides within a data structure - specifically, in a relationship graph. This approach (popularized by the Zanzibar paper) is the basis for the ReBAC (relationship-based access control) authorization model.

Built on the strong foundations of the Open Policy Agent project, Topaz allows you to marry the “policy-as-code” and “policy-as-data” approaches. With the two approaches working in tandem, you can define fine-grained authorization models that would support practically any domain model.
