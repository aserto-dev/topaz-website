# AuthorizerOptions

An `AuthorizerClient` can communicate via gRPC or REST with a [Topaz authorizer](https://www.topaz.sh/docs/authorizer-guide/overview)
running as a sidecar or a microservice alongside your application or to Aserto's hosted authorizer.

The options passed in specify the target authorizer, the communication protocol, and other parameters.

### Constructor arguments

- `url` (_required_): The URL for the Authorizer service API.
- `cert_file_path` (_optional_): The location on the filesystem of the CA certificate that signed the
   certificate served by the Topaz authorizer. See the "Certificates" section for more information.
- `service_type` (_optional_): Either of the string values `"gRPC"` or `"REST"`, depending on the
  protocol desired to call the API. Defaults to `"gRPC"`.
- `tenant_id` (_optional_): An Aserto Tenant ID. Required if connecting to Aserto's hosted authorizer.
- `api_key` (_optional_): An Aserto Authorizer API Key. Required if connection to Aserto's hosted authorizer.

## Topaz Example

```py
from aserto.client import AuthorizerOptions

options = AuthorizerOptions(
    url=f"https://{AUTHORIZER_HOSTNAME>}:{AUTHORIZER_PORT}",
    cert_file_path=FILE_PATH_TO_YOUR_AUTHORIZER_CA_CERTIFICATE,
    service_type="gRPC",
)
```

## Hosted Example

```py
from aserto.client import AuthorizerOptions

options = AuthorizerOptions(
    api_key=YOUR_ASERTO_API_KEY,
    tenant_id=YOUR_ASERTO_TENANT_ID,
    service_type="REST",
)
```

## Certificates

All endpoints of the Topaz [Authorizer](/docs/authorizer-guide/overview) use TLS. In order for a client to communicate
with the authorizer, certificates must be verified.

In a development environment, Topaz automatically creates a set of self-signed certificates and certificates of the CA
(certificate authority) that signed them. It places them in a well-known location on the filesystem, defaulting to `$HOME/.config/topaz/certs/`.

In order for the authorizer client to perform the TLS handshake, it needs to verify the TLS certificate of the one-box
using the certificate of the CA that signed it.
The certificate for the authorizer's REST endpoints is placed in `$HOME/.config/topaz/certs/gateway-ca.crt`.
The certificate for the authorizer's gRPC services is placed in `$HOME/.config/topaz/certs/grpc-ca.crt`.
