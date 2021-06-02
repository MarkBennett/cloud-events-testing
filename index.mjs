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
const message = HTTP.binary(ce); // Or HTTP.structured(ce)

console.log(`message = ${JSON.stringify(message, " ", 2)}`);
