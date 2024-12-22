import Block from "./block.js";

interface Template {
  createTemplate(buildingBlocks: Block[]): string;
}
