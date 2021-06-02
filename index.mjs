import { HTTP, CloudEvent } from "cloudevents";

const ce = new CloudEvent({
  type: "CLHbid.Users.UserNew",
  source: "auctions.clhbid.com",
  data: { user: { email: "bob@barker.test" } },
});
const message = HTTP.binary(ce); // Or HTTP.structured(ce)

console.log(`message = ${JSON.stringify(message, " ", 2)}`);
