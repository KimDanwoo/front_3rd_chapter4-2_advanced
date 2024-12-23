import { useContext } from 'react'
import { ScheduleContext } from '@features/schedule/model'

export const useScheduleContext = () => {
  const context = useContext(ScheduleContext)
  if (context === undefined) {
    throw new Error('useSchedule must be used within a ScheduleProvider')
  }
  return context
}
