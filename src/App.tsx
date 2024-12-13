import { ChakraProvider } from '@chakra-ui/react'
import { ScheduleProvider, ScheduleDndProvider } from '@features/schedule/model'
import { ScheduleTables } from '@features/schedule/ui'

function App() {
  return (
    <ChakraProvider>
      <ScheduleProvider>
        <ScheduleDndProvider>
          <ScheduleTables />
        </ScheduleDndProvider>
      </ScheduleProvider>
    </ChakraProvider>
  )
}

export default App
