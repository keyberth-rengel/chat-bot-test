import React, {useState} from 'react';
import {Image} from 'react-native';
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
} from '../../styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title:
      'First Item First Item First Item First Item First Item First Item First Item First Item',
    owner: false,
  },
];

interface IRenderItemMessageProps {
  id: string;
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
      <TextMediumStyled color={item.owner ? colors.white : colors.black}>
        {item.title}
      </TextMediumStyled>
    </MessageBody>
  </ContainerStyled>
);

export const ChatScreen = () => {
  const [textMessage, setTextMessage] = useState<string>('');

  const sendMessage = () => {
    cleanForm();
  };

  const cleanForm = () => {
    setTextMessage('');
  };

  return (
    <ContainerStyled flexbox justifyBetween pT="10" pB="16">
      <FlatList
        style={{width: '100%'}}
        showsVerticalScrollIndicator={false}
        data={DATA}
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
