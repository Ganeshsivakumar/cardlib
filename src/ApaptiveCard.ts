import Block from "./block.js";

export class AdaptiveCard implements Block {
  body: Block[];

  constructor({ body }: { body: Block[] }) {
    this.body = body;
  }

  toJson(): string {
    const body = this.body.map((b) => JSON.parse(b.toJson()));
    const json = {
      type: "AdaptiveCard",
      version: "1.6",
      body: [...body],
    };
    return JSON.stringify(json, null, 4);
  }
}
