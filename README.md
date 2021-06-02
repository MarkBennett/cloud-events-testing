# Cloud Events Testing
A simple repo for testing different [Cloud Event](https://cloudevents.io/) encodings

## Running This Example

    yarn install
    node index.mjs

## Expected Output

```
original message = {
  "id": "3bac8d52-c391-4a1b-97b5-3aa2f82c4cef",
  "time": "2021-06-02T21:45:06.423Z",
  "type": "com.clhbid.user.new",
  "source": "auctions.clhbid.com",
  "specversion": "1.0",
  "data": {
    "email": "bob@barker.test",
    "name": "Bob Barker",
    "id": "user-123"
  }
}
encoded message = {
  "headers": {
    "content-type": "application/json; charset=utf-8",
    "ce-id": "3bac8d52-c391-4a1b-97b5-3aa2f82c4cef",
    "ce-time": "2021-06-02T21:45:06.423Z",
    "ce-type": "com.clhbid.user.new",
    "ce-source": "auctions.clhbid.com",
    "ce-specversion": "1.0"
  },
  "body": "{\"email\":\"bob@barker.test\",\"name\":\"Bob Barker\",\"id\":\"user-123\"}"
}
received message = {
  "id": "3bac8d52-c391-4a1b-97b5-3aa2f82c4cef",
  "time": "2021-06-02T21:45:06.423Z",
  "type": "com.clhbid.user.new",
  "source": "auctions.clhbid.com",
  "specversion": "1.0",
  "datacontenttype": "application/json; charset=utf-8",
  "data": {
    "email": "bob@barker.test",
    "name": "Bob Barker",
    "id": "user-123"
  }
}
```