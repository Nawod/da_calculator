export interface ConnectedNode {
  node: string
  distance: number
}

export interface NodeItem {
  node: string
  connectedNodes: ConnectedNode[]
}

export interface ShortestPathData {
  readonly nodeNames: string[]
  readonly distance: number
}
