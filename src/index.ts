//import { Content, ContentCells, HeaderSection, Text } from "./blocks.js";

import { AdaptiveCard } from "./ApaptiveCard.js";
import { Column, SubmitButton, Table, TextBlock } from "./blocks.js";

/*class Nudge extends NudgeTemplate{
 
    
}*/

/*const content = new Content({ data: "hello", contentType: "banner" });

const nudgeBlock = new ContentCells({
  children: [
    new Content({ data: "hello", contentType: "banner" }),
    new Content({ data: "reminder", contentType: "paragarph" }),
  ],
});*/

// create a building block class host multiple ui sections
/*const headerSection = new HeaderSection({
  children: [
    new ContentCells({
      children: [
        new Content({
          data: [new Text("hello"), new Text("world")],
          contentType: "banner",
        }),
      ],
    }),
    new ContentCells({
      children: [
        new Content({
          data: [new Text("dummy text")],
          contentType: "paragraph",
        }),
      ],
    }),
  ],
});

console.log(headerSection.toJson());*/

const card = new AdaptiveCard({
  body: [
    new Column({
      items: [
        new TextBlock({ text: "Reminder to take action" }),
        new TextBlock({ text: "input" }),
        new SubmitButton({ title: "submit form" }),
      ],
    }),
    new Table({ columns: "coulmn", rows: "Row 1", showGridLines: true }),
  ],
});

console.log(card.toJson());
