/**
 * @Test calculateShortestPath
 * @description purpose of this test unit is to check whether the shortest path calculation correct or not
 * @author Nawod Madhuvantha
 */

import { describe, it, expect } from 'vitest'
import { calculateShortestPath } from '../DCalculator/CalculateShortestPath'

describe('calculateShortestPath', () => {
  it('should return shortest path data for directly connected nodes', () => {
    const result = calculateShortestPath('A', 'B')
    expect(result).toEqual({
      nodeNames: ['A', 'B'],
      distance: 4,
    })
  })

  it('should return shortest path data for nodes with multiple steps', () => {
    const result = calculateShortestPath('A', 'G')
    expect(result).toEqual({
      nodeNames: ['A', 'B', 'F', 'G'],
      distance: 10,
    })
  })

  it('should return different shortest path data for nodes with one way connection', () => {
    const result = calculateShortestPath('B', 'E')
    expect(result).toEqual({
      nodeNames: ['B', 'F', 'E'],
      distance: 5,
    })
  })

  it('should return 0 distance for path where fromNode and toNode are the same', () => {
    const result = calculateShortestPath('A', 'A')
    expect(result).toEqual({
      nodeNames: ['A'],
      distance: 0,
    })
  })
})
