import Block from "./block.js";
/*
export class Content implements Block {
  contentType: string;
  data: Text[];

  constructor({ data, contentType }: { data: Text[]; contentType: string }) {
    this.data = data;
    this.contentType = contentType;
  }

  toJson(): string {
    const childrenJson = this.data.map((d) => JSON.parse(d.toJson()));
    const json = {
      contentType: this.contentType,
      childrenJson,
    };
    return JSON.stringify(json, null, 4);
  }
}

export class Text implements Block {
  text: string;

  constructor(text: string) {
    this.text = text;
  }
  toJson(): string {
    const json = {
      data: this.text,
    };
    return JSON.stringify(json, null, 4);
  }
}

export class HeaderSection implements Block {
  children: Block[];

  constructor({ children }: { children: Block[] }) {
    this.children = children;
  }

  toJson(): string {
    const childrenJson = this.children.map((child) =>
      JSON.parse(child.toJson())
    );

    const json = {
      blockType: "headerSection",
      childrenJson,
      //...childrenJson.reduce((acc, curr) => {
        //return { ...acc, ...curr };
      //}, {}),
    };

    return JSON.stringify(json, null, 4);
  }
}

export class ContentCells implements Block {
  children: Block[];

  constructor({ children }: { children: Block[] }) {
    this.children = children;
  }
  toJson(): string {
    const childrenJson = this.children.map((child) =>
      JSON.parse(child.toJson())
    );

    const json = {
      contentCells: childrenJson,
    };

    return JSON.stringify(json, null, 4);
  }
}

export class BuildingBlock implements Block {
  childrenBlocks: Block[];
  constructor({ childrenBlocks }: { childrenBlocks: Block[] }) {
    this.childrenBlocks = childrenBlocks;
  }
  toJson(): string {
    const childrenJson = this.childrenBlocks.map((child) =>
      JSON.parse(child.toJson())
    );

    const json = {
      blocks: this.childrenBlocks,
    };

    return JSON.stringify(json, null, 4);
  }
}

*/

export class TextBlock implements Block {
  text: string;
  color!: string;
  fontType!: string;
  fontWeight!: string;
  wrap!: boolean;
  maxLines!: number;

  constructor({ text }: { text: string }) {
    this.text = text;
  }
  toJson(): string {
    const json = {
      type: "TextBlock",
      text: this.text,
    };

    return JSON.stringify(json, null, 4);
  }
}

export class SubmitButton implements Block {
  title!: string;
  data!: string;

  constructor({ title }: { title: string }) {
    this.title = title;
  }

  toJson(): string {
    const json = {
      type: "Action.Submit",
      title: this.title,
    };
    return JSON.stringify(json, null, 4);
  }
}

export class Column implements Block {
  items: Block[];
  spacing!: string;
  separator!: boolean;
  constructor({ items }: { items: Block[] }) {
    this.items = items;
  }
  toJson(): string {
    const items = this.items.map((b) => JSON.parse(b.toJson()));
    const json = {
      type: "Column",
      items: [...items],
    };
    return JSON.stringify(json, null, 4);
  }
}

export class Table implements Block {
  columns!: string;
  rows!: string;
  showGridLines!: boolean;
  gridStyle!: string;
  horizontalCellContentAlignment!: string;
  verticalCellContentAlignment!: string;
  firstRowAsHeader!: string;

  constructor({
    columns = "",
    rows = "",
    showGridLines = false,
    gridStyle = "",
    horizontalCellContentAlignment = "",
    verticalCellContentAlignment = "",
    firstRowAsHeader = "",
  }: {
    columns?: string;
    rows?: string;
    showGridLines?: boolean;
    gridStyle?: string;
    horizontalCellContentAlignment?: string;
    verticalCellContentAlignment?: string;
    firstRowAsHeader?: string;
  }) {
    this.columns = columns;
    this.rows = rows;
    this.showGridLines = showGridLines;
    this.gridStyle = gridStyle;
    this.horizontalCellContentAlignment = horizontalCellContentAlignment;
    this.verticalCellContentAlignment = verticalCellContentAlignment;
    this.firstRowAsHeader = firstRowAsHeader;
  }

  toJson(): string {
    const json = {
      title: "Table",
    };
    return JSON.stringify(json, null, 4);
  }
}
