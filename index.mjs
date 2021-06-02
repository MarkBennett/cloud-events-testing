import { HTTP, CloudEvent } from "cloudevents";

const user = {
  email: "bob@barker.test",
  name: "Bob Barker",
  id: "user-123"
};

const ce = new CloudEvent({
  type: "com.clhbid.user.new",
  source: "auctions.clhbid.com",
  data: user,
});

console.log(`original message = ${JSON.stringify(ce, " ", 2)}`);

const encoded_message = HTTP.binary(ce); // Or HTTP.structured(ce)

console.log(`encoded message = ${JSON.stringify(encoded_message, " ", 2)}`);

const decoded_message = HTTP.toEvent(encoded_message);

console.log(`received message = ${JSON.stringify(decoded_message, " ", 2)}`);