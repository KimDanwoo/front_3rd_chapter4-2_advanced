import React, { createContext, PropsWithChildren, useState } from 'react'
import { Schedule } from '@entities/schedule/model/types'
import { dummyScheduleMap } from '@features/schedule/model'

export interface ScheduleContextType {
  schedulesMap: Record<string, Schedule[]>
  setSchedulesMap: React.Dispatch<React.SetStateAction<Record<string, Schedule[]>>>
}

export const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined)

export const ScheduleProvider = ({ children }: PropsWithChildren) => {
  const [schedulesMap, setSchedulesMap] = useState<Record<string, Schedule[]>>(dummyScheduleMap)

  return <ScheduleContext.Provider value={{ schedulesMap, setSchedulesMap }}>{children}</ScheduleContext.Provider>
}
