---
sidebar_position: 1
---

# Introduction

Topaz is an open-source, self-hosted, fine-grained access control service for modern cloud applications. It uses the [Open Policy Agent](https://www.openpolicyagent.org/) (OPA) as its decision engine, and provides a built-in directory that implements the Google [Zanzibar](https://research.google/pubs/pub48190/) data model. 

Authorization policies can leverage user attributes, group membership, application resources, and relationships between them. All data used for authorization is modeled and stored locally in an embedded database, so authorization decisions can be evaluated quickly and efficiently.

## Why did we build Topaz?

* Authorization for applications is hard to get right. There are many open source libraries that help with RBAC and ABAC, but very few incorporate all the [principles](#principles) of cloud-native authorization.
* The two cloud-native authorization ecosystems, OPA and Zanzibar, both have advantages, but there isn't a solution that combines the best of both.
* Developers deserve a self-hosted authorization service that makes it easy to build (and combine) RBAC, ABAC, and ReBAC models, supports a policy-as-code workflow, and provides built-in support for fine-grained authorization.

## Why Topaz?
Topaz is an opinionated fine-grained access control solution that makes it easy to add modern authorization to your application.

Topaz enables a clear separation of authorization logic from application code. By deploying Topaz close to the application, you can ensure it maintains very low latency and high availability for authorization decisions.

Topaz simplifies the data flow from and to the authorizer by making it easy to:
1. Load user and resource data into the authorizer
2. Pass the identity and resource context to the authorizer at query time

Topaz can be deployed as a sidecar or a microservice in your cloud, ensuring low latency and high availability.

## Principles
Topaz follows the five principles of cloud-native authorization:
1. **_Authorization as its own microservice_**: instead of having each microservice implement authorization on its own, authz is extracted as a separate concern and into its own service.
2. **_Fine-grained_**: instead of relying on coarse-grained roles, the authorization model follows the **Principle of Least Privilege** and allows assigning the smallest set of fine-grained permissions to each user or group.
3. **_Policy-based_**: instead of authorization being implement as a set of `if`/`switch` statements (a.k.a. spaghetti code), authorization poicy is expressed in its own domain-specific language, managed as code, and built into an immutable, signed artifact. This enables **Separation of Duties** - application developers own the app logic, and security engineers can own the authorization policy.
4. **_Real-time_**: instead of treating scopes baked into access tokens as permissions, the application makes a call to the authorization service before every access to a protected resource, to ensure that the user has the right permission on the resource. This follows the principle of **Continuous Verification**.
5. **_Comprehensive decision logging_**: instead of relying on coarse-grained authentication logs, every decision that the application makes is retained for audit trails, compliance, and forensics, following the principle of **Comprehensive Monitoring**.

## Comparing Topaz 

### OPA

OPA provides a strong foundation for an authorization service, and Topaz uses the OPA decision engine as a library. OPA is a general-purpose decision engine that lends itself well to creating attribute-based access control (ABAC) policies. OPA is often deployed in service of infrastructure scenarios such as Kubernetes admission control, enforcing policies on configuration files, and enforcing authorization policies in API gateways.

Because it is a general-purpose decision engine, OPA has no particular "opinion" on how to structure authorization policies. Topaz is an opinionated authorization system that is entirely focused on the scenario of API and application authorization.

Topaz addresses the hardest problem with this scenario, which is how to bring user, resource, and relationship to the decision engine, which is critical in implementing a fine-grained authorization system.

### Zanzibar / ReBAC

Google's authorization system for Google Drive, Docs, and a few other services is known internally as "Zanzibar", and is based on a relationship-based access control model (ReBAC). 

ReBAC is an opinionated model that makes it easy to structure fine-grained authorization for data models that link _subjects_ (e.g. users, groups) to _objects_ (e.g. organizations, teams, projects, lists, items) via _relations_ (e.g. owner, admin, editor, member, viewer).

There are many OSS implementation of the Zanzibar ideas, but Topaz is the only one that combines the policy-as-code and decision logging of OPA with a Zanzibar-modeled directory, all in the same container image. Authorization policies can combine ABAC-style rules with ReBAC-style graph queries via a set of Rego built-ins.
