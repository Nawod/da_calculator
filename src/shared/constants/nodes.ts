import type { NodeItem } from '../models/nodes'

export class Nodes {
  public static readonly list: NodeItem[] = [
    {
      node: 'A',
      connectedNodes: [
        { node: 'B', distance: 4 },
        { node: 'C', distance: 6 },
      ],
    },
    {
      node: 'B',
      connectedNodes: [
        { node: 'A', distance: 4 },
        { node: 'F', distance: 2 },
      ],
    },
    {
      node: 'C',
      connectedNodes: [
        { node: 'A', distance: 6 },
        { node: 'D', distance: 8 },
      ],
    },
    {
      node: 'D',
      connectedNodes: [
        { node: 'C', distance: 8 },
        { node: 'E', distance: 4 },
        { node: 'G', distance: 1 },
      ],
    },
    {
      node: 'E',
      connectedNodes: [
        { node: 'B', distance: 2 },
        { node: 'D', distance: 4 },
        { node: 'F', distance: 3 },
        { node: 'I', distance: 8 },
      ],
    },
    {
      node: 'F',
      connectedNodes: [
        { node: 'B', distance: 2 },
        { node: 'E', distance: 3 },
        { node: 'G', distance: 4 },
        { node: 'H', distance: 6 },
      ],
    },
    {
      node: 'G',
      connectedNodes: [
        { node: 'D', distance: 1 },
        { node: 'F', distance: 4 },
        { node: 'H', distance: 5 },
        { node: 'I', distance: 5 },
      ],
    },
    {
      node: 'H',
      connectedNodes: [
        { node: 'F', distance: 6 },
        { node: 'G', distance: 5 },
      ],
    },
    {
      node: 'I',
      connectedNodes: [
        { node: 'E', distance: 8 },
        { node: 'G', distance: 5 },
      ],
    },
  ]
}
