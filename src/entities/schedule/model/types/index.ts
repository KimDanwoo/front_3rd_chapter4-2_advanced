import { Lecture } from '@entities/lecture/model/types'

export interface Schedule {
  lecture: Lecture
  day: string
  range: number[]
  room?: string
}
