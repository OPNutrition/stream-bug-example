import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StreamChat } from 'stream-chat'
import {
  Chat,
  ChannelList,
  Channel,
  MessageList,
  MessageInput,
  Card,
  MessageSimple,
  OverlayProvider,
} from 'stream-chat-expo'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const chatClient = StreamChat.getInstance('6x578ujf68xf')

const Main = () => {
  const [channel, set_channel] = useState()

  useEffect(() => {
    const getChannels = async () => {
      const chatUser = await chatClient.connectUser(
        {
          id: '5',
          name: 'OPN Engineer',
        },
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNSJ9._rNEVBocRahULFPYPjQvx9fx-Os_BSCLH2xszo9-VeI'
      )

      const filters = { type: 'messaging', members: { $in: ['5'] } }
      const sort = [{ last_message_at: -1 }]

      const channels = await chatClient.queryChannels(filters, sort, {
        watch: true,
        state: true,
      })
      set_channel(channels[0])
    }

    getChannels()
  }, [])

  return channel ? (
    <Chat client={chatClient}>
      <Channel
        channel={channel}
        MessageStatus={() => null}
        hasFilePicker={false}
      >
        <MessageList />
        <MessageInput />
      </Channel>
    </Chat>
  ) : (
    <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const App = () => (
  <GestureHandlerRootView>
    <OverlayProvider>
      <Main />
    </OverlayProvider>
  </GestureHandlerRootView>
)

export default App
