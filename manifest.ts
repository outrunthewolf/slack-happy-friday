import { Manifest } from "deno-slack-sdk/mod.ts";
import { HappyRequestWorkflow } from "./workflows/happy-workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "Happy Friday Robot",
  description: "Don't worry, be happy.",
  icon: "assets/image.jpeg",
  workflows: [
    HappyRequestWorkflow
  ],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
