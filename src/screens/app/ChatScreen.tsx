import React, {useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

//locates
import ES from '../../i18n/ES';

//styles
import {
  ButtonCircleSmallStyled,
  ContainerStyled,
  InputMediumStyled,
  MessageBody,
  TextMediumStyled,
  colors,
  TextSmallStyled,
} from '../../styles';

//actions
import {setMessageInChatAction} from '../../store/chat/chatAction';

//interfaces
import {MessageChat} from '../../store/chat/chat.interfaces';
import {UserAuthState} from '../../store/auth/auth.interface';

//store
import {RootState} from '../../store';

//data
import {responsesMsg} from '../../data/messageResponse';

interface IRenderItemMessageProps {
  id: string;
  body: string;
  title: string;
  owner: boolean;
}

const renderItemMessage = ({item}: {item: IRenderItemMessageProps}) => (
  <ContainerStyled
    align={item.owner ? 'flex-end' : 'flex-start'}
    h="auto"
    pT="0"
    pL="0"
    pR="0"
    pB="8">
    <MessageBody bg={item.owner ? colors.ocean : colors.gray}>
      <TextSmallStyled
        lineHeight="15px"
        align="right"
        weight="bold"
        color={colors.black}>
        {item.title || ES.user_name_fake}
      </TextSmallStyled>
      <TextMediumStyled color={item.owner ? colors.white : colors.black}>
        {item.body}
      </TextMediumStyled>
    </MessageBody>
  </ContainerStyled>
);

export const ChatScreen = () => {
  const dispatch = useDispatch();
  const {userName} = useSelector<RootState, UserAuthState>(
    (state: RootState) => state.authState.auth,
  );
  const chatMessageList = useSelector<RootState, MessageChat[]>(
    (state: RootState) => state.chatState.messages,
  );
  const [textMessage, setTextMessage] = useState<string>('');

  const sendMessage = () => {
    const message: MessageChat = {
      id: new Date().getMilliseconds(),
      owner: true,
      body: textMessage,
      title: userName,
    };

    dispatch(setMessageInChatAction(message));
    responseMessage();
    cleanForm();
  };

  const responseMessage = (): void => {
    setTimeout(() => {
      dispatch(setMessageInChatAction(responsesMsg[random()]));
    }, 500);
  };

  function random(): number {
    return Math.floor(Math.random() * (15 - 1 + 1)) + 1;
  }

  const cleanForm = () => {
    setTextMessage('');
  };

  return (
    <ContainerStyled flexbox justifyBetween pT="10" pB="16">
      <FlatList
        style={{width: '100%'}}
        showsVerticalScrollIndicator={false}
        data={chatMessageList}
        renderItem={renderItemMessage}
        keyExtractor={item => item.id}
      />

      <ContainerStyled
        flexbox
        alignCenter
        justifyBetween
        h="auto"
        p="0"
        direction="row">
        <InputMediumStyled
          onChangeText={setTextMessage}
          bg={colors.gray}
          placeholder={ES.user_name}
          defaultValue={textMessage}
        />
        <ButtonCircleSmallStyled
          bg={textMessage.length <= 0 ? colors.grayDark : colors.orange}
          disabled={textMessage.length <= 0}
          onPress={sendMessage}>
          <Image source={require('../../assets/send-icon.png')} />
        </ButtonCircleSmallStyled>
      </ContainerStyled>
    </ContainerStyled>
  );
};
