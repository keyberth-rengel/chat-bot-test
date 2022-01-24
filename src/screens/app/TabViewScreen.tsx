import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

//pages
import {ProfileScreen} from './ProfileScreen';
import {ChatScreen} from './ChatScreen';

//locates
import ES from '../../i18n/ES';

//styles
import {colors} from '../../styles/colors';

const renderScene = SceneMap({
  chat: ChatScreen,
  account: ProfileScreen,
});

const renderTabBar = (props: any): React.ReactElement => (
  <TabBar
    {...props}
    activeColor={colors.orange}
    inactiveColor={colors.grayDark}
    labelStyle={{
      fontWeight: 'bold',
    }}
    indicatorStyle={{backgroundColor: colors.orange}}
    style={{backgroundColor: colors.white}}
  />
);

export function TabViewContainer() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'chat', title: ES.chat},
    {key: 'account', title: ES.account},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
